function winfunc(){
    // Get the button:
    let mybutton = document.getElementById("Top");

    // Appear and Disappear of Button
    window.onscroll = scrollFunction;
    function scrollFunction() {
        if(window.scrollY===0){
            mybutton.style.display = "none";
        }else{mybutton.style.display = "block";}
    }

    // Jump to Top
    mybutton.onclick=topFunction;
        function topFunction() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }
}
    
window.onload=winfunc;