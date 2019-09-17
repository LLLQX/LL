package com.string.parser;

import com.google.gson.Gson;

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


public class ContentUtil {
    public static void main(String[] args) {
        String s = readStringData().trim();
        String reg = "\r\n\r\n";
        String[] splitData = s.split(reg);
        ArrayList<UserBean> resultList = new ArrayList<>();
        for (String data : splitData) {
            UserBean userBean = new UserBean();
            //解析具体内容
            String[] firstArr = data.split(",");
            String name = firstArr[0];
            String phone = checkCellphone(firstArr[1]);
            userBean.set姓名(name);
            String addr = firstArr[1].split(phone)[0] + firstArr[1].split(phone)[1].replace(".", "");
            userBean.set手机(phone);
            Map<String, String> stringStringMap = AddressResolveUtils.addressFormat(addr);

            ArrayList<String> myAddrs = new ArrayList<>();
            if (stringStringMap.get("province") != null) {
                myAddrs.add(stringStringMap.get("province"));
            }
            if (stringStringMap.get("city") != null) {
                myAddrs.add(stringStringMap.get("city"));
            }
            if (stringStringMap.get("county") != null) {
                myAddrs.add(stringStringMap.get("county"));
            }
            if (stringStringMap.get("town") != null) {
                myAddrs.add(stringStringMap.get("town"));
            }
            if (stringStringMap.get("village") != null) {
                myAddrs.add(stringStringMap.get("village"));
            }
            userBean.set地址(myAddrs);
            resultList.add(userBean);


        }
        Gson gson = new Gson();
        String jsonStr = gson.toJson(resultList);
        writeToMyFile(jsonStr);

    }


    private static void writeToMyFile(String content) {
        try {
            //定义文件路径，没有该文件会自动创建，如果路径有文件夹，一定要有，不会自动创建文件夹
            String filename = "src/myResolve.txt";
            File file = new File(filename);
            if (!file.exists()) {
                file.createNewFile();
            }
            byte[] b = content.getBytes();  //将字符串转换成字节数
            OutputStream out = null;
            try {
                out = new FileOutputStream(file);   //实例化OutpurStream
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            }

            out.write(b);
            out.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static String readStringData() {
        String encoding = "UTF-8";
        File file = new File("src/originData");
        Long filelength = file.length();
        byte[] filecontent = new byte[filelength.intValue()];
        try {
            FileInputStream in = new FileInputStream(file);
            in.read(filecontent);
            in.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        try {
            return new String(filecontent, encoding);
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
            return "";
        }
    }

    /**
     * 查询符合的手机号
     */
    public static String checkCellphone(String str) {
        String phone = "";
        Pattern pattern = Pattern.compile("((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\\d{8}");
        // 创建匹配
        Matcher matcher = pattern.matcher(str);
        //查找字符串
        while (matcher.find()) {
            phone = matcher.group();
        }
        return phone;
    }


}
