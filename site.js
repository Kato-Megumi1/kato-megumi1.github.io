const video = document.getElementById('demo-video');
const playButton = document.getElementById('video-play');
const shell = video.closest('.video-shell');
playButton.addEventListener('click', async () => {
  shell.classList.add('is-playing');
  try { await video.play(); } catch { shell.classList.remove('is-playing'); }
});
video.addEventListener('play', () => shell.classList.add('is-playing'));
video.addEventListener('ended', () => shell.classList.remove('is-playing'));
