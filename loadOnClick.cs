using UnityEngine;
using System.Collections;

public class loadOnClick : MonoBehaviour {

	public void Load (int level)
    {
        Application.LoadLevel(level);
    }


}
