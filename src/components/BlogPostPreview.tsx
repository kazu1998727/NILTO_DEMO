import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogPostPreviewProps {
  _title: string;
  content: string;
  _created_at: string;
  _id: string;
  tags: string[];
}

export function BlogPostPreview({
  _title,
  content,
  _created_at,
  _id,
  tags,
}: BlogPostPreviewProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>
          <Link href={`/blog/${_id}`} className="hover:underline">
            {_title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4">{content}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        <div className="flex justify-between w-full">
          <time dateTime={_created_at}>{_created_at}</time>
        </div>
      </CardFooter>
    </Card>
  );
}
