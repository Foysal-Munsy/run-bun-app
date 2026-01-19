import { ApiProperty } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  /**
   * The name of the User
   */
  @ApiProperty({ example: 'Alice', description: 'The name of the user' })
  @Prop()
  name: string;

  @ApiProperty({ example: 1, description: 'The age of user' })
  @Prop()
  age: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.set('versionKey', false);
