/**
 * npm install -g typescript
 * tsc --init
 * 
 * 
 * Plugin: Code Runner
 * npm i -g ts-node
 * ctrl + alt + n
 */
console.log('Typescript');

// any qualquer tipo
const pedido = (pedido: any)=>{
    return `Deu bom o seu pedido? ${pedido}`;
}

console.log(pedido('123'));