function fibonacci(num) {

    var n1 = 0;
    var n2 = 1;
    var suma = 0;
    lista = []
  
    for(let i = 1; i <= num; i++){

       suma = n1 + n2; 
 
       n1 = n2; 
 
       n2 = suma; 

       lista.push(n1)

    }
  
    return lista;
 }
 
 console.log(fibonacci(6));
