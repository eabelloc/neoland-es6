console.log(/----------------------------Iteración #1: Arrows---------------------------------/)
/**Iteración #1: Arrows**/
/*Crea una arrow function que tenga dos parametros a y b y 
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
por consola la suma de los dos parametros.*/

let a = 10
let b = 5

const sum = (a, b) => {
    console.log(a + b);
};

sum(a, b);

//1.1 Ejecuta esta función sin pasar ningún parametro
const sum1 = () => {
    console.log(a + b);
}
sum1();

//1.2 Ejecuta esta función pasando un solo parametro
const sum2 = (a) => {
    console.log(a + b);
}

sum2(a);

//1.3 Ejecuta esta función pasando dos parametros
const sum3 = (a, b) => {
    console.log(a + b);
};

sum3(a, b);

console.log(/----------------------------teración #2: Destructuring---------------------------------/);
/*---------------------------------------------------------------------*/
/*Iteración #2: Destructuring*/

/*2.1 En base al siguiente javascript, crea variables en base a las propiedades 
del objeto usando object destructuring e imprimelas por consola. Cuidado, 
no hace falta hacer destructuring del array, solo del objeto.*/

const game = {title: 'The last us 2', genre: ['action', 'zombie', 'survival'], year: 2020};

const {title, genre, year} = game;
console.log(title, genre, year);

/*2.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
imprimelo por consola.*/

const fruits = ['Banana', 'Strawberry', 'Orange'];
const [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1, fruit2, fruit3);

/*2.3 En base al siguiente javascript, usa destructuring para crear 2 
variables igualandolo a la función e imprimiendolo por consola.*/

const animalFunction = () => {
    return {nombre: 'Bengal Tiger', race: 'Tiger'};
};

const {nombre} = animalFunction();
const {race} = animalFunction();

console.log(nombre);
console.log(race);

/*2.4 En base al siguiente javascript, usa destructuring para crear las 
variables name y itv con sus respectivos valores. Posteriormente crea 
3 variables usando igualmente el destructuring para cada uno de los años 
y comprueba que todo esta bien imprimiendolo.*/

const car = {nombre1: 'Mazda 6', itv: [2015, 2011, 2020] }

const {nombre1} = car;
const {itv} = car;
const [year1, year2, year3] = car.itv;

console.log(nombre1, itv, year1, year2, year3);


console.log(/--------------------------Iteración #3: Spread Operator------------------------------/)
/*---------------------------------------------------------------------*/

/**Iteración #3: Spread Operator**/
/*3.1 Dado el siguiente array, crea una copia usando spread operators.*/
const pointsList = [32, 54, 21, 64, 75, 43];
const myPointsList = [...pointsList];

console.log(myPointsList);

/*3.2 Dado el siguiente objeto, crea una copia usando spread operators.*/
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const myToy = {...toy};

console.log(myToy);

/*3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
spread operatos.*/
const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54,87,99,65,32];

const manyPointsList = [...pointsList1, ...pointsList2]
console.log(manyPointsList);

/*3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos
con spread operators.*/
const toy1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};

const myNewToy = {...toy1, ...toyUpdate};
console.log(myNewToy);

/*3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
pero sin editar el array inicial. De nuevo, usando spread operators.*/
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const newColors = [...colors];
newColors.splice(2,1);
console.log(newColors);


console.log(/----------------------------Iteración #4: Map---------------------------------/)
/*---------------------------------------------------------------------*/

/*Iteración #4: Map*/

/*4.1 Dado el siguiente array, devuelve un array con sus nombres
utilizando .map().*/
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const onlyNames = users.map(users => users.name)

console.log(onlyNames)

/*4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
empiece por 'A'.*/
const users1 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const onlyNmaes1 = users1.map(users1 => (users1.name.startsWith('A') == true)? 'Anacleto' : users1.name);
console.log(onlyNmaes1);


/*4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
cuando el valor de la propiedad isVisited = true.*/
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const citiesToGo = cities.map(cities => (cities.isVisited === true)? cities.name += ' (Visitado)': cities.name);
console.log(citiesToGo);


console.log(/----------------------------Iteración #5: Filter---------------------------------/);
/*---------------------------------------------------------------------*/

/*Iteración #5: Filter*/

/*5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean mayor que 18*/
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const agesAbove = ages.filter(ages => ages > 18);
console.log(agesAbove);

/*5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean par.*/
const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const agesEven = ages1.filter(ages1 => ages1 % 2 === 0);
console.log(agesEven);

/*5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que tengan el gameMorePlayed = 'League of Legends'.*/
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const lol = streamers.filter(streamers => streamers.gameMorePlayed === 'League of Legends');
console.log(lol);

/*5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
usar la funcion .includes() para la comprobación.*/
const streamers1 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const amongUs = streamers1.filter(streamers1 => (streamers1.name.includes('u') === true)? streamers1.name : "");
console.log(amongUs);

/*5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
.includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
.age sea mayor que 35.*/

const legends = streamers1.filter((streamers1) => {
    const returnLegends = streamers1.gameMorePlayed.toLowerCase().includes("legends");
    
    if (returnLegends && streamers1.age > 35) {
        streamers1.gameMorePlayed = streamers1.gameMorePlayed.toUpperCase();
    } return returnLegends;
});
console.log(legends);

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

const ru = streamers2.filter((streamers2) => {
	if (streamers2.name.includes('Ru')) {
		return streamers2.name
	} else {
		return false;
	};
});
console.log(ru)

const i = streamers2.filter((streamers2) => {
	if (streamers2.name.includes('i')) {
		return streamers2.name
	} else {
		return false;
	}
});
console.log(i);

/*<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
             <meta http-equiv="X-UA-Compatible" content="ie=edge">
             <title>Document</title>
</head>
<body>
  <input type="text" data-function="toFilterStreamers"/>
</body>
</html></meta>*/

/*5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', 
me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.*/
const streamers3 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

/*<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
             <meta http-equiv="X-UA-Compatible" content="ie=edge">
             <title>Document</title>
</head>
<body>
  <input type="text" data-function="toFilterStreamers"/>
  <button data-function="toShowFilterStreamers">Filter</button>
</body>
</html>*/

console.log(/--------------------------------Iteración #6: Find-------------------------------------/);
/*---------------------------------------------------------------------*/

/*Iteración #6: Find*/


/*6.1 Dado el siguiente array, usa .find() para econtrar el número 100.*/
const numbers = [32, 21, 63, 95, 100, 67, 43];

const found = numbers.find(numbers => numbers > 95);
console.log(found)


/*6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.*/
const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];

const moviesFound = movies.find(movies => movies.date == 2010);
console.log(moviesFound);

/*6.3 Dado el siguiente javascript, usa .find() para econtrar el alien de nombre 
'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa 
spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación 
lo queremos meter en la propiedad .mutation del objeto fusionado.*/
const aliens = [
	{name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Marte', age: 503021}
];
const mutations = [
	{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
	{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
	{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];

const alien1 = aliens.find(alien => alien.name == 'Cucushumushu');
const mutation1 = mutations.find(mutation => mutation.name == 'Porompompero');

//OJO!!!: de esta manera, anido un objeto dentro de otro
const fusion = {...alien1, mutation: mutation1};
console.log(fusion);

/*const obj1 = { firstName: 'Foo', age: 22 };
const obj2 = { lastName: 'Bar', gender: 'M' };

const newObj = { ...obj1, ...obj2, planet: 'Earth' };

console.log(newObj);*/


console.log(/--------------------------------Iteración #7: Reduce-------------------------------------/)
/*Iteración #7: Reduce*/
/*7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
los alumnos usando la función .reduce().*/

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const allNotes = exams.reduce((acc, exams) => acc + exams.score, 0);
console.log(allNotes);

/*7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
alumnos que esten aprobados usando la función .reduce().*/
const passed = exams.reduce((acc, exam) => {
	if (exam.score >= 5) {
		return acc + exam.score
	}{
		return acc
	}
},0);
console.log(passed);


/*7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().*/
const notes = exams.map(note => note.score);
const average = notes.reduce((acc, note) => {
	return acc + note / notes.length
},0)
console.log(average)

console.log(/--------------------------------Iteración #8: Bonus-------------------------------------/)
/*Iteración #8: Bonus*/

/*6.1 Dado el siguiente javascript filtra los videojuegos por genre = 'RPG' usando 
.filter() y usa .reduce() para conseguir la media de sus .score. 
La función .find() también podría ayudarte para el contrar el genero 'RPG' en el 
array .genre.*/

const videogames = [
    {name: 'Final Fantasy VII', genre: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genre: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genre: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genre: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genre: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genre: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10},
]

//1.- .filter() genre = RPG
//2.- .reduce() to find average of .score
//3.- Maybe use .fid()? instead of .filter()?

const rpg = videogames.filter(videogame => videogame.genre.includes('RPG'))
console.log(rpg)
const rpgAverage = rpg.reduce((acc, score) => {
	return acc + score.score / rpg.length
},0)
console.log(rpgAverage)

console.log(/--------------------------------Level Completed! (...Almost xD)-------------------------------------/)