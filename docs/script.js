// NOTA: No utilizamos "load" porque el código se ejecuta desde el HTML (renderizado)

function peticion(){
    /*  1.- Creamos la petición */
    var peticion = new XMLHttpRequest();
    const URL = "https://restcountries.eu/rest/v2/all";

    /* 2.- Ejecutamos código para cada cambio de estado:
     *   0: request not initialized
     *   1: server connection established
     *   2: request received
     *   3: processing request
     *   4: request finished and response is ready 
    */
   peticion.onreadystatechange = function(){
       if (this.readyState == 4 && this.status == 200){    
          /* Algunos de los estados:
           * 200: "OK"
           * 403: "Forbidden"
           * 404: "Not Found"
          */

        procesarRespuesta(JSON.parse(this.responseText)); // tb responseXML 
       }

       /*if (this.readyState == 4){   
         alert("Código de respuesta: "+this.status+" - mensaje: "+this.statusText);
       }*/
   };

   /* 3.- Especificamos la peticion (true=llamada asíncrona; false=llamada síncrona) */
   peticion.open("GET",URL,true); 
   
   /* 4.- Enviamos la petiicion */
   peticion.send();
}

/* 5.- Procesamos los datos de la respuesta */
function procesarRespuesta(paises){
    var tabla = document.getElementById("tabla");
  
    for (pais of paises){
        var fila = document.createElement("tr");

        var tdPais = document.createElement("td");
        var tdCapital = document.createElement("td");
        var tdMoneda = document.createElement("td");
        var tdIdioma = document.createElement("td");     
        var tdBandera = document.createElement("td");      

        tdPais.textContent = pais.name;
        fila.appendChild(tdPais);

        tdCapital.textContent = pais.capital;
        fila.appendChild(tdCapital);  

        /* Puede haber varias monedas */
        var monedas = "<ul>";
        for (moneda of pais.currencies){
            monedas += `<li>${moneda.name}</li>`; 
        }
        monedas +="</ul>"
        tdMoneda.innerHTML = monedas;
        fila.appendChild(tdMoneda);

        /* Puede haber varios idiomas */
        var idiomas = "<ul>";
        for (idioma of pais.languages){
            idiomas += `<li>${idioma.name}</li>`; 
        }
        idiomas +="</ul>"
        tdIdioma.innerHTML = idiomas;
        fila.appendChild(tdIdioma);

        /* Bandera: incluiremos una imagen */
        tdBandera.innerHTML = `<img src="${pais.flag}" height="100px" width="200px" alt="bandera">`;
      
        fila.appendChild(tdBandera);
        
        tabla.appendChild(fila);
    }
}

function limpiar(){
    var tabla = document.getElementById("tabla");
    tabla.innerHTML = "";    
}