// Heart styles config
const heartStyles = [
    { symbol: '❤️', glow: '#ff4d6d' },
    { symbol: '💖', glow: '#ff758f' },
    { symbol: '💕', glow: '#ff85a1' },
    { symbol: '💗', glow: '#f72585' },
    { symbol: '💙', glow: '#4cc9f0' },
    { symbol: '💜', glow: '#7209b7' }
];

// Initialize background hearts
function createBackgroundHearts() {
    const numberOfHearts = 15; // Mobile-friendly optimized count
    for (let i = 0; i < numberOfHearts; i++) {
        setTimeout(() => {
            const bgHeart = document.createElement('div');
            bgHeart.classList.add('bg-heart');
            
            const randomStyle = heartStyles[Math.floor(Math.random() * heartStyles.length)];
            bgHeart.innerText = randomStyle.symbol;
            bgHeart.style.filter = `drop-shadow(0 0 8px ${randomStyle.glow})`;
            
            bgHeart.style.left = Math.random() * 100 + 'vw';
            bgHeart.style.animationDuration = (Math.random() * 3 + 4) + 's'; 
            bgHeart.style.fontSize = (Math.random() * 8 + 18) + 'px'; 
            document.body.appendChild(bgHeart);
            
            setInterval(() => {
                bgHeart.style.left = Math.random() * 100 + 'vw';
            }, 7000);
        }, i * 400);
    }
}

createBackgroundHearts();

// Page navigation logic
function nextPage(pageNumber) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById('p' + pageNumber).classList.add('active');
    
    if(pageNumber === 4) {
        setInterval(createHeart, 250);
    }
}

// Running 'No' button logic
function moveNoButton(e) {
    if (e) e.preventDefault(); 
    
    const btnNo = document.getElementById('btn-no');
    const group = document.getElementById('container-action');
    
    // Strictly bounds inside the mobile card screen width and height
    const maxWidth = group.clientWidth - btnNo.clientWidth;
    
    const randomX = Math.floor(Math.random() * (maxWidth + 40)) - 20;
    const randomY = Math.floor(Math.random() * 140) - 110; 
    
    btnNo.style.left = randomX + 'px';
    btnNo.style.top = randomY + 'px';
}

// Final screen falling hearts logic
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('hearts-bg');
    
    const randomStyle = heartStyles[Math.floor(Math.random() * heartStyles.length)];
    heart.innerText = randomStyle.symbol;
    heart.style.filter = `drop-shadow(0 0 5px ${randomStyle.glow})`;
    
    heart.style.left = Math.random() * 90 + '%';
    heart.style.animationDuration = (Math.random() * 1 + 1.2) + 's';
    document.querySelector('.card').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 2000);
}
