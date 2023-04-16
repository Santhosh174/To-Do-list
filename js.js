/*delete element*/
const list=document.querySelector('#item ul');
list.addEventListener('click',function(e){
    if(e.target.className=='delete'){
        const li =e.target.parentElement;
        list.removeChild(li);
    }
});

/*create element*/
const del=document.forms['add'];
var inp=document.getElementById("summa");
del.addEventListener('submit',function(e){
    e.preventDefault();
    const val=del.querySelector('input[type="text"]').value;
    if(val==""){
        inp.style.border="2px solid red";
        inp.placeholder="Enter a valid item";       
        }
    else{
        inp.style.border="none";
    const li=document.createElement('li');
    const new_ele=document.createElement('span');
    const del_btn=document.createElement("span");
    
     new_ele.textContent= val;
     del_btn.textContent="delete";
     new_ele.classList.add("name");
     del_btn.classList.add("delete");
     li.appendChild(new_ele);
     li.appendChild(del_btn);
     list.appendChild(li);
     inp.value="";
    }
});
