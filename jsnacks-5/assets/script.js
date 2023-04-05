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

const getRandomWeight = () => parseFloat((Math.random() * (5 - .5) +.5).toFixed(2));

biciclette.map(bicicletta => bicicletta.peso = getRandomWeight());
