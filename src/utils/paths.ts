const RAW_BASE_URL = import.meta.env.BASE_URL;
const BASE_URL = RAW_BASE_URL.endsWith("/") ? RAW_BASE_URL : `${RAW_BASE_URL}/`;

const ABSOLUTE_URL_PATTERN = /^(?:[a-z][a-z\d+.-]*:)?\/\//i;

export function withBase(path: string) {
  if (!path || path === "/") {
    return BASE_URL;
  }

  if (
    ABSOLUTE_URL_PATTERN.test(path) ||
    path.startsWith("data:") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:") ||
    path.startsWith("#")
  ) {
    return path;
  }

  if (BASE_URL !== "/" && (path === BASE_URL || path.startsWith(BASE_URL))) {
    return path;
  }

  return `${BASE_URL}${path.replace(/^\/+/, "")}`;
}
