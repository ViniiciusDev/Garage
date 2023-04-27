/* Creare elemento nel HTML */

let pushForm = document.getElementById('pushForm');
let brandAdd = document.getElementById('brandAdd');
let modelAdd = document.getElementById('modelAdd');
let garageContainer = document.getElementById('garageContainer');

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

