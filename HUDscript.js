#pragma strict

import UnityEngine.UI;

var scoretext : Text;
var score : float = 0.0;

function Update () {

    score = score + Time.deltaTime;

    scoretext.text = "Score: " + score;
}