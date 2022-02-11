import { Test, TestingModule } from '@nestjs/testing';
import { FollowupAndRemarksController } from './followup-and-remarks.controller';

describe('FollowupAndRemarksController', () => {
  let controller: FollowupAndRemarksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FollowupAndRemarksController],
    }).compile();

    controller = module.get<FollowupAndRemarksController>(FollowupAndRemarksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
