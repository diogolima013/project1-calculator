class CalcController {

    constructor(){

        this._displayCalc = "0";
        this._dataAtual;

    }

    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(value){
        this.displayCalc = value; 
    }

    get dataAtual(){
        return this._dataAtual;
    }

    set dataAtual(value){
        return this._dataAtual = value;
    }
}