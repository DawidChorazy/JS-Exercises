let rectangle = {
  height: 20,
  width: 35,

  showArea: function(){
    return this.height * this.width;
  }
  
}

let circle = {
  radius: 48,

  showArea: function() {
    return 3.14 * (this.radius * this.radius);
  }
}

console.log(circle.showArea());
console.log(rectangle.showArea());