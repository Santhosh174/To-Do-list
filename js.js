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
del.addEventListener('submit',function(e){
    e.preventDefault();
    const val=del.querySelector('input[type="text"]').value;
    if(val==""){
        alert("Enter a valid item");
    }
    else{
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
     document.getElementById("summa").value="";
    }
});
