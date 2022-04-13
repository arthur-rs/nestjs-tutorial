import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { InMemoryUsersRepository } from 'src/modules/users/repositories/implementations/in-memory';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: 'UsersRepository',
      useClass: InMemoryUsersRepository,
    },
  ],
})
export class UsersModule {}
