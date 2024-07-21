import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { z } from "zod";

export type CineDetails = {
  posterUrl: string | StaticImport;
  description: string;
  rating: number;
  runtime: string;
  releaseYear: string;
  type: "Movie" | "Series";
};

export const getCineDetails = async (
  title: string,
): Promise<CineDetails | null> => {
  const baseUrl = process.env.MOVIE_API_BASE_URL;
  const apikey = process.env.MOVIE_API_KEY;

  try {
    const res = await fetch(`${baseUrl}/?t=${title}&apikey=${apikey}`);
    const data = await res.json();

    const cineResponseValidation = cineResponseSchema.safeParse(data);
    if (cineResponseValidation.error) {
      return null;
    }

    return {
      posterUrl: cineResponseValidation.data.Poster,
      description: data.Plot,
      rating: parseFloat(cineResponseValidation.data.imdbRating),
      runtime: cineResponseValidation.data.Runtime,
      releaseYear: cineResponseValidation.data.Year,
      type: cineResponseValidation.data.Type === "movie" ? "Movie" : "Series",
    } satisfies CineDetails;
  } catch (error) {
    return null;
  }
};

const cineResponseSchema = z.object({
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
  Poster: z.string(),
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
