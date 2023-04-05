# JSnacks

## Consegna

**jSnack 1**

Abbiamo un elenco utenti (nome, cognome, età). Trovare i minorenni e gli over 65

**jSnack 2**

Abbiamo un elenco degli studenti di una facoltà. Ogni studente ha un nome, un cognome, un numero di matricola e un elenco di voti. Dobbiamo creare un nuovo elenco dove ogni studente ha un nome-cognome, matricola e media voti

**jSnack 4**

Abbiamo un elenco degli studenti di una facoltà , identificati da _id_, _Nome_ e _somma totale_
dei loro voti di esame...

1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);

2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70

3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120


**jSnack 5**

Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà : nome e peso. Stampare in console la bici con peso minore utilizzando destructuring e template literal

**jSnack 6**

Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà : punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


**BONUS**

Aggiungere la foto o l’avatar dello studente e stampare tutti gli studenti con delle card HTML in ordine alfabetico per cognome.

**BONUS 2**

Stampare in pagina oltre che in console!

## Steps

**Steps jSnacks 1:**

1. Creiamo un array con all'interno degli oggetti

2. Ogni oggetto ha le seguenti proprietà:

    - Nome
  
    - Cognome

    - Età

3. Creiamo due filter:

    - Uno che aggiunga in un array gli utenti con più di 65 anni

    - Uno che aggiunga in un array gli utenti con meno di 18 anni

**Steps jSnacks 2:**

1. Creiamo un array  con all'interno degli oggetti con le seguenti proprietà:

    - Nome

    - Cognome

    - Numero di matricola

    - Un array con un elenco di voti

2. Creare un nuovo array con gli oggetti aventi le proprietà modificati tramite l'uso di  un .forEach


**Seps jSnacks 4:**

1. Creare una lista contenente il loro nome tutto in maiuscolo.

2. Creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70

3. Creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

**Steps jSnack 5:**

1. Creare un array di oggetti

2. Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: 

    - Nome
    
    - Peso 

4. Controllare qual è la bici col peso minore

3. Destructuring dell'oggetto

4. Stampare a schermo utilizzando il template literal

**Steps jSnack 6:**

1. Creare un array di oggetti di squadre di calcio. 

2. Ogni squadra avrà diverse proprietà: 

    - Nome
    
    - Punti fatti
    
    - Falli subiti.
    
3. L’unica proprietà da compilare è nomi, le altre saranno tutte settate a 0.

4.  Generare numeri random al posto degli 0 nelle proprietà: 

    - Punti fatti
    
    - Falli subiti.
    
5. Destrutturando gli oggetti creiamo un nuovo array

6. Gli elementi del nuovo array conterranno solo:

    - Nomi
    
    - Falli subiti

7. Stampiamo tutto in console.

**Steps Bonus:**

1. Creare un array contenente degli oggetti

2. Ogni oggetto ha le seguenti proprietà:

    - Nome e cognome

    - Numero di matricola

    - Voti

    - Foto

3. Stampare nel DOM una card avente tutti i dati dell'oggetto

## References

[W3Schools .sort()](https://www.w3schools.com/jsref/jsref_sort.asp)

[Developer Mozzilla .sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

[JavaScript Tutorial .sort()](https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/)

[freeCodeCamp .sort()](https://www.freecodecamp.org/news/how-to-sort-alphabetically-in-javascript/)