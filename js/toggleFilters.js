$(function(){
    let showFilters = false; 
    
    $("#toggleFilters").on("click", function(){
        let windowWidth = $(window).width;

        if (!showFilters) {
            $("#filters").css("display", "block");
            showFilters = true;
        } else {
            $("#filters").css("display", "none");
            showFilters = false; 
        }
    });
});