<!-- 
title: 10-Unity入门
sort: 
--> 

### 脚本编程

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Hello : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        Debug.Log("First Debug Message!");
        // 帧数设置
        Application.targetFrameRate = 10;
    }

    // Update is called once per frame
    void Update()
    {
        Debug.Log("Update.. " + Time.deltaTime);
    }
}
```

### API

```c#
// 获得父节点
GameObject fatherObj = this.transform.parent.gameObject;

// 遍历子节点
foreach (Transform child in transform)
{
    Debug.Log(child.name)
}

// 查找其他对象
GameObject otherObj = GameObject.Find("/otherObj");
// 当前渲染对象
SpriteRenderer renderer = this.GetComponent<SpriteRenderer>();

// 获得其他渲染对象
SpriteRenderer otherRender = otherObj.GetComponent<SpriteRenderer>();

// 对象翻转
renderer.flipY = true;
otherRender.flipX = true;

// 帧数设置
Application.targetFrameRate = 60;

// 当前/其他组件移动
(this).transform.Translate(x, y, z);
otherObj.transform.Translate(x,y,z);

```

