/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsInt, IsString } from 'class-validator';
export class CreateUserDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;
}
