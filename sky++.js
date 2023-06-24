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
window.playinaboisterousway.on("click", () => {
    app.startActivity({
        action: "android.nfc.action.NDEF_DISCOVERED",
        category: "android.intent.category.DEFAULT",
        data: "https://sky.thatg.co/?s=bj04YTlkMDJmYiZzPW9xMldCMkdYOEdvS3FEcm4xeEdlUTV2ZjVtOEJaYVVSZXpfWExic2h4UXNXYzFSNzVla1BNbER6OTFhWEJfOFUzRmdoQ01hakNycDJTNzRydWFaRENnJnNrPVNLWS1QTi1TVC1FWFAtRVBSJnQ9MTY0NzU3NDAyMCZ1PTA0NDc2OWJhZTE3MTgw&c=044769BAE17180x000FAA",//徽章链接，可以拿没装国际服光遇的ios扫之后点击卡片进浏览器复制链接
        type: "https",
        packageName: "com.netease.sky",
        className: "com.tgc.sky.netease.GameActivity_Netease"
    });
});window.Backup.on("click", () => {
    app.startActivity({
        action: "android.nfc.action.NDEF_DISCOVERED",
        category: "android.intent.category.DEFAULT",
        data: "https://sky.thatg.co/?s=bj1kZDE4NTQxMCZzPUd0YXdzUzFVeWpWOWl1dXQ1TDY2elltYVhQN2YtM1otRlNKbjktT1dDVVp3RHQ5RTl3OFBzNHA1NUVHM29GSE42SHh5bUJrZFVQYUhlUVJqejZ0ZURRJnNrPVNLWS1QTi1TVC1DUkUtSEMmdD0xNTk5ODc5Njc2JnU9MDRlNDI5ZGE3MTZlODA&c=04E429DA716E80x0000B9",//徽章链接，可以拿没装国际服光遇的ios扫之后点击卡片进浏览器复制链接
        type: "https",
        packageName: "com.netease.sky",
        className: "com.tgc.sky.netease.GameActivity_Netease"
    })
});window.DarkDragonbadge.on("click", () => {
    app.startActivity({
        action: "android.nfc.action.NDEF_DISCOVERED",
        category: "android.intent.category.DEFAULT",
        data: "https://sky.thatg.co/?s=bj1kOGIwMTgwMSZzPW42eXNJX19jVWRVUDZKQVl4Q3FqRlZKNTU2Vlc1N1pHc2JIUmlHcV94UHA3NWhjdFdjRHF5ZnhMY1g1NkxUM3BvZEttSkVhallSSWQ5RlA1SHNOX0NBJnNrPVNLWS1QTi1TVC1DUkUtREcmdD0xNjUwOTY1MzI1JnU9MDRkNTg2YmFlMTcxODA&c=04D586BAE17180x000FAB",//徽章链接，可以拿没装国际服光遇的ios扫之后点击卡片进浏览器复制链接
        type: "https",
        packageName: "com.netease.sky",
        className: "com.tgc.sky.netease.GameActivity_Netease"
    });    
});window.orangefigure.on("click", () => {
    app.startActivity({
        action: "android.nfc.action.NDEF_DISCOVERED",
        category: "android.intent.category.DEFAULT",
        data: "https://sky.thatg.co/?s=bj1hOTBmYWJkNyZzPXplTlQzZUNUcHFsTnZwVzY1WDFabTZPeFFuZVdyQTJCT3U1Ml9pTW9JeWVSMm1fUDFRZHoyNkNzZllWOW5UeEh1aVZ5THVvTDdWMnliSS1fZDk5TUFRJnNrPVNLWS1GRy1TVC1QUk8tRkctMSZ0PTE2NzA1NjQyMzUmdT0wNDE3ZTI5YWM2MTE5MQ&c=0417E29AC61191x00002E",//徽章链接，可以拿没装国际服光遇的ios扫之后点击卡片进浏览器复制链接
        type: "https",
        packageName: "com.netease.sky",
        className: "com.tgc.sky.netease.GameActivity_Netease"
    })
});