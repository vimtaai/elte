const tehenek = [
  {
      "fajta" : "Holstein-fríz",
      "szin" : "fekete-fehér",
      "nem" : "bika",
      "kor": 3
  },
  {
      "fajta" : "Magyar tarka",
      "szin" : "barna-fehér",
      "nem" : "tehén",
      "kor": 5
  },
  {
      "fajta" : "Angus marha",
      "szin" : "barna",
      "nem" : "tehén",
      "kor": 10
  },
  {
      "fajta" : "Angus marha",
      "szin" : "barna",
      "nem" : "bika",
      "kor": 2
  },
  {
      "fajta" : "Holstein-fríz",
      "szin" : "fekete-fehér",
      "nem" : "bika",
      "kor": 12
  },
  {
      "fajta" : "Holstein-fríz",
      "szin" : "fekete",
      "nem" : "tehén",
      "kor": 4
  },
  {
      "fajta" : "Magyar tarka",
      "szin" : "barna",
      "nem" : "bika",
      "kor": 13
  },
  {
      "fajta" : "Angus marha",
      "szin" : "barna",
      "nem" : "bika",
      "kor": 11
  },
  {
      "fajta" : "Angus marha",
      "szin" : "barna",
      "nem" : "bika",
      "kor": 1
  }
]

const task1 = document.querySelector('#task1')
const task2 = document.querySelector('#task2')
const task3 = document.querySelector('#task3')
const task4 = document.querySelector('#task4')

// Megoldás innen
const solution1 = tehenek.every((tehen) => tehen.kor >= 2);
task1.innerHTML = solution1;

const solution2 = tehenek.filter((tehen) => tehen.fajta === "Holstein-fríz").length;
task2.innerHTML = solution2;

const solution3 = tehenek.sort((atehen, btehen) => btehen.kor - atehen.kor);
const solution3a = Math.max(...tehenek.map((tehen) => tehen.kor));
let solution3b = -Infinity;
for (const tehen of tehenek) {
    if (tehen.kor > solution3b) {
        solution3b = tehen.kor;
    }
}
task3.innerHTML = solution3[0].kor;
task3.innerHTML = solution3b;

const solution4 = 
    tehenek.some((tehen) => tehen.szin === "fekete-fehér" && tehen.nem === "bika") &&
    tehenek.some((tehen) => tehen.szin === "fekete-fehér" && tehen.nem === "tehén");
task4.innerHTML = solution4;