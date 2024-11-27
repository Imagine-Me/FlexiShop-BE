import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { Filestore } from "src/filestore/entities/filestore.entity";

export class CreateProductDto {
  @ApiProperty({ description: "Name of the product", example: "Smartphone" })
  name: string;

  @ApiProperty({
    description: "Description of the product",
    example: "A high-end smartphone with 128GB storage",
  })
  description: string;

  @ApiProperty({ description: "Price of the product", example: 499.99 })
  price: number;

  @ApiPropertyOptional({
    description: "Discounted price of the product",
    example: 399.99,
  })
  discountPrice?: number;

  @ApiProperty({ description: "Stock quantity of the product", example: 100 })
  stock: number;

  @ApiProperty({
    description: "Specifications of the product",
    example: "Processor: Intel Core i5 11th Gen; RAM: 8GB; Storage: 128GB SSD",
  })
  specifications: string;

  @ApiPropertyOptional({
    description: "List of image URLs for the product",
    example: [
      { url: "https://example.com/image1.jpg", name: "image 1" },
      { url: "https://example.com/image2.jpg", name: "image 2" },
    ],
  })
  @Type(() => Filestore)
  images?: Filestore[];

  @ApiPropertyOptional({
    description: "Category ID the product belongs to",
    example: "123e4567-e89b-12d3-a456-426614174000",
  })
  categoryId?: string;

  @ApiPropertyOptional({
    description: "Brand ID of the product",
    example: "123e4567-e89b-12d3-a456-426614174001",
  })
  brandId?: string;

  @ApiPropertyOptional({
    description: "Array of tags (by ID) associated with the product",
    example: ["tag-id-1", "tag-id-2"],
  })
  tagIds?: string[];

  @ApiPropertyOptional({
    description:
      "Array of product variants (name-value pairs with optional price and stock)",
    example: [
      {
        name: "Color",
        value: "Red",
        price: 10,
        stock: 50,
        description: "A high-end smartphone with 128GB storage",
      },
      {
        name: "Size",
        value: "Large",
        price: 20,
        stock: 30,
        description: "A high-end smartphone with 128GB storage",
      },
    ],
  })
  variants?: Array<{
    name: string;
    value: string;
    price: number;
    stock: number;
    description: string;
  }>;

  @ApiPropertyOptional({
    description: "Status of the product",
    enum: ["active", "inactive", "archived"],
    default: "active",
  })
  status?: "active" | "inactive" | "archived";
}
