const students = [
  {
  id:213,
  nome: "Marco della Rovere",
  sommaVoti: 78,
  },
  {
  id: 110, 
  nome: "Paola Cortellessa",
  sommaVoti: 96,
  },
  {
  id: 250,
  nome: "Andrea Mantegna",
  sommaVoti: 48,
  },
  {
  id: 145,
  nome: "Gaia Borromini",
  sommaVoti: 74,
  },
  {
  id: 196,
  nome: "Luigi Grimaldello",
  sommaVoti: 68
  },
  {
  id: 102,
  nome: "Piero della Francesca",
  sommaVoti: 50,
  },
  {
  id: 120,
  nome: "Francesca da Polenta",
  sommaVoti: 84,
  }
];

const container1 = document.getElementById("class");

const container2 = document.getElementById("sum70");

const container3 = document.getElementById("sum70id120");

students.forEach(student => {
  const{id, nome, sommaVoti} = student;
  
  container1.innerHTML +=`
  <div class="card shadow-sm" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${nome.toUpperCase()}</h5>
      <p class="card-text">Id Studente: ${id}</p>
      <p class="card-text">Somma dei voti: ${sommaVoti}</p>
    </div>
  </div>
`
})

const studentsVotes70 = students.filter(student => student.sommaVoti > 70)

studentsVotes70.forEach(student => {
  const{id, nome, sommaVoti} = student;

  container2.innerHTML +=`
    <div class="card shadow-sm" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${nome.toUpperCase()}</h5>
        <p class="card-text">Id Studente: ${id}</p>
        <p class="card-text">Somma dei voti: ${sommaVoti}</p>
      </div>
    </div>
  `
})

const studentsId120 = studentsVotes70.filter(student => student.id > 120);

studentsId120.forEach(student =>{
  const{id, nome, sommaVoti} = student;

  container3.innerHTML +=`
    <div class="card shadow-sm" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${nome.toUpperCase()}</h5>
        <p class="card-text">Id Studente: ${id}</p>
        <p class="card-text">Somma dei voti: ${sommaVoti}</p>
      </div>
    </div>
  `
})