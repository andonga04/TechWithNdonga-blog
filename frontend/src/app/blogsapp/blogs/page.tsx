"use client";

import { useEffect, useState } from "react";
import BlogCard from "@/components/blogcard";
import { H2, Lead } from "@/components/ui/typography";

export function Blogs() {
  const [projects, setProjects] = useState<
    { id: number; image: string; title: string; desc: string }[]
  >([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:5000/blogs");
        if (!response.ok) {
          throw new Error("Failed to fetch blog data");
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <section className="py-2 px-8">
        <div className="container mx-auto mb-20 text-center">
          <Lead className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12">
            Whether you have a mobile app idea that needs to come to life or a
            website that requires a facelift, I&apos;m here to turn your digital
            dreams into reality.
          </Lead>
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((props) => (
            <BlogCard key={props.id} {...props} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Blogs;
