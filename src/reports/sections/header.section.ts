import type { Content } from 'pdfmake/interfaces';
import { DateFormatter } from 'src/helpers/date-formater';

const logo: Content = {
  image: 'assets/tucan-code-logo.png',
  width: 100,
  height: 100,
  alignment: 'center',
  margin: [0, 0, 0, 20],
};

interface HeaderOptions {
  title?: string;
  subtitle?: string;
  date?: Date;
  showLogo?: boolean;
  showDate?: boolean;
  customStyles?: Record<string, any>;
}

export const headerSection = (options: HeaderOptions): Content => {
  const { showLogo = false, showDate = false, title } = options;
  const headerLogo: Content = showLogo ? logo : '';
  const headerDate: Content = showDate
    ? {
        text: `${DateFormatter.getDDMMYYYY(new Date())}`,
        alignment: 'right',
        margin: [0, 20, 20, 0],
      }
    : '';
  const headerTitle: Content = title
    ? { text: title, style: { bold: true } }
    : '';

  return {
    columns: [headerLogo, headerTitle, headerDate],
  };
};
