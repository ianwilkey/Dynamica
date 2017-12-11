#pragma strict

import UnityEngine.UI;

//gui vars
var slowtime : Text;
var timer : Text;

var counter : int = 5;

//game vars
var finalTimeSpeed : float = 0.2;
var normTimeSpeed : float = 1.0;
var smoothTime : float = 3.0;
var currentTimeSpeed : float;
//timer
var currentTime : float = 30.0;

function start(){
}

function Update () {

    if(Input.GetKey(KeyCode.Escape)){
        quit();
    }
        //timer
    currentTime = currentTime - Time.deltaTime;
    //slowTime uses
    if (Input.GetKeyDown(KeyCode.Mouse1)){
        counter = counter - 1;
    }
    //slowTime clamp
    if (counter <= 0){
        counter = 0;
    }

    //call gui
    gui();

    //no cursor
    Cursor.visible = false;

    //fixed timeScale (don't mess with it)
    currentTimeSpeed = Time.timeScale;
    Time.fixedDeltaTime = 0.02 * Time.timeScale;

    //permissions for slowTime use
    if(counter >= 0){
        if(Input.GetKey(KeyCode.Mouse1)){
            Time.timeScale -= Time.deltaTime * smoothTime;
        }
   
    }

    if(currentTime <= 0.73){
        Time.timeScale -= Time.deltaTime * 4;
    }
    if(currentTime <= 0){
        currentTime = 0;
        Application.LoadLevel ("pre-alph a 1.0 startup");
    }

    if(currentTime == 0){
        currentTime = 0;
    }

    //permissions for slowTime use
        if(counter == 0){
            counter = 0;
            noTime();

        }


        //smooth time stuff
        if(Time.timeScale <= finalTimeSpeed){
            Time.timeScale = finalTimeSpeed;
            Time.fixedDeltaTime = 0.02 * Time.timeScale;
        }
                        
        if(!Input.GetKey(KeyCode.Mouse1)){
            Time.timeScale += Time.deltaTime * smoothTime;
        }

        if(Time.timeScale >= normTimeSpeed){
            Time.timeScale = normTimeSpeed;
            Time.fixedDeltaTime = 0.02 * Time.timeScale;
        }
        //end smooth time


}


function gui(){

    slowtime.text = "" + counter;
    timer.text = "" + currentTime;
}

function noTime(){
    Time.timeScale = 1.0;
}

function quit (){
    Application.Quit();
}