$(function(){
    $('#header').load('shared/header.html');
    $('#content').load('shared/content.html');
    $('#footer').load('shared/footer.html', function() {
        document.getElementById("navigationButton")?.addEventListener("click", function(){
            const navbar = document.getElementById("navigation").classList.toggle('show');
        });
    });
});