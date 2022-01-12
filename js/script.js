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
const nomecognomeInput = document.getElementById('nomecognome');
const kmInput = document.getElementById('km');
const ageInput = document.getElementById('age');
const offertaOutput = document.getElementById('offerta');
const carrozzaOutput = document.getElementById('carrozza');
const codiceOutput = document.getElementById('codice');
const costoOutput = document.getElementById('costo');
