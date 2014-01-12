window.GoL = function(context) {
	var ctx = context;
	var GoL_array = new Array();
	var next_GoL_array = new Array();
	var width;
	var height;
	var steps = 100000;
	var stop;
	var timeout;
	
	this.create_GoL = function(w,h,tout,alive,config) {
		stop = false;
		timeout = tout;
		width = w;
		height = h;
		ctx.fillStyle = '#FFF';
		
		ctx.fillRect(0,0,width,height);
		for (var x=0; x < Math.floor(width/4); x++) {
			GoL_array[x] = new Array();
			next_GoL_array[x] = new Array();
			for (var y=0; y < Math.floor(height/4); y++) {
				GoL_array[x][y] = 0;
				next_GoL_array[x][y] = 0;
			}			
		}
		
		
		
		var grid = create_grid();
		
		switch (config) {
			case "Random":	
				var rand_alive = random_alive(alive);
				break;
			case "Glider":
				set_alive(Math.floor(width/8)+1,Math.floor(height/8));
				set_alive(Math.floor(width/8)+1,Math.floor(height/8)+1);
				set_alive(Math.floor(width/8),Math.floor(height/8)+1);
				set_alive(Math.floor(width/8)-1,Math.floor(height/8)+1);
				set_alive(Math.floor(width/8),Math.floor(height/8)-1);
				show_state();
				break;
			case "LWSS":
				set_alive(Math.floor(width/8)+1,Math.floor(height/8));
				set_alive(Math.floor(width/8)+2,Math.floor(height/8));
				set_alive(Math.floor(width/8)+1,Math.floor(height/8)+1);
				set_alive(Math.floor(width/8),Math.floor(height/8)+1);
				set_alive(Math.floor(width/8)-1,Math.floor(height/8)+1);
				set_alive(Math.floor(width/8)-2,Math.floor(height/8)+1);
				set_alive(Math.floor(width/8),Math.floor(height/8)+2);
				set_alive(Math.floor(width/8)-1,Math.floor(height/8)+2);
				set_alive(Math.floor(width/8)-1,Math.floor(height/8));
				set_alive(Math.floor(width/8)-2,Math.floor(height/8));
				set_alive(Math.floor(width/8),Math.floor(height/8)-1);
				set_alive(Math.floor(width/8)+1,Math.floor(height/8)-1);
				break;
			case "Pulsar":
				for (var i = -4; i <= 4; i++) {
					if (i <= -2 || i >= 2) {
						set_alive(Math.floor(width/8)+i,Math.floor(height/8)-1);
						set_alive(Math.floor(width/8)+i,Math.floor(height/8)+1);
						set_alive(Math.floor(width/8)+1,Math.floor(height/8)+i);
						set_alive(Math.floor(width/8)-1,Math.floor(height/8)+i);
						
						set_alive(Math.floor(width/8)+i,Math.floor(height/8)-6);
						set_alive(Math.floor(width/8)+i,Math.floor(height/8)+6);
						set_alive(Math.floor(width/8)+6,Math.floor(height/8)+i);
						set_alive(Math.floor(width/8)-6,Math.floor(height/8)+i);
					}
				}				
				break;	
			case "Gun": 
				set_alive(Math.floor(width/8)-13,Math.floor(height/8));
				set_alive(Math.floor(width/8)-14,Math.floor(height/8));
				set_alive(Math.floor(width/8)-13,Math.floor(height/8)-1);
				set_alive(Math.floor(width/8)-14,Math.floor(height/8)-1);
				
				
				set_alive(Math.floor(width/8)-4,Math.floor(height/8)-1);
				set_alive(Math.floor(width/8)-4,Math.floor(height/8));
				set_alive(Math.floor(width/8)-4,Math.floor(height/8)+1);
				set_alive(Math.floor(width/8)-3,Math.floor(height/8)-2);
				set_alive(Math.floor(width/8)-3,Math.floor(height/8)+2);
				set_alive(Math.floor(width/8)-2,Math.floor(height/8)-3);
				set_alive(Math.floor(width/8)-2,Math.floor(height/8)+3);
				set_alive(Math.floor(width/8)-1,Math.floor(height/8)-3);
				set_alive(Math.floor(width/8)-1,Math.floor(height/8)+3);
				
				set_alive(Math.floor(width/8),Math.floor(height/8));
				set_alive(Math.floor(width/8)+1,Math.floor(height/8)-2);
				set_alive(Math.floor(width/8)+1,Math.floor(height/8)+2);
				set_alive(Math.floor(width/8)+2,Math.floor(height/8)-1);
				set_alive(Math.floor(width/8)+2,Math.floor(height/8));
				set_alive(Math.floor(width/8)+2,Math.floor(height/8)+1);
				set_alive(Math.floor(width/8)+3,Math.floor(height/8));
				
				
				
				set_alive(Math.floor(width/8)+6,Math.floor(height/8)-1);
				set_alive(Math.floor(width/8)+6,Math.floor(height/8)-2);
				set_alive(Math.floor(width/8)+6,Math.floor(height/8)-3);
				set_alive(Math.floor(width/8)+7,Math.floor(height/8)-1);
				set_alive(Math.floor(width/8)+7,Math.floor(height/8)-2);
				set_alive(Math.floor(width/8)+7,Math.floor(height/8)-3);
				
				set_alive(Math.floor(width/8)+8,Math.floor(height/8));
				set_alive(Math.floor(width/8)+8,Math.floor(height/8)-4);
				set_alive(Math.floor(width/8)+10,Math.floor(height/8));
				set_alive(Math.floor(width/8)+10,Math.floor(height/8)+1);
				set_alive(Math.floor(width/8)+10,Math.floor(height/8)-4);
				set_alive(Math.floor(width/8)+10,Math.floor(height/8)-5);
				
				
				
				set_alive(Math.floor(width/8)+20,Math.floor(height/8)-3);
				set_alive(Math.floor(width/8)+20,Math.floor(height/8)-2);
				set_alive(Math.floor(width/8)+21,Math.floor(height/8)-3);
				set_alive(Math.floor(width/8)+21,Math.floor(height/8)-2);			
				
				break;
			case "Stripes": 
				for (var i = 0; i < Math.floor(width/4); i=i+2) {
					for (var j = 0; j < Math.floor(height/4); j++) {
						set_alive(i,j);
					}
				}			
				break;
			case "Image":
				
				var img = new Image();
				img.onload = function() {
				   document.getElementById("image").getContext("2d").drawImage(img,0,0, Math.floor(width/4), Math.floor(height/4));
				   
				   var imageData = document.getElementById("image").getContext("2d").getImageData(0, 0,  Math.floor(width/4), Math.floor(height/4));
				
					for (var x = 0; x < Math.floor(width/4); x++) {
						for (var y = 0; y < Math.floor(height/4); y++) {
							var lightness = 0;
							var index = (y*imageData.width + x) * 4;
							var red = parseInt(imageData.data[index]);
							var green = parseInt(imageData.data[index + 1]);
							var blue = parseInt(imageData.data[index + 2]);
							lightness = parseInt((0.2126*red) + (0.7152*green) + (0.0722*blue));
							if (lightness <= 127) {
								set_alive(x,y);			
							}
							
						}
					}
				
				 };
				img.src = document.getElementById("img_image").src;				
		}

		
		var i = 0;
		setTimeout(function () {
			get_next_step(1);
		}, timeout);
		
	}
	

	
	this.set_stop = function()  {
		stop = true;
	}
	
	function create_grid() {
		ctx.strokeStyle = '#eee';
		ctx.lineWidth = 1;
		ctx.beginPath();
		//vertical
		for(var i = 0; i <= Math.floor(width/4); i++) {
			ctx.moveTo(i*4,0);
			ctx.lineTo(i*4,500);
			ctx.stroke();
		}
		//horizontal
		for(var i = 0; i <= Math.floor(width/4); i++) {
			ctx.moveTo(0,i*4);
			ctx.lineTo(1000,i*4);
			ctx.stroke();
		}
		ctx.closePath();
	}
	
	function random_alive(nr) {
		var i = 0;
		while (i < nr) {
			var xrand = Math.floor(Math.random() * (Math.floor(width/4)));
			var yrand = Math.floor(Math.random() * (Math.floor(height/4)));
			if (GoL_array[xrand][yrand] == 0) {
				set_alive(xrand,yrand);
				i++;
			}
		}
	}
	
	function set_alive(x,y) {
		ctx.fillStyle = '#000000';
		GoL_array[x][y] = 1;
		ctx.fillRect(x*4+1,y*4+1,2,2);
	}
	
	function set_dead(x,y) {
		ctx.fillStyle = '#FFFFFF';
		GoL_array[x][y] = 0;
		ctx.fillRect(x*4+1,y*4+1,2,2);
	}
	
	
	function get_next_step(step) {
		if (stop === false && step < steps)	{
			for (var x=0; x < Math.floor(width/4); x++) {
				for (var y=0; y < Math.floor(height/4); y++) {
					var c_dead = 0;
					
					for (var sx=x-1; sx<=x+1; sx++) {
						for (var sy=y-1; sy<=y+1; sy++) {
							if (sx == -1 || sx == Math.floor(width/4) || sy == -1 || sy == Math.floor(height/4))  {
								c_dead++;
							}else {
								if (GoL_array[sx][sy] == 0) { c_dead++; }								
							}
						}
					}
					
					state = GoL_array[x][y];
					switch (state) {
						case 0: // dead
							c_dead--;
							if (c_dead == 5) { // exactly 3 alive
								next_GoL_array[x][y] = 1;
							}
							break;
						case 1: // alive
							if (c_dead >= 7 || c_dead < 5) { // <2 alive or >3
								next_GoL_array[x][y] = 0;
							}
							if (c_dead == 5 || c_dead == 6) {
								next_GoL_array[x][y] = 1;
							}
							break;						
					}
	
				}
				
			}
			
			for (var x=0; x < Math.floor(width/4); x++) {
				for (var y=0; y < Math.floor(height/4); y++) {
					GoL_array[x][y] = next_GoL_array[x][y];
				}
			}	
			
			show_state();
			step++;
			setTimeout(function () {
				get_next_step(step);
			}, timeout);
		}	
	}
	
	function show_state() {
		var alive = 0;
		for (var x=0; x < Math.floor(width/4); x++) {
			for (var y=0; y < Math.floor(height/4); y++) {
				if (GoL_array[x][y] == 0) {
					set_dead(x,y);
				} else {
					set_alive(x,y);
					alive++;
				}
			}
		}
	}
}