console.log("WE ARE CONNECTED")

function encontrarPrimos(n) {

    const primos = [];
  
    for (let i = 2; i < n; i++) {
      let esPrimo = true;
  
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          esPrimo = false;
          break;
        }
      }

      if (esPrimo) {
        primos.push(i);
      }
    }

    let primosStringMessage = "Números encontrados: " + primos.join(", ");
  
    return primosStringMessage;
  }

  
const number = parseInt(prompt("Ingrese un número para verificar si es primo:"));


alert(`${encontrarPrimos(number)}`) 
console.log("Los números primos son", encontrarPrimos(number)) 