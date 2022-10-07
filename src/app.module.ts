import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';
import { TestModule } from './modules/test/test.module';

@Module({
  imports: [QuizModule, TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
