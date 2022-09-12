import { Category } from "../categories/categorie.model";
import { BaseModel } from "../base.model";

export type Sizes = 'S' | 'M' | 'L' | 'XL';

export interface Product extends BaseModel{
  title: string;
  stock: number;
  size?: Sizes;
  category: Category;
}
