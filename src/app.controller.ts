import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { data, ReportType } from './data';
import { CreateReportDto } from './dtos/createReport.dto';
import { v4 as uuid } from 'uuid'
@Controller('report/:type')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getAllReports(@Param('type') type: ReportType) {
    return this.appService.getAllReports(type)
  }

  @Post()
  createReport(@Param('type') type: ReportType, @Body() createReportDetails: CreateReportDto) {
    return this.appService.createReport(type, createReportDetails)
  }

  @Put(':id')
  updateReport(
    @Param('type',) type: ReportType,
    @Param('id') id: string,
    @Body() createReportDetails: CreateReportDto
  ) {
    return this.appService.updateReport(id, type, createReportDetails)
  }


  @Delete(':id')
  reportDeleted(@Param('id') id: number) {
    return this.appService.deleteReport(id)
  }
}
