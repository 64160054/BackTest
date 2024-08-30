import { IsNotEmpty } from 'class-validator';

export class CreateEmployeeDto {
  @IsNotEmpty()
  id?: number;
  @IsNotEmpty()
  firstname: string;
  @IsNotEmpty()
  lastname: string;
}
