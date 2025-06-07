import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Form {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phoneNumber: string;

  @Column({ unique: true })
  email: string;

  @Column()
  ageGroup: string;
}
