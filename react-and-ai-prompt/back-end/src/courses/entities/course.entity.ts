import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  students: number;

  @Column()
  modules: number;

  @Column({
    type: 'enum',
    enum: ['Active', 'Upcoming', 'Completed'],
    default: 'Active',
  })
  status: string;
}
