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
  menuWork: Link | null;
  menuInfo: Link | null;
  menuBlog: Link | null;
  menuJobs: Link | null;
  menuSecondary: Link[] | null;
  backgroundcolorMenu: string | null;
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
  content: {
    backgroundcolor: string;
    [key: string]: any;
  };
}

export interface Props {
  page: Page;
  global: Global;
}
