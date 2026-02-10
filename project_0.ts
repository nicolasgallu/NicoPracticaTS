//En TS las variables mueren con su tipo de valor, romantico no? aunque se puede colar un "any" y arruinar 
//el matrimonio..

const nombre = 'nicolas';

function saludo(nombre:string):
	string{return `hola ${nombre} como estas?`;}



console.log(saludo(nombre))
