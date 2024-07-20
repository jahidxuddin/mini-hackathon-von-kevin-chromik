import CineCard, { CineCardProps } from "./cine-card";
import CineCardSkeleton from "./cine-card-skeleton";
import CinePickerForm from "./cine-picker-form";

export default function Home() {
  // const res = await fetch(
  //   `${process.env.MOVIE_API_BASE_URL}/?i=tt3896198&apikey=${process.env.MOVIE_API_KEY}`,
  // );
  // const data = await res.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-8 p-8 sm:p-4">
      <h1 className="w-full text-center text-4xl font-black text-foreground sm:text-6xl">
        <span className="text-accent">Cine</span>Picker
      </h1>
      <div className="space-y-4">
        {/* <CineCard {...PLACEHOLDER} /> */}
        <CineCardSkeleton />
        <CinePickerForm />
      </div>
    </main>
  );
}

const PLACEHOLDER = {
  posterUrl:
    "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
  description:
    "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
  rating: 7.6,
  runtime: "136 min",
  releaseYear: "2017",
  type: "Movie",
} satisfies CineCardProps;
