import { Controller } from '@nestjs/common';

@Controller('api')
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
}
