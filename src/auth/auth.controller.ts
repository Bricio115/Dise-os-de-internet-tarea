import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './login.dto';

@Controller('auth')
export class AuthController {

  @Post('login')
  login(
    @Body() data: LoginDto
  ) {
    // login logic
  }
}
