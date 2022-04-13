var objetos = ['Cadeira','Impressora','Garfo'];

function adicionar(){
    var item = document.getElementById("input").value;
    console.log(item);
    if (!item) { //negando existencia do objeto
        console.log('Informe um valor válido')
    } else {
        if (objetos.includes(item) == true) {
            console.log('Objeto já foi adicionado')
        } else {
            objetos.push(item);
            console.log(objetos);
            document.getElementById("input").value='';       
        }
    } 
}

function ordenar(){
    objetos.sort();
    console.log(objetos);
}