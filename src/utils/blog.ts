import type { CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;

export type TagSummary = {
  slug: string;
  label: string;
  count: number;
};

export function sortBlogPosts(posts: BlogPost[]) {
  return [...posts].sort(
    (left, right) => right.data.date.getTime() - left.data.date.getTime(),
  );
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function getPostSlug(post: BlogPost) {
  return post.slug ?? post.id.replace(/\.md$/, "");
}

export function tagToSlug(tag: string) {
  return tag
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

export function getAllTags(posts: BlogPost[]): TagSummary[] {
  const tags = new Map<string, TagSummary>();

  for (const post of posts) {
    for (const tag of post.data.tags) {
      const slug = tagToSlug(tag);
      const existing = tags.get(slug);

      if (existing) {
        existing.count += 1;
      } else {
        tags.set(slug, {
          slug,
          label: tag,
          count: 1,
        });
      }
    }
  }

  return [...tags.values()].sort((left, right) =>
    left.label.localeCompare(right.label, "zh-CN"),
  );
}

export function getPostsByTag(posts: BlogPost[], tagSlug: string) {
  return posts.filter((post) =>
    post.data.tags.some((tag) => tagToSlug(tag) === tagSlug),
  );
}
