import { Router } from 'express';
import multer from 'multer';

import { CategoriesRepository } from '../modules/cars/repositories/implementations/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoryController } from '../modules/cars/useCases/listCategory';
import { importCategoriesController } from '../modules/cars/useCases/importCategories';

const categoriesRouter = Router();

const upload = multer({
  dest: './tmp'
})

const categoriesRepository = CategoriesRepository.getInstance();

categoriesRouter.post('/', (req, res)=> {
  return createCategoryController.handle(req, res);
})

categoriesRouter.get('/', (req, res)=> {
  return listCategoryController.handle(req, res);
})

categoriesRouter.post('/import', upload.single('file'), (req, res) => {
  return importCategoriesController.handle(req, res);
})

export { categoriesRouter }