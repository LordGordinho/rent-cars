import { container } from 'tsyringe';

import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository';
import { SpecificationsRepository } from '../../modules/cars/repositories/implementations/SpecificationsRepository';
import { UsersRepository } from '../../modules/accounts/repositories/implementations/UsersRepository';

import { ICategoriesRepository } from '../../modules/cars/repositories/interfaces/ICategoriesRepository';
import { ISpecificationsRepository } from '../../modules/cars/repositories/interfaces/ISpecificationsRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/interfaces/IUsersRepository';

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
)

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
)


container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
)