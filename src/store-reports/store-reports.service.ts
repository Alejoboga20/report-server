import { Injectable } from '@nestjs/common';

@Injectable()
export class StoreReportsService {
  getByOrderIdReport(orderId: number) {
    return `Report for order ID: ${orderId}`;
  }
}
