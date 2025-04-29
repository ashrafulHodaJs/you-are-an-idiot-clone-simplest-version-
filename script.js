document.getElementById("container").addEventListener("click", function () {
  const audio = document.getElementById("audio");
  audio.play();

  // Start true popup madness
  setInterval(() => {
    const popupWidth = 400;
    const popupHeight = 300;

    const x = Math.floor(Math.random() * (screen.availWidth - popupWidth));
    const y = Math.floor(Math.random() * (screen.availHeight - popupHeight));

    const w = window.open(
      "you-are-an-idiot.html",
      "_blank",
      `width=${popupWidth},height=${popupHeight},left=${x},top=${y},toolbar=0,location=0,menubar=0,status=0`
    );

  
    if (w) {
      w.moveTo(x, y);
    }
  }, 500);

  // Shaking effect lol
  setInterval(() => {
    const x = Math.floor(Math.random() * 10) - 5;
    const y = Math.floor(Math.random() * 10) - 5;
    window.moveBy(x, y);
  }, 100);
});

