function darkMode(){
    document.getElementById("dark-mode").onclick = function(){
        if(document.body.style.backgroundColor == "black")
        {
            //light mode
            document.body.style.backgroundColor = "white";
            document.body.style.color="black";
             var elements = document.getElementsByClassName('socialLinksDiv');
                for (var i in elements) 
                    {
                     if (elements.hasOwnProperty(i)) 
                         {
                          elements[i].className = 'socialLinksDivLightAlt';
                           }
                    }
        }
        else{
            //dark mode
            document.body.style.backgroundColor = "black";
            document.body.style.color= "white";
                var elements = document.getElementsByClassName('socialLinksDivLightAlt');
                for (var i in elements) 
                    {
                     if (elements.hasOwnProperty(i)) 
                         {
                          elements[i].className = 'socialLinksDiv';
                           }
                    }
        }
    }
}
document.addEventListener("event",darkMode());