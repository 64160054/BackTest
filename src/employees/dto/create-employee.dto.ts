import { IsNotEmpty } from 'class-validator';

export class CreateEmployeeDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  surname: string;
}
