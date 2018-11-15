$( document ).ready(function() {

    /* Change image in the footer */
    
    function displayNextImage() {
        x = (x === images.length - 1) ? 0 : x + 1;
        document.getElementById("img").src = images[x];
    }

    function displayPreviousImage() {
        x = (x <= 0) ? images.length - 1 : x - 1;
        document.getElementById("img").src = images[x];
    }

    function startTimer() {
        setInterval(displayNextImage, 2000);
    }

    var images = [], x = -1;
    images[0] = "images/heart.ico";
    images[1] = "images/burger.png";
    images[2] = "images/music.png";
    images[3] = "images/banana.png";
    images[4] = "images/tea.png";
    images[5] = "images/pasta.png";
    images[6] = "images/apple.png";
    
    startTimer();

//var $container = $('#portfolioGrid');
$('#portfolioGrid').imagesLoaded(function(){
    var wW = window.innerWidth;
    var thirdW = (wW - 116) / 3;
    $('#sectionPortfolioDesign .sectionContent .portfolioItem').css({width: thirdW});
    
    $('#portfolioGrid').masonry({
        itemSelector: '.portfolioItem',
        columnWidth: thirdW
    });
 });
 
});