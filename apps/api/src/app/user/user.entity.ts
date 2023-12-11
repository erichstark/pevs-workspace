import { User } from '@pevs/api-interfaces';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity implements User {

 @PrimaryGeneratedColumn()
 id: number;

 @Column()
 name: string;

 @Column()
 email: string;
}
