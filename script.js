//Uppgift 2
{
  var worst = "rat";
  let best = "dog";
  const category = "animal";

  console.log(category);
  console.log(worst);
  console.log(best);
}

console.log(worst);
/* Reflektion uppgift 2: 
 1. var kan användas utanför och innuti blocket
    medans let och const bara fungerar inom blocket.
 2. Jag upptäckte hur dessa nyckelord skiljer sig gällande block
    när jag testade att placera console.log() före, i och efter blocket.
    När jag skulle testa att skriva ut let och const med console.log()
    före och efter blocket fick jag felmeddelanden. 
    Att skriva ut alla variabler med console.log() innuti blocket
    fungerar då man kan komma åt alla där. Och den enda variabeln
    som nås efter blocket är var.

*/

//Uppgift 3 och 4
const add = (num1, num2) => {
  console.log(num1 == 0);
  console.log(num2 === "0");
  console.log(num2 === 0);
  console.log(num1 == NaN);

  console.log(num1 ? "truthy" : "falsy");

  if (
    (num1 !== null || num1 !== undefined) &&
    (num2 !== null || num2 !== undefined) &&
    typeof num1 === "number" &&
    typeof num2 === "number"
  ) {
    return num1 + num2;
  }
};

//Uppgift 5
const num1 = 0;
let arg1;
let sum = false;

console.log(add(sum, 1));
console.log(add("0", 3));
console.log(add(3, "num1"));
console.log(add(-5, num1));
console.log(add(arg1, 7));
console.log(add());

console.log(num1);
console.log(sum);

/*Reflektion uppgift 3:
  1. Funktionen fungerar på samma sätt till en början.
      Skillnaden är att när Man skapar en variabel med nyckelordet const 
      så kan man inte ge variabeln (add) en ny funktion efter. 
      Detta kan man göra om jag hade använt let istället.
  2. function add(num1, num2) {
        return num1 + num2;
      }
  3. När funktionen retunerar något, innebär att den skickar 
       tillbaka ett värde till där funktionen anropades.
       I denna uppgift är det summan av num1 och num2.

  Reflektion uppgift 4:
  1. Det är ett kortare sätt att skriva ett villkor på.
       Ternary operator använder ? och : som väljer mellan två resultat,
       om villkoret är sant eller falskt.
       Den skiljer sig från en if-sats på så vis att den skrivs med
       färre rader kod och utan måsvingar.
  2. Två stycken == jämför värden men javascript får omvandla datatyper.
       Tre stycken === jämför både värden och datatyper, omvandalr inte.
  3. Jag använde !== null och !== undefined som kontrollerar
       att num1 och num2 inte är null. Samt att de inte saknar värde.
       !== används som en strikt jämförelse (inte lika med).
       

  Reflektion uppgift 5:
  1. Parameter är de namn som står inom paranteser i funktionen,
     som tar emot ett värde. I denna labb är num1 och num2 parametrar.
     Variabel används för att lagra ett värde exempelvis sum 
     som har värdet false.
     Argument är de värde som skickas in parametern när man anropar en funktion.
  2. Outputen jag får allra sist (värdet i num1) är 0 
     då jag skapade variabeln const num1 = 0;
     Även fast det är samma namn som på paramentern i uppgift 3 (innuti funktionen),
     så är det två olika variabler, parametern i funktionen påverkar inte variabeln.
  3. Jag väljer att göra en genomgång av anrop 4:
     Testet är add(-5, num1) num1 får värdet -5 och num2 får 0 (då const num1 = 0).
     Jämförelserna och villkorsoperatorn ger: false, false, true, false, operaton ger truthy.
     If-satsen kontrollerar att num1 och num2 inte är null eller unddefined,
     samt att de båda är numreriska värden. Villkoren uppfylls och if-satsen släpps igenom.
     Funktionen retunerar summan num1 + num2 alltså -5 + 0 vilket blir -5.
     Test 1: restunerar undefined, sum = false (är inget nummer).
     Test 2: retunerar undefined, "0" är en textstäng (är inget nummer).
     Test 3: retunerar undefined, "num1" är en textsräng (är inget nummer).
     Test 5: retunerar undefined, arg1 (inget värde).
     Test 6: retunerar undefined, inga argument skickas in till num1 och num2.      
*/
