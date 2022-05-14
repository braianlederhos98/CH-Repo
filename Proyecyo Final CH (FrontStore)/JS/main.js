const inscripNews = prompt('Subscribite a nuestro newsletter para recibir novedades y descuentos'+'\n'+'Ingresá tu mail');

const consulta1 = parseInt(prompt('Bienvenido! Qué operación quiere realizar:\n'+'(Introducir unicamente el número)'+'\n'+'1 - Realizar una compra'+'\n'+'2 - Consultar costo de envío'));

let consulta2 = parseInt(prompt('Introducir el número de la remera que quieras añadir al carrito'+'\n'+'1 - Remera React: $1850'+'\n'+'2 - Remera VueJS: $1650'+'\n'+'3 - Remera Angular: $1650'+'\n'+'4 - Remera HTML5: $1500'+'\n'+'5 - Remera NodeJS: $1650'+'\n'+'6 - Remera SASS: $1650'+'\n'+'7 - Remera JavaScript: $1850'+'\n'+'0 - Para salir escribe "X"'));


const totalCarrito = new Array;
let totalPagar = 0;
const mails = new Array;

const agregarMail = (mail)=>{

    if (mail != '') {
        mails.push(mail)
    }
    
};

const crearCarrito = () => {

    while (consulta2 != 0) {

        if (consulta2 == 1) {
            totalCarrito.push(1850)
        } else if(consulta2==2){
            totalCarrito.push(1650)
        } else if(consulta2==3){
            totalCarrito.push(1650)
        } else if(consulta2==4){
            totalCarrito.push(1500)
        } else if(consulta2==5){
            totalCarrito.push(1650)
        } else if(consulta2==6){
            totalCarrito.push(1650)
        } else if(consulta2==7){
            totalCarrito.push(1850)
        } else{
            console.log('Número no válido')
        }
        consulta2 = parseInt(prompt('Introducir el número de la remera que quieras añadir al carrito'+'\n'+'1 - Remera React: $1850'+'\n'+'2 - Remera VueJS: $1650'+'\n'+'3 - Remera Angular: $1650'+'\n'+'4 - Remera HTML5: $1500'+'\n'+'5 - Remera NodeJS: $1650'+'\n'+'6 - Remera SASS: $1650'+'\n'+'7 - Remera JavaScript: $1850'+'\n'+'0 - Para salir escribe "X"'));
        
    }

    for (let i = 0; i < totalCarrito.length; i++) {
        totalPagar += totalCarrito[i];
    }

    console.log(totalCarrito);
    console.log(totalPagar);
    alert(`Tu total a pagar es de $${totalPagar}`)   
}

const tareaRealizar = (consulta1)=>{

    if(consulta1===1){
        crearCarrito()
    } else if(consulta1 === 2){
        alert('Los costos de envío son:'+'\n'+'CABA: $250'+'\n'+'Buenos Aires Interior: $500'+'\n'+'Resto del país: $650')
    } else {
        console.log('Número no válido')
    }

}

agregarMail(inscripNews);
console.log(mails);
tareaRealizar(consulta1);
