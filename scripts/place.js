const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `${today.getFullYear()}`;
const lastMod = document.querySelector("#last");
lastMod.innerHTML = `${document.lastModified}`;

function calculateWindChillCelsius(temperatureCelsius, windSpeedKph) {
    if (temperatureCelsius >= 10 || windSpeedKph < 4.8) {
        return "N/A";
    }

    const windChillCelsius = 13.12 + (0.6215 * temperatureCelsius) - (11.37 * Math.pow(windSpeedKph, 0.16)) + (0.3965 * temperatureCelsius * Math.pow(windSpeedKph, 0.16));
    return Math.round(windChillCelsius);
}


const temperature = 17; // Celsius
const windSpeed = 5; // km/h
const windChill = calculateWindChillCelsius(temperature, windSpeed);

if (typeof windChill === 'number') {
    console.log(`${windChill}°C`);
} else {
    console.log(windChill);
}
 