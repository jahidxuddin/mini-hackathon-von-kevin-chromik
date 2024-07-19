import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { z } from "zod";

const movieSchema = z.object({
  Title: z.string(),
  Year: z.string(),
  Rated: z.string(),
  Released: z.string(),
  Runtime: z.string(),
  Genre: z.string(),
  Director: z.string(),
  Writer: z.string(),
  Actors: z.string(),
  Plot: z.string(),
  Language: z.string(),
  Country: z.string(),
  Awards: z.string(),
  Ratings: z.array(
    z.object({
      Source: z.string(),
      Value: z.string(),
    }),
  ),
  Metascore: z.string(),
  imdbRating: z.string(),
  imdbVotes: z.string(),
  Type: z.string(),
  DVD: z.string(),
  BoxOffice: z.string(),
  Production: z.string(),
  Website: z.string(),
  Response: z.string(),
});

export default async function Home() {
  // const res = await fetch(
  //   `${process.env.MOVIE_API_BASE_URL}/?i=tt3896198&apikey=${process.env.MOVIE_API_KEY}`,
  // );
  // const data = await res.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-8 p-16 sm:p-4">
      <h1 className="w-full text-center text-4xl font-black text-foreground sm:text-6xl">
        <span className="text-accent">Cine</span>Picker
      </h1>
      <div className="flex flex-col items-center space-y-4">
        <div className="flex w-full flex-col gap-4 sm:flex-row">
          <Card className="h-96 w-full border-border bg-card sm:w-64">
            <Image
              src=""
              className="h-full"
              alt="Movie Poster"
              width={256}
              height={384}
            />
          </Card>
          <Card className="h-96 w-full border-border bg-card p-4 text-card-foreground sm:w-64">
            <p>Movie details and description go here.</p>
          </Card>
        </div>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Select>
            <SelectTrigger className="w-40 border-border bg-transparent">
              <SelectValue placeholder="Example 1" />
            </SelectTrigger>
            <SelectContent className="border-border bg-popover text-popover-foreground">
              <SelectItem className="focus:bg-accent" value="example1">
                Example 1
              </SelectItem>
              <SelectItem className="focus:bg-accent" value="example2">
                Example 2
              </SelectItem>
              <SelectItem className="focus:bg-accent" value="example3">
                Example 3
              </SelectItem>
              <SelectItem className="focus:bg-accent" value="example4">
                Example 4
              </SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-40 border-border bg-transparent" />
          </Select>
          <Select>
            <SelectTrigger className="w-40 border-border bg-transparent" />
          </Select>
        </div>
        <Button className="rounded-full bg-primary transition-opacity hover:bg-primary hover:opacity-85">
          Pick Movie
        </Button>
      </div>
    </main>
  );
}
