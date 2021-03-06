package com.hm.set;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.sun.istack.internal.logging.Logger;

import lombok.Getter;
import lombok.Setter;

public class BoyPNameSpace
{
	private static Logger logger = Logger.getLogger(BoyPNameSpace.class);
	// 声明接口类型的引用，和具体实现类型耦合
	@Getter@Setter
	private GirlFriend girlFriend;
	private static ApplicationContext ctx;

	public static void main(String[] args)
	{
		ctx=new ClassPathXmlApplicationContext("applicationContext-set.Xml");
		BoyPNameSpace boy=(BoyPNameSpace) ctx.getBean("boyPNameSpace");
		logger.info(boy.girlFriend.speak());
	}

}
