import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../api/services/users.service';
import { UsersEntity } from '../api/entities/users.entity';


interface JwtPayload {
  id: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey:process.env.JWT_SECRET,
    });
  }

  async validate(payload: JwtPayload): Promise<UsersEntity> {
    
    return this.usersService.findOneOrFail(payload.id);
  }
}
