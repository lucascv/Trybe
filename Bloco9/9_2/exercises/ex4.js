const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

const sendMarsTemperature = () => {
  setTimeout(() => console.log(`Mars temperature is: ${getMarsTemperature()} degree Celsius`), messageDelay());
}

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const sendMarsTemperature2 = (callback) => {
  setTimeout(() => callback(getMarsTemperature(), messageDelay));
}

sendMarsTemperature2(temperatureInFahrenheit);
sendMarsTemperature2(greet);

// 2- Por fim, o robô Curiosity tem uma taxa de sucesso de envio de mensagem de 60% devido ao 
// fato de o robô já estar muito ocupado com outras operações. Logo, adicione na função 
// sendMarsTemperature um outro callback que contenha as ações a serem tomadas em caso de falha.


const sendMarsTemperature3 = (callback1, callback2) => {
  errorchance = Math.floor(Math.random() * 100);
  if (errorchance > 40) setTimeout(() => callback1(getMarsTemperature()), messageDelay());
  else callback2('Robot is busy');
}
