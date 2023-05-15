using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class PlayerLife : MonoBehaviour
{
    bool dead = false;
    private void Update()
    {
        //当player掉下去了(且不是死亡状态)，死亡
        if (transform.position.y < -1f && !dead)
        {
            Die();
        }
    }
    private void OnCollisionEnter(Collision collision)
    {
        //碰到敌人的身体，player死亡
        if (collision.gameObject.CompareTag("Enemy Body"))
        {
            GetComponent<MeshRenderer>().enabled = false;//是否可见
            GetComponent<Rigidbody>().isKinematic = true;//是否可以运动
            GetComponent<PlayerMovement>().enabled = false;//脚本是否起作用
            Die();
        }
    }

    void Die()
    {
        //第一个参数应该为字符形势，nameof(abc)==>"abc"
        Invoke(nameof(ReloadLevel), 1.3f);//1.3秒后执行reloadLevel
        dead = true;
    }

    //关卡切换常用的
    //加载获取当前场景
    void ReloadLevel()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().name);
    }
}
