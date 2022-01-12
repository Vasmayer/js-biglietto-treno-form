/* Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo).
BONUS:
replicare anche lo stile estetico fornito dallo screenshot tramite CSS */

/* prendo gli elementi che mi servono */


const generaButton = document.getElementById('genera');
const annullaButton = document.getElementById('annulla');
generaButton.style.color = '#B91450'
annullaButton.style.color = '#B91450'

const nomecognomeInput = document.getElementById('nomecognome');
const kmInput = document.getElementById('km');
const ageInput = document.getElementById('age');
const offertaOutput = document.getElementById('offerta');
const carrozzaOutput = document.getElementById('carrozza');
const codiceOutput = document.getElementById('codice');
const costoOutput = document.getElementById('costo');
const nomeOutput = document.getElementById('nome');


generaButton.addEventListener('click',function()
{
    
    const km =  parseInt(kmInput.value);    
    const age = parseInt(ageInput.value);

    console.log(km,age);
    let costo = 0;
    let message = 'Biglietto Standard';

    if(!isNaN(km) && !isNaN(age))
    {
        costo = 0.21 * km;

        if(age === 1)
        {
            costo -=  ( costo * 20 )/100
            message = 'Biglietto Scontato';
        }
        if(age === 3 )
        {
            costo -=  ( costo * 40 )/100
            message = 'Biglietto Scontato';
        }
    }
    
    if(costo)
    {
        offertaOutput.innerText = message;
        carrozzaOutput.innerText= Math.floor( Math.random() * 20 + 1);
        codiceOutput.innerText = Math.random().toString(36).substr(2, 5);
        costoOutput.innerText=`${costo.toFixed(2)} €`;
        nomeOutput.innerText = nomecognomeInput.value;
    }
    else
    {
      alert('Inserisci i dati corretti!');
    }

    

});
annullaButton.addEventListener('click',function()
{
    nomecognomeInput.value='';
    kmInput.value='';
    ageInput.value = '';
    offertaOutput.innerText = '----';
    carrozzaOutput.innerText= '----';
    codiceOutput.innerText = '----';
    costoOutput.innerText='----';
    nomeOutput.innerText='----';
 
});