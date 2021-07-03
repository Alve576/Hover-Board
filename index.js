var containar = document.querySelector(".cont");
var colors = ['#e74c3c','#8e44ad','#3498db','#e67e22','#2ecc71',]
var squares =  document.querySelectorAll(".square");

for(var i = 0; i < squares.length; i++){


    squares[i].addEventListener('mouseover',function() {
        var color = getRandomColor();
        this.style.backgroundColor = color;
        this.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`;
     
   
   });
   squares[i].addEventListener('mouseout',function() {

    this.style.backgroundColor = "rgb(29, 27, 27)";
    this.style.boxShadow = `0 0 2px #000`;

 

});

}



function getRandomColor() {

	return colors[Math.floor(Math.random() * colors.length)]
}