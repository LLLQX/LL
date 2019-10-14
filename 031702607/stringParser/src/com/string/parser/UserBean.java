package com.string.parser;

import java.util.List;


public class UserBean {
    private String 姓名;
    private String 手机;
    private List<String> 地址;
    private String 地址1;

    public String get地址1() {
        return 地址1;
    }

    public void set地址1(String 地址1) {
        this.地址1 = 地址1;
    }

    public String get姓名() {
        return 姓名;
    }

    public void set姓名(String 姓名) {
        this.姓名 = 姓名;
    }

    public String get手机() {
        return 手机;
    }

    public void set手机(String 手机) {
        this.手机 = 手机;
    }

    public List<String> get地址() {
        return 地址;
    }

    public void set地址(List<String> 地址) {
        this.地址 = 地址;
    }

    @Override
    public String toString() {
        return "UserBean{" +
                "姓名='" + 姓名 + '\'' +
                ", 手机='" + 手机 + '\'' +
                ", 地址=" + 地址 +
                ", 地址1='" + 地址1 + '\'' +
                '}';
    }
}
