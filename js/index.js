// navigation function 
function OpenModal(){
    document.getElementById("Mob-Nav").style.display="flex";
}

function CloseModal(){
    document.getElementById("Mob-Nav").style.display="none ";
}


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// AOS.init();