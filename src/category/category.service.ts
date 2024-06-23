import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from './schemas/category.schema';

@Injectable()
export class CategoryService {
  constructor(@InjectModel('Category') private readonly CategoryModel: Model<Category>) {}

  create(createCategoryDto: CreateCategoryDto) {
    const newCategory = new this.CategoryModel(createCategoryDto);
    const category = newCategory.save()
    return category;
  }

  findAll() {
    return `This action returns all category`;
  }

  findOne(id: string) {
    return `This action returns a #${id} category`;
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: string) {
    return `This action removes a #${id} category`;
  }
}
