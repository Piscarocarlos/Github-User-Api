// Code here
let btn = document.querySelector('button');
let search = document.querySelector('input');
let results = document.querySelector("#results")

async function getData(url){
    let response = await fetch(url);
    return response.json();
}

btn.addEventListener('click', (e)=>{
    e.preventDefault()
    if(search.value.length > 0){
        getData(`https://api.github.com/users/${search.value}`).then((data)=>{
            
            let card = document.createElement('div')
            card.classList.add('card', 'shadow', 'rounded');
            let cardBody = document.createElement('div');
            cardBody.classList.add('card-body')
            let name = document.createElement('h4');
            results.innerHTML = ""
            if(data.message && data.message == "Not Found"){
                name.innerText = "Utilisateur non trouvé !"
                cardBody.appendChild(name)
            } else {
                let img = document.createElement('img');
                img.classList.add('card-img-top', "w-100");
                img.src = data.avatar_url
    
                card.appendChild(img)
                let username = document.createElement('p');
                username.classList.add('text-muted');
                username.innerText = data.login + " (" + data.location + ")"
                name.innerText = data.name
    
                let link = document.createElement('a');
                link.classList.add('btn', 'btn-primary', 'w-100', 'mt-3')
                link.href = data.html_url
                link.setAttribute('target', '_blank')
                link.innerText = "Voir le profil"
    
                cardBody.appendChild(username);
                cardBody.appendChild(name)
                cardBody.appendChild(link)
            }

           


            card.appendChild(cardBody)
            results.appendChild(card)

            search.value = ""
        })
    } else {
        alert('Vous devez entrer un utilisateur')
    }
})