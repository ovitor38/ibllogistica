/* eslint-disable no-unused-vars */
export enum SearchFields {
  TITLE = 'title',
  AUTHOR = 'author',
  ISBN = 'isbn',
  PAGE_COUNT = 'page_count',
  EDITION = 'edition',
  PUBLISHER = 'publisher'
}

export const fieldLabels: Record<SearchFields, string> = {
  [SearchFields.TITLE]: 'Título',
  [SearchFields.AUTHOR]: 'Autor',
  [SearchFields.ISBN]: 'ISBN',
  [SearchFields.PAGE_COUNT]: 'Número de Páginas',
  [SearchFields.EDITION]: 'Edição',
  [SearchFields.PUBLISHER]: 'Editora'
}
