function changeTemperature(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5 / 9;
  return Math.floor(celsius);
}

export default changeTemperature