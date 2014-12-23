package com.app.weixin.place.service;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

import com.app.weixin.place.model.PlaceConstant;

@Service
public class FoodService {

	public String getFoodInfo() throws UnsupportedEncodingException, JSONException {
		
		StringBuffer bufUrl = new StringBuffer();
		bufUrl.append(PlaceConstant.REQEST_URL)
			  .append("ak=" + PlaceConstant.AK + "&")
			  .append("output=" + PlaceConstant.OUT_TYPE + "&")
			  .append("query="+URLEncoder.encode(PlaceConstant.PLACE_BASH_NAME,"UTF-8") + "&")
			  .append("region="+URLEncoder.encode(PlaceConstant.PLACE_BASH_REGION,"UTF-8"));
		
		String httpstr = httpRequest(bufUrl.toString());
		
		JSONObject json = new JSONObject(httpstr);
		int a = json.length();
		return "";
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
	
	public static void main(String[] args) {
		
		FoodService foodService = new FoodService();
		try {
			foodService.getFoodInfo();
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		} catch (JSONException e) {
			e.printStackTrace();
		}
	}
}
