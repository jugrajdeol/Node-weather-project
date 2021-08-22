const request = require('request')

const forecast = (a, b, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=3c47ec3f073009da76ae278450b82aaa&query=" + a + "," + b + "&units=m"

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback("Unable to coonect ot the internet", undefined)
        } else if (body.error) {
            callback('Unable to find the loaction', undefined)
        } else {
            callback(undefined, 'Currently it is ' + body.current.weather_descriptions[0] + " and temparature is " + body.current.temperature + " degrees. It feels like " + body.current.feelslike + " degrees outside." +
                " The wind speed is "+body.current.wind_speed+" km/h . The Humidity is "+body.current.humidity+ " %.")
        }
    })
}

module.exports = forecast
