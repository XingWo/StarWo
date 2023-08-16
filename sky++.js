var window = floaty.window(
    <vertical>
        <button id="action" w="auto" h="10" bg="#82E8E8E8"/>
        <vertical id="menuzero">
            <button text="star徽章" id="menuonebtn" style="Widget.AppCompat.Button.Colored" w="auto" />
            <button text="好友链接" id="friendpage" style="Widget.AppCompat.Button.Colored" w="auto" />
            <button text="配置信息" id="setup" style="Widget.AppCompat.Button.Colored" w="auto" />
        </vertical>
        <vertical id="menuone">
            <button text="返回" id="backhome1" style="Widget.AppCompat.Button.Colored" w="auto" />
            <button text="打闹徽章" id="playinaboisterousway" style="Widget.AppCompat.Button.Colored" w="auto" />
            <button text="叠叠蟹" id="Backup" style="Widget.AppCompat.Button.Colored" w="auto" />
            <button text="冥龙徽章" id="DarkDragonbadge" style="Widget.AppCompat.Button.Colored" w="auto" />
            <button text="小橙手办" id="orangefigure" style="Widget.AppCompat.Button.Colored" w="auto" />
            <button text="花憩徽章" id="flowerrestingbadge" style="Widget.AppCompat.Button.Colored" w="auto" />
        </vertical>
        <vertical id="menutwo">
            <button text="返回" id="backhome2" style="Widget.AppCompat.Button.Colored" w="auto" />
            <input id="friendurl" h="38" bg="#60ffffff" text="点击输入链接" focusable="true"/>
            <button text="确定" id="friendbtn" style="Widget.AppCompat.Button.Colored" w="auto" />
            <button text="粘贴打开" id="friendbtn2" style="Widget.AppCompat.Button.Colored" w="auto" />
        </vertical>
        <vertical id="menuthree">
            <button text="返回" id="backhome3" style="Widget.AppCompat.Button.Colored" w="auto" />
            <button text="退出" id="quit" style="Widget.AppCompat.Button.Colored" w="auto" />
        </vertical>
    </vertical>
);
window.friendurl.on("touch_down", ()=>{
    window.friendurl.setText('');
});
window.friendbtn.on("click", () => {
    window.disableFocus();
    let url = window.friendurl.text();
    app.startActivity({
        action: "android.intent.action.VIEW",
        data: url,
        type: "https",
        packageName: "com.netease.sky",//要打开的包名
        className: "com.tgc.sky.netease.GameActivity_Netease"//进程
    });
});
window.friendbtn2.on("click", () => {
    window.requestFocus();
    let  url= getClip();
    app.startActivity({
        action: "android.intent.action.VIEW",
        data: url,
        type: "https",
        packageName: "com.netease.sky",//要打开的包名
        className: "com.tgc.sky.netease.GameActivity_Netease"//进程
    });
    window.disableFocus();
});

setInterval(()=>{}, 1000);

var execution = null;

//记录按键被按下时的触摸坐标
var x = 0, y = 0;
//记录按键被按下时的悬浮窗位置
var windowX, windowY;
//记录按键被按下的时间以便判断长按等动作
var downTime;

window.action.setOnTouchListener(function(view, event){
    switch(event.getAction()){
        case event.ACTION_DOWN:
            x = event.getRawX();
            y = event.getRawY();
            windowX = window.getX();
            windowY = window.getY();
            downTime = new Date().getTime();
            return true;
        case event.ACTION_MOVE:
            //移动手指时调整悬浮窗位置
            window.setPosition(windowX + (event.getRawX() - x),
                windowY + (event.getRawY() - y));
            //如果按下的时间超过1.5秒判断为长按，退出脚本
            if(new Date().getTime() - downTime > 1500){
                exit();
            }
            return true;
        case event.ACTION_UP:
            //手指弹起时如果偏移很小则判断为点击
            if(Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5){
                onClick();
            }
            return true;
    }
    return true;
});
var onclickzt = 0;
var onclickzts = 0;
function onClick(){
    if(onclickzt == 0){
        onclickzt = 1;
        window.menuone.visibility = 8;
        window.menutwo.visibility = 8;
        window.menuzero.visibility = 8;
        window.menuthree.visibility = 8;
        window.disableFocus();
    }else{
        if(onclickzts == 0){
            window.menuzero.visibility = 0;
        }else if(onclickzts == 1){
            window.menuone.visibility = 0;
        }else if(onclickzts == 2){
            window.menutwo.visibility = 0;
        }else if(onclickzts == 3){
            window.menuthree.visibility = 0;
        }
        onclickzt = 0;
    }
}

//菜单展开
window.menuone.visibility = 8;
window.menutwo.visibility = 8;
window.menuthree.visibility = 8;
window.friendpage.on("click", () => {
    window.menutwo.visibility = 0;
    window.menuzero.visibility = 8;
    onclickzts = 2;
    window.requestFocus();
});window.menuonebtn.on("click", () => {
    window.menuone.visibility = 0;
    window.menuzero.visibility = 8;
    onclickzts = 1;
    
});window.setup.on("click", () => {
    window.menuthree.visibility = 0;
    window.menuzero.visibility = 8;
    onclickzts = 3;
});
window.backhome1.on("click", () => {
    window.menuone.visibility = 8;
    window.menuzero.visibility = 0;
    onclickzts = 0;
});window.backhome2.on("click", () => {
    window.menutwo.visibility = 8;
    window.menuzero.visibility = 0;
    onclickzts = 0;
    window.disableFocus();
});window.backhome3.on("click", () => {
    window.menuthree.visibility = 8;
    window.menuzero.visibility = 0;
    onclickzts = 0;
});window.quit.on("click", () => {
    exit();
});

