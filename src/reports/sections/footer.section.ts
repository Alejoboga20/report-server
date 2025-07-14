import type { Content, ContextPageSize } from 'pdfmake/interfaces';

export const footerSection = (
  currentPage: number,
  pageCount: number,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _: ContextPageSize,
): Content => {
  return {
    text: `Page ${currentPage} of ${pageCount}`,
    alignment: 'center',
    margin: [0, 10, 0, 0],
    color: 'gray',
  };
};
