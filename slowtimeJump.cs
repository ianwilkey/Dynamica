using UnityEngine;
using System.Collections;

public class slowtimeJump : MonoBehaviour {

    public float jumpVelocity;

    void Update () {
        if (Input.GetKeyUp(KeyCode.Mouse1))
        {
            GetComponent<Rigidbody>().AddForce(jumpVelocity * Vector3.up, ForceMode.VelocityChange);
        }
	}
}
