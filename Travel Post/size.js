function big(){
    whole=document.getElementsByClassName("whole");
    text=document.getElementsByTagName("p");
    list=document.getElementsByTagName("li");
    title=document.getElementsByTagName("h2");
    text2=document.getElementsByTagName("span");
    footer=document.getElementsByClassName("f_aboutus");
    for (var i = 0; i < whole.length; i++) {
        text=document.getElementsByTagName("p");
        for (var i = 0; i < text.length; i++) {
            text[i].style.fontSize = "40px";
        }
        list=document.getElementsByTagName("li");
        for (var i = 0; i < list.length; i++) {
            list[i].style.fontSize = "40px";
        }
    }

    // for (var i = 0; i < text.length; i++) {
    //     text[i].style.fontSize = "40px";
    // }

    // for (var i = 0; i < list.length; i++) {
    //     list[i].style.fontSize = "40px";
    // }

    // for (var i = 0; i < title.length; i++) {
    //     title[i].style.fontSize = "40px";
    // }

    // for (var i = 0; i < footer.length; i++) {
    //     footer[i].style.fontSize = "20px";
    // }
    // for (var i = 0; i < text2.length; i++) {
    //     text2[i].style.fontSize = "30px";
    // }
}