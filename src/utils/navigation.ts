export type NavLink = {
  label: string
  to: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Bakery', to: '/bakery' },
  { label: 'Shop', to: '/shop' },
  { label: 'Collabs', to: '/collabs' },
  { label: 'Journal', to: '/journal' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]
