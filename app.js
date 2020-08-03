let topTextInput, bottomTextInput, topTextSizeInput, bottomTextSizeInput, imageInput, generateBtn, Canvas, Ctx;


function generateMeme (img, topText, bottomText, topTextSizeInput, bottomTextSizeInput) {
    let fontSize

    Canvas.width = img.width
    Canvas.height = img.height

    ctx.clearRect (0, 0, canvas-width, canvas-height);
    ctx.drawImage (img, 0, 0);

    
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.textAlign = 'center';

    fontSize = canvaz.width * topTextSize;
    ctx.font = fontSize + 'px Impact';
    ctx.lineWidth = fontSize / 25;

    ctx.textBaseLine = 'top';
    topText.split ('\m').forEach (function (t, i){
    ctx.fillText (t, canvas.width / 2, i + fontSize, canvas.width);
    ctx.strokeText (t, canvas.width / 2, i + fontSize, canvas.width);
    });

    fontSize = canvaz.width * bottomTextSize;
    ctx.font = fontSize + 'px Impact';
    ctx.lineWidth = fontSize / 25;

    ctx.textBaseLine = 'bottom';
    bottomText.split ('\m').forEach (function (t, i){
    ctx.fillText (t, canvas.width / 2, canvas.height - i + fontSize, canvas.width);
    ctx.strokeText (t, canvas.width / 2, canvas.height - i + fontSize, canvas.width);
    });
}
function init (){
    topTextInput = document.getElementById('top-text');
    bottomTextInput = document.getElementById('bottom-text');
    topTextSizeInput = document.getElementById('top-text-size-input');
    bottomTextSizeInput = document.getElementById('bottom-text-size-input');
    imageInput = document.getElementById('image-input');
    generateBtn = document.getElementById('generate-btn');
    Canvas = document.getElementById('meme-canvas');
    
    Ctx = canvas.getContext('2d');
    canvas.width = canvas.height = 0;

    generateBtn.addEventListener ('click', function () {
        let reader = new FileReader ();
        reader.onload = fuction () 
            let img = new Image;
            img.src = reader.result;
            generateMeme (img, topTextInput.value, bottomTextInput.value, topTextSizeInput.value, bottomTextSizeInput.value);
        });
    
read. readAsDataURL (imageInput.files [0]);
    }
