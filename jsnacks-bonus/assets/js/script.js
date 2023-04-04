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

const container1 = document.getElementById("database");

const container2 = document.getElementById("results");

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

users.forEach((user) =>{
  container1.innerHTML +=`
  <div class="card shadow-sm" style="width: 18rem;">
  <img src="assets/img/${user.image}" class="card-img-top pg-max-height" alt="${user.name} ${user.surname}" title="${user.name} ${user.surname}">
    <div class="card-body">
      <h5 class="card-title">${user.name} ${user.surname}</h5>
      <p class="card-text">Marticola: ${user.matricola}</p>
      <p class="card-text">Voti: ${user.voti}</p>
    </div>
  </div>
  `
});

users.sort((a, b) => {
  let surnameA = a.surname.toLowerCase();
  let surnameB = b.surname.toLowerCase();
  
  if (surnameA < surnameB) return -1;
  if (surnameA > surnameB) return 1;
  return 0;
});

const newUsers = users.map(user => ({nomeCompleto: `${user.name} ${user.surname}`,image: `${user.image}`, matricola: user.matricola, mediaVoti: getMedia(user.voti)}));

newUsers.forEach((user) => {
  container2.innerHTML +=`
  <div class="card shadow-sm" style="width: 18rem;">
  <img src="assets/img/${user.image}" class="card-img-top pg-max-height" alt="${user.nomeCompleto}" title="${user.nomeCompleto}">
    <div class="card-body">
      <h5 class="card-title">${user.nomeCompleto}</h5>
      <p class="card-text">Matricola: ${user.matricola}</p>
      <p class="card-text">Media voti: ${user.mediaVoti}</p>
    </div>
  </div>
  `
});