let flag=true;
function show_menu() {
    let menu1 = document.getElementById("menu1");
    if (flag){
        menu1.style.display ="block";
        flag=false;
    }else {
        menu1.style.display ="none";
        flag = true;
    }

}

/*鼠标离开就折叠起来*/
function show_menu1() {
    let menu1 = document.getElementById("menu1");
    if (flag){
        menu1.style.display ="block";
        flag=false;
    }else {
        menu1.style.display ="none";
        flag = true;
    }
}