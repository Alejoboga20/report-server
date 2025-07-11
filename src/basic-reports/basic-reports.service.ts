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

  employmentLetter() {
    const employmentLetterReport = getEmploymentLetter();

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

    console.log({ employee });

    const employmentLetterReport = getEmploymentLetter();
    const doc = this.printerService.createPdf(employmentLetterReport);

    return doc;
  }
}
