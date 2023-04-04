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
    name: "Alessabdro",
    surname:"Sagese",
    age: 77
  },
  {
    name: "Bianca",
    surname:"Romano",
    age: 22
  }
];

const over65 = users.filter((user) =>{
  if(user.age >= 65){
    return user;
  }

const underage = users.filter((user) => {
  if(user.age < 18){
    return user;
  }
