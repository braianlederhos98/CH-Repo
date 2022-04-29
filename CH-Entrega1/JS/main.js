let talle = parseInt(prompt('Talles de calzados disponibles :\n'+'\n36'+'\n37'+'\n38'+'\n39'+'\n40'+'\n41'+'\n42'+'\n43'+'\n44'+'\n'+'\nEscriba ESC para salir'))

while (talle != "ESC") {

    switch (talle) {
        case 36:
            alert('Nike: Vapormax','Nike: Goretex');
            break;
        case 37:
            alert('Nike: Airmax','Nike: Revolution 6');
            break;
        case 38:
            alert('Adidas: Superstar','Nike: Jordan Retro 4');
            break;
        case 39:
            alert('Adidas: Stan Smith',);
            break;
        case 40:
            alert('Puma: RC-Z');
            break;
        case 41:
            alert('Nike: Goretex');
            break;
        case 42:
            alert('Adidas: Runfalcon');
            break;
        case 43:
            alert('Nike: SB');
            break;
        case 44:
            alert('Nike: Jordan Retro');
            break;
        case 45:
            alert('Nike: Revolution 6','Nike: Goretex');
            break;   
        default:
            alert('Tu talle no se encuentra disponible')
            break;
    }

    talle = prompt('Talles de calzados disponibles :\n'+'\n36'+'\n37'+'\n38'+'\n39'+'\n40'+'\n41'+'\n42'+'\n43'+'\n44'+'\n'+'\nEscriba ESC para salir')

}

