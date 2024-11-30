import {
  ConflictException,
  UnprocessableEntityException,
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
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { CreateTagDto } from "./dto/create-tag.dto";
import { UpdateTagDto } from "./dto/update-tag.dto";
import { Variant } from "./entities/variant.entity";
import { CreateVariantDto } from "./dto/create-variant.dto";
import { UpdateVariantDto } from "./dto/update-variant.dto";

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
    @InjectRepository(Variant)
    private readonly variantRepository: Repository<Variant>,
  ) {}

  // ! -------------------PRODUCTS ----------------

  // ? PAGINATE
  async findAllProducts(page = 1, limit = 1) {
    const [data, total] = await this.productRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      relations: ["variants"],
    });
    return { data, total, currentPage: page };
  }

  // ? GET ONE
  findOne(id: string) {
    return this.productRepository.findOne({
      where: { id },
      relations: ["variants", "brand", "category", "tags", "variants.variant"],
    });
  }

  // ? SAVE
  async createProduct(createProductDto: CreateProductDto) {
    try {
      if (!createProductDto.isVariant) {
        createProductDto.variants = [];
        if (!createProductDto.price) {
          throw new UnprocessableEntityException(`Price required`);
        }
      }
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

  // ? UPDATE
  async updateProduct(id: string, updateProductDto: UpdateProductDto) {
    const row = await this.findOne(id);
    if (row) {
      if (!updateProductDto.isVariant) {
        updateProductDto.variants = [];
        if (!updateProductDto.price) {
          throw new UnprocessableEntityException(`Price required`);
        }
      }
      return this.productRepository.save({ ...row, ...updateProductDto });
    }
    throw new NotFoundException(`Product with ID ${id} not found.`);
  }

  async removeProductVariantsByProductId(id: string) {
    return this.productVariantRepository.delete({ product: { id } });
  }

  // ? DELETE
  async removeProduct(id: string) {
    await this.removeProductVariantsByProductId(id);
    return this.productRepository.delete(id);
  }

  // ! ------------------CATEGORY-------------------------

  // ? PAGINATE
  async findAllCategories(page = 1, limit = 1) {
    const [data, total] = await this.categoryRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });
    return { data, total, currentPage: page };
  }

  // ? GET ALL
  getAllCategories() {
    return this.categoryRepository.find();
  }

  // ? GET ONE
  findOneCategory(id: string) {
    return this.categoryRepository.findOne({
      where: { id },
    });
  }

  // ?CREATE
  async createCategory(createCategoryDto: CreateCategoryDto) {
    try {
      const category = this.categoryRepository.create(createCategoryDto);
      return await this.categoryRepository.save(category);
    } catch (e) {
      if (e.code === "ER_DUP_ENTRY") {
        // PostgreSQL unique constraint violation code
        throw new ConflictException(
          `Category with name "${createCategoryDto.name}" already exists.`,
        );
      }
      throw new ConflictException(e.message);
    }
  }

  // ? UPDATE
  async updateCategory(id: string, updateCategoryDto: UpdateCategoryDto) {
    const row = await this.findOneCategory(id);
    if (row) {
      return this.categoryRepository.save({ ...row, ...updateCategoryDto });
    }
    throw new NotFoundException(`Category with ID ${id} not found.`);
  }

  // ? DELETE
  removeCategory(id: string) {
    return this.categoryRepository.delete(id);
  }

  // ! -------------------BRAND---------------------------

  // ? PAGINATE
  async findAllBrands(page = 1, limit = 1) {
    const [data, total] = await this.brandRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });
    return { data, total, currentPage: page };
  }

  // ? GET ALL
  getAllBrands() {
    return this.brandRepository.find();
  }

  // ? GET ONE
  findOneBrand(id: string) {
    return this.brandRepository.findOne({
      where: { id },
    });
  }

  // ? SAVE
  async createBrand(createBrandDto: CreateBrandDto) {
    try {
      const brand = this.brandRepository.create(createBrandDto);
      return await this.brandRepository.save(brand);
    } catch (e) {
      if (e.code === "ER_DUP_ENTRY") {
        // PostgreSQL unique constraint violation code
        throw new ConflictException(
          `Brand with name "${createBrandDto.name}" already exists.`,
        );
      }
      throw new ConflictException(e.message);
    }
  }

  // ? UPDATE
  async updateBrand(id: string, updateBrandDto: UpdateProductDto) {
    const row = await this.findOneBrand(id);
    if (row) {
      return this.brandRepository.save({ ...row, ...updateBrandDto });
    }
    throw new NotFoundException(`Brand with ID ${id} not found.`);
  }

  // ? DELETE
  removeBrand(id: string) {
    return this.brandRepository.delete(id);
  }

  // !--------------------TAGS--------------------------

  // ? PAGINATE
  async findAllTags(page = 1, limit = 1) {
    const [data, total] = await this.tagRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });
    return { data, total, currentPage: page };
  }

  // ? GET ALL
  getAllTags() {
    return this.tagRepository.find();
  }

  // ? GET ONE
  findOneTag(id: string) {
    return this.tagRepository.findOne({
      where: { id },
    });
  }

  // ? SAVE
  async createTag(createTagDto: CreateTagDto) {
    try {
      const tag = this.tagRepository.create(createTagDto);
      return await this.tagRepository.save(tag);
    } catch (e) {
      if (e.code === "ER_DUP_ENTRY") {
        // PostgreSQL unique constraint violation code
        throw new ConflictException(
          `Tag with name "${createTagDto.name}" already exists.`,
        );
      }
      throw new ConflictException(e.message);
    }
  }

  // ? UPDATE
  async updateTag(id: string, updateTagDto: UpdateTagDto) {
    const row = await this.findOneTag(id);
    if (row) {
      return this.tagRepository.save({ ...row, ...updateTagDto });
    }
    throw new NotFoundException(`Tag with ID ${id} not found.`);
  }

  // ? DELETE
  removeTag(id: string) {
    return this.tagRepository.delete(id);
  }

  // !--------------------VARIANTS--------------------------

  // ? PAGINATE
  async findAllVariants(page = 1, limit = 1) {
    const [data, total] = await this.variantRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });
    return { data, total, currentPage: page };
  }

  // ? GET ALL DISTINCT
  getAllVariantsDistinct() {
    return this.variantRepository
      .createQueryBuilder("variants")
      .select("variants.name", "name") // Group by `name`
      .addSelect("MIN(variants.id)", "id") // Select the smallest `id` for each group
      .addSelect("MIN(variants.value)", "value") // Aggregate `value`
      .addSelect("MIN(variants.html)", "html") // Aggregate `html`
      .groupBy("variants.name") // Group only by `name`
      .getRawMany(); // Use `getRawMany()` to return raw SQL results
  }

  // ? GET ALL
  getAllVariants() {
    return this.variantRepository.find({ order: { name: "ASC" } });
  }

  // ? GET ONE
  findOneVariant(id: string) {
    return this.variantRepository.findOne({
      where: { id },
    });
  }

  // ? SAVE
  async createVariant(createVariantDto: CreateVariantDto) {
    try {
      const tag = this.variantRepository.create(createVariantDto);
      return await this.variantRepository.save(tag);
    } catch (e) {
      if (e.code === "ER_DUP_ENTRY") {
        // PostgreSQL unique constraint violation code
        throw new ConflictException(
          `Variant with name "${createVariantDto.name}" already exists.`,
        );
      }
      throw new ConflictException(e.message);
    }
  }

  // ? UPDATE
  async updateVariant(id: string, updateVariantDto: UpdateVariantDto) {
    const row = await this.findOneVariant(id);
    if (row) {
      return this.variantRepository.save({ ...row, ...updateVariantDto });
    }
    throw new NotFoundException(`Tag with ID ${id} not found.`);
  }

  // ? DELETE
  removeVariant(id: string) {
    return this.variantRepository.delete(id);
  }
}
