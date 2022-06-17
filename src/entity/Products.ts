import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { Brands } from "./Brands"

@Entity()
export class Products {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    img: string

    @Column()
    active: boolean

    @Column()
    id_brand: number

    @ManyToOne(type => Brands)
    @JoinColumn({ name: "id_brand" })
    brand: Brands

}
