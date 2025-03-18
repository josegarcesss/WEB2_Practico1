const obj1 = { pelo: 'largo', barba: true };
const obj2 = { edad: 25, pelo: 'largo', barba: true };

let res1 = document.getElementById("res1");
let res2 = document.getElementById("res2");

let contiene = (obj1, obj2) => {
    let resultado = true;
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    for (const element1 of keys1) {
        let aux = false;
        keys2.forEach(element2 => {
            if (element1===element2) {
                aux =true;
            }
        });
        if(aux===false){
            resultado=false;
        }
    }
    return (resultado);
}

function mostrar() {
    res1.innerText = `(Obj1, Obj2) = ${contiene(obj1, obj2)}`;
    res2.textContent = `(Obj2, Obj1) = ${contiene(obj2, obj1)}`;
}