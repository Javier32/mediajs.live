const audio = document.getElementById("audio-player");
const playPauseButton = document.getElementById("play-pause-button");
const volumeSlider = document.getElementById("volume-slider");
const currentTime = document.getElementById("current-time");
const duration = document.getElementById("duration");

function formatTime(seconds) {
	const minutes = Math.floor(seconds / 60);
	const remainingSeconds = Math.floor(seconds % 60);
	return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

function playPause() {
	if (audio.paused) {
		audio.play();
		playPauseButton.innerHTML = "<img src='pause.svg' alt='Pause'>";
	} else {
		audio.pause();
		playPauseButton.innerHTML = "<img src='play.svg' alt='Play'>";
	}
}

function updateVolume() {
	audio.volume = volumeSlider.value;
}

function updateTime() {
	currentTime.innerHTML = formatTime(audio.currentTime);
	duration.innerHTML = formatTime(audio.duration);
}

playPauseButton.addEventListener("click", playPause);
volumeSlider.addEventListener("input", updateVolume);
audio.addEventListener("timeupdate", updateTime);
