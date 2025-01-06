"use client";

import Navbar from "@/components/blogsnav/Navbar";
import { H2 } from "@/components/ui/typography";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const BlogPage = () => {
  const { id } = useParams(); // Get the blog ID from the route.
  const [project, setProject] = useState<{ id: number, image: string, title: string, content: string } | null>(null);
  const [loading, setLoading] = useState(true); // State to track loading status.
  const [error, setError] = useState<string | null>(null); // State to track errors.

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`http://localhost:5000/blog/${id}`); // Fetch data from backend API.
        if (!response.ok) {
          throw new Error("Failed to fetch blog data");
        }
        const data = await response.json();
        
        if (!data) {
          throw new Error("Blog not found");
        }
        
        setProject(data); // Assuming the response returns the blog directly (no need for `.find()`).
      } catch (err: any) {
        setError(err.message); // Set error message.
      } finally {
        setLoading(false); // End the loading state.
      }
    };

    if (id) fetchProject();
  }, [id]);

  // Show loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Show error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Show not found state
  if (!project) {
    return <div>Blog not found</div>;
  }

  return (
    <>
      <div className="w-full flex justify-center bg-gray-50 py-20">
        <div className="text-center max-w-2xl">
        <h1 className="mb-10 text-3xl font-bold">{project.title}</h1>
          <img
            src={project.image}
            alt={project.title}
            className="mb-8 rounded mx-auto w-full"
          />
          <p className="text-lg text-gray-600">{project.content}</p>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
