let arr = ["kaczka", "pies", "kot", "papuga", "szczur", "mrówkojad"];

let showArray = arr => {
  arr.forEach(element => {
      console.log(element);
      console.log(element.length);
  });
  let dlugosc = arr.join("").length;
  console.log(dlugosc);
  
}

let showArray2 = arr => {
  for(let i =0; i < arr.length; i++)
  {
    console.log(arr[i]);
    console.log(arr[i].length);
  }
  let dlugosc = arr.join("").length;
  console.log(dlugosc);
}

let showArray3 = arr => {
  for (let element of arr)
  {
    console.log(element);
    console.log(element.length)
  }
  let dlugosc = arr.join("").length;
  console.log(dlugosc);
}

// showArray(arr);
// showArray2(arr);
// showArray3(arr);