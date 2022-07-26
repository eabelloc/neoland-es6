/*5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.*/
const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const ruI = document.querySelector("input")

const ru = streamers2.filter((streamers2) => {
	if (streamers2.name.includes('Ru')) {
		return streamers2.name
	} else {
		return false
	}
})
console.log(ru)

const i = streamers2.filter((streamers2) => {
	if (streamers2.name.includes('i')) {
		return streamers2.name
	} else {
		return false
	}
})
console.log(i)