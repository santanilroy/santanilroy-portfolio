export interface FrontMatter {
  title: string;
  date: string;
  description: string;
}

export interface BlogPost {
  slug: string;
  frontMatter: FrontMatter;
}

