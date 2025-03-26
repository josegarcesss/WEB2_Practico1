const obj1 = { pelo: 'largo', barba: true };
const obj2 = { edad: 25, pelo: 'largo', barba: true };

let res1 = document.getElementById("res1");
let res2 = document.getElementById("res2");
let res3 = document.getElementById("res3");

let contiene = (obj1, obj2) => {
    let resultado = true;
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    for (const element1 of keys1) {
        let aux = false;
        keys2.forEach(element2 => {
            if (element1 === element2) {
                aux = true;
            }
        });
        if (aux === false) {
            resultado = false;
        }
    }
    return (resultado);
}

function mostrar1() {
    res1.innerText = `(Obj1, Obj2) = ${contiene(obj1, obj2)}`;
    res2.textContent = `(Obj2, Obj1) = ${contiene(obj2, obj1)}`;
}

document.getElementById("btn1").addEventListener("click", mostrar1);




const getDiaSemana = (fecha) => {
    const dias = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
    return dias[fecha.getDay()];
};

const getMes = (fecha) => {
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    return meses[fecha.getMonth()];
};


const mostrar2 = () => {
    const ahora = new Date();

    let diaSemana = getDiaSemana(ahora);
    let dia = ahora.getDate();
    let mes = getMes(ahora);
    let anno = ahora.getFullYear();

    let horas = ahora.getHours();
    let ampm = horas >= 12 ? "PM" : "AM";
    horas = horas % 12 || 12;
    const minutos = ahora.getMinutes().toString().padStart(2, "0");
    const segundos = ahora.getSeconds().toString().padStart(2, "0");

    const mensajeEj2 =
                `Hoy es ${diaSemana}, ${dia} de ${mes} de ${anno}<br>
                La hora actual es ${horas}:${minutos}:${segundos} ${ampm}`;

    res3.innerHTML = mensajeEj2;

};


document.getElementById("btn2").addEventListener("click", mostrar2);

