type Link = {
  title: string;
  href: string;
  type: string;
  language: string | null;
  popup: boolean;
  hash: string | null;
};

export interface Layout {
  span: 6 | 12;
  width: "1/2" | "1/1";
  blocks: Block[];
}

type BlockContent = {
  [key: string]: any;
};

export interface Block {
  id: string;
  type: string;
  isFirst: boolean;
  isLast: boolean;
  prevBlock: string | null;
  nextBlock: string | null;
  content: BlockContent;
}

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

type Content = {
  backgroundcolor: string;
  textcolor: string;
  headline?: string;
  customer?: string;
  subtitle?: string | null;
  projectname?: string;
  layout: Layout[];
  items?: any[];
  prev?: string | null;
  next?: string | null;
  slider?: any[];
  overlay: {
    text: string;
    link: Link;
    button?: string;
  } | null;
};

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
  content: Content;
}

export interface Props {
  page: Page;
  global: Global;
  preview?: boolean;
}
