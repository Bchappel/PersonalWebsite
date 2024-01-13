    
    var container = document.getElementById('grid-container');
    document.addEventListener('keydown', function(event) {
        var rect = container.getBoundingClientRect();
        if(event.key == 'ArrowUp') {
            container.style.top = rect.top - 10 + 'px';
        } else if(event.key == 'ArrowDown') {
            container.style.top = rect.top + 10 + 'px';
        } else if(event.key == 'ArrowLeft') {
            container.style.left = rect.left - 10 + 'px';
        } else if(event.key == 'ArrowRight') {
            container.style.left = rect.left + 10 + 'px';
        }
    });
