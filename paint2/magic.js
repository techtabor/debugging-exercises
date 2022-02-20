const paint = (function () {

	//get the stuff
	const canvas = document.getElementById("canvas");

	const context = canvas.getContext("2d");

	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;

	const clear = document.getElementById("clear");
	const erase = document.getElementById("erase");
	const shade = document.getElementsByClassName("shade");

	const inc = document.getElementById("inc");
	const dec = document.getElementById("dec");

	const maxSize = 60;
	const minSize = 5;

	let size = 20;
	const current = document.getElementById("bsize");
	const save = document.getElementById("save");

	//increase size
	function increase() {

		size += 5;

		if (size > maxSize)
			size = maxSize;
		else if (size < minSize)
			size = minSize;

		current.innerHTML = size;
	}
	inc.addEventListener("click", increase);

	//decrease size
	function decrease() {

		size -= 5;

		if (size > maxSize)
			size = maxSize;
		else if (size < minSize)
			size = minSize;

		current.innerHTML = size;
	}
	dec.addEventListener("click", decrease);

	//change color
	function colorChange(e) {
		const color = e.target;
		context.fillStyle = color.style.backgroundColor;
		context.strokeStyle = color.style.backgroundColor;

		const active = document.getElementsByClassName("active")[0];
		active.className = 'shade';

		color.className += ' active';
	}

	for (let i = 0; i < shade.length; i++) {
		shade[i].addEventListener("click", colorChange);
	}
	let press = false;

	//draw line
	function drawLine(e) {

		if (press) {
			context.lineTo(e.clientX, e.clientY);
			context.lineWidth = 2 * size;
			context.stroke();

			context.beginPath();

			context.arc(e.clientX, e.clientY, size, 0, 2 * Math.PI);

			context.fill();

			context.beginPath();

			context.moveTo(e.clientX, e.clientY);
		}
	}

	function up(e) {
		press = false;
		context.beginPath();
	}

	function down(e) {
		drawLine(e);
	}

	canvas.addEventListener('mouseup', up);
	canvas.addEventListener('mousedown', down);
	canvas.addEventListener('mousemove', drawLine);

	//erase
	function erasescr() {

		context.fillStyle = '#fff';
		context.strokeStyle = '#fff';
	}
	erase.addEventListener("click", erasescr);

	//clear
	function clearscr() {
		context.clearRect(0, 0, window.innerHeight, window.innerWidth);
	}
	clear.addEventListener("click", clearscr);

	//save
	function saveFile(e) {
		e.target.href = canvas.toDataURL();
		e.target.download = "drawing.png";
	}

	save.addEventListener("click", saveFile);
})();

