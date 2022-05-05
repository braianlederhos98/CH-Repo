let consulta = parseInt(prompt("Hello Stranger! Colocá solo el código de la remera que quieras comprar."+"\n"+"1. Remera React"+"\n"+"2. Remera JavaScript"+"\n"+"3. Remera NodeJS"+"\n"+"4. Remera Angular"+"\n"+"5. Remera Python"));
let consulta2 = parseInt(prompt("Introducí el número de la opción acorde a la ubicación donde se enviará el producto:"+"\n"+"1-CABA"+"\n"+"2-Buenos Aires Interior"+"\n"+"3-Resto del país"+"\n"));
let consulta3 = parseInt(prompt("Introducí el número del correo que prefieras: "+"\n"+"1-OCA"+"\n"+"2-Correo Argentino"));

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

    if (consulta==1) {
        consulta = 'React'
    } else if (consulta==2){
        consulta = 'JavaScript'
    } else if (consulta2==3){
        consulta = 'NodeJS'
    }else if (consulta2==4){
        consulta = 'Angular'
    }else if (consulta2==5){
        consulta = 'Python'
    } else {
        consulta = alert('Número no válido, recargar con tecla F5')
    }
    return consulta
}

const segundaConsulta = (consulta) =>{

    if (consulta==1) {
        consulta = '200'
    } else if (consulta==2){
        consulta = '500'
    } else if (consulta2==3){
        consulta = '650'
    } else {
        consulta = alert('Número no válido, recargar con tecla F5')
    }
    return consulta
}

const terceraConsulta = (consulta) =>{

    if (consulta==1) {
        consulta = 'OCA'
    } else if (consulta==2){
        consulta = 'Correo Argentino'
    } else {
        consulta = alert('Número no válido, recargar con tecla F5')
    }
    return consulta
}

const Cliente1 = new Cliente(primeraConsulta(consulta), segundaConsulta(consulta2), terceraConsulta(consulta3))

Cliente1.mensaje();
