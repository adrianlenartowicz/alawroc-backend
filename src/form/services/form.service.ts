import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Form } from '../entities/form.entity';
import { CreateFormDto } from '../dto/create-form.dto';


@Injectable()
export class FormService {
  constructor(
    @InjectRepository(Form)
    private formRepository: Repository<Form>,
  ) {}

  async saveForm(formData: CreateFormDto) {
    return this.formRepository.save(formData);
  }

  async getForms() {
    return this.formRepository.find();
  }
}