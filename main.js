console.log('canvas');

const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')


let posX = 10

// imagenes
const img = new Image();
img.src = "nave.png"
img.width = 10
img.onload = () =>{
  
  update()
}

function update(){
  ctx.clearRect(0,0,400,400)
  // Canviar color al relleno
ctx.fillStyle = 'green'
// pintar rectangulo
ctx.fillRect(0,0,400,400)
  ctx.drawImage(img, posX, 200, 100, 100);


// cambio color al contorno
ctx.strokeStyle = 'blue'
// dibujar recuadro
ctx.strokeRect(0, 40, 100, 200)

// borrar cuadrado
ctx.clearRect(300,300,100,100)

// trazando lineas
ctx.fillStyle = 'pink'
ctx.beginPath()
ctx.moveTo(75,50)
ctx.lineTo(100,75)
ctx.lineTo(100,25)
ctx.fill()
// trazando arcos

ctx.beginPath()
ctx.fillStyle = "rgba(255, 165, 0, 0.5)";
//arc(inicio, fin,radio,radio inicio, radio fin, sentido)
ctx.arc(100, 100, 30, 0, Math.PI * 2, true);

ctx.fill()

// Creando plantillas
const ficha = new Path2D()
ficha.rect(0,0,50,50)
ctx.strokeStyle = "white"
// cambiamos el tamaño de la linea
ctx.lineWidth = 10
// Pintamos contorno de ficha
ctx.stroke(ficha)
// cambiamos color relleno
ctx.fillStyle = "black"
// pintamos relleno de ficha
ctx.fill(ficha)

// lineas punteadas
// cambiamos el tamaño de la linea
ctx.lineWidth = 1
// definimos el punteado
ctx.setLineDash([10, 2]);
ctx.strokeRect(100,100,100,100)

// Texto
ctx.fillStyle = "rgba(255,255,255,1)"
ctx.font = "20px Times New Roman";
ctx.fillText ("hola caracola", 0,350)
ctx.strokeText ("hola caracola", 0,380)






// Guardamos estado con color definido como blanco
ctx.save()
ctx.fillStyle = "rgba(255,100,100,0.5"
ctx.fillText("Texto que desaparecerá", 100, 100)
// sombras
ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 2;
ctx.shadowBlur = 2;
ctx.shadowColor = "rgba(0, 0, 0, 0.5)";

ctx.fillRect(200,300,50,50)
// Restauramos estado (volvemos a tener blanco)
ctx.restore()

ctx.fillText("Texto que desaparecerá", 100, 120)
// creamos cuadrado esclamos, giramos y transladamos
ctx.save()
ctx.fillStyle = "orange"
ctx.scale(0.5,0.5)
ctx.translate(-10,-20)
ctx.rotate((Math.PI / 180) * 25)
ctx.fillRect(200,200,100,100)
ctx.restore()

// llamamos a la función en forma de loop
window.requestAnimationFrame(update);
}

// mover nave
document.addEventListener('keydown', ()=>{
  posX++
  console.log(posX);
})
