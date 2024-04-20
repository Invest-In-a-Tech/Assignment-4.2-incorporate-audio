// Get references to the buttons 
const startBtn = document.getElementById("playBtn");
const stopBtn = document.getElementById("stopBtn");
const audio = document.getElementById('background-sound');

// Function to enable the start button and disable the stop button
function startButton() {
  audio.play(); // Play background sound on button click
  startBtn.disabled = true; // Disable the play button
  stopBtn.disabled = false; // Enable the stop button
}

// Function to stop the sound and manage button states
function stopButton() {
  audio.pause(); // Pause the audio
  audio.currentTime = 0; // Reset the audio to the start
  stopBtn.disabled = true; // Disable the stop button
  startBtn.disabled = false; // Enable the play button
}

// Add click event listeners to the buttons
startBtn.addEventListener("click", startButton);
stopBtn.addEventListener("click", stopButton);