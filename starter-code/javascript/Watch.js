class Watch extends Chronometer {
    constructor() {
        super();
        this.btnLeft = document.getElementById('btnLeft');
        this.btnRight = document.getElementById('btnRight');
        this.minDec = document.getElementById('minDec');
        this.minUni = document.getElementById('minUni');
        this.secDec = document.getElementById('secDec');
        this.secUni = document.getElementById('secUni');
        this.milDec = document.getElementById('milDec');
        this.milUni = document.getElementById('milUni');
        this.Splits = document.getElementById('Splits');
    }

    printTime() {
        this.printMilliseconds();
        this.printSeconds();
        this.printMinutes();


    }

    printMinutes() {
        const mins = this.twoDigitsNumber(this.getMinutes());
        this.minUni.innerText = mins[1];
        this.minDec.innerText = mins[0];
        
    }

    printSeconds() {
        const secs = this.twoDigitsNumber(this.getSeconds());
        this.secUni.innerText = secs[1];
        this.minDec.innerText = secs[0];

    }

    printMilliseconds() {
        const mills = this.twoDigitsNumber(this.getMillisecs());
        this.millUni.innerText = mills[1];
        this.millDec.innerText = mills[0];

    }

    printSplit() {

    }

    clearSplits() {

    }

    setStopBtn() {

    }

    setSplitBtn() {

    }

    setStartBtn() {

    }

    setResetBtn() {

    }

}