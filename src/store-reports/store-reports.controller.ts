import { Controller, Get, Param, Res } from '@nestjs/common';
import { StoreReportsService } from './store-reports.service';
import { Response } from 'express';

@Controller('store-reports')
export class StoreReportsController {
  constructor(private readonly storeReportsService: StoreReportsService) {}

  @Get('order/:orderId')
  getOrderReport(@Res() response: Response, @Param('orderId') orderId: string) {
    const pdfDoc = this.storeReportsService.getByOrderIdReport(Number(orderId));
    response.setHeader('Content-Type', 'application/pdf');

    pdfDoc.info.Title = 'Order Report';
    pdfDoc.info.Author = 'Report Server';
    pdfDoc.info.Subject = 'Store Report Example';

    pdfDoc.pipe(response);
    pdfDoc.end();
  }
}
