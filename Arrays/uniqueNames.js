const names = [
    "Marcin",
    "Ania",
    "Monika",
    "Piotr",
    "Beata",
    "ania",
    "marcin",
    "piotr",
    "PIOTR",
    "ANIA",
    "MONIKA"
]

let nowaTab = [];
let unifyNames = (names) => {
  names.forEach(element => {
  nowaTab.push(element.toLowerCase());
  })
  console.log(nowaTab)
}

unifyNames(names)

let countDifferentNames = nowaTab => {
  for(let i = 0; i < nowaTab.length; i++)
  {
    for(let j = 1; j < nowaTab.length; j++)
    {
      if(nowaTab[i] == nowaTab[j])
      {
        
      }
    }
  }
}