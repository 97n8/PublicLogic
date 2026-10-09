// Prefix for root-relative asset URLs. Next.js applies basePath to Link and routes,
// but not to plain img src values, so those go through withBasePath().
// Empty when the site is served from the domain root.
export const BASE_PATH: string = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function withBasePath(path: string): string {
  return `${BASE_PATH}${path}`;
}
