const obj1 = { edad: 25, pelo: 'largo', barba: true };
const obj2 = { pelo: 'largo', barba: true };



let contiene = (obj1, obj2) => {
    Object.keys(obj1).forEach(element1 => {
        let aux= false;
        Object.keys(obj2).forEach(element2 => {
           if(element1 !== element2){
            return false;
           }
        });
    });
     return true;   
    };

document.getElementById("res1").textContent = `(obj1, Obj2) = ${contiene(obj1,obj2)}`;


document.getElementById("res2").textContent = `(obj2, Obj1) = ${contiene(obj2,obj1)}`;

