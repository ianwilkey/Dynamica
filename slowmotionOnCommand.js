#pragma strict

var slowSpeed : float = 0.3;

function Update () {

    if(Input.GetKey(KeyCode.Mouse1)){
        Time.timeScale = slowSpeed;
    }

    else

        Time.timeScale = 1.0;
    Time.fixedDeltaTime = 0.02 * Time.timeScale;

    }