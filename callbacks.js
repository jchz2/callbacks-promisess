/* Inicio de clase
console.log("archivo callbacks");
setTimeout(() => {      //Bloque sincrono
    console.log('Hola 2 segundo despues')
}, 2000);
console.log('Despues del timeout')
*/

//Sintaxis por convencion de un callback
//Convencion = acuerdo general
//callback reciba siempre 2 parametros
//callback puede llamarse callback o cb
//callback(error, data)

const muro = {
  construido: false,
  aplanado: false,
  pintado: false,
};

function construir(muroAConstruir, callback) {
  //1 segundo
  setTimeout(() => {
    muroAConstruir.construido = true;
    let error = null;
    if (muroAConstruir.construido === false) {
      error = "No se pudo construir";
    }
    callback(error, muroAConstruir);
  }, 1000);
}

function aplanar(muroAAplanar, callback) {
  //2 segundo
  setTimeout(() => {
    muroAAplanar.aplanado = true;
    const error = muroAAplanar.aplanado ? null : "No se pudo aplanar";
    callback(error, muroAAplanar);
  }, 2000);
}

function pintar(muroAApintar, callback) {
  //2 segundo
  setTimeout(() => {
    muroAApintar.pintado = true;
    const error = muroAApintar.pintado ? null : "No se pudo pintar";
    callback(error, muroAApintar);
  }, 2000);
}

/*
//Desplegado tipo 1
const muroContruido = construir(muro)
const muroAplanado = aplanar(muroConstruido)
const muroPintado = pintar(muroAplanado)
console.log('muro final: ',muroPintado)
*/

/*
//Desplegado tipo 2
construir(muro, (muroConstruido) => {
  console.log("muro construido:", muroConstruido);
  aplanar(muroConstruido, (muroAplanado) => {
    console.log("muro aplanado:", muroAplanado);
    pintar(muroAplanado, (muroPintado) => {
      console.log("muro pintado:", muroPintado);
    });
  });
});
*/

//Desplegado tipo 3
construir(muro, (errorDeConstruccion, muroConstruido) => {
  if (errorDeConstruccion) {
    console.error("Error de construccion:", errorDeConstruccion);
    return; //detiene la ejecucion de una funcion se le conoce como salida temprana
  }

  console.log('construido')
  aplanar(muroConstruido, (errorDeAplanado, muroAplanado) => {
    if (errorDeAplanado) {
      console.error("Error en aplanado:", errorDeAplanado);
      return;
    }

    console.log('aplanado')
    pintar(muroAplanado, (errorDePintado, muroPintado) => {
      if (errorDePintado) {
        console.error("Error en pintado:", errorDePintado);
        return;
      }

      console.log('construido')
      console.log("MURO COMPLETO", muroPintado);
    });
  });
});

/* Apunte extra
//Falsy
false
''
null
undefined
0
//Thruthy
true
cadenas con caracteres
numeros diferentes de 0
objetos con elementos
arreglos con elementos
{}
[]
*/

// Comandos terminal
// mkdir callbacks-promises
// cd callbacks-promises
// git init & npm init
// touch .gitignore
// nano .gitignore //agregar carpeta node-modules/
// cat .gitignore
// code .
