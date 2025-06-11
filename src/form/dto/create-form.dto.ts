import { IsString, IsEmail } from 'class-validator';

export class CreateFormDto {
  @IsString()
  phoneNumber: string;

  @IsEmail()
  email: string;

  @IsString()
  ageGroup: string;

  @IsString()
  placement: string;
}
