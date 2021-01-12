// Practica:
// Objetivo: Plasmar en funciones y callbacks el proceso de aplicación de kodemia
// 1.- Entrevista
// 2.- Oferta
// 3.- Inscripción
// 4.- Asistir a clase

// Materia prima: El Koder
// - entrevistado
// - Ofertado
// - inscrito
// - enClase

const aplicacionKodemia = {
  entrevista: false,
  oferta: false,
  inscripcion: false,
	asistirAClase: false,
};

function entrevistar(solicitarEntrevista, callback) {
  //2 segundos
  setTimeout(() => {
    solicitarEntrevista.entrevista = true;
    let error = null;
    if (solicitarEntrevista.entrevista === false) {
      error = "No se pudo concretar la entrevista";
    }
    callback(error, solicitarEntrevista);
  }, 2000);
}

function ofertar(recibirOferta, callback) {
  //3 segundos
  setTimeout(() => {
    recibirOferta.oferta = true;
    const error = recibirOferta.oferta ? null : "No se recibio la oferta por parte de Kodemia";
    callback(error, recibirOferta);
  }, 3000);
}

function inscribir(realizarInscripcion, callback) {
  //4 segundos
  setTimeout(() => {
    realizarInscripcion.inscripcion = false;
    const error = realizarInscripcion.inscripcion ? null : "No se pudo inscribir por falta de baro";
    callback(error, realizarInscripcion);
  }, 4000);
}

function entrarAClase(iniciarClases, callback) {
  //5 segundos
  setTimeout(() => {
    iniciarClases.asistirAClase = true;
    const error = iniciarClases.asistirAClase ? null : "No se pudo asistir a clase por falta de inscripción";
    callback(error, iniciarClases);
  }, 5000);
}


entrevistar(aplicacionKodemia, (errorDeEntrevista, entrevistaRealizada) => {
  if (errorDeEntrevista) {
    console.error("Error de entrevista:", errorDeEntrevista);
    return;
  }

  console.log('entrevistado')
  ofertar(entrevistaRealizada, (errorDeOferta, ofertaRealizada) => {
    if (errorDeOferta) {
      console.error("Error en oferta:", errorDeOferta);
      return;
    }

    console.log('ofertado')
    inscribir(ofertaRealizada, (errorDeInscrpcion, inscripcionHecha) => {
      if (errorDeInscrpcion) {
        console.error("Error en inscripción:", errorDeInscrpcion);
        return;
      }

    console.log('inscrito')
    entrarAClase(inscripcionHecha, (errorDeCalses, clasesInicidas) => {
      if (errorDeCalses) {
        console.error("Error en tomar calses:", errorDeCalses);
        return;
      }


      	console.log('enClase')
      	console.log("APLICACIÓN COMPLETADA", clasesInicidas);
		 });
    });
  });
});
