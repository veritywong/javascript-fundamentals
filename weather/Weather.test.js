const Weather = require('./Weather');

describe('Weather', () => {
    it('loads the city name', () => {

        const mockWeatherClient = {
            fetchWeatherData: jest.fn(),
        };
        mockWeatherClient.fetchWeatherData.mockResolvedValueOnce({
            name: 'Bristol'
        })

        const weather = new Weather(mockWeatherClient);

        weather.load('Bristol')
            .then(() => {
                return weather.getWeatherData()
                expect(weatherData.name).toEqual('Bristol');
                done();
            })       
    })
})

