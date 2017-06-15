package com.hm.type;

import lombok.Getter;
import lombok.Setter;

@Getter@Setter
public class User
{
private String username;
	//使用lombok生成getter和setter方法

@Override
public String toString()
{
	return "User [username=" + username + "]";
}

}
