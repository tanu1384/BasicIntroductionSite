document.addEventListener('DOMContentLoaded', function() {
    var imgElement = document.getElementById('seasonImage');
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth(); // 0 for January, 1 for February, ..., 11 for December
    
    // Define image paths for each season (assuming images are named appropriately in your 'images' folder)
    var images = [
        'summer.png',
        'monsoon.jpg',
        'autumn.jpg',
        'winter.png',
        'spring.jpg'
    ];
    
    // Update image source based on current month
    if (currentMonth >= 3 && currentMonth <= 5) {
        // Spring (April to June)
        imgElement.src = 'images/' + images[4];
    } else if (currentMonth >= 6 && currentMonth <= 8) {
        // Summer (July to September)
        imgElement.src = 'images/' + images[0];
    } else if (currentMonth >= 9 && currentMonth <= 11) {
        // Monsoon (October to December)
        imgElement.src = 'images/' + images[1];
    } else if (currentMonth >= 0 && currentMonth <= 2) {
        // Winter (January to March)
        imgElement.src = 'images/' + images[3];
    } else {
        // Autumn (not strictly defined in India, but used for months in between)
        imgElement.src = 'images/' + images[2];
    }
});
