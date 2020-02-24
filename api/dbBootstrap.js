mongoose = require('mongoose')
Timezone = mongoose.model('Timezone');
City = mongoose.model('City');
Country = mongoose.model('Country');
module.exports = async function dbBootstrap() {
    const timezoneList = [
        { code: 'UTC' },
        { code: 'UTC+1' },
        { code: 'UTC+2' },
        { code: 'UTC+3' },
        { code: 'UTC+4' },
        { code: 'UTC+5' },
        { code: 'UTC+6' },
        { code: 'UTC+7' },
        { code: 'UTC+8' },
        { code: 'UTC+9' },
        { code: 'UTC+10' },
        { code: 'UTC+11' },
        { code: 'UTC+12' },
        { code: 'UTC+13' },
        { code: 'UTC+14' },
        { code: 'UTC-1' },
        { code: 'UTC-2' },
        { code: 'UTC-3' },
        { code: 'UTC-4' },
        { code: 'UTC-5' },
        { code: 'UTC-6' },
        { code: 'UTC-7' },
        { code: 'UTC-8' },
        { code: 'UTC-9' },
        { code: 'UTC-10' },
        { code: 'UTC-11' },
        { code: 'UTC-12' },
    ]

    let timezones;

    try {
        timezones = await Timezone.find({})
    } catch (err) {
        console.log('Could not get timezones', err)
    }

    if (timezones.length < timezoneList.length) { // if db already has the timezones we don't need to insert
        try {
            await Timezone.deleteMany({})

            console.log('Timezones successfully deleted')

            const timezonesInserted = await Timezone.collection.insertMany(timezoneList);

            console.log('%d timezones were successfully stored', timezonesInserted.result.n)
        } catch (err) {
            console.log(err)
        }

    }

    const countriesList = [
        { name: 'France', code: 'fr', timezone: [timezones[24]._id, timezones[23]._id, timezones[22]._id, timezones[18]._id, timezones[17]._id, timezones[1]._id, timezones[3]._id, timezones[4]._id, timezones[5]._id, timezones[11]._id, timezones[12]._id] },
        { name: 'Russia', code: 'ru', timezone: [timezones[2]._id, timezones[3]._id, timezones[4]._id, timezones[5]._id, timezones[6]._id, timezones[7]._id, timezones[8]._id, timezones[9]._id, timezones[10]._id, timezones[11]._id, timezones[12]._id] },
        { name: 'United States', code: 'us', timezone: [timezones[26]._id, timezones[25]._id, timezones[24]._id, timezones[23]._id, timezones[22]._id, timezones[21]._id, timezones[20]._id, timezones[19]._id, timezones[18]._id, timezones[10]._id, timezones[12]._id] },
        {
            name: 'Antarctica',
            code: 'an',
            timezone: [timezones[17]._id, timezones[0]._id, timezones[3]._id, timezones[5]._id, timezones[6]._id, timezones[7]._id, timezones[10]._id, timezones[11]._id, timezones[12]._id]
        },
        {
            name: 'Australia',
            code: 'au',
            timezone: [timezones[5]._id, timezones[7]._id, timezones[8]._id, timezones[10]._id, timezones[11]._id]
        },
        {
            name: 'United Kingdom',
            code: 'uk',
            timezone: [timezones[22]._id, timezones[19]._id, timezones[18]._id, timezones[17]._id, timezones[16]._id, timezones[0]._id, timezones[1]._id, timezones[2]._id, timezones[6]._id]
        },
    ]

    let countries;

    try {
        countries = await Country.find({})
    } catch (err) {
        console.log('Could not get countries', err)
    }

    if (countries.length < countriesList.length) { // if db already has the countries we don't need to insert
        try {
            await Country.deleteMany({})

            console.log('Countries successfully deleted')

            const cdountriesInserted = await Country.collection.insertMany(countriesList);

            console.log('%d countries were successfully stored', countriesInserted.result.n)
        } catch (err) {
            console.log(err)
        }

    }

    const citiesList = [
        { name: 'Accra', timezone: timezones[0]._id },
        { name: 'Addis Ababa', timezone: timezones[3]._id },
        { name: 'Algiers', timezone: timezones[1]._id },
        { name: 'Almaty', timezone: timezones[6]._id },
        { name: 'Amman', timezone: timezones[2]._id },
        { name: 'Amsterdam', timezone: timezones[1]._id },
        { name: 'Anadyr', timezone: timezones[12]._id },
        { name: 'Anchorage', timezone: timezones[23]._id },
        { name: 'Ankara', timezone: timezones[3]._id },
        { name: 'Antananarivo', timezone: timezones[3]._id },
        { name: 'Asuncion', timezone: timezones[17]._id },
        { name: 'Athens', timezone: timezones[2]._id },
        { name: 'Atlanta', timezone: timezones[19]._id },
        { name: 'Auckland', timezone: timezones[13]._id },
        { name: 'Baghdad', timezone: timezones[3]._id },
        { name: 'Bangkok', timezone: timezones[7]._id },
        { name: 'Barcelona', timezone: timezones[1]._id },
        { name: 'Beijing', timezone: timezones[8]._id },
        { name: 'Beirut', timezone: timezones[2]._id },
        { name: 'Belgrade', timezone: timezones[1]._id },
        { name: 'Berlin', timezone: timezones[1]._id },
        { name: 'Bogota', timezone: timezones[19]._id },
        { name: 'Boston', timezone: timezones[19]._id },
        { name: 'Brasilia', timezone: timezones[15]._id },
        { name: 'Brisbane', timezone: timezones[10]._id },
        { name: 'Brussels', timezone: timezones[1]._id },
        { name: 'Bucharest', timezone: timezones[2]._id },
        { name: 'Budapest', timezone: timezones[1]._id },
        { name: 'Buenos Aires', timezone: timezones[17]._id },
        { name: 'Cairo', timezone: timezones[2]._id },
        { name: 'Calgary', timezone: timezones[21]._id },
        { name: 'Canberra', timezone: timezones[11]._id },
        { name: 'Cape Town', timezone: timezones[2]._id },
        { name: 'Caracas', timezone: timezones[18]._id },
        { name: 'Casablanca', timezone: timezones[1]._id },
        { name: 'Chicago', timezone: timezones[20]._id },
        { name: 'Copenhagen', timezone: timezones[1]._id },
        { name: 'Dallas', timezone: timezones[20]._id },
        { name: 'Dar es Salaam', timezone: timezones[3]._id },
        { name: 'Denver', timezone: timezones[21]._id },
        { name: 'Detroit', timezone: timezones[19]._id },
        { name: 'Dhaka', timezone: timezones[6]._id },
        { name: 'Doha', timezone: timezones[3]._id },
        { name: 'Dubai', timezone: timezones[4]._id },
        { name: 'Dublin', timezone: timezones[0]._id },
        { name: 'Edmonton', timezone: timezones[21]._id },
        { name: 'Frankfurt', timezone: timezones[1]._id },
        { name: 'Guatemala City', timezone: timezones[20]._id },
        { name: 'Halifax', timezone: timezones[18]._id },
        { name: 'Hanoi', timezone: timezones[7]._id },
        { name: 'Harare', timezone: timezones[2]._id },
        { name: 'Havana', timezone: timezones[19]._id },
        { name: 'Helsinki', timezone: timezones[2]._id },
        { name: 'Hong Kong', timezone: timezones[8]._id },
        { name: 'Honolulu', timezone: timezones[24]._id },
        { name: 'Houston', timezone: timezones[20]._id },
        { name: 'Indianapolis', timezone: timezones[19]._id },
        { name: 'Islamabad', timezone: timezones[5]._id },
        { name: 'Istanbul', timezone: timezones[3]._id },
        { name: 'Jakarta', timezone: timezones[7]._id },
        { name: 'Jerusalem', timezone: timezones[2]._id },
        { name: 'Johannesburg', timezone: timezones[2]._id },
        { name: 'Karachi', timezone: timezones[5]._id },
        { name: 'Khartoum', timezone: timezones[2]._id },
        { name: 'Kingston', timezone: timezones[19]._id },
        { name: 'Kinshasa', timezone: timezones[1]._id },
        { name: 'Kiritimati', timezone: timezones[14]._id },
        { name: 'Kuala Lumpur', timezone: timezones[8]._id },
        { name: 'Kuwait City', timezone: timezones[3]._id },
        { name: 'Kyiv', timezone: timezones[2]._id },
        { name: 'La Paz', timezone: timezones[18]._id },
        { name: 'Lagos', timezone: timezones[1]._id },
        { name: 'Lahore', timezone: timezones[5]._id },
        { name: 'Las Vegas', timezone: timezones[22]._id },
        { name: 'Lima', timezone: timezones[19]._id },
        { name: 'Lisbon', timezone: timezones[0]._id },
        { name: 'London', timezone: timezones[0]._id },
        { name: 'Los Angeles', timezone: timezones[22]._id },
        { name: 'Madrid', timezone: timezones[1]._id },
        { name: 'Managua', timezone: timezones[20]._id },
        { name: 'Manila', timezone: timezones[8]._id },
        { name: 'Melbourne', timezone: timezones[11]._id },
        { name: 'Mexico City', timezone: timezones[20]._id },
        { name: 'Miami', timezone: timezones[19]._id },
        { name: 'Minneapolis', timezone: timezones[20]._id },
        { name: 'Minsk', timezone: timezones[3]._id },
        { name: 'Montevideo', timezone: timezones[17]._id },
        { name: 'Montréal', timezone: timezones[19]._id },
        { name: 'Moscow', timezone: timezones[3]._id },
        { name: 'Nairobi', timezone: timezones[3]._id },
        { name: 'Nassau', timezone: timezones[19]._id },
        { name: 'New Orleans', timezone: timezones[20]._id },
        { name: 'New York', timezone: timezones[19]._id },
        { name: 'Ottawa', timezone: timezones[19]._id },
        { name: 'Paris', timezone: timezones[1]._id },
        { name: 'Perth', timezone: timezones[8]._id },
        { name: 'Philadelphia', timezone: timezones[19]._id },
        { name: 'Phoenix', timezone: timezones[21]._id },
        { name: 'Prague', timezone: timezones[1]._id },
        { name: 'Reykjavik', timezone: timezones[0]._id },
        { name: 'Rio de Janeiro', timezone: timezones[17]._id },
        { name: 'Riyadh', timezone: timezones[3]._id },
        { name: 'Rome', timezone: timezones[1]._id },
        { name: 'Salt Lake City', timezone: timezones[21]._id },
        { name: 'San Francisco', timezone: timezones[22]._id },
        { name: 'San Juan', timezone: timezones[18]._id },
        { name: 'San Salvador', timezone: timezones[20]._id },
        { name: 'Santiago', timezone: timezones[17]._id },
        { name: 'Santo Domingo', timezone: timezones[18]._id },
        { name: 'São Paulo', timezone: timezones[17]._id },
        { name: 'Seattle', timezone: timezones[22]._id },
        { name: 'Seoul', timezone: timezones[9]._id },
        { name: 'Shanghai', timezone: timezones[8]._id },
        { name: 'Singapore', timezone: timezones[8]._id },
        { name: 'Sofia', timezone: timezones[2]._id },
        { name: 'Stockholm', timezone: timezones[1]._id },
        { name: 'Suva', timezone: timezones[12]._id },
        { name: 'Sydney', timezone: timezones[11]._id },
        { name: 'Taipei', timezone: timezones[8]._id },
        { name: 'Tallinn', timezone: timezones[2]._id },
        { name: 'Tashkent', timezone: timezones[5]._id },
        { name: 'Tegucigalpa', timezone: timezones[20]._id },
        { name: 'Tokyo', timezone: timezones[9]._id },
        { name: 'Toronto', timezone: timezones[19]._id },
        { name: 'Vancouver', timezone: timezones[22]._id },
        { name: 'Vienna', timezone: timezones[1]._id },
        { name: 'Warsaw', timezone: timezones[1]._id },
        { name: 'Washington DC', timezone: timezones[19]._id },
        { name: 'Winnipeg', timezone: timezones[20]._id },
        { name: 'Yangon', timezone: timezones[7]._id },
        { name: 'Zagreb', timezone: timezones[1]._id },
        { name: 'Zürich', timezone: timezones[1]._id }
    ]

    let cities;

    try {
        cities = await City.find({})
    } catch (err) {
        console.log('Could not get cities', err)
    }

    if (cities.length < citiesList.length) { // if db already has the cities we don't need to insert
        try {
            await City.deleteMany({})

            console.log('Cities successfully deleted')

            const citiesInserted = await City.collection.insertMany(citiesList);

            console.log('%d cities were successfully stored', citiesInserted.result.n)
        } catch (err) {
            console.log(err)
        }

    }
}