#pragma strict

import UnityEngine.UI;
var PathLeftText : Text;


var Path : Transform;
var Spawn : Transform;
var PathLeft : float = 10.0;

function Update (){

    if(Input.GetKey("r")){
        PathLeft = PathLeft + Time.deltaTime *3;
    }

    gui();

    { 
        if(Input.GetKey(KeyCode.Mouse0)){
            if(PathLeft >= 0.00000000000001){
                var pel = Instantiate(Path, Spawn.position, Spawn.rotation); 
                PathLeft = PathLeft - Time.deltaTime * 3;
            }
            if(PathLeft == 0.0){
                PathLeft = 0.0;
            }
            if(PathLeft <= 0.0){
                PathLeft = 0.0;
            }
        }
    }
}

function gui(){
    PathLeftText.text = "" + PathLeft;

}