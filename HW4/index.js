const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');
    let isDrawing = false;
    let currentColor = 'black';

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    function startDrawing(event) {
      isDrawing = true;
      context.beginPath();
      context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    }

    function draw(event) {
      if (!isDrawing) return;
      context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
      context.strokeStyle = currentColor;
      context.lineWidth = 5;
      context.lineCap = 'round';
      context.lineJoin = 'round';
      context.stroke();
    }

    function stopDrawing() {
      isDrawing = false;
    }

    function changeColor(color) {
      currentColor = color;
    }

    function clearCanvas() {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }