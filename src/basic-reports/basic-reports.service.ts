import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class BasicReportsService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger(BasicReportsService.name);

  async onModuleInit() {
    this.logger.log('Initializing BasicReportsService...');

    await this.$connect();

    this.logger.log('BasicReportsService initialized successfully.');
  }

  async helloWorld() {
    const firstEmployee = await this.employees.findFirst();
    return firstEmployee;
  }
}
