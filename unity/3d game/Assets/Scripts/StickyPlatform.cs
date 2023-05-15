using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class StickyPlatform : MonoBehaviour
{

    [SerializeField] GameObject[] UpedThing;
    private void Update()
    {
        foreach (var item in UpedThing)
        {
            if (item)
            {
                item.transform.SetParent(transform);
            }

        }
    }
    //碰撞检测
    //player在移动的地板上时，跟着地板运动
    private void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.name == "Player")
        {
            collision.gameObject.transform.SetParent(transform);
        }
    }
    private void OnCollisionExit(Collision collision)
    {
        if (collision.gameObject.name == "Player")
        {
            collision.gameObject.transform.SetParent(null);
        }
    }
}
