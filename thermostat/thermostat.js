class Thermostat {
    constructor() {
        this.temperature = 20;
        this.powerSavingMode = true;
        
    }

    getTemperature() {
        return this.temperature;
    }

    setPowerSavingMode(status) {
        this.powerSavingMode = status;
    }

    up() {
        if (this.powerSavingMode === true && this.temperature < 25) {
            return this.temperature ++;
        } else if (this.powerSavingMode === false && this.temperature < 32) {
            return this.temperature++;
        } else {
            return this.temperature;
        }
    }

    down() {
        if (this.temperature >10) {
        return this.temperature--;
        } else {
            return this.temperature;
        }
    }

    reset() {
        return this.temperature = 20;
    }


}

module.exports = Thermostat;