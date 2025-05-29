// 闲的没事？点这里看代码？
// 都给我翻到这里面来了？
// 怎么点进来的链接？
// 不直接找我要？
// 拿去吧！给你！
// 把你三连+分享留下就行

var nr1=document.getElementById("nr1");
var nr2=document.getElementById("nr2");
var nr3=document.getElementById("nr3");
var no1=document.getElementById("no1");
var no2=document.getElementById("no2");
var no3=document.getElementById("no3");
var no4=document.getElementById("no4");
var no5=document.getElementById("no5");
var no6=document.getElementById("no6");
var no7=document.getElementById("no7");
var no8=document.getElementById("no8");
var no9=document.getElementById("no9");
var no0=document.getElementById("no0");
var no11=document.getElementById("no11");
var no12=document.getElementById("no12");
var no13=document.getElementById("no13");
var no14=document.getElementById("no14");
var no15=document.getElementById("no15");
var no16=document.getElementById("no16");
var no17=document.getElementById("no17");
var no18=document.getElementById("no18");
var no19=document.getElementById("no19");
var no10=document.getElementById("no10");
var no20=document.getElementById("no20");
var no21=document.getElementById("no21");
var no22=document.getElementById("no22");
var no23=document.getElementById("no23");
var no24=document.getElementById("no24");
var no25=document.getElementById("no25");
var no26=document.getElementById("no26");
var no27=document.getElementById("no27");
var no28=document.getElementById("no28");
var no29=document.getElementById("no29");
var no30=document.getElementById("no30");
var boxr=document.getElementById("boxr");
var boxd=document.getElementById("boxd");
var boss=document.getElementById("boss");
var btn0=document.getElementById("btn0");
var muluzt=0;
var xgzs=0;

function rice(){
	$("#QT1").hide();
	$("#QT2").hide();
	nr1.innerHTML=``;
	nr2.innerHTML=``;
	nr3.innerHTML=``;
}
function good(){
	no11.innerHTML=``;
	no12.innerHTML=``;
	no13.innerHTML=``;
	no14.innerHTML=``;
	no15.innerHTML=``;
	no16.innerHTML=``;
	no17.innerHTML=``;
	no18.innerHTML=``;
	no19.innerHTML=``;
	no10.innerHTML=``;
	no20.innerHTML=``;
	no21.innerHTML=``;
	no22.innerHTML=``;
	no23.innerHTML=``;
	no24.innerHTML=``;
	no25.innerHTML=``;
	no26.innerHTML=``;
	no27.innerHTML=``;
	no28.innerHTML=``;
	no29.innerHTML=``;
	no30.innerHTML=``;
}
function zuoyezhanshi(){
	$(".boxleft").css("display",'none');
	$("#btn2").css("display",'block');
	$("#boxright").removeClass("boxright");
	$("#boxright").addClass("boxrightadd");
	$("#btn1").css("display",'none');
	layer.tips('点这里退出预览', '#btn2',{
	  tips: [1, '#f9b5ff']
	});
}

