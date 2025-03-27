// NOTE: We do not use "load" because the code is executed from the HTML (rendered)

function petition(){
    /* 1.- We create the request */
    const petitionCall = new XMLHttpRequest();
    const URL = "https://restcountries.com/v3.1/all";

    /* 2.- We execute code for each state change:
     *   0: request not initialized
     *   1: server connection established
     *   2: request received
     *   3: processing request
     *   4: request finished and response is ready 
    */
   petitionCall.onreadystatechange = function(){
       if (this.readyState == 4 && this.status == 200){    
          /* Algunos de los estados:
           * 200: "OK"
           * 403: "Forbidden"
           * 404: "Not Found"
          */

        processResponse(JSON.parse(this.responseText)); // tb responseXML 
       }

       /* 
          if (this.readyState == 4){   
            alert("Código de respuesta: "+this.status+" - mensaje: "+this.statusText);
          } 
        */
   };

   /* 3.- We specify the request (true=asynchronous call; false=synchronous call) */
   petitionCall.open("GET",URL,true); 
   
   /* 4.- We send the request */
   petitionCall.send();
}

/* 5.- We process the response data */
function processResponse(countries){
    const htmlTable = document.getElementById("table");
  
    for (const country of countries){
        const row = document.createElement("tr");

        const tdCountry = document.createElement("td");
        const tdCapital = document.createElement("td");
        const tdCurrency = document.createElement("td");
        const tdLanguage = document.createElement("td");     
        const tdFlag = document.createElement("td");      

        tdCountry.textContent = country.name.common;
        row.appendChild(tdCountry);

        tdCapital.textContent = country.capital?.join(", ");
        row.appendChild(tdCapital);  

        /* There may be several currencies */
        let currencies = "<ul>";

        if (country.currencies) {
            for (const currency of Object.keys(country.currencies)){
                currencies += `<li>${country.currencies[currency].name}</li>`; 
            }
        }

        currencies +="</ul>"
        tdCurrency.innerHTML = currencies;
        row.appendChild(tdCurrency);

        /* There may be several languages */
        let languages = "<ul>";

        if (country.languages) {
            for (const language of Object.keys(country.languages)){
                languages += `<li>${country.languages[language]}</li>`; 
            }
        }
        
        languages +="</ul>"
        tdLanguage.innerHTML = languages;
        row.appendChild(tdLanguage);

        /* Flag: we will include an image */
        tdFlag.innerHTML = `<img src="${country.flags.png}" height="100px" width="200px" alt="${country.flags.alt}">`;
      
        row.appendChild(tdFlag);

        htmlTable.appendChild(row);
    }
}

function clearTable(){
    const htmlTable = document.getElementById("table");
    htmlTable.innerHTML = "";    
}
