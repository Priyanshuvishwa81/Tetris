let Farray = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], ["+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+"]];
let Iarray = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], ["+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+"]];
let Marray = [[], [], [], []];
let Sarray = [[], [], [], []];
let color_s = ["#eb2315", "#f58802", "#eded09", "#1bf007", "#1d24f0", "#4b0082", "#8F00FF"];
let color_s_indx = -1;
let rotateShape = "rotateFirst";
let shapevalinc = 0;
let SSvalX = 2;
let SSvalY = 4
let clickedLeft = false;
let clickedRight = false;
let MyLevel = 0;
let MyScore = 0;

let speed = 300;
let random;
let randomNext;
let shape;
let timeOut;
let randomBool = true;
let level = document.getElementById("level");
level.innerText = 0;

let Score = document.getElementById("score");
Score.innerText = 0;

for (let i = 0; i < Farray.length - 1; i++) {
    for (let j = 1; j <= 10; j++) {
        Farray[i][j] = "*";
        Iarray[i][j] = " ";
    }
}
let current;







let shape1 = (SSvalX, SSvalY) => {          //  I
    if (rotateShape == "rotateFirst" || rotateShape == "rotateThird") {
        Sarray = [[SSvalX, SSvalY], [SSvalX + 1, SSvalY], [SSvalX + 2, SSvalY], [SSvalX + 3, SSvalY]];
    }
    else if (rotateShape == "rotateSecond" || rotateShape == "rotateForth") {
        Sarray = [[SSvalX, SSvalY], [SSvalX, SSvalY + 1], [SSvalX, SSvalY + 2], [SSvalX, SSvalY + 3]];
    }
    render(SSvalX, SSvalY);
}


let shape2 = (SSvalX, SSvalY) => {
    if (rotateShape == "rotateFirst") {
        Sarray = [[SSvalX - 1, SSvalY], [SSvalX, SSvalY - 1], [SSvalX, SSvalY], [SSvalX, SSvalY + 1]];
    }
    else if (rotateShape == "rotateSecond") {
        Sarray = [[SSvalX - 1, SSvalY], [SSvalX + 1, SSvalY], [SSvalX, SSvalY], [SSvalX, SSvalY + 1]];
    }
    else if (rotateShape == "rotateThird") {
        Sarray = [[SSvalX + 1, SSvalY], [SSvalX, SSvalY - 1], [SSvalX, SSvalY], [SSvalX, SSvalY + 1]];
    }
    else if (rotateShape == "rotateForth") {
        Sarray = [[SSvalX - 1, SSvalY], [SSvalX, SSvalY - 1], [SSvalX, SSvalY], [SSvalX + 1, SSvalY]];
    }

    render(SSvalX, SSvalY);

}



let shape3 = (SSvalX, SSvalY) => {      //O
    Sarray = [[SSvalX, SSvalY], [SSvalX, SSvalY + 1], [SSvalX + 1, SSvalY], [SSvalX + 1, SSvalY + 1]];
    render(SSvalX, SSvalY);

}



let shape4 = (SSvalX, SSvalY) => {
    if (rotateShape == "rotateFirst") {
        Sarray = [[SSvalX, SSvalY], [SSvalX, SSvalY - 1], [SSvalX, SSvalY + 1], [SSvalX - 1, SSvalY + 1]];
    }
    else if (rotateShape == "rotateSecond") {
        Sarray = [[SSvalX, SSvalY], [SSvalX - 1, SSvalY], [SSvalX + 1, SSvalY], [SSvalX + 1, SSvalY + 1]];
    }
    else if (rotateShape == "rotateThird") {
        Sarray = [[SSvalX, SSvalY], [SSvalX, SSvalY - 1], [SSvalX, SSvalY + 1], [SSvalX + 1, SSvalY - 1]];
    }
    else if (rotateShape == "rotateForth") {
        Sarray = [[SSvalX, SSvalY], [SSvalX - 1, SSvalY], [SSvalX + 1, SSvalY], [SSvalX - 1, SSvalY - 1]];
    }

    render(SSvalX, SSvalY);

}


