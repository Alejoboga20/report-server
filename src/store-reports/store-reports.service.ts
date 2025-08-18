import { Injectable, Logger } from '@nestjs/common';
import { PrinterService } from 'src/printer/printer.service';
import { orderByIdReport } from 'src/reports/order-by-id.report';

@Injectable()
export class StoreReportsService {
  private readonly logger = new Logger(StoreReportsService.name);

  constructor(private readonly printerService: PrinterService) {
    this.logger.log(`${StoreReportsService.name} instantiated`);
  }

  getByOrderIdReport(orderId: number) {
    console.log({ orderId });
    const docDefinition = orderByIdReport();

    const report = this.printerService.createPdf(docDefinition);

    return report;
  }
}
