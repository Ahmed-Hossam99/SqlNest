import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MyProductDTO } from './dto/products.dto';
import { MyProduct } from './products.entity';
import { MyProductRepository } from './products.repository';

@Injectable()
export class ProductsService {

    constructor(@InjectRepository(MyProductRepository)
    private MyProductRepo: MyProductRepository) { }

    async createNewProduct(dto: MyProductDTO): Promise<MyProduct> {
        return this.MyProductRepo.createProduct(dto)
    }

    async getAllProducts(x?:number  ,y? : string ): Promise<MyProduct[]> {
        let query = {
            ...(x&& {where: {my_product_id: x}})
        }
        return this.MyProductRepo.find(query)
    }

    async getOneProduct(productId: number): Promise <MyProduct> {
        let product  =  this.MyProductRepo.findOne({where: {my_product_id: productId}})
        // console.log(product)
        // if(!product) throw new NotFoundException(`product with this  ${productId} not found`);
        return product 
    }

    async updateProduct(productId: number, dto: MyProductDTO):Promise <MyProduct> {
        const product = await this.MyProductRepo.findOne ({where: {my_product_id: productId}})
        let update = Object.assign(product, dto)
        let newChange = await this.MyProductRepo.save(update)

        return newChange
    }

}