let shape5 = (SSvalX, SSvalY) => {
    if (rotateShape == "rotateFirst") {
        Sarray = [[SSvalX, SSvalY], [SSvalX, SSvalY - 1], [SSvalX, SSvalY + 1], [SSvalX - 1, SSvalY - 1]];
    }
    else if (rotateShape == "rotateSecond") {
        Sarray = [[SSvalX, SSvalY], [SSvalX - 1, SSvalY], [SSvalX + 1, SSvalY], [SSvalX - 1, SSvalY + 1]];
    }
    else if (rotateShape == "rotateThird") {
        Sarray = [[SSvalX, SSvalY], [SSvalX, SSvalY - 1], [SSvalX, SSvalY + 1], [SSvalX + 1, SSvalY + 1]];
    }
    else if (rotateShape == "rotateForth") {
        Sarray = [[SSvalX, SSvalY], [SSvalX - 1, SSvalY], [SSvalX + 1, SSvalY], [SSvalX + 1, SSvalY - 1]];
    }

    render(SSvalX, SSvalY);

}




let shape6 = (SSvalX, SSvalY) => {
    if (rotateShape == "rotateFirst" || rotateShape == "rotateThird") {
        Sarray = [[SSvalX, SSvalY], [SSvalX - 1, SSvalY], [SSvalX, SSvalY - 1], [SSvalX - 1, SSvalY + 1]];
    }
    else if (rotateShape == "rotateSecond" || rotateShape == "rotateForth") {
        Sarray = [[SSvalX, SSvalY], [SSvalX, SSvalY - 1], [SSvalX - 1, SSvalY - 1], [SSvalX + 1, SSvalY]];
    }
    render(SSvalX, SSvalY);
}

let shape7 = (SSvalX, SSvalY) => {          //  I
    if (rotateShape == "rotateFirst" || rotateShape == "rotateThird") {
        Sarray = [[SSvalX, SSvalY], [SSvalX - 1, SSvalY], [SSvalX - 1, SSvalY - 1], [SSvalX, SSvalY + 1]];
    }
    else if (rotateShape == "rotateSecond" || rotateShape == "rotateForth") {
        Sarray = [[SSvalX, SSvalY], [SSvalX, SSvalY - 1], [SSvalX - 1, SSvalY], [SSvalX + 1, SSvalY - 1]];
    }
    render(SSvalX, SSvalY);
}



let render = (SSvalX, SSvalY) => {

    for (let m = 0; m < Marray.length; m++) {
        let box_container = document.getElementById(Marray[m]);
        box_container.style.gridRowStart = Sarray[m][0];
        box_container.style.gridColumnStart = Sarray[m][1];
        box_container.style.backgroundColor = color_s[color_s_indx];
    }
    timeOut = setTimeout(() => {
        gravity(SSvalX, SSvalY)
    }, speed);


}

