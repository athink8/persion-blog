$(function() {

	/*  添加信息到控制面板*/
	console.log("\n %c Athink_ %c https://github.com/athink8 \n",
		"color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;")
	console.log(
		"%c亲爱的朋友们: \n  你们好,很高兴你能看见这段信息,本人为一名即将实习的Java程序员,\n"+
		"在这人人技术都很强大的世界里,我不知我的归宿在何处,感觉学无止境,永远都学不完的知识让我很头大,\n"+
		"但这些都不是重点,如果你能够给我次机会,我一定好好努力,好好加油! 谢谢!! \n 我的邮箱: athink8@163.com ",
		"color: #202124; background: #ccffff; padding:6px;")

	/* 浏览器搞笑标题 */
	var OriginTitle = document.title;
	var titleTime;
	document.addEventListener('visibilitychange', function() {
		if (document.hidden) {
			$('[rel="icon"]').attr('href', "https://s2.ax1x.com/2020/02/11/1oJJeJ.th.png");
			document.title = 'ヽ(●-`Д´-)ノ你要和我玩嘛';
			clearTimeout(titleTime);

		} else {
			$('[rel="icon"]').attr('href', "https://s2.ax1x.com/2020/02/11/1oJJeJ.th.png");
			document.title = 'ヾ(Ő∀Ő3)ノ好呀！' + OriginTitle;
			titleTime = setTimeout(function() {
				document.title = OriginTitle;
			}, 2000);
		}
	});



})
