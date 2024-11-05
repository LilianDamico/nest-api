import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';

@Injectable()
export class AnotherService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService,
  ) {}
}
