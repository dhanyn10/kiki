/*
* javascript for minini framework
*/
(function(){
    //alert
    jalert = document.getElementsByClassName("alert-close");
    for(a = 0; a < jalert.length; a++)
    {
        jalert[a].addEventListener('click', function(){
            var classjalert = this.parentElement.className.split(" ");
            for(c = 0; c < classjalert.length; c++)
            {
                if(classjalert[c] == 'alert')
                {
                    this.parentElement.style.display = "none";
                }
            }
        });
    }
})();