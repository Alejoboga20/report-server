import type { Content } from 'pdfmake/interfaces';
import { DateFormatter } from 'src/helpers/date-formater';

const logo: Content = {
  image: 'assets/tucan-code-logo.png',
  width: 100,
  height: 100,
  alignment: 'center',
  margin: [0, 0, 0, 20],
};

const currentDate = `${DateFormatter.getDDMMYYYY(new Date())}`;

interface HeaderOptions {
  title?: string;
  subtitle?: string;
  date?: Date;
  showLogo?: boolean;
  showDate?: boolean;
  customStyles?: Record<string, any>;
}

export const headerSection = (options: HeaderOptions): Content => {
  const {
    showLogo = false,
    showDate = false,
    title = '',
    subtitle = '',
  } = options;

  const headerLogo: Content = showLogo ? logo : '';
  const headerDate: Content = showDate
    ? {
        text: currentDate,
        alignment: 'right',
        margin: [20, 20],
      }
    : '';

  const headerTitle: Content = title
    ? {
        stack: [
          title ? { text: title, bold: true, fontSize: 18 } : '',
          subtitle ? { text: subtitle, fontSize: 14 } : '',
        ],
        alignment: 'center',
        margin: [0, 20, 0, 0],
      }
    : '';

  return {
    columns: [headerLogo, headerTitle, headerDate],
  };
};
