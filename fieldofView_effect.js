#pragma strict

var CameraObj : Camera;
var smoothTimeMax : float = 1.0;
var smoothTimeMin : float = 0.0;
var smoothTimeCounter : float = 0.0;
var smoothTime : float = 16.0;
var fovCap : float = 53.0;
var fovNorm : float = 60.0;

function Start(){

    smoothTimeMin = 0.0;
    smoothTimeMax = 1.0;
    smoothTimeCounter = 0.0;
    CameraObj.fieldOfView = 60;
}

function Update () {

    if(Input.GetKey(KeyCode.Mouse1)){
        smoothTimeCounter += Time.deltaTime *4;
        CameraObj.fieldOfView -= Time.deltaTime*smoothTime;
    }     

                                   if(smoothTimeCounter >= smoothTimeMax){
                                       smoothTimeCounter = smoothTimeMax;
                                       CameraObj.fieldOfView = CameraObj.fieldOfView;
                                   }

      if(!Input.GetKey(KeyCode.Mouse1)){
          smoothTimeCounter -= Time.deltaTime;
          CameraObj.fieldOfView += Time.deltaTime*smoothTime;
     }

                                       if(smoothTimeCounter <= smoothTimeMin){
                                           smoothTimeCounter = smoothTimeMin;
                                       }
    }