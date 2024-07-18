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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-8 p-4">
      <h1 className="text-6xl font-black text-foreground">CinePicker</h1>
      <div className="flex flex-col items-center space-y-4">
        <div className="flex gap-4">
          <Card className="h-96 w-64 border-border bg-card">
            <Image
              src="/placeholder.svg"
              className="h-full"
              alt="Movie Poster"
              width={256}
              height={384}
            />
          </Card>
          <Card className="h-96 w-64 border-border bg-card p-4 text-card-foreground">
            <p>Movie details and description go here.</p>
          </Card>
        </div>
        <div className="flex items-center justify-center gap-4">
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
