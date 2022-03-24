
document.getElementById('selecionado').click();
function abrirtab(event, idtab){
    var modulosabertos = document.getElementsByClassName('modulo');

    for(var i=0; i < modulosabertos.length; i++){
       modulosabertos[i].style.display = 'none';
    }
    
    var buttonselecionados = document.getElementsByClassName('button');
    for(var i=0; i < buttonselecionados.length; i++){
        buttonselecionados[i].className = buttonselecionados[i].className.replace('ativo','');
     }
    document.getElementById(idtab).style.display='block';

    event.currentTarget.className+=' ativo';
    
}