// 10x10 grid

var canvas = document.getElementById('canvas');
var my_context = canvas.getContext('2d');
my_context.strokeStyle = 'white'; //border
my_context.rect(0, 0, 1000, 1000);
my_context.fillStyle = 'white';

var xvalue = 0;
var yvalue = 0;

for(var x = 0; x < 100; x++){
    my_context.fillRect(xvalue, yvalue, 39, 39);
    xvalue += 40;
    if(xvalue >= 400) {
        xvalue = 0;
        yvalue += 40;
    }
}

// create array with coordinates and while for loop is running push new coordinates into array
var coordinates = [];
for(var x = 0; x < 100; x++) {
    xvalue += 40;
    if(xvalue >= 400) {
        xvalue = 0;
        yvalue -= 40;
    }
    coordinates.push({xvalue, yvalue});
}
//coordinates.sort();
//coordinates.reverse();
console.log(coordinates);

// starting point (0,0)
var start = coordinates[0];
console.log(start);

// delivery point (9,9)
var end = coordinates[99];
console.log(end);

// obstacles:
//(9,7)
//(8,7)
//(6,7)
//(6,8)
var obstacles = [];
for(var i = 0; i < coordinates.length; coordinates++) {
    obstacles.push(coordinates[97]);
    obstacles.push(coordinates[87]);
    obstacles.push(coordinates[67]);
    obstacles.push(coordinates[68]);
}
console.log(obstacles.length);

//draw obstacle
my_context.beginPath();
my_context.rect(320, 120, 39, 39); // 9,7 [96] = 280 + 40, 160 - 40
my_context.rect(280, 120, 39, 39); // 8,7
my_context.rect(200, 120, 39, 39); // 6,7
my_context.rect(200, 80, 39, 39); //6,8
my_context.fillStyle = 'red';
my_context.fill();

// if rect from my context has coordinates from coordinate list, fill red

// draw moving object
var radius = 18;

my_context.beginPath();
my_context.arc(20, 20, radius, 2 * Math.PI, false); // coordinates - 20
my_context.fillStyle = 'green';
my_context.fill();




//solution should be printed in the format of [(x1, x2), (x2, y2)] and number of steps

