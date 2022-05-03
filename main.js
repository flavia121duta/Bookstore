function playSound(sound) {
    let song = document.getElementById("sound");
    song.volume = .25; // setting the volume to 25% because the sound is loud
    if (song.paused)  // if song is paused
        song.play();
    else
        song.pause();
}
