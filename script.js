//gerando valor aleatório
gerarIdsAleatorio = (numeroIds) => {
    let ids = []

    for(i = 1; i<= numeroIds; i++) {
        ids.push(Math.floor(Math.random() * 671))
    }

    return ids
}

//Conectando a API à página
pegarPersonagem = () => {
    let idsAleatorio = gerarIdsAleatorio(4);
    
    return fetch(`https://rickandmortyapi.com/api/character/${idsAleatorio}`,  {  
        method:'GET',
        headers: {
            Accept:'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
       
        let numero = 0;
      
        data.forEach(element => {
            let imagem = document.querySelector(`.imagensPersonagens${numero}`);
            let nome = document.querySelector(`.nome${numero}`);
    
            imagem.src = element.image;
            imagem.alt = element.name;
            nome.innerHTML = element.name ;
            numero++
        });
    })

}

pegarPersonagem();
