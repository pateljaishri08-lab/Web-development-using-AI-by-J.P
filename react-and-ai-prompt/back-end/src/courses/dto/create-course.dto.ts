export class CreateCourseDto {
  title: string;
  students: number;
  modules: number;
  status: 'Active' | 'Upcoming' | 'Completed';
}
