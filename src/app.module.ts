import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module'; // <-- agrega esto
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestController } from './test.controller'; // nuevo

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // tu usuario de postgres
      password: '2007',    // tu contraseña
      database: 'pablomoraeva',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductsModule, // <-- agrega aquí
  ],
  controllers: [AppController, TestController],
  providers: [AppService],
})
export class AppModule {}

