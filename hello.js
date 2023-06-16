import pkg from 'pathfinding';
const { Grid, AStarFinder, DiagonalMovement } = pkg;

var grid = new Grid(10,10);

/*
grid.setWalkableAt(9,7, false);
grid.setWalkableAt(8,7, false);
grid.setWalkableAt(6,7, false);
grid.setWalkableAt(6,8, false);
*/

var rc = [];

for(var i = 0; i < 20; i++) {
    var rx = Math.floor(Math.random() * 9) + 1;
    var ry = Math.floor(Math.random() * 9) + 1;
    grid.setWalkableAt(rx, ry, false);
    rc.push({rx, ry});
}
console.log(rc);

var finder = new AStarFinder(DiagonalMovement.Never);
var path = finder.findPath(0, 0, 9, 9, grid);

if(path.length == 0) {
    console.log("Unable to reach delivery point");
} else {
    console.log(path);
}

//BONUS
// get neigbors of 0, 0 and remove not walkable
// get neigbors of last path's element
// if setwalkablepath == false delete 1 and make it true until path works
