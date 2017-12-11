using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class HeathSystem : MonoBehaviour {

    public int health;
    public int damage;
    public Text healthtext;

	// Use this for initialization
	void Start () {

        health = 10;
        damage = 1;

    }

    // Update is called once per frame
    void LateUpdate () {
        Screen.lockCursor = true;
        gui();
        if (Input.GetKey(KeyCode.Escape))
        {
            Screen.lockCursor = false;
        }
        if(health == 0)
        {
            Destroy(gameObject);
        }

	}

    void gui()
    {
        healthtext.text = "Health: " + health;
    }
}
