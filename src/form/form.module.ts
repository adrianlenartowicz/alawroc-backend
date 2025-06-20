import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormController } from '../form/controllers/form.controller';
import { FormService } from './services/form.service';
import { Form } from './entities/form.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Form])],
  controllers: [FormController],
  providers: [FormService]
})
export class FormModule {}
