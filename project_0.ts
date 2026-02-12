//En TS las variables mueren con su tipo de valor, romantico no? aunque se puede colar un "any" y arruinar 
//el matrimonio..

const nombre = 'nicolas';

console.log(nombre)

function saludo(nombre:string):
	string{return `hola ${nombre} `;}


function suma(a:number, b:number): number{
	const val = a + b
	console.log(val) //importante aprendizaje, al igual que en python, nuestro print here es el console.log y nuesto return es el mismo 'return'
}

suma(1,2)


console.log(saludo(nombre))
