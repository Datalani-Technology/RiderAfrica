import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BlogClient from "@/components/BlogClient";

export const metadata: Metadata = {
  title: "Blog & News",
  description:
    "Rider Africa latest news, company updates, driver stories, and insights on logistics and transport in Namibia.",
};

export default function BlogPage() {
  return (
    <div>
      <PageHero
        tagline="Blog & Updates"
        title="News from"
        titleHighlight="Rider Africa"
        subtitle="Company updates, driver stories, product news, and insights on logistics in Africa."
        imageSrc="/images/blog-hero.jpg"
        imageAlt="Rider Africa team and news"
        imagePosition="center 20%"
        gradient="from-[#001A6E] via-[#003EA6] to-[#0073FF]"
      />
      <BlogClient />
    </div>
  );
}
