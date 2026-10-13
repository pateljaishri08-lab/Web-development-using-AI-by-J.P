import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './entities/car.entity';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>,
  ) {}

  async create(createCarDto: CreateCarDto) {
    const car = this.carRepository.create(createCarDto);
    return await this.carRepository.save(car);
  }

  async findAll() {
    return await this.carRepository.find();
  }

  async findOne(id: number) {
    const car = await this.carRepository.findOneBy({ id });
    if (!car) {
      throw new NotFoundException(`Car with id ${id} not found`);
    }
    return car;
  }

  async update(id: number, updateCarDto: UpdateCarDto) {
    const car = await this.findOne(id);
    this.carRepository.merge(car, updateCarDto);
    return await this.carRepository.save(car);
  }

  async remove(id: number) {
    const car = await this.findOne(id);
    return await this.carRepository.remove(car);
  }
}
