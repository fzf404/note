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

## MongoDB

```typescript
// nest g mo db
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
})
export class DbModule {}

// nnest g interface user

```

