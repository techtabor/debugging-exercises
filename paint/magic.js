var x = (function(){

	//get the stuff
	var canvas = document.getElementById("canvas");

	var context = canvas.getContext("2d");

	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;

	var brush = document.getElementById("bsize");
	var clear = document.getElementById("clear");
	var erase = document.getElementById("erase");
	var shade = document.getElementsByClassName("shade");
	var n = shade.length;

	var inc = document.getElementById("inc");
	var dec = document.getElementById("dec");

	var maxSize = 60;
	var minSize = 5;

	var size = 20;
	var current = document.getElementById("bsize");
	var save = document.getElementById("save");

	//increase size
	function increase(){

		size += 5;

		if(size>maxSize)
			size = maxSize;
		else if(size<minSize)
			size = minSize;

		current.innerHTML = size;
	}
	inc.addEventListener("click",increase);
	
	//decrease size
	function decrease(){

		size -= 5;

		if(size>maxSize)
			size = maxSize;
		else if(size<minSize)
			size = minSize;
		
		current.innerHTML = size;	
	}
	dec.addEventListener("click",decrease);

	//change color
	function colorChange(e)
	{
		var color = e.target;
		context.fillStyle = color.style.backgroundColor;
		context.strokeStyle = color.style.backgroundColor;

		var active = document.getElementsByClassName("active")[0];
			console.log(color);
		active.className = 'shade';

		color.className += ' active';
	}

	for(var i =0;i<shade.length;i++)
	{
		shade[i].addEventListener("click",colorChange);
	}
	var press = false;

	//draw line
	function drawLine(e){
		
		if(press){
		context.lineTo(e.clientX,e.clientY);
		context.lineWidth = 2*size;
		context.stroke();

		context.beginPath();
		console.log(e.clientX);
		
		context.arc(e.clientX,e.clientY,0,size,2*Math.PI);

		context.fill();
		
		context.beginPath();
		console.log(e.clientX);
		
		context.moveTo(e.clientX,e.clientY);
		}
	}

	function up(e){
		press = false;
		context.beginPath();
	}

	function down(e){
		press = true;
		drawLine(e);
	}

	canvas.addEventListener('mouseup',up);
	canvas.addEventListener('mousedown',down);
	canvas.addEventListener('mousemove',drawLine);

	//erase
	function erasescr(){

		context.fillStyle = '#fff';
		context.strokeStyle = '#fff';
	}
	erase.addEventListener("click",erasescr);

	//clear
	function clearscr(){
		context.clearRect(0,0,window.innerHeight,window.innerWidth);
	}
	clear.addEventListener("click",clearscr);

	//save
	function saveFile(e){
		e.target.href = canvas.toDataURL();
		e.target.download = "drawing.png";
	}

	save.addEventListener("click",saveFile);
})();

