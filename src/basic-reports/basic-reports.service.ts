import { Injectable, Logger, OnModuleInit } from '@nestjs/common';

import { PrismaClient } from 'generated/prisma';
import { PrinterService } from '../printer/printer.service';
import { getHelloWorldReport } from 'src/reports/hello-world.report';

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
}
