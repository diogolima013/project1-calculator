class CalcController {

    constructor(){

        this._displayCalc = "0";
        this._currentDate;
        this.initialize();

    }

    initialize(){

        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");
        
        displayCalcEl.innerHTML = "1236";
        dateEl.innerHTML = "29/09/2003"
        timeEl.innerHTML = "00:00"

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

    set currentDate(value){
        return this._currentDate = value;
    }
}