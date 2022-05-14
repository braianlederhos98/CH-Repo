let saludo1 = prompt('Hola, ingresá tu nombre y apellido');
let saludo2 = prompt('Ingresa tu correo para recibir novedades (opcional)');
let consulta = parseInt(prompt("Hello Stranger! Colocá solo el código de la remera que quieras comprar."+"\n"+"1. Remera React"+"\n"+"2. Remera JavaScript"+"\n"+"3. Remera NodeJS"+"\n"+"4. Remera Angular"+"\n"+"5. Remera Python"));
let consulta2 = parseInt(prompt("Introducí el número de la opción acorde a la ubicación donde se enviará el producto:"+"\n"+"1-CABA"+"\n"+"2-Buenos Aires Interior"+"\n"+"3-Resto del país"+"\n"));
let consulta3 = parseInt(prompt("Introducí el número del correo que prefieras: "+"\n"+"1-OCA"+"\n"+"2-Correo Argentino"));

const remeras = ['React','JavaScript','NodeJS','Angular','Python']
const correos = ['OCA', 'Correo Argentino']
const clienteDatos = new Array;

const ingresoDatos = (saludo1,saludo2)=>{

    if (saludo1 != '') {
        clienteDatos.push(saludo1)  
    } else {
        alert('Recarga la página')
    }

    if (saludo2 != '') {
        clienteDatos.push(saludo2)  
    }

}

const ubicacion = {
        1:'200',
        2:'500',
        3:'650'
    }

class Cliente {
    
    constructor(remera, ubicacion, correo){
        this.remera = remera,
        this.ubicacion = ubicacion,
        this.correo = correo
    }

    mensaje() {
        alert(`Tu remera de ${this.remera}, será entregada por ${this.correo} con un valor de $${this.ubicacion}`)
    }

}

const primeraConsulta = (consulta) =>{

    if (consulta===1) {
        consulta = remeras[0]
    } else if (consulta===2){
        consulta = remeras[1]
    } else if (consulta2===3){
        consulta = remeras[2]
    }else if (consulta2===4){
        consulta = remeras[3]
    }else if (consulta2===5){
        consulta = remeras[4]
    } else {
        consulta = alert('Número no válido, recargar con tecla F5')
    }
    return consulta
}

const segundaConsulta = (consulta) =>{

    if (consulta===1) {
        consulta = ubicacion[1]
    } else if (consulta===2){
        consulta = ubicacion[2]
    } else if (consulta2===3){
        consulta = ubicacion[3]
    } else {
        consulta = alert('Número no válido, recargar con tecla F5')
    }
    return consulta
}

const terceraConsulta = (consulta) =>{

    if (consulta===1) {
        consulta = correos[0]
    } else if (consulta===2){
        consulta = correos[1]
    } else {
        consulta = alert('Número no válido, recargar con tecla F5')
    }
    return consulta
}

const Cliente1 = new Cliente(primeraConsulta(consulta), segundaConsulta(consulta2), terceraConsulta(consulta3))

ingresoDatos(saludo1,saludo2);
console.log(clienteDatos);
Cliente1.mensaje();
