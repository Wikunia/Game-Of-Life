var ctx = document.getElementById('canvas').getContext("2d");
var gameoflife = new GoL(ctx);

var id_config = document.getElementById('config');
id_config.onchange = function() {
	if (id_config.value == "Image") {
		document.getElementById("files").style.display = "inline";
	} else {
		document.getElementById("files").style.display = "none";
	}
}

function start() {
	var width = document.getElementById("canvas").offsetWidth;
	var height = document.getElementById("canvas").offsetHeight;
	
	
	var timeout = document.getElementById("timeout").value;
	var alive = document.getElementById("alive").value;
	var config = document.getElementById("config").value;
	if (timeout > 0 && ((config == "Random" && alive > 0 && alive <= Math.floor(width/4)*Math.floor(height/4)) || config !== "Random"))  {
		gameoflife.create_GoL(width,height,timeout,alive,config);
		document.getElementById("user_input").style.display = "none";
		document.getElementById("stop").style.display = "inline";	
	} else {
		alert("Both (timeout and alive) must be > 0 and alive must be <= "+Math.floor(width/4)*Math.floor(height/4));
	}
}
function stop() {
	gameoflife.set_stop();
	document.getElementById("user_input").style.display = "inline";
	document.getElementById("stop").style.display = "none";
}

 /* Save diagram */
	function save() {
		var canvas = document.getElementById("canvas");
		canvas.toBlob(function(blob) {
			saveAs(blob, "GoL.png");
		});
	}; 

