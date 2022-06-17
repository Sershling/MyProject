import * as express from "express";
import {Request, Response} from "express"
import { AppDataSource } from "./data-source"
import { Products } from "./entity/Products"
import { Brands } from "./entity/Brands"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new data into the database...")

/* Inserta el mock data para hacer las pruebas

    Insert brands and products
    const brand1 = new Brands()
    brand1.name = "Chevolet"
    brand1.active = true
    await AppDataSource.manager.save(brand1)
    console.log("Saved a new brand with id: " + brand1.id)

    const product1 = new Products()
    product1.name = "Spark"
    product1.description = "Compacto"
    product1.img = "www.spark.com"
    product1.active = true
    product1.brand = brand1
    await AppDataSource.manager.save(product1)
    console.log("Saved a new product with id: " + product1.id)

    const product2 = new Products()
    product2.name = "Silverado"
    product2.description = "Pick Up"
    product2.img = "www.silverado.com"
    product2.active = true
    product2.brand = brand1
    await AppDataSource.manager.save(product2)
    console.log("Saved a new product with id: " + product2.id)

    const brand2 = new Brands()
    brand2.name = "Ford"
    brand2.active = true
    await AppDataSource.manager.save(brand2)
    console.log("Saved a new brand with id: " + brand2.id)

    const product3 = new Products()
    product3.name = "Fiesta"
    product3.description = "Compacto"
    product3.img = "www.fiesta.com"
    product3.active = true
    product3.brand = brand2
    await AppDataSource.manager.save(product3)
    console.log("Saved a new product with id: " + product3.id)

    const product4 = new Products()
    product4.name = "Lobo"
    product4.description = "Pick Up"
    product4.img = "www.lobo.com"
    product4.active = true
    product4.brand = brand2
    await AppDataSource.manager.save(product4)
    console.log("Saved a new product with id: " + product4.id)

    console.log("Loading products from the database...")
    const products = await AppDataSource.manager.find(Products)
    console.log("Loaded products: ", products)
*/

// create and setup express app
const app = express();
app.use(express.json());

// register routes

//Brands Routes
app.get("/getBrands", async function(req: Request, res: Response) {
    const results = await AppDataSource.getRepository(Brands)
    .createQueryBuilder("brand")
    .where("brand.active = true")
    .execute()
    res.json(results);
});

app.get("/getBrandById/:id", async function(req: Request, res: Response) {
    const results = await AppDataSource.getRepository(Brands)
    .createQueryBuilder("brand")
    .where("brand.id = "+req.params.id)
    .andWhere("brand.active = true")
    .execute()
    return res.send(results)
});

app.post("/addBrand", async function(req: Request, res: Response) {
    console.log(req.body)
    const brand = await AppDataSource.getRepository(Brands).create(req.body)
    const results = await AppDataSource.getRepository(Brands).save(brand)
    return res.send(results)
});

app.put("/updateBrand/:id", async function(req: Request, res: Response) {
    const brand = await AppDataSource.getRepository(Brands).findOneBy({
        id: parseInt(req.params.id),
    })
    AppDataSource.getRepository(Brands).merge(brand, req.body)
    const results = await AppDataSource.getRepository(Brands).save(brand)
    return res.send(results)
});

app.delete("/removeBrand/:id", async function(req: Request, res: Response) {
    const brand = await AppDataSource.getRepository(Brands).findOneBy({
        id: parseInt(req.params.id),
    })
    brand.active = false
    const results = await AppDataSource.getRepository(Brands).save(brand)
    return res.send(results)
});

//Products Routes
app.get("/getProducts", async function(req: Request, res: Response) {
    const results = await AppDataSource.getRepository(Products)
    .createQueryBuilder("product")
    .where("product.active = true")
    .execute()
    res.json(results);
});

app.get("/getProductById/:id", async function(req: Request, res: Response) {
    const results = await AppDataSource.getRepository(Products)
    .createQueryBuilder("product")
    .where("product.id = "+req.params.id)
    .andWhere("product.active = true")
    .execute()
    return res.send(results)
});

app.post("/addProduct", async function(req: Request, res: Response) {
    console.log(req.body)
    const product = await AppDataSource.getRepository(Products).create(req.body)
    const results = await AppDataSource.getRepository(Products).save(product)
    return res.send(results)
});

app.put("/updateProduct/:id", async function(req: Request, res: Response) {
    const product = await AppDataSource.getRepository(Products).findOneBy({
        id: parseInt(req.params.id),
    })
    AppDataSource.getRepository(Products).merge(product, req.body)
    const results = await AppDataSource.getRepository(Products).save(product)
    return res.send(results)
});

app.delete("/removeProduct/:id", async function(req: Request, res: Response) {
    const product = await AppDataSource.getRepository(Products).findOneBy({
        id: parseInt(req.params.id),
    })
    product.active = false
    const results = await AppDataSource.getRepository(Products).save(product)
    return res.send(results)
});

// start express server
app.listen(3000);
console.log("App running at port 3000")

}).catch(error => console.log(error))
