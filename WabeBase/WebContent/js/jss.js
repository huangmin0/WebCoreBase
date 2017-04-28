/**
 * 
 */
function Demoplugins() {

	var len = navigator.plugins.length;
	with (document) {
		write("你的浏览器共支持 " + len + "种外挂插件： <BR>");
		write("<TABLE BORDER=1>")
		write("<CAPTION>外挂插件清单</CAPTION")
		write("<TR><TH><TH>名称<TH>描述<TH>文件名")

		for (var i = 0; i < len; i++)
			write("<TR><TD>" + i + "<TD>" + navigator.plugins[i].name + "<TD>"
					+ navigator.plugins[i].description + "<TD>"
					+ navigator.plugins[i].filename);
	}
}
function Demoscreen() {
	if (screen.width<=1440||screen.colorDepth<8) {
		var msg= "本网站最佳浏览模式为1440*900*256";
		alert(msg);
	}
}

function Demowindows() {
	if (confirm("确定离开了吗")) {
		self.close();
	}
	else 
		return false;
}

function Democlear() {
	document.write("42346 <br/>");
	document.write("****fdsfjf");
	document.close();
}


