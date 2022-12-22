const list = document.getElementById('task-list');
const btn = document.getElementById('input-button');
const input = document.getElementById('todo');
const alert = document.getElementById('custom-alert');
const alertBtn = document.getElementById('alert-btn');


function customAlert(){
    alert.style.display = 'flex';

    alertBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        alert.style.display = 'none';
    })
}

btn.addEventListener('click',  (e)=>{
    e.preventDefault();
    
    if(input.value === '' || input.value === ' '){
        customAlert();
        !list.appendChild(li);
    }

    const li = document.createElement('li');
    li.className = 'list-item';

    li.appendChild(document.createTextNode(input.value));

    const x = document.createElement('i');
    x.className = 'fa-solid fa-x';
    li.appendChild(x);

    list.appendChild(li);

    input.value = "";

    x.addEventListener('click', (e)=> {
        e.preventDefault();
        list.removeChild(li);
    });
});