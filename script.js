document
  .getElementById("container")
  .addEventListener("click", function (event) {
    const numOfWindow = 4; //more 'numOfWindow' more pop-ups
    for (i = 0; i < numOfWindow; i++) {
      var popWindow = window.open(
        "you-are-an-idiot.html",
        "_blank",
        "width=500,height=400"
      );
      popWindow.moveTo(
        window.innerWidth * Math.random(),
        window.innerHeight * Math.random()
      );
    }
  });
