$(function(){
    let menuVisible = false; 
    
    let menuOpen = $("#menuOpen");
    let menuClose = $("#menuClose"); 
    
    let header = $("header");
    let main = $("main");
    let footer = $("footer"); 
    
    menuOpen.on("click", openMenu);

    menuClose.on("click", closeMenu);
    header.on("click", closeMenu); 
    main.on("click", closeMenu);
    
    function openMenu(){
        if (!menuVisible) {
            $("#mobileMenu").animate({left:"0vw"}, "fast", function(){
                menuVisible = true; 
            });
        }
    }
    
    function closeMenu(){
        if (menuVisible) {
            $("#mobileMenu").animate({left:"-50vw"}, "fast", function(){
                menuVisible = false; 
            });
        }
    }
});