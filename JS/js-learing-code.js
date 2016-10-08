'use strict'

var log = document.getElementById('log');
var logStr = "";

/*Function 是一个类，它的对象就是方法*/
var function_name = new Function("arg1", "arg2", "return arg1 + arg2");
var function_name_ret = function_name(2, 3); //下面已打印function_name_ret的值,切忌不要用短杠像这样命名：function-name-ret

var say_Hi = new Function("sName", "sMessage", "alert(\"Hello \" + sName + ' '+sMessage);");
// say_Hi("小鸣","我是小佐");//弹框太烦，看代码就好

/*
闭包 
function 是一个对象，对象内部可以定义其他function
内部function可以访问外部变量，外部不能访问内部变量。(跟java一样)
当函数使用函数之外的变量，函数执行完成时，相关内存不会被立即回收，
直到它引用的变量都释放完毕之后才会被一起回收。
现阶段对闭包的理解：当内部函数引用了外部变量，就会形成闭包。(感觉没什么特别的..)
*/
var x = 0;

function outFun() {
    let o = 1;

    function innerFun() {
        var innerValue;
        o++;
        x += 10;
        innerValue = o + x;
        return innerValue;
    }

    return innerFun();
}

var ret = outFun();


addLog("innerValRet = " + ret);
addLog("function_name_ret = " + function_name_ret);

/*
AJAX网络请求
文档地址：http://www.w3school.com.cn/ajax/ajax_xmlhttprequest_send.asp
*/
var request = new XMLHttpRequest();
request.onreadystatechange = function() { //响应的回调
    if (request.readyState === 4) {
        if (request.status === 200) {
            addLog("响应成功:" + request.responseText);
        } else {
            addLog("响应失败：request.status:" + request.status);
        }
    } else {
        addLog("请求未完成 request.readyState = " + request.readyState);
    }
    refreshLog();
}

request.open("GET", "https://api.github.com/repos/square/retrofit/contributors", true); //第三个参数true表示异步请求
request.send();

//在新一行增加log
function addLog(str) {
    logStr += str + "<br>";
}
//刷新页面内容
function refreshLog() {
    log.innerHTML = logStr;
}
refreshLog();
