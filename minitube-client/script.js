const videoGrid = document.getElementById('videoGrid');
const searchInput = document.getElementById('searchInput');

async function fetchVideos() {
  const res = await fetch('http://localhost:3000/videos');
  const videos = await res.json();
  displayVideos(videos);
}

function displayVideos(videos) {
  videoGrid.innerHTML = '';
  videos.forEach(video => {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.innerHTML = `
      <iframe src="${video.url}" allowfullscreen></iframe>
      <h3>${video.title}</h3>
      <p>${video.description}</p>
      <div class="video-actions">
        <button onclick="alert('Liked!')">👍 Like</button>
        <button onclick="alert('Link copied!')">🔗 Share</button>
        <button onclick="prompt('Leave a comment:')">💬 Comment</button>
        <button onclick="prompt('Give feedback:')">📝 Feedback</button>
      </div>
    `;
    videoGrid.appendChild(card);
  });
}

searchInput.addEventListener('input', async (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const res = await fetch('http://localhost:3000/videos');
  const videos = await res.json();
  const filtered = videos.filter(v => v.title.toLowerCase().includes(searchTerm));
  displayVideos(filtered);
});

fetchVideos();
