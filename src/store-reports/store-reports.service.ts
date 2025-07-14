import { Injectable, Logger } from '@nestjs/common';
import { PrinterService } from 'src/printer/printer.service';

@Injectable()
export class StoreReportsService {
  private readonly logger = new Logger(StoreReportsService.name);

  constructor(private readonly printerService: PrinterService) {
    this.logger.log(`${StoreReportsService.name} instantiated`);
  }

  getByOrderIdReport(orderId: number) {
    const report = this.printerService.createPdf({
      content: [{ text: `Report for Order ID: ${orderId}`, style: 'header' }],
    });

    return report;
  }
}
