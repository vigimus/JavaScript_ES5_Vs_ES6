//Let och const är nya variabler deklareringar
//var behövs inte

//Const betyder constant
//Const --> innebär att du inte kan hålla på att ändra om världet senare i t.ex funktioner det värdet kommer vara kvar
 const player = "bobby";
 let erfarenhet = 100;
 //Om det stod "var" istället för let så hade inget nytt scope skapats
 //Båda värdena hade gett true istället
 //Var --> variable var något man använde för, det är rekommenderat att man helt släpper den
 let wizardLevel = false;

 if ( erfarenhet > 90 ) {
let wizardLevel = true;
//På insidan får vi resultatet true, så varje gång den hamnar under
//{ } curly brackets så kommer den här let skapa ett nytt scope för den här situationen
console.log('inside', wizardLevel);
 }
 //På utsidan får vi resultatet false
 console.log('outside', wizardLevel);

//Hur man ska tänka kring det hela. Tummregeln är att alltid använda const
//Om du vet att något inte ska ändra värde alls över tid annars let


//Nedan ser man ett exempel där det inte är smart att använda const i och 
 //Med att objektet obj att ändra objektets namn/värde saker innuti däremot
 //Då får man felmeddelandet att objektet kan inte ändras på grund av 
 //TypeError: Assigment to constant variable.
 const obj = {
    player: 'bobby',
    experience: 100, 
    wizardLevel: false

 }


 //Nedan får vi exempel på destructuring 
 //Vi tar hjälp av vårt objekt ovanför som heter 'obj' för det här

 const player = obj.player;
 const experience = obj.experience;
 let wizardLevel = obj.wizardLevel;
//Det här gör att vi kan använda variablarna player eller experience
 //i det här fallet var som helst i vår kodbas
 const { player, experience } = obj;
 let { wizardLevel } = obj;


//Exempel på objekt properties i JS
 const name = "john snow";

 const obj2 = {
    //Nu i nyare versioner av JavaScript har vi något dynamiskt
    //Så slipper man hårddkodade saker inuti objekt
 [name]: 'hello',
 //Hehe stoppa in ; på slutet här mental notering
 [1 + 2]: 'hihi'
 }

 const a = "Simon";
 const b = true;
 const c = {};

 const obj3 {
    //Istället för att skriva på det här jobbiga sättet som man gjorde i äldre Java
    //a: a,
   //b: b,
    //c: c

    //Ersätts nu allt det med
    a,
    b,
    c

 }


//Exempel på template strings
 const name2 = "Sally";
 const age = 34;
 const pet = "horse";
 //Det som man skrev så här förut kan man istället skriva som
 //const greetings = "Hello " + name + " you seem to be doing " + greetings

 //Som det här:
 //""""""":::;;;; kräver inte längre \ för varje e.t.c} så slipper man även alla öppna stängda '' "" och +
 const greetingsBest = `""""""":::;;;; Hello ${name2} you seem to be ${age-10}. What
 a lovely ${pet} you have`;


 function greet(name='', age=30, pet='cat') {
 return `Hello ${name2} you seem to be ${age-10}. What a lovely ${pet} you have`;
 }

//För att inte köra kod i varandra så behöver man såklart lägga till "great()"
 //Om man vill köra funktionen greet
 //I konsolen skulle man dynamiskt kunna ändra funktionens greets värde genom att
 //Skriva något i denna stilen greet("Alexandra", 70, "Giraff"); då blir resultatet som spottats ut annorlunda

//Symbol exempel i JavaScript
 //Används för att göra bättre objekt properties inte till så mycket mer
 let sym1 = Symbol();
 //Om man i konsolen skulle gjort sym2 === sym3 så skulle man få värdet false
 let sym2 = Symbol('foo');
 let sym3 = Symbol('foo');

 //Exempel på arrow functions

//Det gamla sättet att skriva det på
 //function add(a, b) {
 //    return a + b;
// }


//Man kan säga istället för tidigare function function_name(argument) { // body...}
 //Kan man göra samma sak med den nya funktion =>
 //Om man bara vill göra en uträckning så slipper man även return
 const add = (a, b) => a + b;



















