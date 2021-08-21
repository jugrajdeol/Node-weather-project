const request = require('request')


const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1IjoianVncmFqZGVvbDEzIiwiYSI6ImNrczR4ZGVsYjE2NmoydnBrZzh3bjZxcTgifQ.W5ZAK2z8jkQoe1Z_tjLYog&limit=1"

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to the internet.', undefined)
        } else if (body.features.length === 0) {
            callback('Not able to find the place', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}


module.exports = geocode