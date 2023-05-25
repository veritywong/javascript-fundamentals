const Thermostat = require('./thermostat')

describe('Thermostat', () => {
    it('returns default temp of 20', () => {
        const thermostat = new Thermostat();
        expect(thermostat.getTemperature()).toBe(20)
    });

    it('returns increased temperature', () => {
        let thermostat = new Thermostat();
        thermostat.up()
        thermostat.up()
        expect(thermostat.getTemperature()).toBe(22)
    });
    
    it('returns lowered temperature', () => {
        let thermostat = new Thermostat();
        thermostat.down()
        expect(thermostat.getTemperature()).toBe(19)
    });

    it ('increases temperature up to 25', () => {
        let thermostat = new Thermostat();
        thermostat.setPowerSavingMode(true);
        for (let i = 0 ; i < 10 ; i++) {
            thermostat.up();
          }

        expect(thermostat.getTemperature()).toBe(25)
    })

    it ('resets the temperature to 20', () => {
        let thermostat = new Thermostat();
        
        for (let i = 0 ; i < 10 ; i++) {
            thermostat.up();
          }
        thermostat.reset()
        expect(thermostat.getTemperature()).toBe(20)
    })
});

