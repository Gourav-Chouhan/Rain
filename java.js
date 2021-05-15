let cvs = document.getElementById("cvs");
let ctx = cvs.getContext("2d");
let game = setInterval(draw, 1000/120);
let gourav = [];
let i = 0;
//draw function 

function draw() {
	drawCanvas();
	rain.draw();
    rain.fall();
     gourav[i] = new Rain(Math.random()*cvs.width, -20, Math.random()*2 + 5, Math.random()*12 + 10, 0, 0, Math.random()/4, "black");
   i++;
    for (let i = 0; i < gourav.length; i++) {
          gourav[i].draw();
          gourav[i].fall();
         

    }
   }

//function starts here

function drawCanvas() {
	ctx.fillStyle = "lightyellow";
	ctx.fillRect(0, 0, cvs.width, cvs.height);
}
/*let kutta = [];
function barish() {
	console.log("dhe")
	if (rain.y > cvs.height) {
		kutta.push(new Rain(x, y, w, h, vx, vy, g, color));
		console.log("dhas")
	}
	
}*/

/*function kameena() {
	
}*/

//function ends here

//Classes

class Rain {
	constructor(x, y, w, h, vx, vy, g, color) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.vx = vx;
		this.vy = vy;
		this.g = g;
		this.color = color;
        
	};
	
	draw() {
		ctx.fillStyle = this.color;

        
	}
	;
	fall() {
        //ctx.translate(this.x, this.y);
    
    //    ctx.rotate(this.vy/this.vx);
		ctx.fillRect(this.x, this.y, this.w, this.h);
        //ctx.arc(this.x, this.y, 0.1, 0, Math.PI*2,false);
        //ctx.fill();
      //  ctx.rotate(-this.vy/this.vx);
        //ctx.translate(-this.x, -this.y);        
		this.vy += this.g;
		this.y += this.vy;
        this.x += this.vx;
	};
	
	 barish = function() { if (this.y > cvs.height) {
		console.log("dshfgk");
	};
						 }
}
	let rain = new Rain(Math.random()*cvs.width, Math.random()*cvs.height, Math.random()*2 + 2, Math.random()*9 + 9, 0, 0, 0.2, "black");


