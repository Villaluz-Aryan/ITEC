import { Test, TestingModule } from '@nestjs/testing';
import { FactorialService } from './factorial.service';

describe('FactorialService', () => {
  let service: FactorialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactorialService],
    }).compile();

    service = module.get<FactorialService>(FactorialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
