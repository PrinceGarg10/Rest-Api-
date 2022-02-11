import { Test, TestingModule } from '@nestjs/testing';
import { FollowupAndRemarksService } from './followup-and-remarks.service';

describe('FollowupAndRemarksService', () => {
  let service: FollowupAndRemarksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FollowupAndRemarksService],
    }).compile();

    service = module.get<FollowupAndRemarksService>(FollowupAndRemarksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
