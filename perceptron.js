class Perceptron{
    weights = [];
    lr = 0.1;//learning rate

    constructor(numberWeigths){
        this.weights = new Array(numberWeigths);
        for (let index = 0; index < this.weights.length; index++) {
            this.weights[index] = random(-1,1);
        }
    }
    guess(inputs){//função
        let sum = 0;
        for (let i = 0; i < this.weights.length; i++) {
            sum += inputs[i]*this.weights[i];//x1*w1         
        }
        const output = this.sign(sum);//pode colocar const output = Math.sign(sum)//funçao de ativação
        return output;
    }

    train(inputs, target){
        const guess = this.guess(inputs);
        const error = target - guess;
        //ajustar todos os weights
        for(let i = 0; i< this.weights.length; i++){
            //lr é nosso Learning Rate. Isso resolve o problema de over shoot (ajustar demais).
            this.weights[i] += error*inputs[i]*this.lr;
        }
        console.log(this.weights);
    }

    sign(number){
        return number >= 0 ? 1 : -1;
    }

    guessY(x){//função que acha o y
        const w0 = this.weights[0];
        const w1 = this.weights[1];
        const w2 = this.weights[2];

        return -(w2/w1) - (w0/w1);
    }
}
