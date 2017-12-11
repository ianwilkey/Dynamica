


private var dead = false;
private var finish = false;

function OnControllerColliderHit(hit : ControllerColliderHit) 
    { 
        if(hit.gameObject.tag == "DEATHZONE") { 
            dead = true; 
        }
        if(hit.gameObject.tag == "EndLevel#1") { 
            finish = true; 
        }
    }

    function LateUpdate(){
        if(dead == true){
            Application.LoadLevel ("pre-alpha 1.0 startup");
        }
        if(finish == true){
            Application.Quit();
        }
    }