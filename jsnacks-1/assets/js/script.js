const users =[
  {
    name: "Teresa",
    surname:"Taranto",
    age: 63
  },
  {
    name: "Hugh",
    surname:"Moser",
    age: 65
  },
  {
    name: "Ida",
    surname:"Giordano",
    age: 7
  },
  {
    name: "Nina",
    surname:"Manfrin",
    age: 55
  },
  {
    name: "Quinto",
    surname:"Davide",
    age: 17
  },
  {
    name: "Fedro",
    surname:"Palermo",
    age: 33
  },
  {
    name: "Ada",
    surname:"Calabrese",
    age: 18
  },
  {
    name: "Remo",
    surname:"Calabresi",
    age: 78
  },
  {
    name: "Alessandro",
    surname:"Sagese",
    age: 77
  },
  {
    name: "Bianca",
    surname:"Romano",
    age: 22
  }
];

const container1 = document.getElementById("over65");

const container2 = document.getElementById("underage");

const over65 = users.filter((user) =>{
  if(user.age >= 65){
    container1.innerHTML +=`
    <div class="card shadow-sm" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${user.name} ${user.surname}</h5>
        <p class="card-text">Età: ${user.age}</p>
      </div>
    </div>
    `
    return user;
  }
});



const underage = users.filter((user) => {
  if(user.age < 18){
    container2.innerHTML +=`
    <div class="card shadow-sm" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${user.name} ${user.surname}</h5>
        <p class="card-text">Età: ${user.age}</p>
      </div>
    </div>
    `
    return user;
  }
});