using UnityEngine;
using System.Collections;

public class TurretCore : MonoBehaviour {


    public float counter;
    public float fireRate;
    public Rigidbody bullet;
    public Transform spawn;
    public int speed;

    public bool fieldOfView;

    void Start() {
        counter = 0.0f;
        fireRate = 1.0f;
        speed = 1000;
 
    }

    void OnTriggerEnter (Collider other)
    {
        fieldOfView = true;
    }
    void OnTriggerExit(Collider other)
    {
        fieldOfView = false;
    }
    void OnTriggerStay(Collider other)
    {
        fieldOfView = true;
    }



    void LateUpdate() {

        counter = counter + (Time.deltaTime * fireRate);

        if (fieldOfView == true)
        {
            if (counter >= 1.0)
            {
                fire();
                counter = 0;
            }
        }

        if(fieldOfView == false)
        {
            
        }

    }

    public void fire()
    {
        var clone = Instantiate(bullet, spawn.position, spawn.rotation) as Rigidbody;
        clone.AddForce(transform.forward * speed);
    }
}