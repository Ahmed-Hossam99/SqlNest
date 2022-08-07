import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { MyProductDTO } from './dto/products.dto';
import { MyProduct } from './products.entity';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(private ProductService: ProductsService) { }

    @Post()
    // @Auth(UserRole.ADMIN)
    @UsePipes(new ValidationPipe())
    async craeteNewProduct(@Body() dto: MyProductDTO): Promise<MyProduct> {
        return this.ProductService.createNewProduct(dto)
    }

    @Get()
    async getAllProducts(): Promise<MyProduct[]> {
        return this.ProductService.getAllProducts()
    }

    @Get('/:id')
    async getOneProduct(@Param('id') id :number): Promise<MyProduct> {
        return this.ProductService.getOneProduct(id)
    }
}
