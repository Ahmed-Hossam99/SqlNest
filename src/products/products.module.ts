import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MyProductRepository } from './products.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MyProductRepository])],
  providers: [ProductsService],
  controllers: [ProductsController]
})
export class ProductsModule {}
