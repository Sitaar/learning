using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using static UnityEngine.Mathf;
// using UnityEngine.RangeAttribute;

public static class FunctionLibrary
{
    public static float Wave(float x, float t)
    {
        return Sin(PI * (x + t));
    }
    public static float MultiWave(float x, float t)
    {
        float y = Sin(PI * (x + t));
        y+= Sin(2f*PI * (x + t))*(1f/2f);
        return y/1.5f;
    }
}

public class Graph : MonoBehaviour
{
    public Transform pointPrefab;
    Transform[] points;
    [Range(10, 100)]
    public int resolution = 10;//调整点的个数
    private void Awake()
    {
        float step = 2f / resolution;//根据点的个数，设置正方体的大小
        Vector3 scale = Vector3.one * step;//Vector3(1, 1, 1) / 5f
        Vector3 position;
        position.y = 0f;
        position.z = 0f;
        points = new Transform[resolution];
        for (int i = 0; i < points.Length; i++)
        {
            Transform point = Instantiate(pointPrefab);
            position.x = (i + 0.5f) * step - 1f;

            point.localPosition = position;
            point.localScale = scale;
            point.SetParent(transform, false);
            points[i] = point;
        }
    }
    private void Update()
    {
        for (int i = 0; i < points.Length; i++)
        {
            Transform point = points[i];
            Vector3 position = point.localPosition;
            position.y = FunctionLibrary.MultiWave(position.x,Time.time);
            point.localPosition = position;
        }
    }
}
