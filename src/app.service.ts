import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { data, ReportType } from './data';
import { CreateReport } from './types/types';
import { v4 as uuid } from 'uuid'

@Injectable()
export class AppService {
  getAllReports(type: ReportType) {
    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE
    return data.report.filter((report) => report.type === reportType)
  }
  createReport(type: ReportType, createReport: CreateReport) {
    const newReport = {
      id: uuid(),
      source: createReport.source,
      amount: createReport.amount,
      created_at: new Date(),
      updated_at: new Date(),
      type: type === 'income' ? ReportType.INCOME : ReportType.EXPENSE

    }
    data.report.push(newReport);
    return newReport
  }
  updateReport(id: string, type: ReportType, createReport: CreateReport) {
    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE
    const reportToUpdate = data.report.filter((report) => report.type === reportType).find(report => report.id === id)
    // return this.appService.updateReport(id)
    if (!reportToUpdate) return

    const reportIndex = data.report.findIndex(report => report.id === reportToUpdate.id)
    data.report[reportIndex] = { ...data.report[reportIndex], ...createReport }
    return data.report[reportIndex]

  }
  deleteReport(id: number) {
    const reportIndex = data.report.findIndex(report => report.id === id)
    if (reportIndex === -1) return;
    const deleteReport = data.report.splice(reportIndex, 1)

    throw new HttpException('Report Deleted', HttpStatus.NO_CONTENT)
    return deleteReport
  }
}
