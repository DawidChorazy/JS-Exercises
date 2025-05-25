let book = {
  users: [],
  
  addUser: function(name, age, phone){
    let newObj = {
      name: '',
      age: 0,
      phone: 111111111
    }

    newObj.name = name;
    newObj.age = age;
    newObj.phone = phone;

    book.users.push(newObj);

  },

  showUsers: function(){
    console.log('Wszyscy użytkownicy w książce:')
      for(let i = 0; i < this.users.length; i++)
      {
        console.log(this.users[i]);
      }
     
  },

  findByName: function(name){
    let isFound = false;
    for(let i = 0; i < this.users.length; i++)
    {
      if(this.users[i].name === name)
      {
        isFound = true;
        console.log(isFound);
        break;
      }

    }
            if(!isFound)
        {
          console.log(`Nie znaleziono użytkownika o imieniu ${name}`)
        }
  },

  findByPhone: function(phone){
    let isFound = false;
    for(let i = 0; i < this.users.length; i++)
    {
      if(this.users[i].phone === phone)
      {
        isFound = true;
        console.log(isFound);
        break;
      }

    }
            if(!isFound)
        {
          console.log(`Nie znaleziono użytkownika o telefonie ${phone}`)
        }
  },

  getCount: function (){
    console.log(book.users.length);
  }
}

book.addUser("Kasia", 22, 999222333);
book.addUser("Kamil", 55, 221045281);
book.showUsers();
book.findByName("Josef");
book.findByName("Kamil");
book.findByPhone(999222333);
book.findByPhone(134612342);
book.getCount();
book.addUser("Zbigniew", 65, 123123432);
book.getCount()