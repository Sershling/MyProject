"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Brands = void 0;
var typeorm_1 = require("typeorm");
var Products_1 = require("./Products");
var Brands = /** @class */ (function () {
    function Brands() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Brands.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Brands.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Boolean)
    ], Brands.prototype, "active", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Products_1.Products; }, function (product) { return product.brand; }),
        __metadata("design:type", Array)
    ], Brands.prototype, "products", void 0);
    Brands = __decorate([
        (0, typeorm_1.Entity)()
    ], Brands);
    return Brands;
}());
exports.Brands = Brands;
//# sourceMappingURL=Brands.js.map