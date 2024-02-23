document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById('navbar');
    var capabilitiesSection = document.getElementById('capabilities');
    var homeSection = document.getElementById('home');

    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;

        if (scrollPosition >= capabilitiesSection.offsetTop) {
            
            setNavbarStyles('rgba(255, 255, 255, 0.8)', 'black'); 
            updateNavbarLinksColor('black');
        } else {
            
            setNavbarStyles('rgba(14, 1, 1, 0.8)', 'white'); 
            updateNavbarLinksColor('white');
        }
    });

    
    function updateNavbarLinksColor(color) {
        var navbarLinks = document.querySelectorAll('.navbar a');

        
        navbarLinks.forEach(function (link) {
            link.style.color = color;
        });
    }

    
    function setNavbarStyles(backgroundColor, textColor) {
        navbar.style.backgroundColor = backgroundColor;
        navbar.style.color = textColor;
        document.getElementById('cannyworx-logo').style.color = textColor;
    }
});
