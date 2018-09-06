window.onload = () => {
    const button = document.getElementById('play');
    setTimeout(()=> {
        button.classList.add('fadeIn');
        button.style.opacity = '1';
        button.style.cursor = 'pointer';
        button.classList.add('pointer-animation');
    }, 1000);

    document.getElementById('play').addEventListener('click', () => {
        document.getElementById('video-container').classList.add('video-container');
        document.getElementById('video-container-closer').style.display = 'block';
    });
    document.getElementById('video-container-closer').addEventListener('click', () => {
        document.getElementById('video-container').classList.remove('video-container');
        document.getElementById('video-container-closer').style.display = 'none';
    });

}