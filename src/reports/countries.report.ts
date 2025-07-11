import type { TDocumentDefinitions } from 'pdfmake/interfaces';
import { headerSection } from './sections/header.section';
import { countries as Country } from 'generated/prisma';

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
    pageMargins: [40, 100, 40, 60],
    content: [
      {
        layout: 'lightHorizontalLines',
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
          ],
        },
      },
    ],
  };
};
