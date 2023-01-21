import { Router } from 'express';
import multer from 'multer';

import { CategoriesRepository } from '../modules/cars/repositories/implementations/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { listCategoryController } from '../modules/cars/useCases/listCategory/ListCategoryController';
import { importCategoriesController } from '../modules/cars/useCases/importCategories/ImportCategoriesController';

const categoriesRouter = Router();

const upload = multer({
  dest: './tmp'
})

const categoriesRepository = CategoriesRepository.getInstance();

categoriesRouter.post('/', createCategoryController.handle)

categoriesRouter.get('/', async (req, res)=> {
  return await listCategoryController.handle(req, res);
})

categoriesRouter.post('/import', upload.single('file'), async (req, res) => {
  return await importCategoriesController.handle(req, res);
})

export { categoriesRouter }