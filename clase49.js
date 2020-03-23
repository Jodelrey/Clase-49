//DESTRUCTURING

const size = {
    width: 4,
    height: 5,
    length: 2
}

const volume = size.width*size.height*size.length

const msg = `tamaño de la caja
-Ancho ${size.width}
-Alto ${size.height}
-Largo ${size.length}`

//Para ahorrar se pueden crear variables
const width = size.width
const height = size.height
const length = size.length

//Con Destructuring
const {width, height, length} = size
//Desestructurar es desarmar el objeto. Tomamos cada una de sus propiedades y creamos variables.
//Es una forma mas rapida de declarar variables para acceder a propiedades de un objeto.
//A la derecha va el objeto y a la izquierda las variables. Tienen que tener exactamente el mismo nombre que las propiedades.
//Se pueden poner valores por defecto en caso de que un objeto no tenga todas las propiedades.
//Se puede hacer destructuring de algunas propiedades, solo las que se necesiten para trabajar
// El parametro de la funcion se tiene que pasar como objeto vacio, porque caso contrario no se puede desestructurar

const getVolume = (size = {}) => {
    const {width, height, length = 1} = size
    return width*height*length
}

//Se puede desestructurar y cambiarle el nombre a las variables 
const {width: ancho, height: alto, length: largo = 1} = size

 const getVolume = (size = {}) =>{
     const {
         width: w = 1,
         height: h = 1,
         length: l = 1
     } = size
     return w*h*l
 }


//Para desestructurar objetos dentro de objetos
//No se crea el objeto interno, solo se desestructuran las propiedades de ese objeto
 const person = {
     fullName: {
         firstName: 'Leia',
         lastName: 'Skywalker'
     }
 }

 const {fullName:{firstName: name = "",lastName: surname = ""}}=person

 //Tambien se puede desestructurar un objeto al momento de pasarlo como parametro. No es aconsejable

 const calculateVolume = ({width, height, length}) =>{
     return width*height*length
 }

//Tambien se pueden desestructurar arrays. La diferencia con objetos es que para asignar los nombres a los elementos debemos respetar si o si su orden dentro del array

const[manzana, banana] = frutas

//EJERCICIOS EN REPO DE CLASE 48
