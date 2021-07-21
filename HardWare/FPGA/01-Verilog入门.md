<!-- 
title: 01-Verilog入门
sort: 
--> 

## HelloWorld

```verilog
module top_module( input in, output out );
	// 将in分配给out
	assign out = in;
endmodule
```

### 逻辑门

```verilog
// 非门
assign out = !in;
// 与门
assign out = a & b;
// 或非门
assign out = !a & !b;
// 同或门
assign out = ~a ^ b;
assign out = !((a | b) & !(a & b));
```

### 语法

```verilog
// 变量
wire and1,or1;
// 向量
wire [2:0] vec;
// 赋值
assign and1 = vec[2] & vec[1];
assign or1 = and1 | vec[0];
// 分割
input wire [15:0] in,
assign out_hi = in[15:8];
assign out_lo = in[7:0];

```

