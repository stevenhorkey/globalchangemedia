$(document).ready(function () {
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if (isChrome) {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    }
});

function navigateToURL( whichURL )
{
    window.location.href = whichURL;
}

function playVideo( whichVid )
{
    $( "html, body" ).animate( {scrollTop: 0}, 1000 );
    $( '#VP10' )[0].playVideoFromJavaScript( whichVid );
}

function clean( user, domain, subject )
{
    var subjectLine = (subject != undefined) ? "?subject=" + subject : "";
    window.location = "mailto:" + user + "@" + domain + subjectLine;
}

function loadPrettyPhoto()
{
    $( document ).ready( function ()
    {
        $( "a[rel^='prettyPhoto']" ).prettyPhoto();
    } );
}

/**
 * @param element
 */
function widowCleaner( element )
{
    $( element ).each( function ()
    {
        var wordArray = $( this ).text().split( " " );
        wordArray[wordArray.length - 2] += "&nbsp;" + wordArray[wordArray.length - 1];
        wordArray.pop();
        $( this ).html( wordArray.join( " " ) );
    } );
}
$(document ).ready( function(){
    //jackbox
    //$(".jackbox[data-group]").jackBox("init", { preloadGraphics: false });
    //jquery UI
//    $(".accordion" ).accordion({
//        collapsible: true,
//        header: "h2",
//        heightStyle: "content",
//        active: false
//    });
})

function initPartialViewSlider()
{
    var slider = new MasterSlider();

    slider.control('arrows');
    slider.control('circletimer' , {color:"#FFFFFF" , stroke:9});

    slider.setup('masterslider' , {
        width:1600,
        height:400,
        space:0,
        speed:5,
        loop:true,
        layout:'fullwidth',
        autoplay: true
    });
}