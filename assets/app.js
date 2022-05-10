$(function(){

	$("#nav-toggle").on("click", function(event){
        event.preventDefault();
        navToggle();
    });

	function navToggle() {
        $("#nav").toggleClass("active");
        $("#nav-toggle").toggleClass("active");
        $("#nav-toggle").toggleClass("inactive");
    }

	$("[data-scroll]").on("click", function(event){
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top-50;

        $("html, body").animate({
            scrollTop: blockOffset
        });

    });

});