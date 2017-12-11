#pragma strict

var slowCounter : float = 0.0;
var slowCap : float = 2.0;

function Update () {


	if(Input.GetKeyDown("q")){

				if(Time.timeScale == 1.0)
					Time.timeScale = 0.3;

					else

					Time.timeScale = 1.0;
					Time.fixedDeltaTime = 0.02 * Time.timeScale;
				}

			if(Time.timeScale == 0.3){

			slowCounter += Time.deltaTime;

			}

				if(slowCounter > slowCap){
					Time.timeScale = 1.0;
					slowCounter = 0;
				}
}
