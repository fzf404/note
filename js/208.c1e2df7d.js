(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{836:function(n,t){n.exports='\x3c!--\ntitle: 09-数据结构\nsort:\n--\x3e\n\n# 数据结构\n\n## 枚举\n\n```c\nenum COLOR {RED, GREEN, BLUE, colorNum};\nenum COLOR c = GREEN;\nprintf("%d %d %d", RED, colorNum, c);\n// 0 3 1\n```\n\n## 联合体\n\n> 每个实例只能存储一个声明的变量\n>\n> 最多只有一个成员有效\n\n```c\n#include <stdio.h>\n\nunion TestUnion\n{\n    char x;\n    int y;\n};\n\nint main(int argc, char const *argv[])\n{\n\n    union TestUnion test;\n    test.x = \'a\';\n    test.y = 404;\n    printf("size: %d\\nValue: %d", sizeof(test),test.y);\n    // size: 4\n\t// Value: 404\n\n    return 0;\n}\n```\n\n## 结构体\n\n> 请参考: `05-数组与指针`\n\n```c\n#include <stdio.h>\n\nint main()\n{\n\tstruct point {\n\t\tint x;\n\t\tint y;\n\t}place;\n    // struct point place;\n\tprintf("Input x,y: ");\n\tscanf("%d,%d",&place.x,&place.y);\n\tprintf("place is (%d,%d).",place.x,place.y);\n}\n\n# 还可使用 : num 定义结构体内元素占用空间大小\n```\n\n### 结构体指针\n\n```c\n#include <stdio.h>\n\nstruct point* StructInput(struct point *p);\n\nstruct point {\n\tint x;\n\tint y;\n};\n\nint main()\n{\n\tstruct point place;\n\t// StructInput(&place);\n    printf("x is: %d\\n",(*StructInput(&place)).x);\n\tprintf("place is (%d,%d).",place.x,place.y);\n}\n\nstruct point* StructInput(struct point *p)\n{\n\tprintf("Input x,y: ");\n\tscanf("%d,%d",&p->x,&(*p).y);\n\treturn p;\n}\n\n/*\nInput x,y: 3,4\nx is: 3\nplace is (3,4).\n*/\n```\n\n## 可变数组\n\n```c\n#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct\n{\n\tint *array;\n\tint size;\n} Array;\n\nArray array_creat(int init_size)\n{\n\tArray a;\n\ta.size = init_size;\n\ta.array = (int *)malloc(sizeof(int) * a.size);\n\treturn a;\n}\n\nvoid array_free(Array *a)\n{\n\tfree(a->array);\n\ta->array = NULL;\n\ta->size = 0;\n}\n\n\nArray array_icrease(Array *a, int increase)\n{\n\tArray new = array_creat(a->size+increase);\n\tfor(int i; i<a->size; i++)\n\t{\n\t\tnew.array[i] = a->array[i];\n\t}\n\tarray_free(a);\n\treturn new;\n}\n\n\nint array_size(Array *a)\n{\n\treturn a->size;\n}\n\nint array_get(Array *a, int index)\n{\n\treturn a->array[index];\n}\n\nArray array_input(Array *a, int index, int num)\n{\n\ta->array[index] = num;\n\treturn *a;\n}\n\nint main()\n{\n\tArray a = array_creat(100);\n\t// 批量赋值\n\tfor (int i; i < 100; i++)\n\t\tarray_input(&a, i, i);\n\t// 增加大小\n\ta = array_icrease(&a,20);\n\t// 打印信息\n\tprintf("ArraySize is %d.\\n", array_size(&a));\n\tprintf("Array[10] is %d.\\nArray[110] is %d.", array_get(&a, 10), array_get(&a, 110));\n\n\n\treturn 0;\n}\n\n/*\nArraySize is 120.\nArray[10] is 10.\nArray [110] is 0.\n*/\n```\n\n## 链表\n\n```c\n#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct LNode\n{\n\tint data;\n\tstruct LNode *next;\n} LNode, *LinkList;\n\nLinkList CreateList(int n);\nvoid print(LinkList h);\nint main()\n{\n\tLinkList Head = NULL;\n\tint n;\n\n\tscanf("%d", &n);\n\tHead = CreateList(n);\n\n\tprintf("Num is: \\n");\n\tprint(Head);\n\n\tprintf("\\n\\n");\n\tsystem("pause");\n\treturn 0;\n}\nLinkList CreateList(int n)\n{\n\tLinkList L, p, q;\n\tint i;\n\tL = (LNode *)malloc(sizeof(LNode));\n\tif (!L)\n\t\treturn 0;\n\tL->next = NULL;\n\tq = L;\n\tfor (i = 1; i <= n; i++)\n\t{\n\t\tp = (LinkList)malloc(sizeof(LNode));\n\t\tprintf("Input No_%d Value: ", i);\n\t\tscanf("%d", &(p->data));\n\t\tp->next = NULL;\n\t\tq->next = p;\n\t\tq = p;\n\t}\n\treturn L;\n}\nvoid print(LinkList h)\n{\n\tLinkList p = h->next;\n\twhile (p != NULL)\n\t{\n\t\tprintf("%d ", p->data);\n\t\tp = p->next;\n\t}\n}\n```\n'}}]);