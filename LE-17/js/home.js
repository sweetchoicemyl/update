function opennav(){

    var tik = document.getElementById("checkbox");  
    var text= document.getElementById("navid");
    var icon = document.getElementById("menu-icon");
    if(tik.checked == true){
        text.style.display = "none";
        text.style.transition = "all 2s";
        icon.className = "fa fa-bars";
    }
    if(tik.checked == false){

        text.style.transition = "all 2s";
        text.style.display = "block";
       icon.className = "fa fa-close";

    }    

}