boss.onclick=function(){
	boxr.className="boxleftnext";
	boxr.style.display="block";
	btn0.style.display="block";
	boxd.className="boxleftnextright";
	muluzt=0;
	xgzs=0;
	boss.innerHTML=`星沃的网页书签`;
}
//音乐歌单
no1.onclick=function(){
	console.log(muluzt);
	if(muluzt == 0){
		yygdzt=1;
		good();
		boxr.className="boxleftnextz";
		no11.innerHTML=`网易云音乐`;
		no12.innerHTML=`QQ音乐`;
		console.log(222)
	}
	no11.onclick=function(){
		if(yygdzt == 1){
			yygdzt=11;
			good();
			no11.innerHTML=`星沃`;
			no12.innerHTML=`猫宁孜然`;
			no13.innerHTML=`罗小黑`;
			no14.innerHTML=`童颜`;
			no15.innerHTML=`叶洛洛`;
			no16.innerHTML=`Hanser`;
			no17.innerHTML=`二次元国产动画音乐`;
			no18.innerHTML=`二次元日文歌`;
			no19.innerHTML=`艾索`;
			no10.innerHTML=`个人喜欢`;
			console.log(26)
		}
		else if(yygdzt == 11){
			rice();
			nr1.innerHTML=`星沃`;
			nr2.innerHTML=`
			<p>是本人主页哦，当然要在第一个啦，嘿嘿</p>
			<p>主要作品有超好听的————妙奇旅程呀</p>`;
			nr3.innerHTML=`
			<a target="_blank" rel="noopener noreferrer" href="http://music.163.com/artist?id=50978901&userid=1531884862">点此跳转</a>
			`;
		}
		else if(yygdzt == 12){
			rice();
			nr1.innerHTML=`光遇 游戏原声带`;
			nr2.innerHTML=`<p>一些《游戏》里的BGM</p>`;
			nr3.innerHTML=`
			<a target="_blank" rel="noopener noreferrer" href="https://y.qq.com/n/ryqq/playlist/7842578048">点此跳转</a>
			`;
		}
	}
	no12.onclick=function(){
		if(yygdzt == 11){
			rice();
			nr1.innerHTML=`猫宁孜然`;
			nr2.innerHTML=`<p>正太音/少年音的一只喵~可撩可抱走哦~ 热爱翻唱各种良心曲~偶尔做做游戏实况~ B站直播随缘~一般是下午不定时直播~ </p>`;
			nr3.innerHTML=`
			<a target="_blank" rel="noopener noreferrer" href="http://music.163.com/artist?id=13027043&userid=1531884862">点此跳转</a>
			`;
		}
		else if(yygdzt == 1){
			yygdzt=12;
			good();
			no11.innerHTML=`光遇 游戏原声带`;
			no12.innerHTML=`看看世界有多大`;
			no13.innerHTML=`个人收藏`;
			no14.innerHTML=`纯音乐收藏`;
		}
		else if(yygdzt == 12){
			rice();
			nr1.innerHTML=`国漫主题曲精选`;
			nr2.innerHTML=`
			<p>《勇往直前》</p>
			<p>《愉快的冒险》</p>
			<p>《飘荡》</p>
			<p>《梦想至上》</p>
			<p>《快乐星猫》</p>
			<p>《京剧猫》</p>
			<p>《看看世界有多大》</p>
			`;
			nr3.innerHTML=`
			<a target="_blank" rel="noopener noreferrer" href="https://y.qq.com/n/ryqq/playlist/7056413705">点此跳转</a>
			`;
		}
	}
	no13.onclick=function(){
		if(yygdzt == 11){
			rice();
			nr1.innerHTML=`罗小黑战记`;
			nr2.innerHTML=`
			<p>罗小黑是一只超级可爱的猫咪，它极通人性，会蹲马桶，不吃猫粮，长长的尾巴甚至能分裂成多个名为“黑咻”的生物体。</p>
			<p>原名小黑，遇见罗小白后由罗小白取名为“罗小黑”。师从无限，不会识字。因盗取老君天明珠而被谛听打回原形。躲入纸箱中避雨误被小白捡回家，取名罗小黑。尾巴是身长的两倍，可变成翅膀，也可分裂成名为嘿咻的有意识体，随着小黑能力越强，嘿咻也会越多，现可分裂为四个，也可以无限分裂，但总体积不变。是罕见的双灵质空间体质。</p>`;
			nr3.innerHTML=`
			<a target="_blank" rel="noopener noreferrer" href="https://y.music.163.com/m/playlist?id=983350429&userid=1531884862&creatorId=340078488">罗小黑</a>
			<a target="_blank" rel="noopener noreferrer" href="https://y.music.163.com/m/playlist?id=2909566415&userid=1531884862&creatorId=1693233190">个人收藏向</a>
			`;
		}
		else if(yygdzt == 12){
			rice();
			nr1.innerHTML=`糖果爱🍬`;
			nr2.innerHTML=`<p>个人收藏的一些好听的音乐哦</p>`;
			nr3.innerHTML=`
			<a target="_blank" rel="noopener noreferrer" href="https://y.qq.com/n/ryqq/playlist/7859015751">点此跳转</a>
			`;
		}
		
	}
	no14.onclick=function(){
		if(yygdzt == 11){
			rice();
			nr1.innerHTML=`童颜`;
			nr2.innerHTML=`<p>一些好听的童声向音乐</p>`;
			nr3.innerHTML=`
			<a target="_blank" rel="noopener noreferrer" href="https://y.music.163.com/m/playlist?id=369086621&userid=1531884862&creatorId=269173945">点此跳转</a>
			`;
		}
		else if(yygdzt == 12){
			rice();
			nr1.innerHTML=`温柔☘️`;
			nr2.innerHTML=`<p>一些好听的纯音乐和类纯音乐呀</p>`;
			nr3.innerHTML=`
			<a target="_blank" rel="noopener noreferrer" href="https://y.qq.com/n/ryqq/playlist/7495503107">点此跳转</a>
			`;
		}
	}
	no15.onclick=function(){
		if(yygdzt == 11){
			rice();
			nr1.innerHTML=`叶洛洛`;
			nr2.innerHTML=`<p>古风歌手，福建泉州人，出生于1993年5月8日。代表作：《小了白了兔》、《有点饱》、《蜉蝣梦》等。 </p>`;
			nr3.innerHTML=`
			<a target="_blank" rel="noopener noreferrer" href="http://music.163.com/artist?id=975714&userid=1531884862">点此跳转</a>
			`;
		}
	}
	no16.onclick=function(){
		if(yygdzt == 11){
			rice();
			nr1.innerHTML=`Hanser`;
			nr2.innerHTML=`<p>CV/唱见。b站：hanser</p>`;
			nr3.innerHTML=`
			<a target="_blank" rel="noopener noreferrer" href="https://space.bilibili.com/11073">B站主页</a>
			<a target="_blank" rel="noopener noreferrer" href="http://music.163.com/artist?id=1049179&userid=1531884862">网易首页</a>
			`;
		}
	}
	no17.onclick=function(){
		if(yygdzt == 11){
			rice();
			nr1.innerHTML=`【二次元】国产动画音乐`;
			nr2.innerHTML=`<p>国产动画歌曲，奇奇颗颗历险记，战斗王之飓风战魂，超兽武装，宇宙星神，蓝猫淘气三千问，快乐星猫，大耳朵图图，喜羊羊与灰太狼，赛尔号，熊出没，小鲤鱼历险记，小牛向前冲，憨八龟……<p>`;
			nr3.innerHTML=`
			<a target="_blank" rel="noopener noreferrer" href="https://y.music.163.com/m/playlist?id=117113861&userid=1531884862&creatorId=61155197">点此跳转</a>
			`;
		}
	}
	no18.onclick=function(){
		if(yygdzt == 11){
			rice();
			nr1.innerHTML=`超好听の二次元＆日文歌`;
			nr2.innerHTML=`
			<p>又可爱又欢快的日语歌，有没有让你的心情变得开心起来呢？</p>
			<p>二次元歌和日语歌合集</p>`;
			nr3.innerHTML=`
			<a target="_blank" rel="noopener noreferrer" href="https://y.music.163.com/m/playlist?id=443797814&userid=1531884862&creatorId=283230319">点此跳转</a>
			`;
		}
	}
	no19.onclick=function(){
		if(yygdzt == 11){
			rice();
			nr1.innerHTML=`艾索`;
			nr2.innerHTML=`<p>歌手简介: 艾索，代表作《罗小黑战记》。</p>`;
			nr3.innerHTML=`
			<a target="_blank" rel="noopener noreferrer" href="http://music.163.com/artist?id=860734&userid=1531884862">点此跳转</a>
			`;
		}
	}
	no10.onclick=function(){
		if(yygdzt == 11){
			rice();
			nr1.innerHTML=`个人喜欢音乐集`;
			nr2.innerHTML=``;
			nr3.innerHTML=`
			<a target="_blank" rel="noopener noreferrer" href="https://y.music.163.com/m/playlist?id=2331609616&userid=1531884862&creatorId=1531884862">点此跳转</a>
			`;
		}
	}
}
//视频追番
no2.onclick=function(){
	if(muluzt == 0){
		spzfzt=2;
		good();
		boxr.className="boxleftnextz";
		no11.innerHTML=`罗小黑战记`;
		no12.innerHTML=`名侦探柯南`;
		no13.innerHTML=`猫之茗`;
		no14.innerHTML=`里亚德录大地`;
		no15.innerHTML=`来自深渊`;
		no16.innerHTML=`京剧猫`;
		no17.innerHTML=`斗罗大陆`;
		no18.innerHTML=`小魔头暴露啦！`;
	}
	no12.onclick=function(){
		if(spzfzt == 2){
			rice();
			nr1.innerHTML=`《名侦探柯南》`;
			nr2.innerHTML=`<p>主角工藤新一原本是一位颇具名声的高中生侦探，在目击黑暗组织的地下交易后，正准备追踪时却被突袭击昏，并被灌下代号为“APTX4869”的不明药物。后来虽然幸免于死，但身体就此缩小为小学时期的模样。之后他化名为江户川柯南，在邻居阿笠博士的建议下，寄住在女友毛利兰的父亲—侦探毛利小五郎家中，继续秘密从事追查黑暗组织的工作，并私下探寻获得解药的管道，希望能够恢复原来新一的样貌。与此同时，柯南凭着自己的推理天份，配合阿笠博士为他发明的道具，帮助毛利小五郎成为出名的大侦探。故事内容当中穿插许多爱情、友情、犯罪、背叛、复仇等情节。</p>`;
			nr3.innerHTML=`
			<a target="_blank" rel="noopener noreferrer" href="https://www.bilibili.com/bangumi/play/ss33378">TV原声版</a>
			<a target="_blank" rel="noopener noreferrer" href="https://www.bilibili.com/bangumi/play/ss33415">中配版</a>
			`;
		}
		else if(spzfzt == 26){
			rice();
			nr1.innerHTML=`《京剧猫之信念的冒险》`;
			nr2.innerHTML=`<p>无父无母的主角白糖，年幼时曾被京剧猫所救，立誓长大要成为伟大的京剧猫。而后它结识了星罗班的京剧猫末裔武崧、小青、大飞，并加入星罗班拜金婆婆和唐明为师。白糖没有名门血统，但天赋过人，它依靠惊人的努力和永不言弃的信念，终于成为了真正的京剧猫。并与小伙伴们前行，净化邪恶势力，拯救猫土，解救家园！</p>`;
			nr3.innerHTML=`
			<a target="_blank" rel="noopener noreferrer" href="https://www.bilibili.com/bangumi/play/ss6400">立即追番</a>
			`;
		}
	}
	no11.onclick=function(){
		if(spzfzt == 2){
			rice();
			nr1.innerHTML=`《罗小黑战记》`;
			nr2.innerHTML=`
			<p>猫妖小黑盗取天明珠被谛听发现，被打回原形重伤而逃，在流落街头之时被罗小白带回了家，起名罗小黑。</p>
			<p>有一天小黑突然变成了人形，告诉小白自己要暂时离开去完成师父交给自己的任务。却在离开之后因为师父交给自己的任务又回到了小白身边，等待着他们的会是什么呢……</p>
			`;
			nr3.innerHTML=`
			<a target="_blank" rel="noopener noreferrer" href="https://b23.tv/ep287966">罗小黑战记大电影</a>
			<a target="_blank" rel="noopener noreferrer" href="https://www.bilibili.com/bangumi/play/ss1733">罗小黑战记</a>
			`;
		}
		else if(spzfzt == 26){
			rice();
			nr1.innerHTML=`《京剧猫》`;
			nr2.innerHTML=`<p>且看白糖和星罗班的小伙伴如何披荆斩棘战胜邪恶。</p>`;
			nr3.innerHTML=`
			<a target="_blank" rel="noopener noreferrer" href="https://www.bilibili.com/bangumi/play/ss5885">立即追番</a>
			`;
		}
	}
	no13.onclick=function(){
		if(spzfzt == 2){
			rice();
			nr1.innerHTML=`《猫之茗》`;
			nr2.innerHTML=`<p>少女茉莉某天意外穿越到架空的茗族大陆，这里的人种竟然都是兽人。随后遇见了哈士奇血统兽人龙井、傲娇赤狐少女祁红、翩翩公子萨摩耶血统的普洱等同伴。意料之内的成为了传说中的魔法师，展开了一段猫飞狗跳的冒险故事。</p>`;
			nr3.innerHTML=`
			<a target="_blank" rel="noopener noreferrer" href="https://www.bilibili.com/bangumi/play/ss28758">立即追番</a>
			`;
		}
		else if(spzfzt == 26){
			rice();
			nr1.innerHTML=`《京剧猫之乘风破浪》`;
			nr2.innerHTML=`<p>京剧猫第三季《京剧猫之乘风破浪》随着小青的身世一步步揭开，星罗班逐渐发现，看似安定的身宗背后隐藏着一场巨大的阴谋！</p>`;
			nr3.innerHTML=`
			<a target="_blank" rel="noopener noreferrer" href="https://www.bilibili.com/bangumi/play/ss25346">立即追番</a>
			`;
		}
	}
	no14.onclick=function(){
		if(spzfzt == 2){
			rice();
			nr1.innerHTML=`《里亚德录大地》`;
			nr2.innerHTML=`
			<p>一场不幸的事故，让名为各务桂菜的少女不得不在生命维持装置里度过一生。只有虚拟现实大型多人在线角色扮演游戏《里亚德录》是她唯一的自由。</P>
			<p>而就在某一天，生命维持装置忽然停止，桂菜也失去了生命。</P>
			<p>但是当她再次睁开眼睛，映入眼帘的世界竟然是200年后的《里亚德录》。</P>
			<p>作为名叫“葵娜”的高等精灵并拥有失落的技能和突破极限的能力值， </P>
			<p>她决定和这里的人们加深交流。而且自己亲手创建的“孩子”们也在这里……！？</P>
			<p>穿越到游戏世界里的少女和她极具个性的同伴们，充满欢笑与泪水？的悠闲冒险谭，就此开幕！</P>
			`;
			nr3.innerHTML=`
			<a target="_blank" rel="noopener noreferrer" href="https://www.bilibili.com/bangumi/play/ss40134">立即追番</a>
			`;
		}
		else if(spzfzt == 26){
			rice();
			nr1.innerHTML=`《京剧猫之脚踏实地》`;
			nr2.innerHTML=`
			<p>告别身宗后，京剧猫星罗班一行人渡海抵达京剧猫十二宗之一“步宗”。大家都对步宗所知甚少，白糖等猫只得抱着种种疑问，踏入了步宗的地界，步宗地势荒芜，环境恶劣。</p>
			<p>路途上，不但要解决与新成员“海漂”之间的矛盾，更误入荒漠，遭遇沙暴，面对猫型铠甲“异武铠”的追逐与猛攻，因物资尽毁而陷入了生死存亡的危机之中！</p>
			<p>所幸星罗班临危之际团结一致，更得神秘猫“沙无痕”从中相助，才得以在荒漠中的“笼门客栈”落下脚来。</p>
			`;
			nr3.innerHTML=`
			<a target="_blank" rel="noopener noreferrer" href="https://www.bilibili.com/bangumi/play/ss34617">立即追番</a>
			`;
		}
	}
	no15.onclick=function(){
		if(spzfzt == 2){
			rice();
			nr1.innerHTML=`《来自深渊》`;
			nr2.innerHTML=`
			<p>在每一个角落都被探索完毕的世界中，唯一残留的秘境——大洞穴“深渊”。</p>
			<p>不知道延续到何方，深不见底的巨大纵向洞穴，栖息着奇妙奇怪的生物们，沉眠着现在的人类无法制造的贵重遗物。</p>
			<p>“深渊”那充满了不可思议的姿态吸引了人们，并驱使人们展开冒险。</p>
			<p>如此，多次挑战大洞穴的冒险者们，陆续得到了“探窟家”的名号。</p>
			<p>住在建造于深渊边缘的城镇“奥斯”的孤儿莉可，梦想着有朝一日成为母亲那样伟大的探窟家，并解开深渊的谜团。</p>
			<p>这样的某一天，莉可在探索深渊的途中，捡到了有着少年样貌的机器人……？</p>
			`;
			nr3.innerHTML=`
			<a target="_blank" rel="noopener noreferrer" href="https://www.bilibili.com/bangumi/play/ss34543">立追剧场版</a>
			<a target="_blank" rel="noopener noreferrer" href="https://www.bilibili.com/bangumi/play/ss34544?spm_id_from=333.337.0.0">立即追番</a>
			`;
		}
	}
	no16.onclick=function(){
		if(spzfzt == 2){
			rice();
			spzfzt=26
			good();
			no11.innerHTML=`京剧猫 第一季`
			no12.innerHTML=`京剧猫 第二季`
			no13.innerHTML=`京剧猫 第三季`
			no14.innerHTML=`京剧猫 第四季`
			nr1.innerHTML=`《京剧猫》`;
			nr2.innerHTML=`<p>《京剧猫》是由北京璀璨星空文化发展有限公司出品的中国首部将传统文化中的京剧元素与动画相结合的国产原创动画IP。剧情以猫为主角，以国粹京剧为核心，在热血的剧情中向大家宣扬着积极向上的正能量。</p>`;
			nr3.innerHTML=``;
			nr3.href="";
		}
	}
	no17.onclick=function(){
		if(spzfzt == 2){
			rice();
			nr1.innerHTML=`《斗罗大陆》`;
			nr2.innerHTML=`
			<p>唐门外门弟子唐三，因偷学内门绝学为唐门所不容，跳崖明志时却发现没有死，反而以另外一个身份来到了另一个世界，一个属于武魂的世界，名叫斗罗大陆。这里没有魔法，没有斗气，没有武术，却有神奇的武魂。这里的每个人，在自己六岁的时候，都会在武魂殿中令武魂觉醒。武魂有动物，有植物，有器物，武魂可以辅助人们的日常生活。而其中一些特别出色的武魂却可以用来修炼并进行战斗，这个职业，是斗罗大陆上最为强大也是最荣耀的职业“魂师”。</p>
			<p>小小的唐三在圣魂村开始了他的魂师修炼之路，并萌生了振兴唐门的梦想。当唐门暗器来到斗罗大陆，当唐三武魂觉醒，他能否在这片武魂的世界再铸唐门的辉煌？</p>
			`;
			nr3.innerHTML=`
			<a target="_blank" rel="noopener noreferrer" href="https://v.qq.com/x/cover/m441e3rjq9kwpsc.html">立即追番</a>
			`;
		}
	}
	no18.onclick=function(){
		if(spzfzt == 2){
			rice();
			nr1.innerHTML=`《小魔头暴露啦!》`;
			nr2.innerHTML=`
			<p>为了在江湖上活下去，魔教教主之子于仁杰奉命混入只招收名门正派弟子的“正道书院”，目标是获得能够洗白魔教身份的”好人证“。此行凶险异常，一旦暴露魔教身份必将被无数正道侠客当场击杀。可在报到当天于仁杰就尴尬的发现自己的个人信息早就被人调查的干干净净，为了隐藏身份他终于选择了……穿上女装。凶险又爆笑的校园生活即将展开！</p>
			`;
			nr3.innerHTML=`
			<a target="_blank" rel="noopener noreferrer" href="https://www.bilibili.com/bangumi/play/ss39711">立即追番</a>
			`;
		}
	}
}
//动漫电影
no3.onclick=function(){
	if(muluzt == 0){
		yygdzt=3;
		good();
		boxr.className="boxleftnextz";
		no11.innerHTML=`熊出没`;
		no12.innerHTML=`罗小黑战记`;
		no13.innerHTML=`喜羊羊与灰太狼`;
		no14.innerHTML=`来自深渊`;
		no15.innerHTML=`比得兔`;
	}
	no13.onclick=function(){
		if(yygdzt == 3){
			rice();
			nr1.innerHTML=`喜灰大电影合集`;
			nr2.innerHTML=`
			<a target="_blank" rel="noopener noreferrer" href="https://v.qq.com/x/cover/0fa68o4k3ej09lr.html">牛气冲天</a>
			<a target="_blank" rel="noopener noreferrer" href="https://v.qq.com/x/cover/38c5y2um7yd6qiy.html">虎虎生威</a>
			<a target="_blank" rel="noopener noreferrer" href="https://v.qq.com/x/cover/ko13cn2jlrmh96o.html">兔年顶呱呱</a>
			<a target="_blank" rel="noopener noreferrer" href="https://v.qq.com/x/cover/ayexfi0z0a1xari.html">开心闯龙年</a>
			<a target="_blank" rel="noopener noreferrer" href="https://v.qq.com/x/cover/jq4znbk60jgh5oh.html">我爱灰太狼</a>
			<a target="_blank" rel="noopener noreferrer" href="https://v.qq.com/x/cover/gv4ekbl14p1uvad.html">喜气羊羊过蛇年</a>
			<a target="_blank" rel="noopener noreferrer" href="https://v.qq.com/x/cover/cqlvy9i7ykt2yep.html">我爱灰太狼2</a>
			<a target="_blank" rel="noopener noreferrer" href="https://v.qq.com/x/cover/i3hr8npmwzbsyvu.html">飞马奇遇记</a>
			<a target="_blank" rel="noopener noreferrer" href="https://v.qq.com/x/cover/t9va407efi2skje.html">羊年喜羊羊</a>
			<a target="_blank" rel="noopener noreferrer" href="https://v.qq.com/x/cover/mzc00200czwrokj.html">筐出未来</a>
			`;
		}
	}
	no11.onclick=function(){
		if(yygdzt == 3){
			rice();
			nr1.innerHTML=`熊出没大电影合集`;
			nr2.innerHTML=`
			<a target="_blank" rel="noopener noreferrer" href="https://v.qq.com/x/cover/oo3vptw2nrb31x0.html">熊出没之夺宝熊兵</a>
			<a target="_blank" rel="noopener noreferrer" href="https://v.qq.com/x/cover/1nawx3148rx2apm.html">熊出没之雪岭熊风</a>
			<a target="_blank" rel="noopener noreferrer" href="https://v.qq.com/x/cover/53el1qwq1gnm5fn.html">熊出没之熊心归来</a>
			<a target="_blank" rel="noopener noreferrer" href="https://v.qq.com/x/cover/zm91ry6rctntum8.html">熊出没·奇幻空间</a>
			<a target="_blank" rel="noopener noreferrer" href="https://v.qq.com/x/cover/5lmv8f885h22oy9.html">熊出没·变形记</a>
			<a target="_blank" rel="noopener noreferrer" href="https://v.qq.com/x/cover/2rgkj31016tqmhf.html">熊出没·原始时代</a>
			<a target="_blank" rel="noopener noreferrer" href="https://www.mgtv.com/b/335113/11335927.html">熊出没·狂野大陆</a>
			<a target="_blank" rel="noopener noreferrer" href="https://www.mgtv.com/b/423256/15818949.html">熊出没·重返地球</a>
			`;
		}
	}
	no12.onclick=function(){
		if(yygdzt == 3){
			rice();
			nr1.innerHTML=`罗小黑战记大电影`;
			nr2.innerHTML=`
			<p>在熙攘的人类世界里，很多妖精隐匿其中，他们与人类相安无事地生活着。猫妖罗小黑因为家园被破坏，开始了它的流浪之旅。这场旅途中惺惺相惜的妖精同类与和谐包容的人类伙伴相继出现，让小黑陷入了两难抉择，究竟何处才是真正的归属？</p>
			<a target="_blank" rel="noopener noreferrer" href="https://www.bilibili.com/bangumi/play/ep287966">立即观看罗小黑战记大电影</a>
			`;
		}
	}
	no14.onclick=function(){
		if(yygdzt == 3){
			rice();
			nr2.innerHTML=`
			<p>在每一个角落都被探索完毕的世界中，唯一残留的秘境——大洞穴“阿比斯”。不知道延续到何方，深不见底的巨大纵向洞穴，栖息著奇妙奇怪的生物们，沉眠著现在的人类无法製造的贵重遗物。</p>
			<p>莉可在深界四层中了穿弹兽的毒。救了莉可的，是“生骸”娜娜奇。娜娜奇也成为两人的同伴，三人的冒险向著波多尔多所在的深界五层进发。在那裡，他们遇到了一位自称为普鲁修卡的女孩子……</p>
			<a target="_blank" rel="noopener noreferrer" href="https://www.bilibili.com/bangumi/play/ss34543">来自深渊 深沉灵魂的黎明</a>
			<a target="_blank" rel="noopener noreferrer" href="https://www.bilibili.com/bangumi/play/ep340311">剧场版 上</a>
			<a target="_blank" rel="noopener noreferrer" href="https://www.bilibili.com/bangumi/play/ep340346">剧场版 下</a>
			`;
		}
	}
	no15.onclick=function(){
		if(yygdzt == 3){
			rice();
			nr2.innerHTML=`
			<p>远离伦敦的英国乡村，比得兔和家人以及朋友们过着快乐的生活，当然除了那个侵占了他自由土地并杀害他父亲的邻居麦格雷戈先生。每天，比得兔都要闯入麦格雷戈的院子偷吃水果蔬菜，顺带和这个顽固凶残的老家伙对决一番。可就在某天，麦格雷戈意外身亡。快乐的兔子们带着郊外的野生动物闯入没有住人的房子大吃八喝，好不自在。然而好景不长，麦格雷戈的侄子托马斯——一个在伦敦闯荡的精英——刚刚丢了工作，偏巧继承了这幢位于乡下的房子。托马斯来到乡下，毫不留情将野生动物们赶了出去，而比得兔他们一刻也不忘要夺回属于自己的土地</p>
			<a target="_blank" rel="noopener noreferrer" href="https://www.bilibili.com/bangumi/play/ep470151?theme=movie">比得兔 第一季</a>
			<p>为了追求自己的“兔”生意义，年少轻狂的比得踏上了背井离乡的路并成功赢得老江湖巴拿巴的青睐、成为了团伙中的扛把子，怎料却将追随而来的昔日老友们推入死亡陷阱。</p>
			<a target="_blank" rel="noopener noreferrer" href="https://www.bilibili.com/bangumi/play/ss39062?theme=movie">比得兔 第二季</a>
			`;
		}
	}
}
//up推荐
no4.onclick=function(){
	if(muluzt == 0){
		yygdzt=4;
		good();
		boxr.className="boxleftnextz";
		no11.innerHTML=`<input type="button" style="display: none;"/>星沃<p id="qtbtn2" style="display: none;">398932457</p>`;
		no12.innerHTML=`独木匠`;
		no13.innerHTML=`AIChannel中国绊爱`;
	}
	no11.onclick=function(){
		if(yygdzt == 4){
			rice();
			nr1.innerHTML=`星沃——此网页作者`;
			nr2.innerHTML=`
			<p>B站小up，没有任何名气，发的作品也很杂</p>
			<p>以下是我认为目前唯一做的最有心的作品，一直未火</P>
			<a onclick="qtbtn(3)">暖萌旅程——妙奇星球翻谱</a>
			<p>喜欢的话别藏着掖着呀，一定要记得分享给伙伴们呀</p>
			<a target="_blank" rel="noopener noreferrer" href="https://www.bilibili.com/video/BV1yQ4y1i74M/">↑↑↑作品链接直达页↑↑↑</a>
			`;
			nr3.innerHTML=`
			<p id="time"></p>
			<p>个人主页——→</p>
			<a target="_blank" rel="noopener noreferrer" href="https://space.bilibili.com/398932457">点此跳转</a>
			`;
			var xingwo = $("#qtbtn2").text();//获取文本
			var flag = copyText(xingwo); //传递文本
			layer.tips('已复制我的哔哩哔哩UID', '#no11',{
			  tips: [2, '#a2cbe6']
			});
		}
	}
	no12.onclick=function(){
		if(yygdzt == 4){
			rice();
			nr1.innerHTML=`独木匠`;
			nr2.innerHTML=`<p>牧木匠喜欢小动物，也喜欢画小动物， 平时接兽圈单子,是福瑞圈的一位实力画师</p>`;
			nr3.innerHTML=`
			<p id="time"></p>
			<p>个人主页——→</p>
			<a target="_blank" rel="noopener noreferrer" href="https://space.bilibili.com/362267277">点此跳转</a>
			`;
		}
	}
	no13.onclick=function(){
		if(yygdzt == 4){
			rice();
			nr1.innerHTML=`AIChannel中国绊爱`;
			nr2.innerHTML=`<p>爱哥，一直在努力实现与全世界建立连接的梦想~</p>`;
			nr3.innerHTML=`
			<p id="time"></p>
			<p>个人主页——→</p>
			<a target="_blank" rel="noopener noreferrer" href="https://space.bilibili.com/484322035">点此跳转</a>
			`;
		}
	}
}
//网页精选
no5.onclick=function(){
	if(muluzt == 0){
		yygdzt=5;
		good();
		boxr.className="boxleftnextz";
		no11.innerHTML=`哔哩哔哩`;
		no12.innerHTML=`CSS菜鸟`;
		no13.innerHTML=`BL解析`;
		no14.innerHTML=`music.wandhi`;
	}
	no11.onclick=function(){
		if(yygdzt == 5){
			rice();
			nr1.innerHTML=`哔哩哔哩——又名B站`;
			nr2.innerHTML=`
			<p>哔哩哔哩，英文名称：bilibili，简称B站，现为中国年轻世代高度聚集的文化社区和视频平台，该网站于2009年6月26日创建，被粉丝们亲切地称为“B站”。</p>
			<p>B站早期是一个ACG（动画、漫画、游戏）内容创作与分享的视频网站</p>
			<p>现如今集合了各类学习资源以及教程等各大视频资源</p>
			`;
			nr3.innerHTML=`
			<a target="_blank" rel="noopener noreferrer" href="https://www.bilibili.com">点此跳转</a>
			`;
		}
	}
	no12.onclick=function(){
		if(yygdzt == 5){
			rice();
			nr2.innerHTML=`
			<p>CSS菜鸟教程，HTML+css+js等集于一身的学习网站 开启网页编辑之旅</p>
			`;
			nr3.innerHTML=`
			<a target="_blank" rel="noopener noreferrer" href="https://www.runoob.com/css/css-tutorial.html">点此跳转</a>
			`
		}
	}
	no13.onclick=function(){
		if(yygdzt == 5){
			rice();
			nr2.innerHTML=`
			<p>一个强大的视频解析网站，解析支持：优酷、爱奇艺、腾讯、芒果、乐视、搜狐、MP4、M3U8、FLV等等，无广告，支持4k视频资源</p>
			<a onclick="qtbtn(1)">网页直连</a>
			`;
		}
	}
	no14.onclick=function(){
		if(yygdzt == 5){
			rice();
			nr1.innerHTML=``;
			nr2.innerHTML=`
			<p>多站合一音乐搜索,音乐在线试听 - Wandhi</p>
			<p id="qtbtn2" style="display: none;">music.wandhi.com</p>
			<a id="qtbtn_2" onclick="qtbtn(2)">网页直连<input type="button" style="display: none;"/></a>
			`;
			var wandhi = $("#qtbtn2").text();//获取文本
			var flag2 = copyText(wandhi); //传递文本
		}
	}
}
//学期作业
no6.onclick=function(){
	if(muluzt==0){
		good();
		rice();
		boxr.className="boxleftnextz";
		yygdzt=6;
		no11.innerHTML=`第一学期`;
		nr2.innerHTML=`统计了个人每个学期的学业任务以及展示`;
	}
	no11.onclick=function(){
		if(yygdzt==6){
			good();
			rice();
			yygdzt=61;
			no11.innerHTML=`亿人宝`;
			no12.innerHTML=`动漫人物`;
			no13.innerHTML=`光遇货币`;
			no14.innerHTML=`小车案例`;
			no15.innerHTML=`游戏介绍`;
			no16.innerHTML=`无限套娃`;
			nr2.innerHTML="这些是第一学期的一些网页作业汇总";
		}else if(yygdzt==61){
			rice();
			nr2.innerHTML=`
			<iframe src="亿人宝/index.html" height="100%" width="100%" frameborder="0" allowfullscreen="true"  scrolling="yes" style="position: absolute;top:0;left:0; border-radius: 8px;"></iframe>
			`;
			zuoyezhanshi();
			nr3.innerHTML=`<a target="_blank" href="亿人宝/index.html">阅览模式</a>`;
		}else if(yygdzt==614){
			rice();
			nr2.innerHTML=`
			<iframe src="小车案例/jq内容方法/index.html" height="100%" width="100%" frameborder="0" allowfullscreen="true"  scrolling="no" style="position: absolute;top:0;left:0; border-radius: 8px;"></iframe>
			`;
			zuoyezhanshi();
			nr3.innerHTML=`<a target="_blank" href="小车案例/jq内容方法/index.html">阅览模式</a>`;
		}
	}
	no12.onclick=function(){
		if(yygdzt==61){
			rice();
			nr2.innerHTML=`
			<iframe src="动漫人物/index.html" height="100%" width="100%" frameborder="0" allowfullscreen="true"  scrolling="no" style="position: absolute;top:0;left:0; border-radius: 8px;"></iframe>
			`;
			zuoyezhanshi();
			nr3.innerHTML=`<a target="_blank" href="动漫人物/index.html">阅览模式</a>`;
		}else if(yygdzt==614){
			rice();
			nr2.innerHTML=`
			<iframe src="小车案例/jq隐显方法/index.html" height="100%" width="100%" frameborder="0" allowfullscreen="true"  scrolling="no" style="position: absolute;top:0;left:0; border-radius: 8px;"></iframe>
			`;
			zuoyezhanshi();
			nr3.innerHTML=`<a target="_blank" href="小车案例/jq隐显方法/index.html">阅览模式</a>`;
		}
	}
	no13.onclick=function(){
		if(yygdzt==61){
			rice();
			nr2.innerHTML=`
			<iframe src="candle/index.html" height="100%" width="100%" frameborder="0" allowfullscreen="true"  scrolling="auto" style="position: absolute;top:0;left:0; border-radius: 8px;"></iframe>
			`;
			zuoyezhanshi();
			nr3.innerHTML=`<a target="_blank" href="candle/index.html">阅览模式</a>`;
		}else if(yygdzt==614){
			rice();
			nr2.innerHTML=`
			<iframe src="小车案例/jq隐显方法2/index.html" height="100%" width="100%" frameborder="0" allowfullscreen="true"  scrolling="no" style="position: absolute;top:0;left:0; border-radius: 8px;"></iframe>
			`;
			zuoyezhanshi();
			nr3.innerHTML=`<a target="_blank" href="小车案例/jq隐显方法2/index.html">阅览模式</a>`;
		}
	}
	no14.onclick=function(){
		if(yygdzt==61){
			good();
			rice();
			yygdzt=614;
			no11.innerHTML=`jQ内容替换法`;
			no12.innerHTML=`jQ显隐法一`;
			no13.innerHTML=`jQ显隐法二`;
			no14.innerHTML=`layui法`;
			nr2.innerHTML=`小车展示案例使用了三种方法进行了作业，其中每种方法里都分别沿用了不同细微效果`;
		}else if(yygdzt==614){
			rice();
			nr2.innerHTML=`
			<iframe src="小车案例/layui方法/index.html" height="100%" width="100%" frameborder="0" allowfullscreen="true"  scrolling="no" style="position: absolute;top:0;left:0; border-radius: 8px;"></iframe>
			`;
			zuoyezhanshi();
			nr3.innerHTML=`<a target="_blank" href="小车案例/layui方法/index.html">阅览模式</a>`;
		}
	}
	no15.onclick=function(){
		if(yygdzt==61){
			rice();
			nr2.innerHTML=`
			<iframe src="游戏介绍/index.html" height="100%" width="100%" frameborder="0" allowfullscreen="true"  scrolling="no" style="position: absolute;top:0;left:0; border-radius: 8px;"></iframe>
			`;
			zuoyezhanshi();
			nr3.innerHTML=`<a target="_blank" href="游戏介绍/index.html">阅览模式</a>`;
		}
	}
	no16.onclick=function(){
		if(yygdzt==61){
			rice();
			nr1.innerHTML=`最无聊的一个东西`;
			nr2.innerHTML=`
			<p>这是我用Axure RP8做的一个东西，没什么好看的更没有彩蛋，如果有想要看一眼就看吧，要看到全部内容得先给予权限哦</p>
			<p>请先允许权限</p>
			<p>选择始终允许权限</p>
			<p>不建议低端机点击进行以下操作</p>
			<a onclick="btn(3)">保证就只是小小看一下</a>
			`;
		}
	}
}
//效果展示
no8.onclick=function(){
	if(muluzt==0){
		good();
		rice();
		boxr.className="boxleftnextz";
		yygdzt=8;
		no11.innerHTML=`移动方快`;
		no12.innerHTML=`永动摆球`;
		no13.innerHTML=`水波球`;
		no14.innerHTML=`展开更多`;
		nr1.innerHTML=`常见好玩效果合集`;
		nr2.innerHTML=`
		<p>这些都是自己整合的一些好玩有趣的效果集</p>
		<p>我已经禁止了在线调试，要看源码就拿去吧</p>
		<p>源码全都打包好在这了，自己看吧</p>
		<a target="_blank" rel="noopener noreferrer" href="https://github.com/XingWo/XingWo.github.io">源码链接</a>
		`;
		if(xgzs==1){
			no14.innerHTML=`加载球`;
			no15.innerHTML=`百叶窗`;
			no16.innerHTML=`翻转卡片`;
			no17.innerHTML=`福签树`;
			no18.innerHTML=`滚动贴合`;
			no19.innerHTML=`帘幕效果`;
			no20.innerHTML=`暂未添加`;
			no21.innerHTML=`尽请期待`;
			no22.innerHTML=`暂未添加`;
			no23.innerHTML=`尽请期待`;
		}
	}
	no11.onclick=function(){
		if(yygdzt==8){
			rice();
			nr2.innerHTML=`
			<iframe src="效果展示/runball.html" height="100%" width="100%" frameborder="0" allowfullscreen="true"  scrolling="no" style="position: absolute;top:0;left:0; border-radius: 8px;"></iframe>
			`;
		}
	}
	no12.onclick=function(){
		if(yygdzt==8){
			rice();
			nr2.innerHTML=`
			<iframe src="效果展示/perpetualball.html" height="100%" width="100%" frameborder="0" allowfullscreen="true"  scrolling="no" style="position: absolute;top:0;left:0; border-radius: 8px;"></iframe>
			`;
		}
	}
	no13.onclick=function(){
		if(yygdzt==8){
			rice();
			nr2.innerHTML=`
			<iframe src="效果展示/waterwaveball.html" height="100%" width="100%" frameborder="0" allowfullscreen="true"  scrolling="no" style="position: absolute;top:0;left:0; border-radius: 8px;"></iframe>
			`;
		}
	}
	no14.onclick=function(){
		if(yygdzt==8){
			if(xgzs==0){
				no14.innerHTML=`加载球`;
				no15.innerHTML=`百叶窗`;
				no16.innerHTML=`翻转卡片`;
				no17.innerHTML=`福签树`;
				no18.innerHTML=`滚动贴合`;
				no19.innerHTML=`帘幕效果`;
				no20.innerHTML=`暂未添加`;
				no21.innerHTML=`尽请期待`;
				no22.innerHTML=`暂未添加`;
				no23.innerHTML=`尽请期待`;
				setTimeout(function(){
					xgzs=1;
				},1);
			}
			if(xgzs==1){
				rice();
				nr2.innerHTML=`
				<iframe src="效果展示/loadball.html" height="100%" width="100%" frameborder="0" allowfullscreen="true"  scrolling="no" style="position: absolute;top:0;left:0; border-radius: 8px;"></iframe>
				`;
			}
		}
	}
	no15.onclick=function(){
		if(yygdzt==8){
			rice();
			nr2.innerHTML=`
			<iframe src="效果展示/louver.html" height="100%" width="100%" frameborder="0" allowfullscreen="true"  scrolling="no" style="position: absolute;top:0;left:0; border-radius: 8px;"></iframe>
			`;
			zuoyezhanshi();
		}
	}
	no16.onclick=function(){
		if(yygdzt==8){
			rice();
			nr2.innerHTML=`
			<iframe src="效果展示/flipcard.html" height="100%" width="100%" frameborder="0" allowfullscreen="true"  scrolling="no" style="position: absolute;top:0;left:0; border-radius: 8px;"></iframe>
			`;
		}
	}
	no17.onclick=function(){
		if(yygdzt==8){
			rice();
			nr2.innerHTML=`
			<iframe src="效果展示/blesscard.html" height="100%" width="100%" frameborder="0" allowfullscreen="true"  scrolling="no" style="position: absolute;top:0;left:0; border-radius: 8px;"></iframe>
			`;
		}
	}
	no18.onclick=function(){
		if(yygdzt==8){
			rice();
			nr2.innerHTML=`
			<iframe src="效果展示/rollingfit.html" height="100%" width="100%" frameborder="0" allowfullscreen="true"  scrolling="no" style="position: absolute;top:0;left:0; border-radius: 8px;"></iframe>
			`;
			zuoyezhanshi();
		}
	}
	no19.onclick=function(){
		if(yygdzt==8){
			rice();
			nr2.innerHTML=`
			<iframe src="效果展示/rollingfit2.html" height="100%" width="100%" frameborder="0" allowfullscreen="true"  scrolling="no" style="position: absolute;top:0;left:0; border-radius: 8px;"></iframe>
			`;
			zuoyezhanshi();
		}
	}
}


