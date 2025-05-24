export interface Post {
  id?: number;
  title?: string;
  description?: string;
  label?: string | undefined;
  imageUrl?: string;
  category?: string;
  icon?: string;
  author?: {
    name?: string;
    avatar?: string;
    date?: string;
    readTime?: string;
  };
}
