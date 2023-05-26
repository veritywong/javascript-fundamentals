const WeatherClient = require('./WeatherClient')

class Weather {
    constructor(client) {
        this.client = client;
        this.weatherData = {}
    }
    
    load(city) {
        return this.client.fetchWeatherData(city)
        .then((weatherData) => this.weatherData = weatherData);
    }

    getWeatherData() {
        return this.weatherData;
    }

}

module.exports = Weather;
