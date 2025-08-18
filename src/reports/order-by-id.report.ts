import type {
  Content,
  StyleDictionary,
  TDocumentDefinitions,
} from 'pdfmake/interfaces';
import { DateFormatter } from 'src/helpers/date-formater';

const logo: Content = {
  image: 'src/assets/tucan-banner.png',
  width: 100,
  height: 30,
  margin: [10, 30],
};

const styles: StyleDictionary = {
  header: {
    bold: true,
    fontSize: 20,
    margin: [0, 30, 0, 0],
  },
};

export const orderByIdReport = (): TDocumentDefinitions => {
  return {
    styles,
    header: logo,
    pageMargins: [40, 60, 40, 60],
    content: [
      {
        text: 'Tucan Code',
        style: 'header',
      },
      {
        columns: [
          {
            text: '21 Trimountain Ave, Apt 3.\nSouth Range Mi 49961, USA.\nBN: 123123123123',
          },
          {
            text: `Receipt No. ${123123123}\nDate: ${DateFormatter.getDDMMYYYY(new Date())}\nDue Date ${DateFormatter.getDDMMYYYY(new Date())}`,
            alignment: 'right',
          },
        ],
      },
    ],
  };
};
