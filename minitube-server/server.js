const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

const videos = [
  {
    id: 1,
    title: "Comedy Scene - Drama | Ranga Shankara",
    description: "Hilarious drama scene in Kannada.",
    url: "https://www.youtube.com/embed/G1eNwl-VkBw"
  },
  {
    id: 2,
    title: "Jaggesh Funny Interview",
    description: "Navarasa Nayaka Jaggesh’s comic timing.",
    url: "https://www.youtube.com/embed/SaWTymsOY5I"
  },
  {
    id: 3,
    title: "Rambo 2 | Sharan Comedy",
    description: "Funny scene from Rambo 2.",
    url: "https://www.youtube.com/embed/2RwQWNVqHcY"
  },
  {
    id: 4,
    title: "Komal Kumar in Govindaya Namaha",
    description: "Iconic comedy from Govindaya Namaha.",
    url: "https://www.youtube.com/embed/LD6pL9x_YAg"
  },
  {
    id: 5,
    title: "Kurigalu Saar Kurigalu",
    description: "Classic Kannada comedy scene.",
    url: "https://www.youtube.com/embed/NKnHbiOZk3g"
  },
  {
    id: 6,
    title: "Double Engine Comedy",
    description: "Funny moment from Double Engine.",
    url: "https://www.youtube.com/embed/mHvWDYrx3bw"
  },
  {
    id: 7,
    title: "Yogaraj Bhat Dialogues",
    description: "Sharp wit and timing.",
    url: "https://www.youtube.com/embed/De06LB2Qs6g"
  },
  {
    id: 8,
    title: "Gandu Endare Gandu",
    description: "Hilarious Ravichandran scene.",
    url: "https://www.youtube.com/embed/Od0Vh1zBEA4"
  },
  {
    id: 9,
    title: "Bullet Basya Comedy",
    description: "Sharan’s comic role.",
    url: "https://www.youtube.com/embed/VjqN6Fxr1dU"
  },
  {
    id: 10,
    title: "Victory 2 Clip",
    description: "Ultimate laugh from Victory 2.",
    url: "https://www.youtube.com/embed/xC5RmbTKscY"
  },
  {
    id: 11,
    title: "Best of Sharan Comedy",
    description: "Laugh riot scenes.",
    url: "https://www.youtube.com/embed/NH-3Fxli1_g"
  },
  {
    id: 12,
    title: "Comedy Khiladigalu Highlights",
    description: "TV comedy talent show.",
    url: "https://www.youtube.com/embed/VzBrPlXYiCo"
  },
  {
    id: 13,
    title: "Jaggesh on Stage",
    description: "Live Kannada comedy.",
    url: "https://www.youtube.com/embed/2onATZKpT7k"
  },
  {
    id: 14,
    title: "Chikkanna Comedy Collection",
    description: "Non-stop Kannada laughs.",
    url: "https://www.youtube.com/embed/V3Pnl6A5hXg"
  },
  {
    id: 15,
    title: "Neer Dose Comedy Clip",
    description: "Scene from Neer Dose.",
    url: "https://www.youtube.com/embed/ZcLqkB5wShg"
  },
  {
    id: 16,
    title: "Ravi Shankar Comedy Acting",
    description: "Rough-voiced villain turns funny.",
    url: "https://www.youtube.com/embed/XKvTpXJqzvA"
  },
  {
    id: 17,
    title: "Mimicry Dayanand Show",
    description: "Kannada mimicry artist live.",
    url: "https://www.youtube.com/embed/_ZNs5D8XGTQ"
  },
  {
    id: 18,
    title: "Crazy Star Ravichandran",
    description: "Funny interviews and clips.",
    url: "https://www.youtube.com/embed/tN1u_ZhR7IM"
  },
  {
    id: 19,
    title: "Harikathe with a Twist",
    description: "Modern spin on folk comedy.",
    url: "https://www.youtube.com/embed/1TtLtTkVEjU"
  },
  {
    id: 20,
    title: "Best Kannada Laughter Scenes",
    description: "Mixed comedy collection.",
    url: "https://www.youtube.com/embed/FtHgnptL9g8"
  }
];

app.get('/videos', (req, res) => {
  res.json(videos);
});

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
