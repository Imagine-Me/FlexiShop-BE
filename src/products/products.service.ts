import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";
import { Repository } from "typeorm";
import { Category } from "./entities/category.entity";
import { Brand } from "./entities/brand.entity";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { CreateBrandDto } from "./dto/create-brand.dto";
import { Tag } from "./entities/tag.entity";

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
  ) {}

  async findAllProducts(page = 1, limit = 1) {
    const [data, total] = await this.productRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      relations: ["variants"],
    });
    return { data, total, currentPage: page };
  }

  findAllCategories() {
    return this.categoryRepository.find();
  }

  findAllBrands() {
    return this.brandRepository.find();
  }

  findAllTags() {
    return this.tagRepository.find();
  }

  createProduct(createProductDto: CreateProductDto) {
    console.log(createProductDto);
    const product = this.productRepository.create(createProductDto);
    return this.productRepository.save(product);
  }

  createCategory(createCategoryDto: CreateCategoryDto) {
    const category = this.categoryRepository.create(createCategoryDto);
    return this.categoryRepository.save(category);
  }

  createBrand(createBrandDto: CreateBrandDto) {
    const brand = this.brandRepository.create(createBrandDto);
    return this.brandRepository.save(brand);
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product ${updateProductDto}`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
