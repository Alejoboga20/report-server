import type { TDocumentDefinitions } from 'pdfmake/interfaces';

interface ReportOptions {
  name?: string;
}

export const getHelloWorldReport = (options: ReportOptions) => {
  const { name = 'World' } = options;

  const docDefinition: TDocumentDefinitions = {
    content: [`Hello ${name}`],
  };

  return docDefinition;
};
