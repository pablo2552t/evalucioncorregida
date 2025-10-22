import { Controller, Get, Post, Put, Body } from '@nestjs/common';

@Controller('test')
export class TestController {
  @Get()
  get() {
    return { ok: true, message: 'test route works' };
  }

  @Post()
  create(@Body() createDto: any) {
    return {
      ok: true,
      message: 'POST works',
      received: createDto
    };
  }

  @Put()
  update(@Body() updateDto: any) {
    return {
      ok: true,
      message: 'PUT works',
      received: updateDto
    };
  }
}