let gravity = (takenSSvalX, takenSSvalY) => {

    for (let i = 1; i < Farray.length - 1; i++) {
        let Local_val = false;
        for (let j = 1; j <= 10; j++) {
            if (Farray[i][j] == "+") {
                Local_val = true;
            }
            else {
                Local_val = false;
                break;
            }
        }
        if (Local_val) {
            let local_I = i;

            for (let jj = 1; jj <= 10; jj++) {
                if (Iarray[local_I][jj] != " ") {
                    let box_container = document.getElementById(Iarray[local_I][jj]);
                    box_container.style.gridRowStart = -1;
                    box_container.style.gridColumnStart = -1;
                    box_container.remove();
                }
            }
            for (let ii = local_I; ii > 1; ii--) {
                for (let jj = 1; jj <= 10; jj++) {
                    Farray[ii][jj] = Farray[ii - 1][jj];
                    Iarray[ii][jj] = Iarray[ii - 1][jj];
                    if (Iarray[ii][jj] != " ") {
                        let box_container = document.getElementById(Iarray[ii][jj]);
                        box_container.style.gridRowStart = ii;
                        box_container.style.gridColumnStart = jj;
                    }

                }
            }
            MyLevel += 1;
            MyScore += 20;
            level.innerText = MyLevel;
            Score.innerText = MyScore;
            if (speed >= 150) {
                speed = speed - 10;
            }

            Local_val = false;
        }
    }


    let stop = true;
    for (let m = 0; m < Sarray.length; m++) {
        if (Sarray[m][0] <= 20) {
            if (Farray[Sarray[m][0] + 1][Sarray[m][1]] == "+") {
                // alert("found ++ ")
                if (Farray[Sarray[m][0] + 1][Sarray[m][1]] == "+" && takenSSvalX == 2 && takenSSvalY == 4) {
                    clearTimeout(timeOut);
                    stop = false;
                    alert("game ended! ");

                    break;
                }
                for (let i = 0; i < Sarray.length; i++) {
                    Farray[Sarray[i][0]][Sarray[i][1]] = "+";
                    Iarray[Sarray[i][0]][Sarray[i][1]] = Marray[i];
                }
                for (let m = 0; m < Marray.length; m++) {
                    let box_container = document.getElementById(Marray[m]);
                    box_container.style.gridRowStart = Sarray[m][0];
                    box_container.style.gridColumnStart = Sarray[m][1];
                }

                rotateShape = "rotateFirst";
                newShapeCreate();

                stop = false;
            }

        }
    }
    if (stop) {
        let newSSvalY = takenSSvalY;
        let newSSvalX = takenSSvalX + 1;;
        // if (newSSvalY <= 20 && newSSvalY>=1) {
        let big_val = 0;
        let small_val = 11;
        for (let i = 0; i < Sarray.length; i++) {
            if (big_val<Sarray[i][1]) {
                big_val = Sarray[i][1];
            }
            if (small_val>Sarray[i][1]) {
                small_val = Sarray[i][1];
            }
        }

        if (clickedLeft && small_val > 1 ) {
            newSSvalY = takenSSvalY - 1;
            clickedLeft = false;
        }
        if (clickedRight && big_val < 10) {
            newSSvalY = takenSSvalY + 1;
            clickedRight = false;
        }

        // }


        if (shape == "shape1") {
            shape1(newSSvalX, newSSvalY);
        }
        else if (shape == "shape2") {
            shape2(newSSvalX, newSSvalY);
        }
        else if (shape == "shape3") {
            shape3(newSSvalX, newSSvalY);
        }
        else if (shape == "shape4") {
            shape4(newSSvalX, newSSvalY);
        }
        else if (shape == "shape5") {
            shape5(newSSvalX, newSSvalY);
        }
        else if (shape == "shape6") {
            shape6(newSSvalX, newSSvalY);
        }
        else if (shape == "shape7") {
            shape7(newSSvalX, newSSvalY);
        }

    }

}








let newShapeCreate = () => {
    color_s_indx += 1
    if (color_s_indx >= color_s.length) {
        color_s_indx = 0;
    }
    // let localArr = [];
    current = Math.floor(Math.random() * (8 - 1) + 1);
    for (let shapeval = 0; shapeval < Sarray.length; shapeval++) {
        const box = document.createElement("div");
        let box_container = document.getElementById("box_container_left");
        let localval = "MyShape" + shapevalinc;
        box.id = localval;
        box_container.appendChild(box);
        Marray[shapeval] = localval;
        shapevalinc++;
    }
    switch (current) {

        case 1:
            shape = "shape1";
            shape1(SSvalX, SSvalY);
            break;
        case 2:
            shape = "shape2";
            shape2(SSvalX, SSvalY);
            break;
        case 3:
            shape = "shape3";
            shape3(SSvalX, SSvalY);
            break;
        case 4:
            shape = "shape4";
            shape4(SSvalX, SSvalY);
            break;
        case 5:
            shape = "shape5";
            shape5(SSvalX, SSvalY);
            break;
        case 6:
            shape = "shape6";
            shape6(SSvalX, SSvalY);
            break;
        case 7:
            shape = "shape7";
            shape7(SSvalX, SSvalY);
            break;

        default:

            break;
    }

}

let startGame = () => {
    document.getElementById("btn").style.display = "none";
    newShapeCreate()
}




let direction = (event,code) => {

    // alert(code)


        if (code == 0) {
            Mykey = event.keyCode;
        } else {
            Mykey = code;
        }

        // alert(event.keyCode);



        switch (Mykey) {
            case 37:
                clickedRight = false;
                clickedLeft = true;
                break;
            case 39:
                clickedLeft = false;
                clickedRight = true;
                break;
            case 40:
                break;
            case 38:
                if (rotateShape == "rotateFirst") {
                    rotateShape = "rotateSecond";
                } else if (rotateShape == "rotateSecond") {
                    rotateShape = "rotateThird"
                } else if (rotateShape == "rotateThird") {
                    rotateShape = "rotateForth"
                } else if (rotateShape == "rotateForth") {
                    rotateShape = "rotateFirst"
                }
                // clickedRight = true;
                break;
    
            default:
                // keyPressed("right");
                break;
    
        }


    

}