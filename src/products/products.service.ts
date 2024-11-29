import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
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
import { ProductVariant } from "./entities/productVariant.entity";

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(ProductVariant)
    private readonly productVariantRepository: Repository<ProductVariant>,
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

  async createProduct(createProductDto: CreateProductDto) {
    try {
      const product = this.productRepository.create(createProductDto);
      return await this.productRepository.save(product);
    } catch (e) {
      if (e.code === "ER_DUP_ENTRY") {
        // PostgreSQL unique constraint violation code
        throw new ConflictException(
          `Product with name "${createProductDto.name}" already exists.`,
        );
      }
      throw new ConflictException(e.message);
    }
  }

  createCategory(createCategoryDto: CreateCategoryDto) {
    const category = this.categoryRepository.create(createCategoryDto);
    return this.categoryRepository.save(category);
  }

  createBrand(createBrandDto: CreateBrandDto) {
    const brand = this.brandRepository.create(createBrandDto);
    return this.brandRepository.save(brand);
  }

  findOne(id: string) {
    return this.productRepository.findOne({
      where: { id },
      relations: ["variants"],
    });
  }

  async updateProduct(id: string, updateProductDto: UpdateProductDto) {
    const row = await this.findOne(id);
    if (row) {
      return this.productRepository.save({ ...row, ...updateProductDto });
    }
    throw new NotFoundException(`Product with ID ${id} not found.`);
  }

  async removeProduct(id: string) {
    await this.removeProductVariantsByProductId(id);
    return this.productRepository.delete(id);
  }

  async removeProductVariantsByProductId(id: string) {
    return this.productVariantRepository.delete({ product: { id } });
  }
}
