import type { StyleDictionary, TDocumentDefinitions } from 'pdfmake/interfaces';

const styles: StyleDictionary = {
  header: {
    fontSize: 22,
    bold: true,
    alignment: 'center',
    margin: [0, 0, 0, 20],
  },
  body: {
    fontSize: 12,
    alignment: 'justify',
    margin: [0, 10, 0, 10],
  },
};

export const getEmploymentLetter = (): TDocumentDefinitions => {
  const docDefinition: TDocumentDefinitions = {
    styles,
    content: [
      {
        text: 'Employment Letter',
        style: 'header',
      },
      {
        text: `
        I, [Employer Name], in my capacity as [Employer Position] of [Company Name], hereby certify that [Employee Name] has been employed in our company since [Employee Start Date].\n\n
        During their employment, Mr./Ms. [Employee Name] has performed the position of [Employee Position], demonstrating responsibility, commitment, and professional skills in their duties.\n\n
        The working schedule of Mr./Ms. [Employee Name] is [Number of Hours] hours per week, with a schedule of [Work Schedule], complying with the policies and procedures established by the company.\n\n
        This certification is issued at the request of the interested party for the purposes they deem appropriate.
        `,
        style: 'body',
      },
      {
        text: `Regards,\n\n[Employer Name]\n[Employer Position]\n[Company Name]\n[Date]`,
        margin: [0, 20, 0, 0],
      },
    ],
  };

  return docDefinition;
};
