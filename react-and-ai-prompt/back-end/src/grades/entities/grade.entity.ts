import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Grade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  studentId: string;

  @Column()
  studentName: string;

  @Column()
  assignment: string;

  @Column()
  score: number;

  @Column()
  total: number;
}
