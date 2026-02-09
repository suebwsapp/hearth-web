export interface FooterLink {
  label: string;
  defaultMessage: string;
  href: string;
}

export interface FooterMenuSection {
  label: string;
  defaultMessage: string;
  href: string;
  items: FooterLink[];
}

export const MENU_ITEMS: FooterMenuSection[] = [
  {
    label: "landing.footer.legal",
    defaultMessage: "Legal",
    href: "/legal",
    items: [
      { label: "landing.footer.privacy_policy", defaultMessage: "Privacy Policy", href: "/privacy-policy" },
      { label: "landing.footer.terms_of_service", defaultMessage: "Terms of Service", href: "/terms-of-service" },
      { label: "landing.footer.cookie_policy", defaultMessage: "Cookie Policy", href: "/cookie-policy" },
    ],
  },
  {
    label: "landing.footer.company",
    defaultMessage: "Company",
    href: "/company",
    items: [
      { label: "landing.footer.about_us", defaultMessage: "About Us", href: "/about-us" },
      { label: "landing.footer.contact", defaultMessage: "Contact", href: "/contact" },
    ],
  },
  {
    label: "landing.footer.product",
    defaultMessage: "Product",
    href: "/product",
    items: [
      { label: "landing.footer.features", defaultMessage: "Features", href: "/features" },
      { label: "landing.footer.pricing", defaultMessage: "Pricing", href: "/pricing" },
      { label: "landing.footer.testimonials", defaultMessage: "Testimonials", href: "/testimonials" },
      { label: "landing.footer.faq", defaultMessage: "FAQ", href: "/faq" },
    ],
  },
];