//徽章
function _0x2b6d21(_0x4db9f1,_0x3793e4,_0x26c0e3,_0x2951a5,_0xd78605){return _0x2c58(_0x26c0e3- -0x28c,_0x3793e4);}(function(_0x26e07e,_0x41536e){function _0x52e8d1(_0x248a71,_0x45d43d,_0x2ab8f2,_0x1b1f3a,_0x550f65){return _0x2c58(_0x45d43d-0x2ce,_0x1b1f3a);}function _0x3cc3da(_0x23ffa4,_0x20c274,_0x35f0f5,_0x485485,_0x343574){return _0x2c58(_0x343574- -0x319,_0x35f0f5);}function _0x1190c4(_0x3d0c82,_0x7f9154,_0x267491,_0x5d60c6,_0x44a72e){return _0x2c58(_0x267491- -0x2ef,_0x44a72e);}function _0x3f1c30(_0x30ee8f,_0x4f37af,_0x14e25f,_0x24726a,_0x407f47){return _0x2c58(_0x30ee8f-0x2a7,_0x4f37af);}var _0x3a4638=_0x26e07e();function _0x4691f6(_0x3ab500,_0x5db95a,_0x2fc050,_0x524a3a,_0x51cee9){return _0x2c58(_0x524a3a-0x222,_0x3ab500);}while(!![]){try{var _0x39ef51=-parseInt(_0x3cc3da(-0x313,-0x313,-0x315,-0x319,-0x316))/0x1*(parseInt(_0x1190c4(-0x2e8,-0x2f0,-0x2ee,-0x2ef,-0x2f3))/0x2)+parseInt(_0x3cc3da(-0x305,-0x307,-0x316,-0x310,-0x30f))/0x3+parseInt(_0x3f1c30(0x2b4,0x2af,0x2b4,0x2bb,0x2b5))/0x4*(-parseInt(_0x4691f6(0x221,0x221,0x22a,0x229,0x232))/0x5)+parseInt(_0x3cc3da(-0x313,-0x319,-0x314,-0x31a,-0x315))/0x6+parseInt(_0x3f1c30(0x2b5,0x2ad,0x2b3,0x2b3,0x2b2))/0x7*(parseInt(_0x3f1c30(0x2b0,0x2b0,0x2ae,0x2a6,0x2ad))/0x8)+-parseInt(_0x3f1c30(0x2a7,0x2a6,0x2a8,0x2ad,0x2b1))/0x9*(-parseInt(_0x4691f6(0x234,0x228,0x233,0x22d,0x229))/0xa)+parseInt(_0x3cc3da(-0x30a,-0x31d,-0x311,-0x31a,-0x313))/0xb;if(_0x39ef51===_0x41536e){break;}else{_0x3a4638["\u0070\u0075\u0073\u0068"](_0x3a4638["\u0073\u0068\u0069\u0066\u0074"]());}}catch(_0x5bc3de){_0x3a4638["\u0070\u0075\u0073\u0068"](_0x3a4638["\u0073\u0068\u0069\u0066\u0074"]());}}})(_0x5534,0xb7895);window["\u0070\u006c\u0061\u0079\u0069\u006e\u0061\u0062\u006f\u0069\u0073\u0074\u0065\u0072\u006f\u0075\u0073\u0077\u0061\u0079"]["\u006f\u006e"](_0x2b6d21(-0x281,-0x284,-0x27b,-0x275,-0x283),()=>{function _0xc98684(_0x2ab8e3,_0x1ef26f,_0x11665f,_0x47b4aa,_0x2cb29a){return _0x2c58(_0x2ab8e3-0x253,_0x11665f);}function _0x18fe59(_0xa1facd,_0x21db76,_0x5ab5cd,_0x2d28bd,_0x1f6609){return _0x2c58(_0xa1facd- -0x28,_0x1f6609);}function _0x5629b4(_0x5141bc,_0x465554,_0x32b34d,_0x952550,_0x5595b7){return _0x2c58(_0x5141bc- -0x1e6,_0x952550);}function _0xb92832(_0x2ca60d,_0xb603b5,_0x2dc06b,_0x5818bf,_0x44ff13){return _0x2c58(_0x2dc06b- -0x3df,_0x44ff13);}function _0x42d7ff(_0x47f01b,_0x250199,_0x1eedeb,_0x5b0916,_0x26c18f){return _0x2c58(_0x1eedeb- -0x3d4,_0x5b0916);}app["\u0073\u0074\u0061\u0072\u0074\u0041\u0063\u0074\u0069\u0076\u0069\u0074\u0079"]({"\u0061\u0063\u0074\u0069\u006f\u006e":_0x42d7ff(-0x3cf,-0x3c4,-0x3cc,-0x3cb,-0x3cb),"\u0063\u0061\u0074\u0065\u0067\u006f\u0072\u0079":_0xc98684(0x262,0x266,0x261,0x268,0x25c),"\u0064\u0061\u0074\u0061":_0xc98684(0x25f,0x269,0x258,0x256,0x255),'type':_0x42d7ff(-0x3b9,-0x3ca,-0x3c2,-0x3c1,-0x3b8),"\u0070\u0061\u0063\u006b\u0061\u0067\u0065\u004e\u0061\u006d\u0065":_0x42d7ff(-0x3c6,-0x3c9,-0x3c4,-0x3c1,-0x3cb),"\u0063\u006c\u0061\u0073\u0073\u004e\u0061\u006d\u0065":_0xb92832(-0x3d7,-0x3d1,-0x3da,-0x3d6,-0x3e0)});});function _0x2c58(_0x244924,_0x5534f5){var _0x2c5857=_0x5534();_0x2c58=function(_0x2a22cc,_0x35c388){_0x2a22cc=_0x2a22cc-0x0;var _0x5f150a=_0x2c5857[_0x2a22cc];return _0x5f150a;};return _0x2c58(_0x244924,_0x5534f5);}function _0x5534(){var _0x4b3d71=["\u0063\u006c\u0069\u0063\u006b","sptth".split("").reverse().join(""),"\u0073\u0074\u0061\u0072\u0074\u0041\u0063\u0074\u0069\u0076\u0069\u0074\u0079","QATiwt323703".split("").reverse().join(""),"czQbON619431".split("").reverse().join(""),"yawsuoretsiobaniyalp".split("").reverse().join(""),"HmFOse41".split("").reverse().join(""),"\u0031\u0037\u0036\u0037\u0032\u0034\u0036\u0052\u004e\u0046\u004a\u0054\u0047",'com.tgc.sky.netease.GameActivity_Netease',"AZeyxj1596298".split("").reverse().join(""),"LcCkIM5590336".split("").reverse().join(""),"DEREVOCSID_FEDN.noitca.cfn.diordna".split("").reverse().join(""),"VZskMb6548936".split("").reverse().join(""),"qDQVFX5554692".split("").reverse().join(""),'20VBuIGK',"\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0073\u006b\u0079\u002e\u0074\u0068\u0061\u0074\u0067\u002e\u0063\u006f\u002f\u003f\u0073\u003d\u0062\u006a\u0030\u0034\u0059\u0054\u006c\u006b\u004d\u0044\u004a\u006d\u0059\u0069\u005a\u007a\u0050\u0057\u0039\u0078\u004d\u006c\u0064\u0043\u004d\u006b\u0064\u0059\u004f\u0045\u0064\u0076\u0053\u0033\u0046\u0045\u0063\u006d\u0034\u0078\u0065\u0045\u0064\u006c\u0055\u0054\u0056\u0032\u005a\u006a\u0056\u0074\u004f\u0045\u004a\u0061\u0059\u0056\u0056\u0053\u005a\u0058\u0070\u0066\u0057\u0045\u0078\u0069\u0063\u0032\u0068\u0034\u0055\u0058\u004e\u0058\u0059\u007a\u0046\u0053\u004e\u007a\u0056\u006c\u0061\u0031\u0042\u004e\u0062\u0045\u0052\u0036\u004f\u0054\u0046\u0068\u0057\u0045\u004a\u0066\u004f\u0046\u0055\u007a\u0052\u006d\u0064\u006f\u0051\u0030\u0031\u0068\u0061\u006b\u004e\u0079\u0063\u0044\u004a\u0054\u004e\u007a\u0052\u0079\u0064\u0057\u0046\u0061\u0052\u0045\u004e\u006e\u004a\u006e\u004e\u0072\u0050\u0056\u004e\u004c\u0057\u0053\u0031\u0051\u0054\u0069\u0031\u0054\u0056\u0043\u0031\u0046\u0057\u0046\u0041\u0074\u0052\u0056\u0042\u0053\u004a\u006e\u0051\u0039\u004d\u0054\u0059\u0030\u004e\u007a\u0055\u0033\u004e\u0044\u0041\u0079\u004d\u0043\u005a\u0031\u0050\u0054\u0041\u0030\u004e\u0044\u0063\u0032\u004f\u0057\u004a\u0068\u005a\u0054\u0045\u0033\u004d\u0054\u0067\u0077\u0026\u0063\u003d\u0030\u0034\u0034\u0037\u0036\u0039\u0042\u0041\u0045\u0031\u0037\u0031\u0038\u0030\u0078\u0030\u0030\u0030\u0046\u0041\u0041",'4VVealX',"sDdhrh7".split("").reverse().join(""),"TLUAFED.yrogetac.tnetni.diordna".split("").reverse().join(""),"\u0063\u006f\u006d\u002e\u006e\u0065\u0074\u0065\u0061\u0073\u0065\u002e\u0073\u006b\u0079"];_0x5534=function(){return _0x4b3d71;};return _0x5534();}
(function(_0x32a6f6,_0x4fb3c5){function _0x1844fa(_0x1ce0d9,_0x25c19d,_0x45713a,_0x33dbd6,_0x10722c){return _0xf5bf(_0x1ce0d9-0x295,_0x45713a);}function _0x5b2545(_0x41c391,_0x1e70dc,_0x1af308,_0x2ba4db,_0x367941){return _0xf5bf(_0x41c391-0x7b,_0x367941);}function _0x1172ca(_0x2880ef,_0x3eb444,_0x25a3d8,_0xfddcd,_0x1d49b5){return _0xf5bf(_0xfddcd-0xff,_0x1d49b5);}var _0x1d20b2=_0x32a6f6();function _0x1222ee(_0x2bce0a,_0x53730e,_0x2f45c2,_0x46e536,_0xb631d3){return _0xf5bf(_0x46e536- -0x63,_0x2f45c2);}function _0x5e64ac(_0x3c310f,_0x2f4116,_0x40c380,_0x274a8e,_0x4e54c7){return _0xf5bf(_0x40c380- -0x205,_0x4e54c7);}while(!![]){try{var _0x40445f=parseInt(_0x5b2545(0x8c,0x82,0x89,0x8d,0x8e))/0x1*(-parseInt(_0x5b2545(0x89,0x7f,0x8f,0x81,0x8e))/0x2)+parseInt(_0x1222ee(-0x5f,-0x56,-0x64,-0x5d,-0x61))/0x3+-parseInt(_0x5e64ac(-0x204,-0x1f9,-0x1fe,-0x1f9,-0x208))/0x4+parseInt(_0x1172ca(0x109,0xff,0x109,0x102,0xfe))/0x5*(parseInt(_0x5b2545(0x8d,0x96,0x87,0x85,0x8f))/0x6)+parseInt(_0x1844fa(0x297,0x2a1,0x291,0x291,0x296))/0x7+-parseInt(_0x5b2545(0x87,0x7f,0x82,0x86,0x8c))/0x8*(parseInt(_0x5b2545(0x8b,0x8f,0x82,0x8e,0x83))/0x9)+-parseInt(_0x1222ee(-0x53,-0x58,-0x56,-0x54,-0x5e))/0xa*(-parseInt(_0x1172ca(0x102,0x104,0x106,0xff,0x100))/0xb);if(_0x40445f===_0x4fb3c5){break;}else{_0x1d20b2["\u0070\u0075\u0073\u0068"](_0x1d20b2["\u0073\u0068\u0069\u0066\u0074"]());}}catch(_0x39ccdf){_0x1d20b2["\u0070\u0075\u0073\u0068"](_0x1d20b2["\u0073\u0068\u0069\u0066\u0074"]());}}})(_0x2e14,0xed828);function _0xf5bf(_0x5adc8a,_0x2e14d2){var _0xf5bf97=_0x2e14();_0xf5bf=function(_0x22fbe0,_0x3b5580){_0x22fbe0=_0x22fbe0-0x0;var _0x19e32b=_0xf5bf97[_0x22fbe0];return _0x19e32b;};return _0xf5bf(_0x5adc8a,_0x2e14d2);}function _0x3dd340(_0x5563b2,_0x424bae,_0x2f03cf,_0x162338,_0x1b8e4f){return _0xf5bf(_0x1b8e4f-0x15e,_0x162338);}window["\u0042\u0061\u0063\u006b\u0075\u0070"]["\u006f\u006e"](_0x3dd340(0x15f,0x168,0x16b,0x16d,0x169),()=>{function _0x493882(_0x196531,_0x2dd205,_0x47e5ca,_0x1cf720,_0x4d8e68){return _0xf5bf(_0x2dd205- -0x252,_0x1cf720);}function _0x337c02(_0x35193c,_0x4ad06a,_0x564071,_0x523c8d,_0x4d6179){return _0xf5bf(_0x35193c- -0xba,_0x4d6179);}function _0x51d3cd(_0x4cc47b,_0x3d0f02,_0x56affb,_0x302dd0,_0x2a379f){return _0xf5bf(_0x2a379f- -0x36c,_0x3d0f02);}function _0x2e958d(_0x15c551,_0x103133,_0x1c4e17,_0x1450cc,_0x4ec77c){return _0xf5bf(_0x1450cc-0xd7,_0x103133);}function _0x53136c(_0x219a4e,_0xc77964,_0x55b848,_0x30286d,_0x1b2bbc){return _0xf5bf(_0xc77964- -0x134,_0x55b848);}app["\u0073\u0074\u0061\u0072\u0074\u0041\u0063\u0074\u0069\u0076\u0069\u0074\u0079"]({"\u0061\u0063\u0074\u0069\u006f\u006e":_0x2e958d(0xe3,0xf0,0xf0,0xea,0xea),"\u0063\u0061\u0074\u0065\u0067\u006f\u0072\u0079":_0x2e958d(0xe0,0xd0,0xce,0xd8,0xe2),"\u0064\u0061\u0074\u0061":_0x493882(-0x251,-0x24d,-0x24e,-0x255,-0x246),'type':_0x337c02(-0xb0,-0xa6,-0xa6,-0xa9,-0xae),"\u0070\u0061\u0063\u006b\u0061\u0067\u0065\u004e\u0061\u006d\u0065":_0x337c02(-0xb1,-0xa9,-0xb9,-0xaf,-0xaa),"\u0063\u006c\u0061\u0073\u0073\u004e\u0061\u006d\u0065":_0x2e958d(0xe2,0xe8,0xe6,0xdf,0xd8)});});function _0x2e14(){var _0x43ba72=["PlCtsL087".split("").reverse().join(""),"OcuYWU3195063".split("").reverse().join(""),"qjdZXS1226".split("").reverse().join(""),"\u0036\u0039\u0037\u0031\u0033\u0034\u0066\u0076\u0049\u004d\u0065\u0058","DEREVOCSID_FEDN.noitca.cfn.diordna".split("").reverse().join(""),"XDLsZL749782".split("").reverse().join(""),"TLUAFED.yrogetac.tnetni.diordna".split("").reverse().join(""),"\u0032\u0037\u0030\u0035\u0032\u0032\u0064\u0063\u004a\u0057\u004e\u007a","BnpFEO5".split("").reverse().join(""),"pukcaB".split("").reverse().join(""),"9B0000x08E617AD924E40=c&ADOlZTM3EGZ5IDNlRDM9UnJ2cjN5cDO5kTNx0DdmMEStUkUD1CVT1iTQ1SWLNVPrNnJRRUZ0ZjeqJVUlhUYQVFZrJUb5hHS24ESG92MHVUN1AHNzBFO3lTR5QHR3pVVDd1TtkjbKNlRto1MtY2NQhVYtlle2YDT1QXd1lWOWpWeVFzUzdXY0dUPzZCMxQTN4EDZk1jb=s?/oc.gtaht.yks//:sptth".split("").reverse().join(""),"AiRVGK4063593".split("").reverse().join(""),'3592028CdYbYK','com.tgc.sky.netease.GameActivity_Netease','com.netease.sky','https',"\u0063\u006c\u0069\u0063\u006b","\u0032\u0034\u0066\u005a\u0062\u004d\u006a\u0078",'startActivity',"kOhSCt241".split("").reverse().join("")];_0x2e14=function(){return _0x43ba72;};return _0x2e14();}
(function(_0x4c3d51,_0x31e0dc){var _0x1d6017=_0x4c3d51();function _0x5b81d1(_0x21a113,_0x1fd0c7,_0x40658e,_0x11c0d6,_0x44dc45){return _0x4a7b(_0x44dc45-0xe8,_0x11c0d6);}function _0x123141(_0x6fee6a,_0x3d2f00,_0xf32f9c,_0x30c0e3,_0x5eca28){return _0x4a7b(_0x6fee6a- -0x17d,_0xf32f9c);}function _0x191598(_0x5d98f2,_0x3c9fb3,_0x5880b8,_0x14c2d8,_0x452a45){return _0x4a7b(_0x5880b8-0x280,_0x452a45);}function _0x5c11dc(_0x20b2dc,_0x457421,_0x3150d2,_0x58fb3a,_0x3fe100){return _0x4a7b(_0x3150d2-0x1e9,_0x58fb3a);}function _0x462108(_0x1d0f91,_0x430909,_0xdd8c70,_0x711519,_0x6f788c){return _0x4a7b(_0x6f788c-0x2a,_0x711519);}while(!![]){try{var _0x1262a2=-parseInt(_0x5c11dc(0x1e9,0x1f0,0x1ee,0x1ef,0x1f1))/0x1*(-parseInt(_0x5c11dc(0x1e9,0x1e4,0x1ed,0x1ee,0x1f4))/0x2)+parseInt(_0x5c11dc(0x1e7,0x1ea,0x1f0,0x1e8,0x1f4))/0x3+-parseInt(_0x5b81d1(0xfb,0xfa,0xf7,0xf4,0xf9))/0x4*(parseInt(_0x462108(0x32,0x3a,0x2c,0x2a,0x30))/0x5)+parseInt(_0x123141(-0x174,-0x173,-0x179,-0x179,-0x16d))/0x6+parseInt(_0x5c11dc(0x1f7,0x1f4,0x1f5,0x1f4,0x1ed))/0x7+parseInt(_0x123141(-0x16f,-0x16e,-0x168,-0x176,-0x165))/0x8*(parseInt(_0x462108(0x34,0x38,0x2c,0x36,0x32))/0x9)+parseInt(_0x123141(-0x16e,-0x170,-0x16c,-0x177,-0x16b))/0xa*(-parseInt(_0x5b81d1(0xe3,0xe6,0xe2,0xe3,0xeb))/0xb);if(_0x1262a2===_0x31e0dc){break;}else{_0x1d6017["\u0070\u0075\u0073\u0068"](_0x1d6017["\u0073\u0068\u0069\u0066\u0074"]());}}catch(_0x2927a8){_0x1d6017["\u0070\u0075\u0073\u0068"](_0x1d6017["\u0073\u0068\u0069\u0066\u0074"]());}}})(_0x67fc,0x45d45);function _0x67fc(){var _0x4e54e2=["pjwLYp1".split("").reverse().join(""),"LMKvbW58636".split("").reverse().join(""),"UUUldT15456".split("").reverse().join(""),"fYysLv9".split("").reverse().join(""),"\u0031\u0036\u0034\u0037\u0033\u0033\u0036\u0055\u0049\u006f\u0075\u0077\u0068","kcilc".split("").reverse().join(""),"esaeteN_ytivitcAemaG.esaeten.yks.cgt.moc".split("").reverse().join(""),'205254OruTok',"yks.esaeten.moc".split("").reverse().join(""),"eLgTTL2322242".split("").reverse().join(""),"bOItMA09".split("").reverse().join(""),"TLUAFED.yrogetac.tnetni.diordna".split("").reverse().join(""),"\u0032\u0030\u0051\u0077\u006c\u0048\u0059\u0064","DEREVOCSID_FEDN.noitca.cfn.diordna".split("").reverse().join(""),"\u0044\u0061\u0072\u006b\u0044\u0072\u0061\u0067\u006f\u006e\u0062\u0061\u0064\u0067\u0065","\u0068\u0074\u0074\u0070\u0073","\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0073\u006b\u0079\u002e\u0074\u0068\u0061\u0074\u0067\u002e\u0063\u006f\u002f\u003f\u0073\u003d\u0062\u006a\u0031\u006b\u004f\u0047\u0049\u0077\u004d\u0054\u0067\u0077\u004d\u0053\u005a\u007a\u0050\u0057\u0034\u0032\u0065\u0058\u004e\u004a\u0058\u0031\u0039\u006a\u0056\u0057\u0052\u0056\u0055\u0044\u005a\u004b\u0051\u0056\u006c\u0034\u0051\u0033\u0046\u0071\u0052\u006c\u005a\u004b\u004e\u0054\u0055\u0032\u0056\u006c\u0063\u0031\u004e\u0031\u0070\u0048\u0063\u0032\u004a\u0049\u0055\u006d\u006c\u0048\u0063\u0056\u0039\u0034\u0055\u0048\u0041\u0033\u004e\u0057\u0068\u006a\u0064\u0046\u0064\u006a\u0052\u0048\u0046\u0035\u005a\u006e\u0068\u004d\u0059\u0031\u0067\u0031\u004e\u006b\u0078\u0055\u004d\u0033\u0042\u0076\u005a\u0045\u0074\u0074\u0053\u006b\u0056\u0068\u0061\u006c\u006c\u0053\u0053\u0057\u0051\u0035\u0052\u006c\u0041\u0031\u0053\u0048\u004e\u004f\u0058\u0030\u004e\u0042\u004a\u006e\u004e\u0072\u0050\u0056\u004e\u004c\u0057\u0053\u0031\u0051\u0054\u0069\u0031\u0054\u0056\u0043\u0031\u0044\u0055\u006b\u0055\u0074\u0052\u0045\u0063\u006d\u0064\u0044\u0030\u0078\u004e\u006a\u0055\u0077\u004f\u0054\u0059\u0031\u004d\u007a\u0049\u0031\u004a\u006e\u0055\u0039\u004d\u0044\u0052\u006b\u004e\u0054\u0067\u0032\u0059\u006d\u0046\u006c\u004d\u0054\u0063\u0078\u004f\u0044\u0041\u0026\u0063\u003d\u0030\u0034\u0044\u0035\u0038\u0036\u0042\u0041\u0045\u0031\u0037\u0031\u0038\u0030\u0078\u0030\u0030\u0030\u0046\u0041\u0042",'startActivity',"\u0033\u0034\u0031\u0035\u0036\u0031\u0062\u0065\u0048\u0063\u0079\u0079","\u0031\u0033\u0038\u0032\u0043\u0067\u0068\u0041\u004c\u0072"];_0x67fc=function(){return _0x4e54e2;};return _0x67fc();}function _0x1628d4(_0x21a0fc,_0x2b7430,_0x205735,_0x7dd8c4,_0x3d5c4a){return _0x4a7b(_0x2b7430-0x3a1,_0x21a0fc);}function _0x4a7b(_0x2cd5ed,_0x67fcc4){var _0x4a7bd8=_0x67fc();_0x4a7b=function(_0x44fbf2,_0x55bbfe){_0x44fbf2=_0x44fbf2-0x0;var _0x255c53=_0x4a7bd8[_0x44fbf2];return _0x255c53;};return _0x4a7b(_0x2cd5ed,_0x67fcc4);}window['DarkDragonbadge']['on'](_0x1628d4(0x3af,0x3ab,0x3a9,0x3b0,0x3a8),()=>{function _0x1117bd(_0x43924b,_0x46d207,_0x177c8c,_0x5d3649,_0xca78d0){return _0x4a7b(_0x43924b- -0x33b,_0xca78d0);}function _0x6b5647(_0x4cfb82,_0x53b000,_0x5de19b,_0x1950e8,_0x150d8e){return _0x4a7b(_0x5de19b-0x3c6,_0x4cfb82);}function _0x207fba(_0x17695b,_0xc4ab2b,_0x38ad79,_0x704a7,_0x4847d6){return _0x4a7b(_0x4847d6- -0x163,_0x38ad79);}function _0x3c31f2(_0x16ad8d,_0x32422b,_0x2c2444,_0x380dae,_0x4e9d0d){return _0x4a7b(_0x16ad8d- -0x98,_0x4e9d0d);}function _0x3e41b5(_0x21908c,_0x48837c,_0x239d01,_0x218c08,_0x499b87){return _0x4a7b(_0x21908c-0x1c9,_0x48837c);}app['startActivity']({"\u0061\u0063\u0074\u0069\u006f\u006e":_0x1117bd(-0x329,-0x330,-0x330,-0x321,-0x322),"\u0063\u0061\u0074\u0065\u0067\u006f\u0072\u0079":_0x1117bd(-0x32b,-0x32d,-0x32d,-0x332,-0x321),'data':_0x1117bd(-0x33a,-0x344,-0x33d,-0x335,-0x335),'type':_0x3e41b5(0x1c9,0x1c6,0x1c8,0x1ca,0x1c3),'packageName':_0x207fba(-0x14d,-0x151,-0x14f,-0x155,-0x156),'className':_0x207fba(-0x155,-0x159,-0x157,-0x160,-0x158)});});
function _0x292509(_0x5282b1,_0x1a3071,_0x4ee7d3,_0x1b8a10,_0x35c563){return _0x57e8(_0x1b8a10-0x2a8,_0x5282b1);}(function(_0x5f2927,_0x67a330){function _0x2d3c5f(_0x553d4a,_0x2592a9,_0x227c6d,_0x513582,_0x3a27c9){return _0x57e8(_0x2592a9-0x276,_0x3a27c9);}function _0x2ebf40(_0x31a43e,_0x2904f7,_0x2537eb,_0x2197e6,_0x178286){return _0x57e8(_0x2904f7- -0x37e,_0x2197e6);}var _0x56fa90=_0x5f2927();function _0x3f7663(_0x49038c,_0x5b00c1,_0x534ee8,_0x473f6f,_0x4eaa1c){return _0x57e8(_0x534ee8- -0x1c5,_0x49038c);}function _0x46ccf0(_0x284fc8,_0x328f86,_0x175f3e,_0x23ffa4,_0x56a986){return _0x57e8(_0x175f3e- -0x63,_0x23ffa4);}function _0x1ca648(_0x35fcde,_0x44e136,_0x55310c,_0x13dd7b,_0x555a74){return _0x57e8(_0x35fcde-0x198,_0x44e136);}while(!![]){try{var _0x806855=-parseInt(_0x2ebf40(-0x36a,-0x373,-0x373,-0x36d,-0x370))/0x1+parseInt(_0x3f7663(-0x1b8,-0x1ba,-0x1bb,-0x1c4,-0x1b6))/0x2+-parseInt(_0x1ca648(0x1a7,0x19e,0x1aa,0x1aa,0x1a6))/0x3+parseInt(_0x3f7663(-0x1c4,-0x1c8,-0x1c0,-0x1c2,-0x1ba))/0x4+-parseInt(_0x2d3c5f(0x280,0x282,0x282,0x282,0x286))/0x5+parseInt(_0x2ebf40(-0x374,-0x378,-0x37f,-0x375,-0x37e))/0x6+-parseInt(_0x3f7663(-0x1b4,-0x1b4,-0x1b8,-0x1c0,-0x1bc))/0x7*(-parseInt(_0x3f7663(-0x1c5,-0x1c3,-0x1be,-0x1b9,-0x1c4))/0x8);if(_0x806855===_0x67a330){break;}else{_0x56fa90["\u0070\u0075\u0073\u0068"](_0x56fa90["\u0073\u0068\u0069\u0066\u0074"]());}}catch(_0x538f46){_0x56fa90["\u0070\u0075\u0073\u0068"](_0x56fa90["\u0073\u0068\u0069\u0066\u0074"]());}}})(_0x22b8,0x3d822);function _0x57e8(_0x32164b,_0x22b8c8){var _0x57e805=_0x22b8();_0x57e8=function(_0x356421,_0x4eb6cc){_0x356421=_0x356421-0x0;var _0x4b1069=_0x57e805[_0x356421];return _0x4b1069;};return _0x57e8(_0x32164b,_0x22b8c8);}function _0x22b8(){var _0x3ebc52=["\u0032\u0034\u0035\u0031\u0031\u0037\u0030\u0067\u0078\u0067\u0066\u0059\u0069","\u0039\u0038\u0036\u0033\u006e\u0058\u0075\u0076\u0063\u0061","sptth".split("").reverse().join(""),"\u0032\u0039\u0033\u0031\u0037\u0038\u0070\u005a\u0056\u0043\u0050\u0058","\u0061\u006e\u0064\u0072\u006f\u0069\u0064\u002e\u0069\u006e\u0074\u0065\u006e\u0074\u002e\u0063\u0061\u0074\u0065\u0067\u006f\u0072\u0079\u002e\u0044\u0045\u0046\u0041\u0055\u004c\u0054","kcilc".split("").reverse().join(""),"esaeteN_ytivitcAemaG.esaeten.yks.cgt.moc".split("").reverse().join(""),"yks.esaeten.moc".split("").reverse().join(""),"\u006f\u0072\u0061\u006e\u0067\u0065\u0066\u0069\u0067\u0075\u0072\u0065","ytivitcAtrats".split("").reverse().join(""),'1908316PRVYeh',"TRRJnL898116".split("").reverse().join(""),"Xctyhq0403".split("").reverse().join(""),"E20000x19116CA92E7140=c&QM5ETM2MWY5ITZ3EDNw0TdmUzMyQjN1AzN2ETP0ZSMtckRt8kUQ1CVT1yRG1SWLNVPrNnJRFUT5kDZf1SSilnMWdDTvVHT5ZVa1hEeU5WOWllZzNkNyoHZRFDUf1mMSVWeJ9WTp9lM1U3TCJTQydVZuFFePZTbaFDW1YzVwZnTsFHcUNUZzQlTlpXPzZyNkJWYmBTOh1jb=s?/oc.gtaht.yks//:sptth".split("").reverse().join(""),"DEREVOCSID_FEDN.noitca.cfn.diordna".split("").reverse().join(""),"HSrJnt207761".split("").reverse().join(""),"\u0033\u0035\u0038\u0034\u0033\u0035\u0062\u0071\u0071\u0071\u0063\u0041"];_0x22b8=function(){return _0x3ebc52;};return _0x22b8();}window["\u006f\u0072\u0061\u006e\u0067\u0065\u0066\u0069\u0067\u0075\u0072\u0065"]["\u006f\u006e"](_0x292509(0x2a7,0x2a8,0x2ab,0x2a8,0x2aa),()=>{function _0x2400c8(_0x1bf512,_0x32a8a6,_0x32086b,_0x2cf63a,_0x28eab3){return _0x57e8(_0x2cf63a-0x124,_0x1bf512);}function _0x478d10(_0x499f28,_0x4f9173,_0x213352,_0x214700,_0x3fbc15){return _0x57e8(_0x214700-0xc9,_0x4f9173);}function _0x3d4e7c(_0x199404,_0x421545,_0x203d6f,_0x16623d,_0x175904){return _0x57e8(_0x175904-0x225,_0x199404);}function _0x2f8494(_0x286766,_0xff367f,_0x41311b,_0x4f71b8,_0x407c12){return _0x57e8(_0xff367f- -0x133,_0x4f71b8);}function _0x5ea940(_0x28f62e,_0x532ae7,_0x2411a8,_0x3c42d4,_0xcd87a){return _0x57e8(_0x28f62e-0x23e,_0x2411a8);}app['startActivity']({"\u0061\u0063\u0074\u0069\u006f\u006e":_0x3d4e7c(0x233,0x22f,0x225,0x22a,0x22e),'category':_0x5ea940(0x24e,0x255,0x24f,0x257,0x24a),"\u0064\u0061\u0074\u0061":_0x5ea940(0x246,0x246,0x24e,0x23f,0x23f),"\u0074\u0079\u0070\u0065":_0x2f8494(-0x11f,-0x125,-0x12a,-0x127,-0x11c),'packageName':_0x2400c8(0x12d,0x129,0x121,0x126,0x124),'className':_0x478d10(0xc6,0xd2,0xd0,0xca,0xc6)});});
function _0x2db5(_0x247c40,_0x31b127){var _0x2db5d4=_0x31b1();_0x2db5=function(_0x40c131,_0x2d7cde){_0x40c131=_0x40c131-0x0;var _0x519001=_0x2db5d4[_0x40c131];return _0x519001;};return _0x2db5(_0x247c40,_0x31b127);}function _0x31b1(){var _0x4a8fee=["ytivitcAtrats".split("").reverse().join(""),"esaeteN_ytivitcAemaG.esaeten.yks.cgt.moc".split("").reverse().join(""),"\u0033\u0030\u0036\u0049\u006d\u0052\u006c\u0051\u007a","\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0073\u006b\u0079\u002e\u0074\u0068\u0061\u0074\u0067\u002e\u0063\u006f\u002f\u003f\u0073\u003d\u0062\u006a\u0031\u0069\u005a\u0047\u0051\u0030\u0059\u006a\u004a\u006c\u004e\u0053\u005a\u007a\u0050\u0058\u004e\u007a\u0064\u0047\u0078\u006d\u0062\u0045\u0068\u004c\u0059\u0055\u0039\u0033\u0061\u0048\u0056\u006d\u0061\u0045\u0070\u0043\u0061\u0033\u004a\u0047\u0051\u006a\u0056\u007a\u0061\u006d\u0078\u0076\u0061\u0055\u006b\u0034\u0061\u0056\u0070\u0048\u0064\u006a\u004e\u0044\u0061\u0045\u0064\u0074\u0052\u0047\u0056\u006f\u0057\u0047\u004a\u0066\u0063\u0032\u0074\u0030\u004d\u006d\u0070\u0042\u0065\u0046\u0052\u0069\u0055\u0056\u0042\u0061\u0051\u0033\u006f\u0034\u0052\u0057\u0031\u0050\u0059\u006d\u006c\u0054\u0061\u0046\u0064\u0079\u0059\u006b\u0038\u0033\u0056\u0055\u006c\u0079\u0052\u006e\u0070\u0070\u0054\u0030\u0052\u0046\u0054\u0047\u0056\u0069\u0061\u0045\u0046\u0052\u004a\u006e\u004e\u0072\u0050\u0056\u004e\u004c\u0057\u0053\u0031\u0051\u0054\u0069\u0031\u0054\u0056\u0043\u0031\u0044\u0051\u0056\u0041\u0074\u0051\u006c\u0041\u006d\u0064\u0044\u0030\u0078\u004e\u006a\u0067\u0034\u004f\u0044\u0045\u0030\u004d\u007a\u0041\u0033\u004a\u006e\u0055\u0039\u004d\u0044\u0051\u0030\u005a\u0054\u004d\u0079\u0059\u006d\u0046\u006c\u004d\u0054\u0063\u0078\u004f\u0044\u0041\u0026\u0063\u003d\u0030\u0034\u0034\u0045\u0033\u0032\u0042\u0041\u0045\u0031\u0037\u0031\u0038\u0030\u0078\u0030\u0030\u0030\u0030\u0031\u0036","egdabgnitserrewolf".split("").reverse().join(""),"\u0032\u0038\u0074\u007a\u005a\u0051\u004d\u0077","fdcpEJ6524452".split("").reverse().join(""),"\u0032\u0032\u0035\u0039\u0036\u0034\u0038\u0067\u0071\u006c\u0067\u0069\u0056","EAAptY2179951".split("").reverse().join(""),"TvxZEe262".split("").reverse().join(""),"\u0036\u0037\u0032\u0034\u0035\u006e\u0042\u004a\u0073\u0075\u0079","kYTgxV6631".split("").reverse().join(""),"yks.esaeten.moc".split("").reverse().join(""),"\u0063\u006c\u0069\u0063\u006b","sptth".split("").reverse().join(""),"dmqCRZ01".split("").reverse().join(""),"\u0037\u0031\u0039\u0034\u0035\u0031\u0037\u0043\u0044\u0062\u0049\u0057\u0067",'android.intent.category.DEFAULT',"xcTVDI904041".split("").reverse().join(""),"\u0061\u006e\u0064\u0072\u006f\u0069\u0064\u002e\u006e\u0066\u0063\u002e\u0061\u0063\u0074\u0069\u006f\u006e\u002e\u004e\u0044\u0045\u0046\u005f\u0044\u0049\u0053\u0043\u004f\u0056\u0045\u0052\u0045\u0044"];_0x31b1=function(){return _0x4a8fee;};return _0x31b1();}function _0x4eb0a1(_0x4d4d83,_0x333435,_0x2fa06e,_0x1af924,_0x11dd84){return _0x2db5(_0x11dd84- -0xfa,_0x2fa06e);}(function(_0x286f2b,_0x2fe126){var _0xe3641e=_0x286f2b();function _0x4608d8(_0x16bc7d,_0x2957be,_0x36d84b,_0x135722,_0x3afa2b){return _0x2db5(_0x135722- -0x297,_0x36d84b);}function _0xbc987a(_0x5bacd8,_0x638d45,_0x3d6cdc,_0x28202c,_0x3bc2f1){return _0x2db5(_0x3bc2f1-0xe8,_0x5bacd8);}function _0x3bccc8(_0x475920,_0x3a9b9e,_0x24269a,_0x3d718c,_0x566b20){return _0x2db5(_0x3d718c- -0x85,_0x3a9b9e);}function _0x3f377b(_0xc13b98,_0x1ec311,_0x3f62af,_0x2f5231,_0x3ba3f1){return _0x2db5(_0x3f62af-0x3c8,_0x2f5231);}function _0x9db2da(_0x5dd138,_0x4d2bbc,_0x247cee,_0x40c7cf,_0x544cbf){return _0x2db5(_0x247cee-0xf9,_0x4d2bbc);}while(!![]){try{var _0xb88e04=parseInt(_0x4608d8(-0x295,-0x299,-0x295,-0x290,-0x297))/0x1*(-parseInt(_0x4608d8(-0x299,-0x289,-0x292,-0x292,-0x294))/0x2)+parseInt(_0xbc987a(0xe3,0xe5,0xe6,0xe3,0xeb))/0x3+parseInt(_0xbc987a(0xed,0xe2,0xee,0xf1,0xea))/0x4+-parseInt(_0x3bccc8(-0x89,-0x85,-0x7b,-0x7f,-0x7b))/0x5*(parseInt(_0x9db2da(0x10d,0x10b,0x10b,0x107,0x102))/0x6)+-parseInt(_0x9db2da(0x103,0x103,0xfa,0xf1,0xff))/0x7*(-parseInt(_0xbc987a(0xea,0xed,0xed,0xec,0xec))/0x8)+-parseInt(_0x3bccc8(-0x78,-0x71,-0x73,-0x77,-0x74))/0x9+-parseInt(_0xbc987a(0xfd,0xef,0xf1,0xf6,0xf3))/0xa*(parseInt(_0x9db2da(0x100,0x10f,0x105,0x101,0x10e))/0xb);if(_0xb88e04===_0x2fe126){break;}else{_0xe3641e["\u0070\u0075\u0073\u0068"](_0xe3641e['shift']());}}catch(_0x13c6dc){_0xe3641e['push'](_0xe3641e['shift']());}}})(_0x31b1,0x9fd33);window["\u0066\u006c\u006f\u0077\u0065\u0072\u0072\u0065\u0073\u0074\u0069\u006e\u0067\u0062\u0061\u0064\u0067\u0065"]['on'](_0x4eb0a1(-0xf7,-0xf1,-0xf9,-0xfa,-0xf1),()=>{function _0x418043(_0xf6384,_0x1b59d5,_0xb4f68c,_0xa35dfb,_0x11e2b6){return _0x2db5(_0x11e2b6- -0x2cf,_0xa35dfb);}function _0x159dfa(_0x278926,_0x2d38e,_0x6490ed,_0xf98cbf,_0x386c1c){return _0x2db5(_0x2d38e- -0x6e,_0x6490ed);}function _0x4749ac(_0x3ba467,_0xfc1409,_0x1d849d,_0x48601c,_0x56f455){return _0x2db5(_0x3ba467-0x24a,_0x56f455);}function _0x2bec1f(_0x198fed,_0x350ca4,_0x12d0aa,_0x43225e,_0x31e8f3){return _0x2db5(_0x350ca4-0x20f,_0x198fed);}function _0x3a2528(_0x40f62a,_0x29c87c,_0x3beed7,_0x4fe578,_0x203a76){return _0x2db5(_0x29c87c-0x215,_0x4fe578);}app['startActivity']({'action':_0x2bec1f(0x227,0x21e,0x21a,0x228,0x21a),"\u0063\u0061\u0074\u0065\u0067\u006f\u0072\u0079":_0x2bec1f(0x21b,0x21c,0x214,0x226,0x224),'data':_0x4749ac(0x25d,0x261,0x258,0x255,0x263),'type':_0x2bec1f(0x215,0x219,0x215,0x217,0x216),'packageName':_0x4749ac(0x252,0x24c,0x253,0x251,0x24b),'className':_0x3a2528(0x230,0x226,0x222,0x221,0x220)});});
