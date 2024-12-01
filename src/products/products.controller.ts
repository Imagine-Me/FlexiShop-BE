import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from "@nestjs/common";
import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ApiBearerAuth, ApiQuery, ApiTags } from "@nestjs/swagger";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { CreateBrandDto } from "./dto/create-brand.dto";
import { UpdateBrandDto } from "./dto/update-brand.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { CreateTagDto } from "./dto/create-tag.dto";
import { UpdateTagDto } from "./dto/update-tag.dto";
import { CreateVariantDto } from "./dto/create-variant.dto";
import { UpdateVariantDto } from "./dto/update-variant.dto";
import { Roles } from "src/decorator/role.decorator";
import { UserRole } from "src/user/role";
import { RoleGuard } from "src/guards/role.guard";
import { AuthGuard } from "src/authentication/authentication.guard";

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
  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
  findAllCategories(
    @Query("page") page: number = 1,
    @Query("limit") limit: number = 10,
  ) {
    return this.productsService.findAllCategories(page, limit);
  }

  //? GET ALL
  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
  @Get("/categories/all")
  getAllCategories() {
    return this.productsService.getAllCategories();
  }

  // ? GET ONE
  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
  @Get("/categories/:id")
  findOneCategory(@Param("id") id: string) {
    return this.productsService.findOneCategory(id);
  }

  // ? SAVE
  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
  @Post("/categories")
  createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    return this.productsService.createCategory(createCategoryDto);
  }

  // ? UPDATE
  @Patch("/categories/:id")
  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
  updateCategory(
    @Param("id") id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.productsService.updateCategory(id, updateCategoryDto);
  }

  // ? DELETE
  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
  @Delete("categories/:id")
  removeCategory(@Param("id") id: string) {
    return this.productsService.removeCategory(id);
  }

  // ! ------------------ BRAND ---------------------

  // ? PAGINATE
  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
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
  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
  @Get("/brands/all")
  getAllBrands() {
    return this.productsService.getAllBrands();
  }

  // ? GET ONE
  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
  @Get("/brands/:id")
  findOneBrand(@Param("id") id: string) {
    return this.productsService.findOneBrand(id);
  }

  // ? SAVE
  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
  @Post("/brands")
  createBrand(@Body() createBrandDto: CreateBrandDto) {
    return this.productsService.createBrand(createBrandDto);
  }

  // ? UPDATE
  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
  @Patch("/brands/:id")
  updateBrand(
    @Param("id") id: string,
    @Body() updateProductDto: UpdateBrandDto,
  ) {
    return this.productsService.updateBrand(id, updateProductDto);
  }

  // ? DELETE
  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
  @Delete("brands/:id")
  removeBrand(@Param("id") id: string) {
    return this.productsService.removeBrand(id);
  }

  // ! ------------------TAGS -----------------------

  // ? PAGINATE
  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
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
  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
  getAllTags() {
    return this.productsService.getAllTags();
  }

  // ? GET ONE
  @Get("/tags/:id")
  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
  findOneTag(@Param("id") id: string) {
    return this.productsService.findOneTag(id);
  }

  // ? SAVE
  @Post("/tags")
  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
  createTag(@Body() createTagDto: CreateTagDto) {
    return this.productsService.createTag(createTagDto);
  }

  // ? UPDATE
  @Patch("/tags/:id")
  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
  updateTag(@Param("id") id: string, @Body() updateTagDto: UpdateTagDto) {
    return this.productsService.updateTag(id, updateTagDto);
  }

  // ? DELETE
  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
  @Delete("tags/:id")
  removeTag(@Param("id") id: string) {
    return this.productsService.removeTag(id);
  }

  // ! ------------------VARIANTS -----------------------

  // ? PAGINATE
  @Get("/variants")
  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
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
  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
  getAllVariants() {
    return this.productsService.getAllVariantsDistinct();
  }

  // ? GET ALL DISTINCT
  @Get("/variants/all")
  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
  getAllVariantsDistinct() {
    return this.productsService.getAllVariants();
  }

  // ? GET ONE
  @Get("/variants/:id")
  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
  findOneVariant(@Param("id") id: string) {
    return this.productsService.findOneVariant(id);
  }

  // ? SAVE
  @Post("/variants")
  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
  createVariant(@Body() createVariantDto: CreateVariantDto) {
    return this.productsService.createVariant(createVariantDto);
  }

  // ? UPDATE
  @Patch("/variants/:id")
  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
  updateVariant(
    @Param("id") id: string,
    @Body() updateVariantDto: UpdateVariantDto,
  ) {
    return this.productsService.updateVariant(id, updateVariantDto);
  }

  // ? DELETE
  @Delete("variants/:id")
  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
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
  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
  findAllProducts(
    @Query("page") page: number = 1,
    @Query("limit") limit: number = 10,
  ) {
    return this.productsService.findAllProducts(page, limit);
  }

  // ? GET ONE
  @Get(":id")
  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
  findOne(@Param("id") id: string) {
    return this.productsService.findOne(id);
  }

  // ? SAVE
  @Post()
  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productsService.createProduct(createProductDto);
  }

  // ? UPDATE
  @Patch(":id")
  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
  update(@Param("id") id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.updateProduct(id, updateProductDto);
  }

  // ? DELETE
  @Delete(":id")
  @Roles([UserRole.ADMIN])
  @UseGuards(RoleGuard, AuthGuard)
  @ApiBearerAuth()
  remove(@Param("id") id: string) {
    return this.productsService.removeProduct(id);
  }
}
