import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { Grade } from './entities/grade.entity';

@Injectable()
export class GradesService {
  constructor(
    @InjectRepository(Grade)
    private gradesRepository: Repository<Grade>,
  ) {}

  create(createGradeDto: CreateGradeDto) {
    const grade = this.gradesRepository.create(createGradeDto);
    return this.gradesRepository.save(grade);
  }

  findAll() {
    return this.gradesRepository.find();
  }

  findOne(id: number) {
    return this.gradesRepository.findOneBy({ id });
  }

  async update(id: number, updateGradeDto: UpdateGradeDto) {
    await this.gradesRepository.update(id, updateGradeDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.gradesRepository.delete(id);
    return { deleted: true };
  }
}
