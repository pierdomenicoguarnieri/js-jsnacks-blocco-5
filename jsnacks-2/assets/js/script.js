const users =[
  {
    name: "Teresa",
    surname:"Taranto",
  },
  {
    name: "Hugh",
    surname:"Moser",
  },
  {
    name: "Ida",
    surname:"Giordano",
  },
  {
    name: "Nina",
    surname:"Manfrin",
  },
  {
    name: "Quinto",
    surname:"Davide",
  },
  {
    name: "Fedro",
    surname:"Palermo",
  },
  {
    name: "Ada",
    surname:"Calabrese",
  },
  {
    name: "Remo",
    surname:"Calabresi",
  },
  {
    name: "Alessabdro",
    surname:"Sagese",
  },
  {
    name: "Bianca",
    surname:"Romano",
  }
];

const randomMatricola = () => Math.floor(Math.random()* (99999 - 10000 + 1) + 10000);

const randomVoto = () => {
  const votes = [];
  for(let i = 0; i < 10; i++){
    votes[i] = Math.floor(Math.random() * (30 - 18 + 1) + 18);
  }
  return votes;
};
users.map(user => user.matricola = randomMatricola());

users.map(user => user.voti = randomVoto());
