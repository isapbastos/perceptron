let perceptron;
let points = new Array(100);//inicializa com 100 pontos por não ser um número nem mto grande nem mto pequeno
let trainningIndex = 0;

function setup(){//função que inicializa a animação
    createCanvas(550, 550);

    perceptron = new Perceptron(3);

    for(let i = 0; i<points.length; i++){
        points[i] = new Point(random(-1,1), random(-1,1))
    }
    // perceptron = new Perceptron();
    // const inputs = [-1,0.5];//primeiro grupo de treinamento
    // const guess = perceptron.guess(inputs);
    // console.log(`resultado ${guess}`);
}

function draw(){
    background(255);
    for (let i = 0; i < points.length; i++) {
        points[i].show();
    }

    noStroke();


    for(let i = 0; i < points.length; i++){
        const pt = points[i];

        const inputs = [pt.x,pt.y,pt.bias];
        const target = pt.label;

        const guess = perceptron.guess(inputs);

        if(guess == target){//se ele adivinhou
            fill(0,255,0);//fill propriedade p5, 0,255,0 vai pintar de verde
        } else {
            fill(255,0,0);
        }

        ellipse(pt.getPixelX(),pt.getPixelY(),15,15);
    }
    drawLine();

    trainSinglePoint();//treinamento do single point
    //depois que ele parar de treinar dá 100 novos pontos para saber se ele errou ou se ele acertou
    //mostrar no final quantos certos e quantos errados
}

function drawLine(){
    stroke(0);

    const p1 = new Point(-1, f(-1));

    const p2 = new Point(1, f(1));
    
    line(p1.getPixelX(),p1.getPixelY(),p2.getPixelX(),p2.getPixelY());//ponto1X, ponto1Y, ponto2X,ponto2Y
    stroke(0,0,255);

    const guessP1 = new Point(-1, perceptron.guessY(-1));
    const guessP2 = new Point(1, perceptron.guessY(1));
    line(guessP1.getPixelX(),guessP1.getPixelY(),guessP2.getPixelX(),guessP2.getPixelY());//ponto1X, ponto1Y, ponto2X,ponto2Y
}

function trainSinglePoint() {
    const pt = points[trainningIndex];
    const inputs = [pt.x, pt.y,pt.bias];
    const target = pt.label;
    perceptron.train(inputs,target);

    trainningIndex++;

    if(trainningIndex == points.length){
        trainningIndex = 0;//mudar para ele parar de treinar
    }
}

