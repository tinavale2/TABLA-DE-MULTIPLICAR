// Nombre: Paula Alejandra Moncada Castiblanco
// Sara Katherin Fuya Caceres
// Valentina Amaya Mendez
// Juan Jose Sanchez
// Ficha: 2470980, Analisis y Desarrollo de Software.


// do: La sentencia (hacer mientras) crea un bucle que ejecuta una sentencia especificada, hasta que la condición de comprobación se evalúa como falsa. 
// let: permite declarar variables limitando su alcance (scope) al bloque, declaración, o expresión donde se está usando. 
// prompt: muestra un diálogo con mensaje opcional, que solicita al usuario que introduzca un texto.
// if: es una estructura de control utilizada para tomar decisiones. Es un condicional que sirve para realizar unas u otras operaciones en función de una expresión. Funciona de la siguiente manera, primero se evalúa una expresión, si da resultado positivo se realizan las acciones relacionadas con el caso positivo.
// alert: devuelve un cuadro de alerta. Se usa para dar información sobre algo concreto, por ejemplo, que se debe introducir un texto en vez de un número.


do {
    do{
        let nueva_tabla = prompt ("Que tabla de multiplicar desea obtener?, (tabla predeterminada 10)");

        tabla= Number(nueva_tabla)
        

        if (Number.isNaN(tabla)=== true){
            alert("Digite solo numeros")
        }

        if (tabla === 0 || tabla === ""){
            tabla = 10;
        }

        document.write("<br>")

    }while(Number.isNaN(tabla) === true);
    multi = ' ';
    document.write("<br>")
    for (let i= 1; i < 11; i++){
        multi = multi+' '+(tabla+ "x"+i+"="+tabla*i +"<br>");
        console.log = ' ';
        
    }
    
    document.write(multi)
    document.write("<br>")
    
    valid= confirm('Desea otra tabla de multiplicar?');

} while(valid===true);

// while: La cláusula default es opcional y representa las instrucciones que se ejecutarán en caso de que no se verifique ninguno de los casos evaluados.
// confirm: La función confirm muestra una ventana modal con una pregunta y dos botones: OK y CANCELAR. El resultado es true si se pulsa OK y false en caso contrario.
// for: Este bucle se utiliza para repetir una o más instrucciones un determinado número de veces.