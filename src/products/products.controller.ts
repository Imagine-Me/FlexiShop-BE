import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from "@nestjs/common";
import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ApiQuery, ApiTags } from "@nestjs/swagger";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { CreateBrandDto } from "./dto/create-brand.dto";
import { UpdateBrandDto } from "./dto/update-brand.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { CreateTagDto } from "./dto/create-tag.dto";
import { UpdateTagDto } from "./dto/update-tag.dto";
import { CreateVariantDto } from "./dto/create-variant.dto";
import { UpdateVariantDto } from "./dto/update-variant.dto";

@Controller("products")
@ApiTags("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  //! --------------------CATEGORY --------------------

  // ? PAGINATE
  @Get("/categories")
  @ApiQuery({
    name: "page",
    required: false,
    example: 1,
    description: "Page number (default: 1)",
  })
  @ApiQuery({
    name: "limit",
    required: false,
    example: 10,
    description: "Number of items per page (default: 10)",
  })
  findAllCategories(
    @Query("page") page: number = 1,
    @Query("limit") limit: number = 10,
  ) {
    return this.productsService.findAllCategories(page, limit);
  }

  //? GET ALL
  @Get("/categories/all")
  getAllCategories() {
    return this.productsService.getAllCategories();
  }

  // ? GET ONE
  @Get("/categories/:id")
  findOneCategory(@Param("id") id: string) {
    return this.productsService.findOneCategory(id);
  }

  // ? SAVE
  @Post("/categories")
  createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    return this.productsService.createCategory(createCategoryDto);
  }

  // ? UPDATE
  @Patch("/categories/:id")
  updateCategory(
    @Param("id") id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.productsService.updateCategory(id, updateCategoryDto);
  }

  // ? DELETE
  @Delete("categories/:id")
  removeCategory(@Param("id") id: string) {
    return this.productsService.removeCategory(id);
  }

  // ! ------------------ BRAND ---------------------

  // ? PAGINATE
  @Get("/brands")
  @ApiQuery({
    name: "page",
    required: false,
    example: 1,
    description: "Page number (default: 1)",
  })
  @ApiQuery({
    name: "limit",
    required: false,
    example: 10,
    description: "Number of items per page (default: 10)",
  })
  findAllBrands(
    @Query("page") page: number = 1,
    @Query("limit") limit: number = 10,
  ) {
    return this.productsService.findAllBrands(page, limit);
  }

  // ? GET ALL
  @Get("/brands/all")
  getAllBrands() {
    return this.productsService.getAllBrands();
  }

  // ? GET ONE
  @Get("/brands/:id")
  findOneBrand(@Param("id") id: string) {
    return this.productsService.findOneBrand(id);
  }

  // ? SAVE
  @Post("/brands")
  createBrand(@Body() createBrandDto: CreateBrandDto) {
    return this.productsService.createBrand(createBrandDto);
  }

  // ? UPDATE
  @Patch("/brands/:id")
  updateBrand(
    @Param("id") id: string,
    @Body() updateProductDto: UpdateBrandDto,
  ) {
    return this.productsService.updateBrand(id, updateProductDto);
  }

  // ? DELETE
  @Delete("brands/:id")
  removeBrand(@Param("id") id: string) {
    return this.productsService.removeBrand(id);
  }

  // ! ------------------TAGS -----------------------

  // ? PAGINATE
  @Get("/tags")
  @ApiQuery({
    name: "page",
    required: false,
    example: 1,
    description: "Page number (default: 1)",
  })
  @ApiQuery({
    name: "limit",
    required: false,
    example: 10,
    description: "Number of items per page (default: 10)",
  })
  findAllTags(
    @Query("page") page: number = 1,
    @Query("limit") limit: number = 10,
  ) {
    return this.productsService.findAllTags(page, limit);
  }

  // ? GET ALL
  @Get("/tags/all")
  getAllTags() {
    return this.productsService.getAllTags();
  }

  // ? GET ONE
  @Get("/tags/:id")
  findOneTag(@Param("id") id: string) {
    return this.productsService.findOneTag(id);
  }

  // ? SAVE
  @Post("/tags")
  createTag(@Body() createTagDto: CreateTagDto) {
    return this.productsService.createTag(createTagDto);
  }

  // ? UPDATE
  @Patch("/tags/:id")
  updateTag(@Param("id") id: string, @Body() updateTagDto: UpdateTagDto) {
    return this.productsService.updateTag(id, updateTagDto);
  }

  // ? DELETE
  @Delete("tags/:id")
  removeTag(@Param("id") id: string) {
    return this.productsService.removeTag(id);
  }

  // ! ------------------VARIANTS -----------------------

  // ? PAGINATE
  @Get("/variants")
  @ApiQuery({
    name: "page",
    required: false,
    example: 1,
    description: "Page number (default: 1)",
  })
  @ApiQuery({
    name: "limit",
    required: false,
    example: 10,
    description: "Number of items per page (default: 10)",
  })
  findAllVariants(
    @Query("page") page: number = 1,
    @Query("limit") limit: number = 10,
  ) {
    return this.productsService.findAllVariants(page, limit);
  }

  // ? GET ALL
  @Get("/variants/distinct/all")
  getAllVariants() {
    return this.productsService.getAllVariantsDistinct();
  }

  // ? GET ALL DISTINCT
  @Get("/variants/all")
  getAllVariantsDistinct() {
    return this.productsService.getAllVariants();
  }

  // ? GET ONE
  @Get("/variants/:id")
  findOneVariant(@Param("id") id: string) {
    return this.productsService.findOneVariant(id);
  }

  // ? SAVE
  @Post("/variants")
  createVariant(@Body() createVariantDto: CreateVariantDto) {
    return this.productsService.createVariant(createVariantDto);
  }

  // ? UPDATE
  @Patch("/variants/:id")
  updateVariant(
    @Param("id") id: string,
    @Body() updateVariantDto: UpdateVariantDto,
  ) {
    return this.productsService.updateVariant(id, updateVariantDto);
  }

  // ? DELETE
  @Delete("variants/:id")
  removeVariant(@Param("id") id: string) {
    return this.productsService.removeVariant(id);
  }

  //! ------------------- PRODUCT -------------------

  // ? PAGINATE
  @Get()
  @ApiQuery({
    name: "page",
    required: false,
    example: 1,
    description: "Page number (default: 1)",
  })
  @ApiQuery({
    name: "limit",
    required: false,
    example: 10,
    description: "Number of items per page (default: 10)",
  })
  findAllProducts(
    @Query("page") page: number = 1,
    @Query("limit") limit: number = 10,
  ) {
    return this.productsService.findAllProducts(page, limit);
  }

  // ? GET ONE
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.productsService.findOne(id);
  }

  // ? SAVE
  @Post()
  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productsService.createProduct(createProductDto);
  }

  // ? UPDATE
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.updateProduct(id, updateProductDto);
  }

  // ? DELETE
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.productsService.removeProduct(id);
  }
}
