'use strict'
var log = document.getElementById('log');

/*Function 是一个类，它的对象就是方法*/
var function_name = new Function("arg1", "arg2","return arg1 + arg2");
var function_name_ret = function_name(2, 3);//下面已打印function_name_ret的值,切忌不要用短杠像这样命名：function-name-ret

var say_Hi = new Function("sName", "sMessage", "alert(\"Hello \" + sName + " "+sMessage);");
say_Hi("小鸣","我是小佐");

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


log.innerHTML = "innerValRet = " + ret + "<br> function_name_ret = " + function_name_ret;
