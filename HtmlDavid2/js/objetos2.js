//Crea una clase que permita disponer de las características de una moto, la clase de llamará Moto.
//Di que la clase Moto tiene una característica llamada matricula
//coloca dentro de la clase Moto otra propiedad llamada km

class Moto {
/*  marca;
  matricula;
  km;*/
    constructor( Matricula="", Km=50) {
        this.marca = "";
        this.matricula = Matricula;
        this.km = Km;
    }
    getMatricula(){
        return this.matricula;
    }
    getKm(){
      return this.km;
    }
}
//Utilízalos desde el objeto miburra
//Haz que el constructor de la clase Moto pueda disponer de dos parámetros para las dos propiedades de Moto: km y matricula
//Construye otro objeto de clase moto, llamando a este nuevo constructor con dos parámetro y comprueba que ha rellenado correctamente las
//propiedades de ese nuevo objeto con los parámetros del constructor
//Crea un objeto de la clase Moto llamado miburra
var miburra = new Moto("SA1234H", 80);
//Cambia la propiedad matrícula de miburra por el valor "SA1234H"
//miburra.matricula = "SA1234H";

//imprime por pantalla el valor de la matrícula de miburra
console.log(miburra.getMatricula());
console.log(miburra.getKm());
//console.log(miburra.getKm());
//Haz que cada vez que se cree un objeto de la clase Moto ese objeto tenga 0 km
var chochete = new Moto();
//Demuéstralo creando otro objeto de la clase Moto e imprimiendo este valor por pantalla
console.log(chochete.getKm());



//Crea una clase llamada Animal, que tenga una propiedad  llamada edad, que sea inicializada a 0
//El constructor de Animal le podré pasar la edad para rellenar la edad del Animal (reescribir el constructor)
class Animal{
  constructor(edad){
    this.edad=edad;
  }
}

//Crea un objeto de la clase Aminal, llamado animalico
var animalico = new Animal(4);

//Imprime por pantalla el objeto animalico y la propiedad edad del objeto
console.log(animalico.edad);

//Cambia la edad de animalico a 3
animalico.edad = 3;

//Imprime por pantalla la edad de animalico
console.log(animalico.edad);

//Modificar el constructor de la clase Gato para que admita un parámetro que sea la edad del animal, dentro del constructor de Gato
// llamar la constructor de Animal para pasar la edad que nos pasan como parámetro al contructor de Gato
//Crea una nueva clase Gato que herede de Animal
//Incluir en la clase Gato un nuevo parámetro llamado nombre inicializarlo a ""
//Modificar el constructor de Gato para incluir un nuevo parámetro que sea el nombre del Gato
class Gato extends Animal{
  constructor(edad, nombre){
    super(edad);
    this.nombre = nombre;
  }
}
//Crear un objeto de la clase Gato, llamado gatete, pasando como parámetro la edad 1
var gatete = new Gato(11);
console.log(gatete.edad);

//Crea un objeto llamado animalico2 que se construya en base a la clase Animal, pasa como parámetro al constructor de Animal el número 2
var animalico2 = new Animal(2);
console.log(animalico2.edad);

//Crear un nuevo objeto llamado gatete2 de la clase Gato, pasándole como parámetro 0 a la edad y nombre "Nyska"
var gatete2 = new Gato(0,"Nyska");
//Imprime el objeto por pantalla, así como su edad y su nombre
console.log(gatete2.edad, gatete2.nombre);
