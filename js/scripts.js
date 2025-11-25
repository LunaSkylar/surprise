/*!
* Start Bootstrap - Bare v5.0.9 (https://startbootstrap.com/template/bare)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('background-music');
    const playBtn = document.getElementById('play-music-btn');

    // 1. Initially attempt to play music. This will often be blocked by the browser.
    // We use a promise-based approach to catch the rejection error.
    music.play()
        .then(() => {
            // Autoplay succeeded, hide the button
            playBtn.style.display = 'none';
        })
        .catch(error => {
            // Autoplay failed (user interaction required), show the play button
            playBtn.style.display = 'block';
        });

    // 2. Add a click handler to the button
    playBtn.addEventListener('click', () => {
        music.play();
        // Hide the button once music starts
        playBtn.style.display = 'none';
    });
});