function qtbtn(num){
	if(num==1){
		nr2.innerHTML=`
		<iframe id="QT1" src="https://svip.bljiex.cc/" height="100%" width="100%" frameborder="0" allowfullscreen="true"  scrolling="no" style="position: absolute;top:0;left:0;z-index: 3;box-shadow: 0 0 0.3vh #98dbff;   border-radius: 8px;"></iframe>
		`;
	}
	if(num==2){
		nr2.innerHTML=`
		<div id="QT2" style="height: 100%;width: 100%;z-index: 3;box-shadow: 0 0 0.3vh #98dbff;   border-radius: 8px;overflow: hidden;position: absolute;top: 0;left: 0;">
			<p style="margin-top: 20vh;">网址已复制到粘贴版，若无法嵌入式跳转，可直接在网址导航粘贴访问</p>
			<p>已知安卓端可正常嵌入跳转该页面</p>
			<iframe id="QT2_nr" src="http://music.wandhi.com" width="100%" frameborder="0"  style="position: absolute;left: 0;top: -410px;background:rgba(152, 219, 255, 0.38)"></iframe>
		</div>
		`;
		layer.tips('已复制网址', '#boss',{
		  tips: [2, '#f9b5ff']
		});
		// 获取一个高度修改另一个高度，适用于不同单位的物体，如10vh里套一个10vh+10px的嵌入，margin-top多余的10px的固定部分
		var boxri=document.getElementById("boxand");
		var boxhei=boxri.clientHeight;
		$("#QT2_nr").css("height",(boxhei+463)+'px');
	}
	if(num==3){
		nr2.innerHTML=`
		<iframe src="//player.bilibili.com/player.html?aid=721179179&bvid=BV1yQ4y1i74M&cid=478245249&page=1" height="100%" width="100%" scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true" style="position: absolute;top:0;left:0;z-index: 3;box-shadow: 0 0 0.3vh #98dbff;   border-radius: 8px;"> </iframe>
		`;
	}
}
function copyText(text) {
	var textarea = document.createElement("input");//创建input对象
	var currentFocus = document.activeElement;//当前获得焦点的元素
	document.body.appendChild(textarea);//添加元素
	textarea.value = text;
	textarea.focus();
	if(textarea.setSelectionRange)
		textarea.setSelectionRange(0, textarea.value.length);//获取光标起始位置到结束位置
	else
		textarea.select();
	try {
		var flag = document.execCommand("copy");//执行复制
		var flag2 = document.execCommand("copy");//执行复制
	} catch(eo) {
		var flag = false;
		var flag2 = false;
	}
	document.body.removeChild(textarea);//删除元素
	currentFocus.focus();
	return flag;
	return flag2;
}

