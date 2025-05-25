let currentUser = {
  name: 'Jozio',
  surname: 'Józefowski',
  email: 'jozio@gmail.com',
  www: 'www.joziojosef.com',
  userType: 'joziotype',
  isActive: true,

  show: function() {
    console.log(`Name: ${this.name}, Surname: ${this.surname}, Email: ${this.email}, www: ${this.www}, User Type: ${this.userType}, Is Active: ${this.isActive}`);
  },

  setActive: function(value){
     if(value == true)
      {
        this.isActive = true;
      } 
      else if(value == false)
      {
        this.isActive = false;
      }
      else{
        console.log("incorrect bollean expression");
      }
  }
}

currentUser.show();
currentUser.setActive(false);
currentUser.show();