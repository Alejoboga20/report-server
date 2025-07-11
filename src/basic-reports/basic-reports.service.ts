import {
  Injectable,
  Logger,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';

import { PrismaClient } from 'generated/prisma';
import { PrinterService } from '../printer/printer.service';
import { getHelloWorldReport } from 'src/reports/hello-world.report';
import { getEmploymentLetter } from 'src/reports/employment-letter.report';
import { generateCountriesReport } from 'src/reports/countries.report';

@Injectable()
export class BasicReportsService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger(BasicReportsService.name);

  constructor(private readonly printerService: PrinterService) {
    super();
    this.logger.log('BasicReportsService instantiated');
  }

  async onModuleInit() {
    this.logger.log('Initializing BasicReportsService...');

    await this.$connect();

    this.logger.log('BasicReportsService initialized successfully.');
  }

  helloWorld() {
    const helloWorldReport = getHelloWorldReport({ name: 'Test' });

    const doc = this.printerService.createPdf(helloWorldReport);

    return doc;
  }

  async countriesReport() {
    const countries = await this.countries.findMany({
      where: { local_name: { not: null } },
    });
    const copuntriesReport = generateCountriesReport({ countries });

    const doc = this.printerService.createPdf(copuntriesReport);

    return doc;
  }

  employmentLetter() {
    const employmentLetterReport = getEmploymentLetter({});

    const doc = this.printerService.createPdf(employmentLetterReport);

    return doc;
  }

  async employmentLetterById(employeeId: number) {
    const employee = await this.employees.findFirst({
      where: { id: employeeId },
    });

    if (!employee) {
      throw new NotFoundException(`Employee with ID ${employeeId} not found`);
    }

    const employmentLetterReport = getEmploymentLetter({
      employerName: 'Alejo Boga',
      employerPosition: 'Software Engineer Manager',
      employerCompany: 'Tucan Code',
      employeeName: employee.name,
      employeePosition: employee.position,
      employeeStartDate: employee.start_date,
      employeeHours: employee.hours_per_day,
      employeeWorkSchedule: employee.work_schedule,
    });
    const doc = this.printerService.createPdf(employmentLetterReport);

    return doc;
  }
}
