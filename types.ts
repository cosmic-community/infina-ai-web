// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Image / file metafield shape
export interface CosmicImage {
  url: string;
  imgix_url: string;
}

// Author object
export interface Author extends CosmicObject {
  type: 'authors';
  metadata: {
    name?: string;
    role?: string;
    bio?: string;
    avatar?: CosmicImage;
  };
}

// Category object
export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    name?: string;
    description?: string;
  };
}

// Post object
export interface Post extends CosmicObject {
  type: 'posts';
  metadata: {
    title?: string;
    excerpt?: string;
    content?: string;
    featured_image?: CosmicImage;
    primary_keyword?: string;
    author?: Author;
    category?: Category;
    tags?: string[];
  };
}

// Cosmic list response
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Type guards
export function isPost(obj: CosmicObject): obj is Post {
  return obj.type === 'posts';
}

export function isAuthor(obj: CosmicObject): obj is Author {
  return obj.type === 'authors';
}

export function isCategory(obj: CosmicObject): obj is Category {
  return obj.type === 'categories';
}