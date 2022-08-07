import { BaseEntity, BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("my_product", { schema: "products" })
export class MyProduct extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "my_product_id" })
    my_product_id: number;

    @Column("varchar", { name: "product_name" })
    product_name: string;

    @Column("int", { name: "product_price" })
    product_price: number;

    @Column("int", {name: "product_category"})
    product_category: number;

    @Column("int", { name: "status" })
    status: number;

    @BeforeInsert()
    insertDates() {
        this.created_date = new Date();
    }
    @Column({ name: "created_date", nullable: true, default: null, type: "datetime" })
    created_date: Date;

    @Column("int", { name: "created_by", default: null, nullable: true })
    created_by: number;

    @BeforeUpdate()
    updateDates() {
        this.updated_date = new Date();
    }
    @Column({ name: "updated_date", nullable: true, default: null, type: "datetime" })
    updated_date: Date;

    @Column("int", { name: "updated_by", nullable: true })
    updated_by: number

}