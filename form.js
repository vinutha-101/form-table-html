$(".title").css("font-size","xx-large")

$(document).ready(function() {
    $("#cancelBtn").click(function() {
        $("form")[0].reset();
        window.location.href = "index.html"; 
    });
});

