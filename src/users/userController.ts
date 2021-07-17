import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from 'tsoa';

import { User } from './user';
import { UserService, UserCreationPrarms } from './userService';
import { myContainer } from '../inversify.config';

@Route('users')
export class UserController extends Controller {
  @Get('{userId}')
  public async getUser(
    @Path() userId: number,
    @Query() name?: string
  ): Promise<User> {
    return myContainer.get<UserService>(UserService).get(userId, name);
  }

  @SuccessResponse('201', 'Created')
  @Post()
  public async createUser(
    @Body() requestBody: UserCreationPrarms
  ): Promise<void> {
    this.setStatus(201);
    new UserService().create(requestBody);
    return;
  }
}
