import { Body, Controller, Post, Get } from '@nestjs/common';
import { FormService } from '../services/form.service';
import { CreateFormDto } from '../dto/create-form.dto';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Get()
  getFormData() {
    return this.formService.getForms();
  }
    
  @Post()
  saveForm(@Body() createFormDto: CreateFormDto) {
    return this.formService.saveForm(createFormDto);
  }
}
