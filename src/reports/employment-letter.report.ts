import type {
  Content,
  StyleDictionary,
  TDocumentDefinitions,
} from 'pdfmake/interfaces';

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

const logo: Content = {
  image: 'assets/tucan-code-logo.png',
  width: 100,
  height: 100,
  alignment: 'center',
  margin: [0, 0, 0, 20],
};

export const getEmploymentLetter = (): TDocumentDefinitions => {
  const docDefinition: TDocumentDefinitions = {
    styles,
    pageMargins: [40, 60, 40, 60],
    header: {
      columns: [
        logo,
        {
          text: `${new Date().toLocaleDateString('en-US')}`,
          alignment: 'right',
          margin: [0, 20, 20, 0],
        },
      ],
    },
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
    footer: {
      text: 'This document is generated electronically and does not require a signature.',
      style: 'footer',
    },
  };

  return docDefinition;
};
