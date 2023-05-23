let url = "../js/datos.json";

let cardContainer = document.getElementById('card-container');

fetch(url)
.then(res =>res.json())
.then(data => {
  data.datos.forEach(elemento => {
      const cardContainerItems = document.createElement('div');
      cardContainerItems.innerHTML = `<div id="card-container__item" class="card-container__item">
        <iframe src="${elemento.mapa}"></iframe>
        <h2>${elemento.suc}</h2>
        <button>Reservar en este local</button>
    </div>`;
    cardContainer.append(cardContainerItems)
  });
})
.catch(err => console.log(err));






