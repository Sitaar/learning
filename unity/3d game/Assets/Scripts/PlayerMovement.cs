using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    Rigidbody rb;
    [SerializeField] float movementSpeed = 5f;
    [SerializeField] float JumpForce = 5f;

    [SerializeField] Transform groundCheck;
    [SerializeField] LayerMask ground;
    // Start is called before the first frame update
    void Start()
    {
        rb = GetComponent<Rigidbody>();
    }

    // Update is called once per frame
    void Jump()
    {
        rb.velocity = new Vector3(rb.velocity.x, JumpForce, rb.velocity.z);
    }
    void Update()
    {
        //操控玩家动作
        float horizontalInput = Input.GetAxis("Horizontal");
        float verticalInput = Input.GetAxis("Vertical");

        rb.velocity = new Vector3(horizontalInput * movementSpeed, rb.velocity.y, verticalInput * movementSpeed);
        if (Input.GetButtonDown("Jump") && isGrounded())
        {
            Jump();
        }
        // if(Input.GetKeyDown("space")){

        // }
        // if(Input.GetKey("up")){
        //     rb.velocity = new Vector3(0,0,5);
        // }
        // if(Input.GetKey("down")){
        //     rb.velocity = new Vector3(0,0,-5);
        // }
        // if(Input.GetKey("right")){
        //     rb.velocity = new Vector3(5,0,0);
        // }
        // if(Input.GetKey("left")){
        //     rb.velocity = new Vector3(-5,0,0);
        // }
    }

    //palayer是否在地板范围内
    bool isGrounded()
    {
        return Physics.CheckSphere(groundCheck.position, .1f, ground);
    }



    private void OnCollisionEnter(Collision collision)
    {
        //碰到敌人的head，敌人消失， play被弹起来
        if (collision.gameObject.CompareTag("Enemy Head"))
        {
            Destroy(collision.transform.parent.gameObject);
            Jump();
        }
    }
}
