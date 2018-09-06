window.onload = () => {
    const button = document.getElementById('play');
    setTimeout(()=> {
        button.classList.add('fadeIn');
        button.style.opacity = '1';
        button.style.cursor = 'pointer';
        button.classList.add('pointer-animation');
    }, 2000);
}