import { Module } from '@nestjs/common';
import { FactorialController } from './factorial.controller';
import { FactorialService } from './factorial.service';

@Module({
  controllers: [FactorialController],
  providers: [FactorialService]
})
export class FactorialModule {}
