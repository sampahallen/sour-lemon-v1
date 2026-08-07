/** Resolves a root-relative public asset path (e.g. "/images/foo.png") against the app's base URL. */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
