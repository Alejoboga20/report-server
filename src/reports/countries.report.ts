import type { TDocumentDefinitions } from 'pdfmake/interfaces';
import { headerSection } from './sections/header.section';

export const generateCountriesReport = (): TDocumentDefinitions => {
  return {
    pageOrientation: 'landscape',
    header: headerSection({
      title: 'Countries Report',
      subtitle: 'List of Countries',
      showDate: true,
      showLogo: true,
    }),
    pageMargins: [40, 100, 40, 60],
    content: [
      {
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: ['*', 'auto', 100, '*'],
          body: [
            ['First', 'Second', 'Third', 'The last one'],
            ['Value 1', 'Value 2', 'Value 3', 'Value 4'],
            [{ text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4'],
          ],
        },
      },
    ],
  };
};
