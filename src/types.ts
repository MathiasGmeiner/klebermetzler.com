type Link = {
  title: string;
  href: string;
  type: string;
  language: string | null;
  popup: boolean;
  hash: string | null;
};

export interface Global {
  title: string;
  footerContactLabel: string;
  footerContactLink: Link;
}

export interface Page {
  title: string;
  intendedTemplate: string;
  meta: {
    tag: string;
    attributes: {
      name?: string;
      property?: string;
      content: string;
    } | null;
    content: string | null;
  }[];
  content: any[];
}

export interface Props {
  page: Page;
  global: Global;
}
