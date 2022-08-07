import { IsNotEmpty } from "class-validator";

export class MyProductDTO {

    @IsNotEmpty()
    product_name: string;

    @IsNotEmpty()
    product_price: number;

    @IsNotEmpty()
    product_category: number;

    @IsNotEmpty()
    status: number;

    @IsNotEmpty()
    created_by:number;
}