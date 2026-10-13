import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { StudentsModule } from './students/students.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Car } from './cars/entities/car.entity';
import { Student } from './students/entities/student.entity';
import { User } from './users/entities/user.entity';
import { Grade } from './grades/entities/grade.entity';
import { Course } from './courses/entities/course.entity';
import { UsersModule } from './users/users.module';
import { GradesModule } from './grades/grades.module';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CarsModule,
    StudentsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '',
      database: 'backend-api',
      entities: [Car, Student, User, Grade, Course],
      synchronize: true,
    }),
    UsersModule,
    GradesModule,
    CoursesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
