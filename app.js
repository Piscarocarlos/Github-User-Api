// Code here
let btn = document.querySelector('button');
let search = document.querySelector('input');

async function getData(url){
    let response = await fetch(url);
    return response.json();
}

btn.addEventListener('click', (e)=>{
    e.preventDefault()
    if(search.value.length > 0){
        getData(`https://api.github.com/users/${search.value}`).then((data)=>{
            console.log(data);
        })
    } else {
        alert('Vous devez entrer un utilisateur')
    }
})