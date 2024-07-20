import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function CineCardSkeleton() {
  return (
    <div className="flex w-full flex-col items-center gap-4 sm:flex-row">
      <Card className="h-96 w-64 border-border bg-card">
        <Skeleton className="h-full w-full" />
      </Card>
      <Card className="flex h-96 w-64 flex-col justify-between border-border bg-card p-4 text-card-foreground">
        <Skeleton className="h-24 w-full rounded-xl" />
        <div className="flex flex-wrap items-center gap-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
      </Card>
    </div>
  );
}
