import { Controller, Get, Param, Res } from '@nestjs/common';
import { BasicReportsService } from './basic-reports.service';
import { Response } from 'express';

@Controller('basic-reports')
export class BasicReportsController {
  constructor(private readonly basicReportsService: BasicReportsService) {}

  @Get('countries')
  async getCountriesReport(@Res() response: Response) {
    const pdfDoc = await this.basicReportsService.countriesReport();
    response.setHeader('Content-Type', 'application/pdf');

    pdfDoc.info.Title = 'Hello World Report';
    pdfDoc.info.Author = 'Report Server';
    pdfDoc.info.Subject = 'Basic Report Example';

    pdfDoc.pipe(response);
    pdfDoc.end();
  }

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

  @Get('employment-letter/:employeeId')
  async employmentLetterById(
    @Res() response: Response,
    @Param('employeeId') employeeId: string,
  ) {
    const pdfDoc = await this.basicReportsService.employmentLetterById(
      Number(employeeId),
    );
    response.setHeader('Content-Type', 'application/pdf');

    pdfDoc.info.Title = 'Employment Letter';
    pdfDoc.info.Author = 'Report Server';
    pdfDoc.info.Subject = 'Employment Letter Example';

    pdfDoc.pipe(response);
    pdfDoc.end();
  }
}
