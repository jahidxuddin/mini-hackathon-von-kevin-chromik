import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export type CineCardProps = {
  posterUrl: string | StaticImport;
  description: string;
  rating: number;
  runtime: string;
  releaseYear: string;
  type: "Movie" | "Series";
};

export default function CinceCard({
  posterUrl,
  description,
  rating,
  runtime,
  releaseYear,
  type,
}: CineCardProps) {
  return (
    <div className="flex w-full flex-col items-center gap-4 sm:flex-row">
      <Card className="h-96 w-64 border-border bg-card">
        <Image src={posterUrl} alt="Movie Poster" width={300} height={445} />
      </Card>
      <Card className="flex h-96 w-64 flex-col justify-between border-border bg-card p-4 text-card-foreground">
        <p>{description}</p>
        <div className="flex flex-wrap items-center gap-2">
          <Badge className="bg-secondary transition-opacity hover:bg-secondary hover:opacity-85">
            ⭐ {rating}
          </Badge>
          <Badge className="bg-secondary transition-opacity hover:bg-secondary hover:opacity-85">
            ⌛ {runtime}
          </Badge>
          <Badge className="bg-secondary transition-opacity hover:bg-secondary hover:opacity-85">
            📆 {releaseYear}
          </Badge>
          <Badge className="bg-secondary transition-opacity hover:bg-secondary hover:opacity-85">
            🎬 {type}
          </Badge>
        </div>
      </Card>
    </div>
  );
}
