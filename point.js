function f(x, a=0.3, b=0.2) {
    //ax+b
    return a*x+b;
}

class Point{
    x = 0;
    y = 0;
    bias = 1;
    label = 0;//classificação

    constructor(x, y){
        this.x = x;
        this.y = y;
        this.bias =1;
        this.label = this.getLabel();
    }

    getLabel(){
        const lineY = f(this.x);
        if(this.y > lineY){//os pontos que estão acimas de y
       // if(this.x > this.y){//na web o quarto quadrante é o positivo, porque o y cresce para baixo, não é o nosso caso
            return 1;
        } else {//os pontos que estão abaixo
            return -1;
        }
    }

    getPixelX(){
        const px = map(this.x, -1, 1, 0, width);
        return px;
    } 

    getPixelY(){
        const py = map(this.y, -1, 1, height, 0);
        return py;
    }

    show(){
        stroke(0);//não vou ter contorno no ponto
        if(this.label === 1){
            fill(0);//colore de preto
        } else {
            fill(255);//colore de branco
        }
        
        const px = this.getPixelX();
        const py = this.getPixelY();

        //criando uma elipse com 2diametros iguais, que é um círculo
        ellipse(px, py, 22, 22);//22px em x e 22px em y, oub seja, 22px de diâmetro
    }

    debug(){
        console.log(`label: ${this.label} - x: ${this.x} - y: ${this.y}`);
    }


}