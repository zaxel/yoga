jQuery(function(){
    // Inline popups
    $('#inline-popups').magnificPopup({
        delegate: 'a',
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
        beforeOpen: function() {
            this.st.mainClass = this.st.el.attr('data-effect');
        }
        },
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });
});
  
$(document).ready(function(){
    // Optimalisation: Store the references outside the event handler:
    let $window = $(window);

    function checkWidth() {
        let windowsize = $window.width();
        let acordion = $( "#accordion" ).accordion();

        if (windowsize < 688) {
            //if the window is less than 688px wide then turn on jScrollPane..
            acordion;
        } 
        else if(acordion !== 0 && windowsize >= 688){
            $( "#accordion" ).accordion("destroy");
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
    
});