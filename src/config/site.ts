/**
 * Central site config for SEO, manifest, and shared metadata.
 */
const siteUrl =
  (typeof import.meta !== "undefined" && (import.meta as unknown as { env?: { PUBLIC_SITE_URL?: string } }).env?.PUBLIC_SITE_URL) ??
  "https://www.hearthapp.com";
const twitterHandle =
  (typeof import.meta !== "undefined" && (import.meta as unknown as { env?: { PUBLIC_TWITTER_HANDLE?: string } }).env?.PUBLIC_TWITTER_HANDLE) ??
  "";

export const siteConfig = {
  name: "Hearth",
  shortName: "Hearth",
  siteUrl,
  defaultTitle: "Hearth App",
  defaultDescription: "Hearth — your landing page. Discover more.",
  defaultOgImage: "/og-default.png",
  twitterHandle,
  locale: "en_US",
  locales: [
    "en", "es", "pt", "it", "de", "id", "ms", "tr", "nl", "no", "th", "da", "fi", "ko", "pl", "ro", "hu", "lt", "lv", "et", "el", "sk", "sl", "hr", "cs", "vi", "uk", "sv", "fr", "fil",
  ] as const,
} as const;

export function getAbsoluteUrl(
  path: string,
  baseUrl: string = siteConfig.siteUrl,
): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl.replace(/\/$/, "")}${normalizedPath}`;
}

export function buildWebSiteJsonLd(
  siteUrlOverride: string = siteConfig.siteUrl,
): object {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteUrlOverride,
    description: siteConfig.defaultDescription,
  };
}
