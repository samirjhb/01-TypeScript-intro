export let name = "samir";
export const age: number = 24;
export const isValid: boolean = true;

name = "jose";

export const templateString = ` Esto es un string
multilinea 
que puede tener
" dobles
' simple
inyectar  valores ${name}
expresiones ${1 + 1}
numeros: ${age}
booleanos ${isValid}

`;

console.log(templateString);
