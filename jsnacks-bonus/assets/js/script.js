const users =[
  {
    name: "Teresa",
    surname:"Taranto",
    image: "woman-1.jpg",
  },
  {
    name: "Hugh",
    surname:"Moser",
    image: "man-1.jpg",
  },
  {
    name: "Ida",
    surname:"Giordano",
    image: "woman-2.jpg",
  },
  {
    name: "Nina",
    surname:"Manfrin",
    image: "woman-3.jpg",
  },
  {
    name: "Quinto",
    surname:"Davide",
    image: "man-2.jpg",
  },
  {
    name: "Fedro",
    surname:"Palermo",
    image: "man-3.jpg",
  },
  {
    name: "Ada",
    surname:"Calabrese",
    image: "woman-4.jpg",
  },
  {
    name: "Remo",
    surname:"Calabresi",
    image: "man-4.jpg",
  },
  {
    name: "Alessandro",
    surname:"Sagese",
    image: "man-5.jpg",
  },
  {
    name: "Bianca",
    surname:"Romano",
    image: "woman-5.jpg",
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

const getMedia = (voti) => {
  let sum = 0;
  for(let i = 0; i < voti.length; i++){
    sum += voti[i];
  }
  const media = sum/voti.length;
  return media;
};

users.map(user => user.matricola = randomMatricola());

users.map(user => user.voti = randomVoto());

users.sort((a, b) => {
  let surnameA = a.surname.toLowerCase();
  let surnameB = b.surname.toLowerCase();
  
  if (surnameA < surnameB) return -1;
  if (surnameA > surnameB) return 1;
  return 0;
});
