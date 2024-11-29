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

@Controller("products")
@ApiTags("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productsService.createProduct(createProductDto);
  }

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

  @Get("/category")
  findAllCategories() {
    return this.productsService.findAllCategories();
  }

  @Post("/category")
  createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    return this.productsService.createCategory(createCategoryDto);
  }

  @Get("/brand")
  findAllBrands() {
    return this.productsService.findAllBrands();
  }

  @Post("/brand")
  createBrand(@Body() createBrandDto: CreateBrandDto) {
    return this.productsService.createBrand(createBrandDto);
  }

  @Get("/tags")
  findAllTags() {
    return this.productsService.findAllTags();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.productsService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.updateProduct(id, updateProductDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.productsService.removeProduct(id);
  }
}
