const biciclette = [
  {
    nome: "Ciclocross",
  },
  {
    nome: "Ebike",
  },
  {
    nome: "Gravel",
  },
  {
    nome: "Scatto Fisso",
  },
  {
    nome: "Cronometro",
  },
  {
    nome: "Aeroad",
  },
  {
    nome: "Endurance",
  },
];

const container1 = document.getElementById("bikes");

const container2 = document.getElementById("minWeight");

const getRandomWeight = () => parseFloat((Math.random() * (5 - .5) +.5).toFixed(2));

biciclette.map(bicicletta => bicicletta.peso = getRandomWeight());

const minWeight = biciclette.reduce((prev, curr) => prev.peso < curr.peso ? prev : curr);

biciclette.forEach(bicicletta => {
  const{nome, peso} = bicicletta;
  
  container1.innerHTML +=`
  <div class="card shadow-sm" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${nome}</h5>
      <p class="card-text">Peso: ${peso}kg</p>
    </div>
  </div>
`
})

container2.innerHTML = `
<div class="card shadow-sm" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${minWeight.nome}</h5>
    <p class="card-text">Peso: ${minWeight.peso}kg</p>
  </div>
</div>
`