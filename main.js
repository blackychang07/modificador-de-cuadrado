nariz_x = 0
nariz_y = 0
derecha = 0
izquierda = 0
distancia = 0


function setup()
{
    canvas=createCanvas(500,500)
    background("cyan")
    video=createCapture(VIDEO)
    video.size(500,500)
    modelo = ml5.poseNet(video, listo)
    modelo.on("pose", respuesta) 
}

function listo()
{
    console.log("ya cargo")
}

function respuesta(resultados)
{
if(resultados.length>0)
{
    console.log(resultados)
    nariz_x = resultados[0].pose.nose.x
    nariz_y = resultados[0].pose.nose.y
    izquierda = resultados[0].pose.leftWrist.x
    derecha = resultados[0].pose.rightWrist.x
    distancia = izquierda-derecha

}
}

function draw()
{
    background("cyan")
    fill("grey")
    square(nariz_x, nariz_y, distancia)
    fill("white")
    textSize(distancia/4)
    mitad = distancia/2
    text("😁", nariz_x+mitad-40, nariz_y+mitad+20)
}

