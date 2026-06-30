"use client";

import { BlogCard, type BlogCardProps } from "@/components/blog-card";
import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";

export function BlogGrid({
  posts,
  categories,
}: {
  posts: BlogCardProps[];
  categories: readonly string[];
}) {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return posts;
    return posts.filter((p) => p.category === active);
  }, [posts, active]);

  return (
    <div className="flex flex-col gap-10">
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === cat
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:text-foreground"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      ) : (
        <p className="rounded-3xl border border-dashed border-border bg-card p-12 text-center text-muted-foreground">
          No articles in this category yet — check back soon.
        </p>
      )}
    </div>
  );
}
