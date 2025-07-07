import { Injectable, Logger, OnModuleInit } from '@nestjs/common';

import { PrismaClient } from 'generated/prisma';
import PdfPrinter from 'pdfmake';
import { TDocumentDefinitions } from 'pdfmake/interfaces';

const fonts = {
  Roboto: {
    normal: 'fonts/Roboto-Regular.ttf',
    bold: '/fonts/Roboto-Medium.ttf',
    italics: '/fonts/Roboto-Italic.ttf',
    bolditalics: '/fonts/Roboto-MediumItalic.ttf',
  },
};

@Injectable()
export class BasicReportsService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger(BasicReportsService.name);

  async onModuleInit() {
    this.logger.log('Initializing BasicReportsService...');

    await this.$connect();

    this.logger.log('BasicReportsService initialized successfully.');
  }

  helloWorld() {
    const printer = new PdfPrinter(fonts);

    const docDefinition: TDocumentDefinitions = {
      content: ['Hello, world!'],
    };

    return printer.createPdfKitDocument(docDefinition);
  }
}
