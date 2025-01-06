import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { H1, H2, Lead, P, H4 } from "@/components/ui/typography";
import { Button } from "./ui/button";

interface ProjectCardProps {
  id: number;
  image: string;
  title: string;
  desc: string;
}

export function BlogCard({ image, title, desc, id }: ProjectCardProps) {
  const defaultImg = "/image/blog-1.svg"; // Set defaultImg to null instead of an empty string
  // console.log('Image URL:', image);
  // console.log('Default Image URL:', defaultImg);
  return (
    <Card color="transparent" className="border-none p-2">
      <CardHeader className="mx-0 mt-0 mb-6 h-48 float-none">
        <Image
          src={image || defaultImg}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
          unoptimized={true} // Add this prop
        />
      </CardHeader>
      <CardContent className="p-2">
        <a
          href={`/blogsapp/blogpage/${id}`}
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <H4 className="mb-2 text-center">{title}</H4>
        </a>
        <P className="mb-6 font-normal !text-gray-500">{desc}</P>
      </CardContent>
    </Card>
  );
}

export default BlogCard;
