document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady(){

document.addEventListener('resume', onResume.bind(this),false);
navigator.compass.watchHeading(onSuccess, onError);

function onResume(){

}
function onSuccess(pass){
    
    var heading = pass.magneticHeading;
    var needleImg = document.getElementById("needles");
    needleImg.style.transform = "rotate(" + heading + "deg)";

    if(heading > 37.5 || heading <= 22.5){
        document.getElementById("txtCompassHeading").innerHTML = "N" + heading;
    }
    else if (heading > 22.5 && heading <= 67.5){
        document.getElementById("txtCompassHeading").innerHTML = "NE"+ heading;
    }
    else if (heading > 67.6 && heading <= 112.5){
        document.getElementById("txtCompassHeading").innerHTML = "E"+ heading;
    }
    else if (heading > 112.6 && heading <= 157.5){
        document.getElementById("txtCompassHeading").innerHTML = "SE"+ heading;
    }
    else if (heading > 157.6 && heading <= 202.5){
        document.getElementById("txtCompassHeading").innerHTML = "S"+ heading;
    }
    else if (heading > 202.6 && heading <= 247.5){
        document.getElementById("txtCompassHeading").innerHTML = "SW"+ heading;
    }
    else if (heading > 247.6 && heading <= 292.5){
        document.getElementById("txtCompassHeading").innerHTML = "W"+ heading;
    }
    else if (heading > 292.6 && heading <= 337.5){
        document.getElementById("txtCompassHeading").innerHTML = "NW"+ heading;
    }
}
   function onError(){
            alert("No direction found");
    }
}