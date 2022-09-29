import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@InputType('UserInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => String)
  id: number;

  @Column()
  @Field(() => String)
  email: string;

  @Column({ select: false })
  @Field(() => String)
  password: string;
}
