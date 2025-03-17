const videos = [
    "x.mp4",
    "i.mp4",
    "z.mp4"
  ];
 const randInd = Math.floor(Math.random() * videos.length);
 const x = videos[randInd];
document.getElementById("x").src = x;
