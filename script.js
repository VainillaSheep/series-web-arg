const playlists = [
  "PLy2K6w69TwAEc2T333UfSXYDPsuPZRTEB",
  "PLy2K6w69TwAFj1JF-A-JYfCujD48974Ms",
  "PLy2K6w69TwAF_ZPgzDUYGSzSYmYeW036l",
  "PLy2K6w69TwAHRAa0aZZJR4lU5sg-YaNmJ",
  "PLy2K6w69TwAEVi0kqLdpx1IvFI2lUVQNR",
  "PLy2K6w69TwAGGGwV3dI65j0ghCzPIPHRJ",
  "PLy2K6w69TwAHDedYdpSfxUKAW-UdVj-hs",
  "PLy2K6w69TwAFeEfiRzinZZwGttjgwMSwH",
  "PLy2K6w69TwAFi9iMPWHDqGyuW9qi5nwCE",
  "PLy2K6w69TwAHiz3NeuQrephx6NGNF6Wpt"
];

const btn = document.getElementById("start-btn");
const screen = document.getElementById("start-screen");
const player = document.getElementById("player");

function playlistRandom() {
  return playlists[Math.floor(Math.random() * playlists.length)];
}

function cargarPlaylist() {
  const playlistID = playlistRandom();
  player.src = `https://www.youtube.com/embed/videoseries?list=${playlistID}&autoplay=1&rel=0`;
}

btn.addEventListener("click", () => {
  screen.style.display = "none";
  player.style.display = "block";
  cargarPlaylist();
});

// rotación automática
setInterval(cargarPlaylist, 1000 * 60 * 25);
