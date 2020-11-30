var rangeSlider = document.getElementById("rangeSlider");

var leftRange = document.getElementById("leftRange");
var rightRange = document.getElementById("rightRange"); 

var labels = [leftRange, rightRange]; 

noUiSlider.create(rangeSlider, {
    start: [6,23],
    connect: [false, true, false],
    range: {
        'min':[6],
        'max':[23]
    },
    margin:0,
    step:0.5,
    cssPrefix:"noUi-"
});

rangeSlider.noUiSlider.on("update", function(handle, values){
    var str;
    var num = handle[values];
    var floorNum = Math.floor(num);
    if (num % floorNum == 0.5) {
        str = floorNum + ":30";
    } else {
        str = floorNum + ":00"
    }
    labels[values].innerHTML = str; 
});