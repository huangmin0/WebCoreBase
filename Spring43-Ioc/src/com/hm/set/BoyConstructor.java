package com.hm.set;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.sun.istack.internal.logging.Logger;

public class BoyConstructor
{
	private static Logger logger = Logger.getLogger(BoyConstructor.class);
	// 声明接口类型的引用，和具体实现类型耦合
	private GirlFriend girlFriend;
	private static ApplicationContext ctx;

	public BoyConstructor()
	{
		super();
	}
	//用于GirlFriend属性赋值的构造方法
	public BoyConstructor(GirlFriend girlFriend)
	{
		super();
		this.girlFriend = girlFriend;
	}

	public static void main(String[] args)
	{
		ctx=new ClassPathXmlApplicationContext("applicationContext-set.Xml");
		BoyConstructor boy=(BoyConstructor) ctx.getBean("boyConstructor");
		logger.info(boy.girlFriend.speak());
	}

}
