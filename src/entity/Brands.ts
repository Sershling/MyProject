import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Products } from "./Products"

@Entity()
export class Brands {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    active: boolean

    @OneToMany(() => Products, (product) => product.brand)
    products: Products[]
}
