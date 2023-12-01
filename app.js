// app.js
document.addEventListener('DOMContentLoaded', function () {
    showPage('login-page');
});
console.log("hellloooo")

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');
    document.getElementById(pageId).style.display = 'flex';
}

function login(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email);

    // Implement your login logic here
    // For simplicity, let's assume email and password are both 'user'
    if (email === 'user' && password === 'user') {
        showPage('home-page');
        loadImages();
    } else {
        document.getElementById('error-message').textContent = 'Invalid credentials';
    }
}

function loadImages() {
    const imageGrid = document.getElementById('image-grid');

    
    const imageUrls = [
        
    ];

    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
        img.onload = function () {
            imageGrid.appendChild(img);
        };
    });
}
