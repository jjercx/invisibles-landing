$(document).ready(function(){
    intranet = document.getElementById("intranet");
    intranet.addEventListener("click",function(){
        var modal = document.getElementById('id01');

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close-login")[0];
            
        modal.style.display = "block";        

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    })
})