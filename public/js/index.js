/* Creare elemento nel HTML */
let pushForm = document.getElementById('pushForm');
let brandAdd = document.getElementById('brandAdd');
let modelAdd = document.getElementById('modelAdd');
let garageContainer = document.getElementById('garageContainer');

// Evento di invio dei dati raccolti nel input.
pushForm.addEventListener('submit', (event) => {
      event.preventDefault();

      let vehicleIn = document.createElement('div');
      vehicleIn.classList.add('vehicleContainer');

      let carBrand = document.createElement('h5');
      carBrand.textContent = brandAdd.value;
      carBrand.classList.add('brand');                     // * Class brand per il css
      vehicleIn.appendChild(carBrand);

      let carModel = document.createElement('p')
      carModel.textContent = modelAdd.value;
      carModel.classList.add('model');                     // * Class model per il css
      vehicleIn.appendChild(carModel);

      let carTrash = document.createElement('button');
      carTrash.textContent = 'X'
      carTrash.classList.add('trash');
      carTrash.addEventListener('click', () => {
            garageContainer.removeChild(vehicleIn)
      })
      vehicleIn.appendChild(carTrash);

      garageContainer.appendChild(vehicleIn);
});

/* Search Car */

function searchFunction()     {
      let searchBtn = document.getElementById('searchBtn');
      let filter = searchBtn.value.toLowerCase();  // Prende i valori del btn
      let cars = document.getElementsByClassName('vehicleContainer');

// Ciclo for per cercare il car dentro la lista
      for (let i = 0; i < cars.length; i++)     {
            if (cars[i].innerText.toLowerCase().includes(filter)) {
                  cars[i].style.display = 'flex';
            } else {
                  cars[i].style.display = 'none';
            }
      }
}



