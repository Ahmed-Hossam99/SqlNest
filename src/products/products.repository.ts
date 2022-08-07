import { EntityRepository, Repository } from "typeorm";
import { MyProductDTO } from "./dto/products.dto";
import { MyProduct } from "./products.entity";

@EntityRepository(MyProduct)
export class MyProductRepository extends Repository<MyProduct>{

    async createProduct(dto: MyProductDTO): Promise<any> {
        const { product_category,
            product_name,
            status,
            product_price,
        created_by } = dto;

        const product = new MyProduct();
        product.product_category = product_category;
        product.product_name = product_name;
        product.status = status;
        product.product_price = product_price;
        product.created_by = created_by;

        await product.save();
        return product;


    }
}