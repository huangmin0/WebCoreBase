/**
 * Demo file
 */
function testRef() {
	alert("this is test");
}
function forIn() {
	var args = forIn.arguments.length;
	console.info("args:" + args);

	var array = [ "AA", 33, false, "BB", "CC", 22.5 ];
	for (tmp in array) {// tmp是索引，不是元素值;
		console.info(tmp + "---" + array[tmp]);

	}
}
$(function() {
	$('#btn').bind('click', function() {
		$(this).attr("disabled", "true");
	})

	$('#username').bind('focus', function() {
		$(this).css('border', '3pt solid red');
	}).bind('blur', function() {
		$(this).css('border', '3pt solid yellow')
	})

	$('#btn2').mouseover(function() {
		$(this).val("mouseover-已进入");
	})

	$('#btn2').mouseout(function() {
		$(this).val("mouseout-已退出");
	})

	$('#btn').hover(function() {
		$(this).val("已进入");
	}, function() {
		$(this).val("已退出");
	})
})
// 使用show
function showDemo() {
	$('#hidden').show('slow', function() {
		alert("显示成功")
	});
}
//使用fade
function fadeInDemo() {
	$('#hidden').fadeIn('slow', function() {
		alert("显示成功")
	});
}
function fadeOutDemo() {
	$('#hidden').fadeOut('slow',function() {
		alert("显示成功")
	});
}
//使用fadeTo
function fadeToDemo() {
	$('#hidden').fadeTo('slow',0.2, function() {
		alert("显示成功")
	});
}
// 使用hide
function hideDemo() {
	$('#hidden').hide('slow', function() {
		alert("隐藏成功")
	});
}
// 使用一个按钮实现隐藏和显示用show和hide实现
$(function() {

	$('#sh').bind('click', function() {
		if ($('#hidden').is(':hidden')) {
			$('#hidden').show("slow", function() {
				$('#sh').attr('value', '隐藏')
			});
		} else {
			$('#hidden').hide("slow", function() {
				$('#sh').attr('value', '显示')
			});
		}
	})
})
// 使用toggle实现一个按钮的隐藏和显示
function toggleDemo() {
	$('#hidden').toggle('slow', function() {
		if ($('#hidden').is(':hidden')) {
			$('#tg').attr('value', 'toggle显示')
		} else {
			$('#tg').attr('value', 'toggle隐藏')
		}
	});
}
//slideToggle
function slideToggleDemo() {
	$('#hidden').slideToggle('slow', function() {
		if ($('#hidden').is(':hidden')) {
			$('#tl').attr('value', 'slideToggle显示')
		} else {
			$('#tl').attr('value', 'slideToggle隐藏')
		}
	});
}
//滑动显示和隐藏
$(function() {

	$('#sg').bind('click', function() {
		if ($('#hidden').is(':hidden')) {
			$('#hidden').slideDown("slow", function() {
				$('#sg').attr('value', 'slide隐藏')
			});
		} else {
			$('#hidden').slideUp("slow", function() {
				$('#sg').attr('value', 'slide显示')
			});
		}
	})
})
//向右移动且回来
$(function() {
	$('#top1').bind('click', function() {
		$('div').animate({
			left : '+=1000px'
		}, 1000).animate({
			left : '-=1000px'
		}, 1000);

	})
})
//斜向移动且放大缩小返回
$(function() {

	$('#top').bind('click', function() {
		$('div').animate({
			top : '+=100px',
			left : '+=100px',
			width : '240px',
			height : '320px'
		}, 1000).animate({
			top : '-=100px',
			left : '-=100px',
			width : '24px',
			height : '32px'
		}, 1000);
	})
})

