"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var data_source_1 = require("./data-source");
var Products_1 = require("./entity/Products");
var Brands_1 = require("./entity/Brands");
data_source_1.AppDataSource.initialize().then(function () { return __awaiter(void 0, void 0, void 0, function () {
    var app;
    return __generator(this, function (_a) {
        console.log("Inserting a new data into the database...");
        app = express();
        app.use(express.json());
        // register routes
        //Brands Routes
        app.get("/getBrands", function (req, res) {
            return __awaiter(this, void 0, void 0, function () {
                var results;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, data_source_1.AppDataSource.getRepository(Brands_1.Brands)
                                .createQueryBuilder("brand")
                                .where("brand.active = true")
                                .execute()];
                        case 1:
                            results = _a.sent();
                            res.json(results);
                            return [2 /*return*/];
                    }
                });
            });
        });
        app.get("/getBrandById/:id", function (req, res) {
            return __awaiter(this, void 0, void 0, function () {
                var results;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, data_source_1.AppDataSource.getRepository(Brands_1.Brands)
                                .createQueryBuilder("brand")
                                .where("brand.id = " + req.params.id)
                                .andWhere("brand.active = true")
                                .execute()];
                        case 1:
                            results = _a.sent();
                            return [2 /*return*/, res.send(results)];
                    }
                });
            });
        });
        app.post("/addBrand", function (req, res) {
            return __awaiter(this, void 0, void 0, function () {
                var brand, results;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log(req.body);
                            return [4 /*yield*/, data_source_1.AppDataSource.getRepository(Brands_1.Brands).create(req.body)];
                        case 1:
                            brand = _a.sent();
                            return [4 /*yield*/, data_source_1.AppDataSource.getRepository(Brands_1.Brands).save(brand)];
                        case 2:
                            results = _a.sent();
                            return [2 /*return*/, res.send(results)];
                    }
                });
            });
        });
        app.put("/updateBrand/:id", function (req, res) {
            return __awaiter(this, void 0, void 0, function () {
                var brand, results;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, data_source_1.AppDataSource.getRepository(Brands_1.Brands).findOneBy({
                                id: parseInt(req.params.id),
                            })];
                        case 1:
                            brand = _a.sent();
                            data_source_1.AppDataSource.getRepository(Brands_1.Brands).merge(brand, req.body);
                            return [4 /*yield*/, data_source_1.AppDataSource.getRepository(Brands_1.Brands).save(brand)];
                        case 2:
                            results = _a.sent();
                            return [2 /*return*/, res.send(results)];
                    }
                });
            });
        });
        app.delete("/removeBrand/:id", function (req, res) {
            return __awaiter(this, void 0, void 0, function () {
                var brand, results;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, data_source_1.AppDataSource.getRepository(Brands_1.Brands).findOneBy({
                                id: parseInt(req.params.id),
                            })];
                        case 1:
                            brand = _a.sent();
                            brand.active = false;
                            return [4 /*yield*/, data_source_1.AppDataSource.getRepository(Brands_1.Brands).save(brand)];
                        case 2:
                            results = _a.sent();
                            return [2 /*return*/, res.send(results)];
                    }
                });
            });
        });
        //Products Routes
        app.get("/getProducts", function (req, res) {
            return __awaiter(this, void 0, void 0, function () {
                var results;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, data_source_1.AppDataSource.getRepository(Products_1.Products)
                                .createQueryBuilder("product")
                                .where("product.active = true")
                                .execute()];
                        case 1:
                            results = _a.sent();
                            res.json(results);
                            return [2 /*return*/];
                    }
                });
            });
        });
        app.get("/getProductById/:id", function (req, res) {
            return __awaiter(this, void 0, void 0, function () {
                var results;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, data_source_1.AppDataSource.getRepository(Products_1.Products)
                                .createQueryBuilder("product")
                                .where("product.id = " + req.params.id)
                                .andWhere("product.active = true")
                                .execute()];
                        case 1:
                            results = _a.sent();
                            return [2 /*return*/, res.send(results)];
                    }
                });
            });
        });
        app.post("/addProduct", function (req, res) {
            return __awaiter(this, void 0, void 0, function () {
                var product, results;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log(req.body);
                            return [4 /*yield*/, data_source_1.AppDataSource.getRepository(Products_1.Products).create(req.body)];
                        case 1:
                            product = _a.sent();
                            return [4 /*yield*/, data_source_1.AppDataSource.getRepository(Products_1.Products).save(product)];
                        case 2:
                            results = _a.sent();
                            return [2 /*return*/, res.send(results)];
                    }
                });
            });
        });
        app.put("/updateProduct/:id", function (req, res) {
            return __awaiter(this, void 0, void 0, function () {
                var product, results;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, data_source_1.AppDataSource.getRepository(Products_1.Products).findOneBy({
                                id: parseInt(req.params.id),
                            })];
                        case 1:
                            product = _a.sent();
                            data_source_1.AppDataSource.getRepository(Products_1.Products).merge(product, req.body);
                            return [4 /*yield*/, data_source_1.AppDataSource.getRepository(Products_1.Products).save(product)];
                        case 2:
                            results = _a.sent();
                            return [2 /*return*/, res.send(results)];
                    }
                });
            });
        });
        app.delete("/removeProduct/:id", function (req, res) {
            return __awaiter(this, void 0, void 0, function () {
                var product, results;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, data_source_1.AppDataSource.getRepository(Products_1.Products).findOneBy({
                                id: parseInt(req.params.id),
                            })];
                        case 1:
                            product = _a.sent();
                            product.active = false;
                            return [4 /*yield*/, data_source_1.AppDataSource.getRepository(Products_1.Products).save(product)];
                        case 2:
                            results = _a.sent();
                            return [2 /*return*/, res.send(results)];
                    }
                });
            });
        });
        // start express server
        app.listen(3000);
        console.log("App running at port 3000");
        return [2 /*return*/];
    });
}); }).catch(function (error) { return console.log(error); });
//# sourceMappingURL=index.js.map