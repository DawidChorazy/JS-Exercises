let spaceShip = {
  name: "Enterprise",
  currentLocation: "Earth",
  flyDistance: 0,

  flyTo: function(place, distance){
    this.currentLocation = place;
    this.flyDistance += distance;
  },

  showInfo: function(){
    console.log(`Statek: ${this.name}`);
    console.log(`doleciał do miejsca ${this.currentLocation}`);
    console.log(`przeleciał całkowity dystans ${this.flyDistance}`)
  },

  meetClingon: function(){
    let randomNum = 0;
    for(let i = 0; i < 100; i++)
    {
      randomNum += Math.random();
    }
    if(randomNum > 50)
    {
      console.log(`Statek ${this.name} będący w okolicy ${this.currentLocation} zwycięsko wyszedł ze spotkania z Klingonami`);
    }
    else{
      console.log(`Statek ${this.name} będący w okolicy ${this.currentLocation} został pokonany przez Klingonów`);
    }
    console.log(randomNum);
  }

}

spaceShip.flyTo("Poland", 107518245);
spaceShip.flyTo("Mars", 14242516);
spaceShip.showInfo();
spaceShip.meetClingon();
spaceShip.meetClingon();
spaceShip.meetClingon();
spaceShip.flyTo("Uranus", 3511567238);
spaceShip.showInfo();
spaceShip.meetClingon();