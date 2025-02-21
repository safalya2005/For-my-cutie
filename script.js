document.getElementById('noButton').addEventListener('mouseover', function() {
    const x = Math.random() * (window.innerWidth - this.offsetWidth);
    const y = Math.random() * (window.innerHeight - this.offsetHeight);
    this.style.position = 'absolute';
    this.style.left = ${x}px;
    this.style.top = ${y}px;
});

document.getElementById('yesButton').addEventListener('click', function() {
    alert('Thank you for forgiving me! I promise to do better. ❤');
});