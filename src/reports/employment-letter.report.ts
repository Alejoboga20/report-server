import type { StyleDictionary, TDocumentDefinitions } from 'pdfmake/interfaces';

import { headerSection } from './sections/header.section';
import { DateFormatter } from 'src/helpers/date-formater';

const styles: StyleDictionary = {
  header: {
    fontSize: 22,
    bold: true,
    alignment: 'center',
    margin: [0, 60, 0, 20],
  },
  body: {
    fontSize: 12,
    alignment: 'justify',
    margin: [0, 10, 0, 10],
  },
  footer: {
    fontSize: 10,
    alignment: 'center',
    italics: true,
    margin: [0, 20, 0, 0],
    color: 'gray',
  },
};

interface ReportValues {
  employerName?: string;
  employerPosition?: string;
  employerCompany?: string;

  employeeName?: string;
  employeePosition?: string;
  employeeStartDate?: Date;
  employeeHours?: number;
  employeeWorkSchedule?: string;
}

export const getEmploymentLetter = (
  reportValues: ReportValues,
): TDocumentDefinitions => {
  const {
    employerName = '[Employer Name]',
    employerPosition = '[Employer Position]',
    employerCompany = '[Company Name]',
    employeeName = '[Employee Name]',
    employeePosition = '[Employee Position]',
    employeeStartDate = new Date(),
    employeeHours,
    employeeWorkSchedule = '[Work Schedule]',
  } = reportValues;

  const docDefinition: TDocumentDefinitions = {
    styles,
    pageMargins: [40, 60, 40, 60],
    header: headerSection({ showDate: true, showLogo: true }),
    content: [
      {
        text: 'Employment Letter',
        style: 'header',
      },
      {
        text: `
        I, ${employerName}, in my capacity as ${employerPosition} of ${employerCompany}, hereby certify that ${employeeName} has been employed in our company since ${DateFormatter.getDDMMYYYY(employeeStartDate)}.\n\n
        During their employment, Mr./Ms. ${employeeName} has performed the position of ${employeePosition}, demonstrating responsibility, commitment, and professional skills in their duties.\n\n
        The working schedule of Mr./Ms. ${employeeName} is ${employeeHours} hours per week, with a schedule of ${employeeWorkSchedule}, complying with the policies and procedures established by the company.\n\n
        This certification is issued at the request of the interested party for the purposes they deem appropriate.
        `,
        style: 'body',
      },
      {
        text: `Regards,\n\n${employerName}\n${employerPosition}\n${employerCompany}\n${DateFormatter.getDDMMYYYY(new Date())}`,
        margin: [0, 20, 0, 0],
      },
    ],
    footer: {
      text: 'This document is generated electronically and does not require a signature.',
      style: 'footer',
    },
  };

  return docDefinition;
};
