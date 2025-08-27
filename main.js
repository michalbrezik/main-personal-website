function darkMode(){
    document.getElementById("dark-mode").onclick = function(){
        if(document.body.style.backgroundColor == "black"){
            document.body.style.backgroundColor = "white";
            document.body.style.color="black";
        }
        else{
            document.body.style.backgroundColor = "black";
            document.body.style.color= "white";
        }
    }
}
document.addEventListener(darkMode());