function init() {
    const num = document.getElementById("num");
    num.value=0;
    num.disabled="disabled";
    // var n1 = document.getElementById("n1");
    // n1.onclick=function () {
    //     alert(1);
    // }
    const oButton = document.getElementsByTagName("input");
    for (let i =0; i<oButton.length; i++){
        oButton[i].onclick=function () {
            if (isNumber(this.value)){
                if (isNull(this.value)){
                    num.value = this.value*1;
                }else {
                    num.value = (num.value+this.value)*1;
                }
            }else {
                let btn_num = this.value;
                // alert(btn_num);

                switch (btn_num) {
                     case "log":
                         btn_num1 = Number(num.value);
                         num.value=0;
                         fh = "log";
                         break;
                    case "√x":
                        num.value = Number(sqrtroot(num.value));
                        break;
                    case "x^y":
                        btn_num1 = Number(num.value);
                        num.value=0;
                        fh = "x^y";
                        break;
                    case "n!":
                        num.value = Number(nn(num.value));
                        break;
                    case ")":
                        alert("程序待开发！！！");
                        break;
                    case "+/-":
                        num.value = Number(sign((num.value)));
                        break;
                    case "mod":
                        btn_num1 = Number(num.value);
                        num.value=0;
                        fh = "mod";
                        break;
                    case "|x|":
                        num.value = Number(Math.abs(num.value));
                        break;
                    case "1/x":
                        num.value = div(num.value);
                        break;
                    case "x^2":
                        num.value = Number(num.value*num.value);
                        break;
                    case "e":
                        num.value = Math.E;
                        break;
                    case "PI":
                        num.value = Math.PI;
                        break;
                    case "+":
                        btn_num1 = Number(num.value);
                        num.value=0;
                        fh = "+";
                        break;
                    case "-":
                        btn_num1=Number(num.value);
                        num.value = 0;
                        fh = "-";
                        break;
                    case "*":
                        btn_num1=Number(num.value);
                        num.value = 0;
                        fh = "*";
                        break;
                    case "/":
                        btn_num1=Number(num.value);
                        num.value=0;
                        fh = "/";
                        break;
                    case ".":
                        num.value = dec_number(num.value);
                        break;
                    case "c":
                        num.value = back(num.value);
                        break;
                    case "del":
                        num.value = del(num.value);
                        break;
                    case "=":
                        switch (fh) {
                            case "+":
                                if (isNull(fh)){
                                    num.value = btn_num1;
                                }else {
                                num.value = btn_num1 + Number(num.value);}
                                break;

                            case "-":
                                num.value = btn_num1-Number(num.value);
                                break;
                            case "*":
                                num.value = btn_num1*Number(num.value);
                                break;
                            case "/":
                                if (Number(num.value)===0){
                                    alert("除数不能为零");
                                    num.value=0;
                                    break;
                                }else {
                                    num.value = btn_num1/(Number(num.value));

                                }
                                break;
                            case "mod":
                                if(Number(num.value)===0){
                                    num.value = 0;
                                }else {
                                num.value = btn_num1%(Number(num.value));
                                }
                                break;
                            case "x^y":
                                if (btn_num1===0||num.value===0){
                                    num.value = 1;
                                }else {
                                num.value = power(btn_num1,num.value);
                                }
                                break;
                            case "log":
                                num.value = logarithmic(num.value,btn_num1);
                                break;

                        }
                        break;
                }

            }
        }
    }
}
//对数算法
function logarithmic(n1,n2) {
    result = Math.log(n1)/Math.log(n2);
    return result;

}
//控制根号x的算法
function sqrtroot(n) {
        return Math.sqrt(n);
}
//x的y次方算法
function power(n1,n2) {
    result = Math.pow(n1,n2);
    return result;
}
//n的阶乘算法
function nn(num){
    var result = 1;
    while(num){
        result*=num;
        num--;
    }
    return result;
}
//验证文本框是否为空或者为零
function isNull(n) {
    if (n*1==="0"||n.length===0){
        return true;
    }else {
        return false;
    }
}

/*正负号*/
function sign(n){
    if(n.indexOf("-")===-1){
    	  n="-"+n;}
    else{
    	  n=n.substr(1,n.length);
    }
    return n;
}
//判断是否为数字
function isNumber(n) {
        // if (!(isNaN(n)===false)){
        //     return true;//参数n是数字
        // }else {
        //     return false;//不是数字
        // }
    return !(isNaN(n));
}
//isNaN 不能转化为数字是：true 能转化是:false
//小数点
function dec_number(n) {
    if (n.indexOf(".")===-1){
        n=n+".";
    }
    return n;

}
//删除键
function back(n) {
    n=n.substr(0,n.length-1);
    if (isNull(n)){
        n="0";
    }
    return n;

}
function div(n) {
    if (n!==0){
        n=Number(1/n);
    }else
    {
        alert("除数不能为零!")
    }
    return n;
}
//清除键
// function del(n) {
//
//     return 0;
// }

function del(n) {
    return 0;
}
/*文本框去掉0*/
// function num_1_click() {
//     var num = document.getElementById("num");
//     var n = num.value;
//     // if (n==="0"){
//     //     n="1";
//     // }else {
//     //     n=n+"1";
//     // }
//     n=n+"1";
//     document.getElementById("num").value = n*1;
// }
// //2位置
// function num_2_click() {
//     var num = document.getElementById("num");
//     var n = num.value;
//     if (n==="0"){
//         n="2";
//     }else {
//         n=n+"2";
//     }
//
//     document.getElementById("num").value =n ;
// }
// //3位置
// function num_3_click() {
//     var num = document.getElementById("num");
//     var n = num.value;
//     if (n==="0"){
//         n="3";
//     }else {
//         n=n+"3";
//     }
//     document.getElementById("num").value =n ;
// }

