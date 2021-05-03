let input = document.querySelector('#add');
let boton = document.querySelector('#boton');
let list = document.querySelector('#list');
let el = document.getElementsByTagName('li');

boton.addEventListener('click',() => {
    let txt = input.nodeValue;
    if(txt === ""){
        alert('Tienes que escribir algo')
    }else{
        let li = document.createElement('li');
        li.innerHTML = txt;
        list.insertBefore(li, list.childNodes[0]);
        input.value = '';
    }

})

list.addEventListener('click',e =>{
    if (e.target.tagName == 'LI') {
        e.target.classlist.toggle('checked');
    }    
})
