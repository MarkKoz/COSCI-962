function floor(diameter) {
    var radius = diameter / 2;
    var floorArea = Math.PI * (radius * radius);

    console.log(floorArea);
}

function walls(diameter, height) {
    var radius = diameter / 2;
    var circumference = 2 * Math.PI * radius;
    var wallArea = circumference * height;

    console.log(wallArea);
}

floor(8);
walls(8, 10);
