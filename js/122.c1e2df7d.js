(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{750:function(t,n){t.exports='\x3c!--\ntitle: 07-常用模块\nsort:\n--\x3e\n\n# 51 常用模块\n\n## DS18B20\n\n> main.c\n\n```c\n#include "reg51.h"\n#include "temp.h"\n\ntypedef unsigned char u8;\ntypedef unsigned int u16;\n\nsbit LSA=P2^2;\nsbit LSB=P2^3;\nsbit LSC=P2^4;\n\nu8 code smgduan[]={0x3f,0x06,0x5b,0x4f,0x66,0x6d,0x7d,0x07,0x7f,\n\t\t\t\t0x6f,0x77,0x7c,0x39,0x5e,0x79,0x71};\nu8 num=0,DisplayData[8];\n\nvoid delay(u16 i)\n{\n\twhile(i--);\n}\n\nvoid datapros(int temp)\n{\n\tfloat tp;\n\tif(temp<0)\n\t{\n\t\tDisplayData[0]=0x40;\n\n\t\ttemp=temp-1;\n\t\ttemp=~temp;\n\t\ttp=temp;\n\t\ttemp=tp*0.0625*100+0.5;\n\n\t}\n\telse\n\t{\n\t\tDisplayData[0]=0x00;\n\t\ttp=temp;\n\t\ttemp=tp*0.0625*100+0.5;\n\t}\n\tDisplayData[1]=smgduan[temp/10000];\n\tDisplayData[2]=smgduan[temp%10000/1000];\n\tDisplayData[3]=smgduan[temp%10000%1000/100]|0x80;\n\tDisplayData[4]=smgduan[temp%100/10];\n\tDisplayData[5]=smgduan[temp%100%10];\n}\n\nvoid DigDisplay()\n{\n\tu8 i;\n\tfor(i=0;i<6;i++)\n\t{\n\t\tswitch(i)\n\t\t{\n\t\t\tcase 0:\n\t\t\t\tLSA=0;LSB=0;LSC=0;break;\n\t\t\tcase 1:\n\t\t\t\tLSA=1;LSB=0;LSC=0;break;\n\t\t\tcase 2:\n\t\t\t\tLSA=0;LSB=1;LSC=0;break;\n\t\t\tcase 3:\n\t\t\t\tLSA=1;LSB=1;LSC=0;break;\n\t\t\tcase 4:\n\t\t\t\tLSA=0;LSB=0;LSC=1;break;\n\t\t\tcase 5:\n\t\t\t\tLSA=1;LSB=0;LSC=1;break;\n\n\t\t}\n\t\tP0=DisplayData[5-i];\n\t\tdelay(100);\n\t\tP0=0x00;\t\t// 清零\n\t}\n}\n\nvoid main()\n{\n\twhile(1)\n\t{\n\t\tdatapros(Ds18ReadTemp());\n\t\tDigDisplay();\n\t}\n}\n```\n\n> temp.c\n\n```c\n#include "temp.h"\n\nvoid Delay1ms(uint y)\n{\n\tuint x;\n\tfor(;y>0;y--)\n\t{\n\t\tfor(x=110;x>0;x--);\n\t}\n}\n\nuchar Ds18Init()\n{\n\tuchar i=0;\n\tDSPORT=0;\n\ti=70;\n\twhile(i--);\n\tDSPORT=1;\n\ti=0;\n\twhile(DSPORT);\n\t{\n\t\tDelay1ms(1);\n\t\ti++;\n\t\tif(i>5)\n\t\t{\n\t\t\treturn 0;\n\t\t}\n\n\t}\n\treturn 1;\n}\n\nvoid Ds18WriteByte(uchar dat)\n{\n\tuchar i,j;\n\tfor(j=0;j<8;j++)\n\t{\n\t\tDSPORT=0;\n\t\ti++;\t// 延时\n\t\tDSPORT=dat&0x01;\n\t\ti=6;\n\t\twhile(i--);\n\t\tDSPORT=1;\n\t\tdat>>=1;\n\t}\n}\nuchar Ds18ReadByte()\n{\n\tuchar i,j;\n\tuchar bi,byte;\n\tfor(j=8;j>0;j--)\n\t{\n\t\tDSPORT=0;\n\t\ti++;\t// 延时\n\t\tDSPORT=1;\n\t\ti++;\n\t\ti++;\n\t\tbi=DSPORT;\n\t\tbyte=(byte>>1)|(bi<<7);\t\t// 右移一位与左移七位求或运算（0|N）\n\t\ti=4;\n\t\twhile(i--);\n\t}\n\treturn byte;\n}\n\nvoid Ds18ChangeTemp()\n{\n\tDs18Init();\n\tDelay1ms(1);\n\tDs18WriteByte(0xcc);\t// 温度变换命令\n\tDs18WriteByte(0x44);\t// 启动温度转换\n}\n\nvoid Ds18ReadTempCom()\t\t// 发送读取命令\n{\n\tDs18Init();\n\tDelay1ms(1);\n\tDs18WriteByte(0xcc);\t// 温度变换命令\n\tDs18WriteByte(0xbe);\t// 读取RAM内容\n}\n\nint Ds18ReadTemp()\n{\n\tint temp=0;\n\tuchar tmh,tml;\n\tDs18ChangeTemp();\n\tDs18ReadTempCom();\n\ttml=Ds18ReadByte();\t\t// 温度读取Low\n\ttmh=Ds18ReadByte();\t\t// 温度读取Hight\n\ttemp=tmh;\n\ttemp<<=8;\n\ttemp|=tml;\n\treturn temp;\n}\n```\n\n> temp.h\n\n```c\n#ifndef _temp_H\n#define _temp_H\n\n#include <reg52.h>\n\n#ifndef uchar\n#define uchar unsigned char\n#endif\n\n#ifndef uint\n#define uint unsigned int\n#endif\n\nsbit DSPORT=P3^7;\n\nint Ds18ReadTemp();\n\n#endif\n```\n\n## DS1302\n\n- 控制寄存器\n\n  > 存放控制命令字\n\n- 日历、时钟寄存器\n\n  > BCD 码形式\n\n## LCD1602\n\n### 引脚说明\n\n| VSS    | VDD    | VL       | RS        | R/W   | E    | D0-D7 | BLA    | BLK    |\n| ------ | ------ | -------- | --------- | ----- | ---- | ----- | ------ | ------ |\n| 电源负 | 电源正 | 液晶偏压 | 数据/坐标 | 读/写 | 使能 | Data  | 背光正 | 背光负 |\n'}}]);