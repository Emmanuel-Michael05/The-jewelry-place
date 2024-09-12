// Function to open popup with enlarged image
function enlargeImage(imgSrc) {
    document.getElementById('popup').style.display = 'flex';
    document.getElementById('popup-img').src = imgSrc;
}

// Function to close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
