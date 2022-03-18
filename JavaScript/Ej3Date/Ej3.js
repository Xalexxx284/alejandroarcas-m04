// Declaracion de la fecha
let date = new Date();
// Variables para las fechas
let day = date.getDate()
let month = date.getMonth()
let year = date.getFullYear()
let weekDay = date.getDay()
let hourDay = date.getHours()
let minutes = date.getMinutes()

// Ej1 - Obtén la fecha de hoy y sacala por pantalla.

function getCurrentDate(){
    console.log("Ej1 --> " + day + "-" + (month+1) + "-" + year)
}
getCurrentDate()

// Ej2 - Según el día de la semana y la hora actual, informa por pantalla si estás o no en clase de M04.

function imInM04(){

    let userWeekDay = parseInt(prompt("Introduce el dia de la semana (0-6)"))
    let userHourDay = parseInt(prompt("Introduce la hora del dia (0-23)"))
    let userMinutes = parseInt(prompt("Introduce los minutos"))

    let imInClass = false


    if (userWeekDay == 1){
        if (userHourDay > 11 && userHourDay <= 12){
             
        }
    }
    else if (userWeekDay == 5){
        if (userHourDay >= 8 && userHourDay < 10){
            if (userMinutes > 0 && userMinutes < 50){
                imInClass = true
            }   
        }
    }

    if (imInClass == true){
        console.log("Ej2 --> Tienes clase de M04")
    }
    else {
        console.log("Ej2 --> No tienes clase de M04")
    }
}
imInM04()
