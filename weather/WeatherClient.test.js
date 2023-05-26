const WeatherClient = require('./WeatherClient')

describe('fetchWeatherData method for WeatherClient class', () => {
    it('fetches the current weather for a given city', () => {
        const client = new WeatherClient();

        client.fetchWeatherData('London')
          .then((weatherData) => {
            expect(weatherData.name).toEqual('London');
            expect(weatherData[0].main).toEqual('Clouds');
            done();
          });

    })
})