function firstcontainer(){
    let colorCode = document.getElementById("colorCode").value;
    let Box = document.getElementById("first");
    Box.style.backgroundColor = colorCode;
    Box.style.borderRadius = colorCode;
    // Box.style.transformTranslateX('-200px') = colorCode;
    // Box.style.rotateDegrees(-90) = colorCode;
}

function secondcontainer(){
    let colorDecor = document.getElementById("colorDecor").value;
    let Box = document.getElementById("second");
    Box.style.backgroundColor = colorDecor;
    Box.style.borderRadius = colorDecor;
}

function thirdcontainer(){
    let colorHex = document.getElementById("colorHex").value;
    let Box = document.getElementById("third");
    Box.style.backgroundColor = colorHex;
    Box.style.borderRadius = colorHex;
}

function fourthcontainer(){
    let colorSection = document.getElementById("colorSection").value;
    let Box = document.getElementById("fourth");
    Box.style.backgroundColor = colorSection;
    Box.style.borderRadius = colorSection;
}