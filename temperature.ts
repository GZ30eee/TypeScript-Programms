function celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit: number): number {
    return ((fahrenheit - 32) * 5) / 9;
}

const tempCelsius = 25;
console.log(`${tempCelsius}°C = ${celsiusToFahrenheit(tempCelsius)}°F`);
