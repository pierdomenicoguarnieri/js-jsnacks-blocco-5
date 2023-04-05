const squadre = [
  {
    nome: "Roma",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Inter",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Juve",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Milan",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Torino",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Napoli",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Atalanta",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Hellas Verona",
    puntiFatti: 0,
    falliSubiti: 0,
  },
];


const randomPoints = () => Math.floor(Math.random()*85)+1;

const randomFouls = () => Math.floor(Math.random() * (120 - 30 +1) + 30);

squadre.map(squadra => {
  squadra.puntiFatti = randomPoints();
  squadra.falliSubiti = randomFouls();
  return squadra;
});

const newSquadre = squadre.map(squadra => {
  const{nome, puntiFatti, falliSubiti} = squadra;
  const object ={nome, falliSubiti,};
  return object;
})

