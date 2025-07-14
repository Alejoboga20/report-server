import type { TDocumentDefinitions } from 'pdfmake/interfaces';
import { headerSection } from './sections/header.section';
import { countries as Country } from 'generated/prisma';
import { footerSection } from './sections/footer.section';

interface ReportOptions {
  title?: string;
  subtitle?: string;
  countries: Country[];
}

export const generateCountriesReport = (
  options: ReportOptions,
): TDocumentDefinitions => {
  const {
    title = 'Countries Report',
    subtitle = 'List of Countries',
    countries,
  } = options;

  return {
    pageOrientation: 'landscape',
    header: headerSection({
      title,
      subtitle,
      showDate: true,
      showLogo: true,
    }),
    footer: footerSection,
    pageMargins: [40, 100, 40, 60],
    content: [
      {
        layout: 'customLayout',
        table: {
          headerRows: 1,
          widths: [50, 50, 50, '*', 'auto', '*'],
          body: [
            ['ID', 'ISO2', 'ISO3', 'Name', 'Continent', 'Local Name'],

            ...countries.map((country) => [
              country.id.toString(),
              country.iso2 ?? '',
              country.iso3 ?? '',
              country.name ?? '',
              country.continent ?? '',
              country.local_name ?? '',
            ]),

            ['', '', '', '', 'Total', `${countries.length}`],
          ],
        },
      },
      {
        text: 'Total',
        style: {
          fontSize: 16,
          bold: true,
          margin: [0, 40, 0, 0],
        },
      },
      {
        layout: 'noBorders',
        table: {
          headerRows: 1,
          body: [
            [
              {
                text: 'Total number of countries: ' + countries.length,
                alignment: 'center',
                fontSize: 10,
                margin: [0, 20, 0, 0],
              },
            ],
          ],
        },
      },
    ],
  };
};
