import { UserService } from './users.service';
import { Query, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { GetUsersOuput } from './dtos/get-users.dto';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => GetUsersOuput)
  getUsers(): Promise<GetUsersOuput> {
    return this.userService.getUsers();
  }
}
