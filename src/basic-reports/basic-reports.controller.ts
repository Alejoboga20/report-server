import { Controller, Get, Res } from '@nestjs/common';
import { BasicReportsService } from './basic-reports.service';
import { Response } from 'express';

@Controller('basic-reports')
export class BasicReportsController {
  constructor(private readonly basicReportsService: BasicReportsService) {}

  @Get()
  hello(@Res() response: Response) {
    const pdfDoc = this.basicReportsService.helloWorld();
    response.setHeader('Content-Type', 'application/pdf');

    pdfDoc.info.Title = 'Hello World Report';
    pdfDoc.info.Author = 'Report Server';
    pdfDoc.info.Subject = 'Basic Report Example';

    pdfDoc.pipe(response);
    pdfDoc.end();
  }

  @Get('employment-letter')
  employmentLetter(@Res() response: Response) {
    const pdfDoc = this.basicReportsService.employmentLetter();
    response.setHeader('Content-Type', 'application/pdf');

    pdfDoc.info.Title = 'Employment Letter';
    pdfDoc.info.Author = 'Report Server';
    pdfDoc.info.Subject = 'Employment Letter Example';

    pdfDoc.pipe(response);
    pdfDoc.end();
  }
}
