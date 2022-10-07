import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateQuizDto {
  @IsNotEmpty({ message: 'The title can not empty' })
  @MinLength(3)
  title: string;

  @IsNotEmpty({ message: 'the descroption can not empty' })
  description: string;
}
