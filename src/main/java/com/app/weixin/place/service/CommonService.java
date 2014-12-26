package com.app.weixin.place.service;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

import com.app.weixin.place.model.BashBean;
import com.app.weixin.place.model.PlaceConstant;

@Service
public class CommonService {

	public List<BashBean> getBashInfo(String location_x,String location_y,String city) throws UnsupportedEncodingException, JSONException {
		
		StringBuffer bufUrl = new StringBuffer();
		bufUrl.append(PlaceConstant.REQEST_URL)
			  .append("ak=" + PlaceConstant.AK + "&")
			  .append("output=" + PlaceConstant.OUT_TYPE[0] + "&")
			  .append("query="+URLEncoder.encode(PlaceConstant.PLACE_BASH_NAME,"UTF-8") + "&")
			  .append("event=groupon&")
			  .append("region="+URLEncoder.encode(city,"UTF-8")+"&")
			  .append("location="+location_x+","+location_y+"&")
			  .append("radius="+PlaceConstant.RADIUS[1]+"&")
			  .append("groupon_type:"+ PlaceConstant.GROUPON_TYPE[0])
			  .append("|")
			  .append("sort_name:"+ PlaceConstant.SORT_NAME[4])
			  .append("|")
			  .append("sort_rule:"+ PlaceConstant.SORT_RULE[0]);
		
		String httpstr = httpRequest(bufUrl.toString());
		JSONObject json = new JSONObject(httpstr);
		
		List<BashBean> bashBeanList = makeBashBeanList(json);
		return bashBeanList;
	}
	
	private List<BashBean> makeBashBeanList(JSONObject json) throws JSONException {
		
		List<BashBean> list = null;
		
		if (json != null && (Integer)json.get("status") == 0 && json.get("results") != null) {
			
			list = new ArrayList<BashBean>();
			
			JSONArray listResult = json.getJSONArray("results");
			for (int i = 0; i < listResult.length(); i++) {
				BashBean bashBean = new BashBean();
				JSONObject jsonResult = (JSONObject)listResult.get(i);
				
				bashBean.setUid(String.valueOf(jsonResult.get("uid")));
				bashBean.setName(String.valueOf(jsonResult.get("name")));
				
				JSONObject jsonLocation = (JSONObject)jsonResult.get("location");
				bashBean.setLocationX(String.valueOf(jsonLocation.get("lat")));
				bashBean.setLocationY(String.valueOf(jsonLocation.get("lng")));
				
				bashBean.setAddress(String.valueOf(jsonResult.get("address")));
				bashBean.setTelephone(String.valueOf(jsonResult.get("telephone")));
				bashBean.setDistance(String.valueOf(jsonResult.get("distance")));
				
				JSONArray jsonEvents = jsonResult.getJSONArray("events");
				if (jsonEvents != null && jsonEvents.length() > 0) {
					
					JSONObject jsonEvent = (JSONObject)jsonEvents.get(0);
					
					bashBean.setCn_name(String.valueOf(jsonEvent.get("cn_name")));
					bashBean.setGroupon_end(String.valueOf(jsonEvent.get("groupon_end")));
					bashBean.setGroupon_id(String.valueOf(jsonEvent.get("groupon_id")));
					bashBean.setGroupon_image(String.valueOf(jsonEvent.get("groupon_image")));
//					System.out.println(String.valueOf(jsonEvent.get("groupon_image")));
					bashBean.setGroupon_num(String.valueOf(jsonEvent.get("groupon_num")));
					bashBean.setGroupon_price(String.valueOf(jsonEvent.get("groupon_price")));
					bashBean.setGroupon_rebate(String.valueOf(jsonEvent.get("groupon_rebate")));
					bashBean.setGroupon_start(String.valueOf(jsonEvent.get("groupon_start")));
//					bashBean.setGroupon_tips(String.valueOf(jsonEvent.get("groupon_tips")));
					bashBean.setGroupon_title(String.valueOf(jsonEvent.get("groupon_title")));
					bashBean.setGroupon_type(String.valueOf(jsonEvent.get("groupon_type")));
					bashBean.setGroupon_url_mobile(String.valueOf(jsonEvent.get("groupon_url_mobile")));
					bashBean.setGroupon_url_pc(String.valueOf(jsonEvent.get("groupon_url_pc")));
				}
				list.add(bashBean);
			}
		}
		return list;
	}
	
	private String httpRequest(String requestUrl) {
		StringBuffer buffer = null;

		try {
			// 建立连接
			URL url = new URL(requestUrl);
			HttpURLConnection httpUrlConn = (HttpURLConnection) url
					.openConnection();
			httpUrlConn.setDoInput(true);
			httpUrlConn.setRequestMethod("GET");

			// 获取输入流
			InputStream inputStream = httpUrlConn.getInputStream();
			InputStreamReader inputStreamReader = new InputStreamReader(
					inputStream, "utf-8");
			BufferedReader bufferedReader = new BufferedReader(
					inputStreamReader);

			// 读取返回结果
			buffer = new StringBuffer();
			String str = null;
			while ((str = bufferedReader.readLine()) != null) {
				buffer.append(str);
			}

			// 释放资源
			bufferedReader.close();
			inputStreamReader.close();
			inputStream.close();
			httpUrlConn.disconnect();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return buffer.toString();
	}
//	public static void main(String[] args) {
//		
//		CommonService commonService = new CommonService();
//		try {
//			commonService.getBashInfo();
//		} catch (UnsupportedEncodingException e) {
//			e.printStackTrace();
//		} catch (JSONException e) {
//			e.printStackTrace();
//		}
//	}
}
