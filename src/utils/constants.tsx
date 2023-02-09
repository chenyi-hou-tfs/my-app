/**
 * ceshi
 */
export const titleMap = {
  '/more': 'more',
  '/about': 'about',
  '/search': 'search',
  '/product/[sku]': (router: any) => router.query.sku
}

export const tabPage = [
  '/about',
  '/search',
  '/more',
]