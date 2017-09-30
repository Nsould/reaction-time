var start = new Date().getTime();

function makeShapeAppear() {

    var top = Math.random() * 200;

    var left = Math.random() * 400;

    var randomBool = Math.random() >= 0.5

    var radius = 0;

    if (randomBool == true) {

      radius = 0;

    } else {

      radius = 50;

    }

    function randomColor() {

        var letters = "0123456789ABCDEF".split('');

        var color = "#";

        for (var i = 0; i < 6; i++) {

          //color += ..(string).. is the same as color = color + ..(string)..
          color += letters[Math.floor(Math.random() * 16)];

      }

      return(color);

    }

      var height = ((Math.random() * 250) + 20);

      var width = ((Math.random() * 300) + 20);

      document.getElementById("shape").style.top = top + "px";

      document.getElementById("shape").style.left = left + "px";

      document.getElementById("shape").style.borderRadius = radius + "%";

      document.getElementById("shape").style.display = "block";

      document.getElementById("shape").style.backgroundColor = randomColor();

      document.getElementById("shape").style.height = height + "px";

      document.getElementById("shape").style.width = width + "px";

      start = new Date().getTime();

  }

function appearAfterDelay () {

    setTimeout(makeShapeAppear, Math.random() * 2000);

}

appearAfterDelay();

document.getElementById("shape").onclick = function () {

    document.getElementById("shape").style.display = "none";

    var end = new Date().getTime();

    var timeTaken = (end - start) / 1000;

    document.getElementById("timeTaken").innerHTML = timeTaken + "seconds";

    appearAfterDelay();

}
