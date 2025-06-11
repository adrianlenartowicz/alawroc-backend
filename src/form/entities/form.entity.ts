import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Form {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
  phoneNumber: string;

  @Column({ unique: true, nullable: true })
  email: string;

  @Column()
  ageGroup: string;

  @Column()
  placement: string;
}
