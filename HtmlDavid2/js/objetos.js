//Crea un objeto Javascript que se llame cliente, dentro del objeto coloca las siguientes propiedades:
//nombre del cliente, direccion_fisica, email ,tlf y persona_contacto. Al crear el objeto colócale valores a cada propiedad.

//Añade al primer objeto un método (función) llamado toString, dicho método no recibe parámetros de entrada y devuelve una cadena
//de caracteres con los datos del as propiedades de ese objeto, indicando el nombre del objeto el nombre de cara propiedad
//y el valor asociado a cada propiedad
var cliente={
  nombre: "Hiber",
  direccion: "Paseo de la Castellana",
  email: "joseluis@hiber.com",
  telefono: 648144297,
  persona_contacto: "Jose Luis",
  toString: function(){
    return "cliente[nombre:"+this.nombre+",direccion:"+this.direccion
           +",email:"+this.email+",persona_contacto:"+this.persona_contacto+"]";
  },
  getNombre: function(){
    return this.nombre;
  },
  setNombre: function(){
    this.nombre = "Sopla Cogotes"
  },
  facturacion:[4,25],
  addFactura: function(numero){
  this.facturacion.push(numero);
  },
  totalFacturacion: function(facturacion){
    let total = 0;
    for (let i = 0; i < facturacion.length; i++){
      total+=facturacion[i];
    }
      console.log(total);
  },
  direccionFiscal:{
    calle: "La que te de la gana",
    ciudad: "Madrid",
    piso: "28",
    puerta: "4",
    codigoPostal: 28460
  }
};

//Crea otro objeto con el nombre segundoCliente con las mismas propiedades pero con distintos valores.
var segundoCliente={
  nombre: "Gestamp",
  direccion: "Calle del Ombu",
  email: "atencion@gestamp.com",
  telefono: 648144297,
  persona_contacto: "Angeles Martinez",
  toString: function(){
  return "cliente[nombre:"+this.nombre+",direccion:"+this.direccion
         +",email:"+this.email+",persona_contacto:"+this.persona_contacto+"]";
       }
     }


//Imprime por pantalla el nombre del primer objeto
console.log(cliente.nombre);

//Imprime por pantalla el email del segundo objeto
console.log(segundoCliente.email);

//Cambia el nombre del primero objeto por el valor "Maderas Peralta"
cliente.nombre="Maderas Peralta";

//Imprime el valor del nombre del primer objeto
console.log(cliente.nombre);

//Cambia el email del segundo objeto por el valor "info@micasuci.com"
segundoCliente.email="info@micasuci.com"

//Imprime el email por pantalla del segundo objeto
console.log(segundoCliente.email);

//Imprime por pantalla el valor devuelto por el método toString del primer objeto
console.log(cliente.toString());

//Imprime por pantalla el valor devuelvo por el método toString del segundo objeto
console.log(segundoCliente.toString());

//Utiliza todos los métodos definidos en el primer objeto dentro de tu código JS
console.log(cliente.getNombre());

//Introduce una nueva propiedad en el objeto cliente (1º) llamada facturacion, su valor inicial será un array de 2
// posiciones con dos elementos de tipo numérico 4 y 25
//imprime por pantalla el valor de la primera posición del array almacenado en la propiedad facturacion del primer objeto
console.log(cliente.facturacion[0]);

//Haz un método dentro del primer objeto llamado addFactura, al que se le pase como parámetro un número,
//que almacene ese valor como una nueva posición al final del array de facturacion del primer objeto
//Al imprimir por pantalla el número de elementos de array facturacion debería indicar que tiene 3 elementos
cliente.addFactura(7);
console.log(cliente.facturacion);

//Crea un nuevo método en el primer objeto que sea capaz de devolver el total de facturación de ese objeto, total de los valores almacenados en
// el array facturacion del primero objeto.El método se llamara totalFacturacion
//Imprime por pantalla el valor devuelto por la llamada al método totalFactuacion del primer objeto
cliente.totalFacturacion(cliente.facturacion);

//Coloca en el primer objeto una nueva propiedad llamada direccionFiscal, el valor de esta propiedad será un objeto, las propiedades de este nuevo objeto serán,
//calle, ciudad, piso, puerta y CP.
//Imprime por pantalla el valor de la ciudad de la dirección fiscal del primer objeto
console.log(cliente.direccionFiscal.ciudad);

//Cambia el CP de la dirección fiscal del primer objeto e imprime por pantalla dicho valor.
cliente.direccionFiscal.codigoPostal = 20000;
console.log(cliente.direccionFiscal.codigoPostal);
