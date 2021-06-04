<!-- 
title: Nest入门
sort: 
--> 

### Controller

```typescript
import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
@ApiTags("app")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    summary: "测试"
  })
  getHello(): string {
    return this.appService.getHello();
  }
}

```

### MongoDB

> [官方文档](https://nestjs.bootcss.com/techniques/mongo)

```typescript
// nest g mo db
`/src/db/db.module.ts`
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
})
export class DbModule {}

// nest g interface user
`/src/interface/user.interface.ts`
import { Prop,Schema } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

@Schema()
export class User extends Document {
  @Prop()
  @ApiProperty({
    description: "用户手机号",
    example: "13074291048"
  })
  readonly number: string;
  
  @Prop()
  @ApiProperty({
    description: "用户密码",
    example: "12345678"
  })
  readonly password: string;
}

// /src/db/schema/user.schema.ts
import { SchemaFactory } from "@nestjs/mongoose";
import { User } from "src/interface/user.interface";

// 用户Schema
export const UserSchema = SchemaFactory.createForClass(User);
```

### 编写模块

```typescript
// nest g s user
`/src/modules/user/user.services.ts`
// nest g mo user
`/src/modules/user/user.module.ts`
// nest g co user
`/src/modules/user/demo.controller.ts`

// 密码加密
nest g mi hashPassword
// 响应接口
nest g interface response
    
// 守护 在中间件后阻止不正常的请求
nest g gu auth
`/src/guards/auth.guard.ts`

// 装饰器
nest g d r

// 登录token
nest g mo auth
nest g service auth
nest g co auth
```

