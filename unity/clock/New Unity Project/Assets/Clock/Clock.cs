using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System;

public class Clock : MonoBehaviour
{
    public Transform hoursTransform;
    public Transform minutesTransform;
    public Transform secondsTransform;
    const float degreesPerHour = 30f;
    const float degreesPerMinute = 6f;
    const float degreesPerSecond = 6f;
    public bool continuous;

    private void Update()
    {
        if (continuous)
        {
            UpdateContinuous();
        }
        else
        {

            // Debug.Log(DateTime.Now);
            hoursTransform.localRotation = Quaternion.Euler(0f, DateTime.Now.Hour * degreesPerHour, 0f);
            minutesTransform.localRotation = Quaternion.Euler(0f, DateTime.Now.Minute * degreesPerMinute, 0f);
            secondsTransform.localRotation = Quaternion.Euler(0f, DateTime.Now.Second * degreesPerSecond, 0f);
        }
    }

    void UpdateContinuous()
    {
        TimeSpan time = DateTime.Now.TimeOfDay;
        // Debug.Log((float)time.TotalHours); 12:30表示为12.5
        // Debug.Log(time.Hours); 12:30表示为12
        hoursTransform.localRotation = Quaternion.Euler(0f, (float)time.TotalHours * degreesPerHour, 0f);
        minutesTransform.localRotation = Quaternion.Euler(0f, (float)time.TotalMinutes * degreesPerMinute, 0f);
        secondsTransform.localRotation = Quaternion.Euler(0f, (float)time.TotalSeconds * degreesPerSecond, 0f);
    }
}
