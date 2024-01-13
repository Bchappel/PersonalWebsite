    function scrollToBox(element, offset) {
        var destination = $(element).offset().top - (offset ? offset : 120);
        
        // Disable scrolling
        $('html, body').css({
        height: '100%'
        });
        
        // Gradually change the background color during the scroll animation
        $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination, backgroundColor: '#7a7a7a' }, 1500, function() {
        // Enable scrolling
        $('html, body').css({
            overflow: 'auto',
            height: 'auto'
        });
        });
    }
    
    // Initialize a boolean variable to false
    var hasScrolled = false;
    
    // Initialize a variable to track the last scroll position
    var lastScrollTop = 0;
    
    // Call the scrollToBox function when the user scrolls
    $(window).on('scroll', function() {
        // Get the current scroll position
        var st = $(this).scrollTop();
        
        // Check if the user is scrolling down from the top of the page and if the scroll animation has not occurred yet
        if (st > lastScrollTop && lastScrollTop === 0 && !hasScrolled) {
        // Set the boolean variable to true to indicate that the scroll animation has occurred
        hasScrolled = true;
        scrollToBox('.container', -1080);
        }
        
        // Check if the user is scrolling up
        if (st < lastScrollTop) {
        // Gradually change the background color back to the original color
        $("html:not(:animated),body:not(:animated)").animate({ backgroundColor: '#eaeaea' }, 1500);
        }
        

        if (st === 0) {
            // Reset the boolean variable to false to allow the scroll animation to occur again
            hasScrolled = false;
        }

        // Update the last scroll position
        lastScrollTop = st;
    });