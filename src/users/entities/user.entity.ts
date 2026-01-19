import { ApiProperty } from '@nestjs/swagger';

export class User {
  /**
   * The name of the User
   */
  name: string;

  @ApiProperty({ example: 1, description: 'The age of user' })
  age: number;
}
