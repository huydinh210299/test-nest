import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuizDto } from './dtos/CreateQuiz.dto';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  // property injection
  @Inject(QuizService)
  private readonly quizService: QuizService;

  // constructor dependency injection
  // constructor(private quizService: QuizService){}

  @Get()
  getAllQuiz(): number[] {
    return this.quizService.getAllQuiz();
  }

  @Post()
  @UsePipes(ValidationPipe)
  createQuiz(@Body() quizDto: CreateQuizDto): CreateQuizDto {
    return quizDto;
  }
}
