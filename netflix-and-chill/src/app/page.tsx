import { Suspense } from "react";
import CineCard from "./cine-card";
import CineCardSkeleton from "./cine-card-skeleton";
import CinePickerForm from "./cine-picker-form";
import { CineDetails } from "@/lib/omdb";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-8 p-8 sm:p-4">
      <h1 className="w-full text-center text-4xl font-black text-foreground sm:text-6xl">
        <span className="text-accent">Cine</span>Picker
      </h1>
      <div className="space-y-4">
        <Suspense fallback={<CineCardSkeleton />}>
          <CineCard {...PLACEHOLDER} />
        </Suspense>
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
} satisfies CineDetails;
