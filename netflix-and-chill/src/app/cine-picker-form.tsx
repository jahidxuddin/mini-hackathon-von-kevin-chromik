import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import genres from "@/data/cine-genre";
import types from "@/data/cine-type";

export default function CinePickerForm() {
  return (
    <form className="flex flex-col items-center gap-3">
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Select>
          <SelectTrigger className="w-40 border-border bg-transparent">
            <SelectValue placeholder="Select Type" />
          </SelectTrigger>
          <SelectContent className="border-border bg-popover text-popover-foreground">
            {types.map((type) => (
              <SelectItem
                key={type}
                className="focus:bg-accent"
                value={type.toLowerCase().replace(" ", "-")}
              >
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-40 border-border bg-transparent">
            <SelectValue placeholder="Select Genre" />
          </SelectTrigger>
          <SelectContent className="border-border bg-popover text-popover-foreground">
            {genres.map((genre) => (
              <SelectItem
                key={genre}
                className="focus:bg-accent"
                value={genre.toLowerCase().replace(" ", "-")}
              >
                {genre}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button className="w-fit rounded-full bg-primary uppercase transition-opacity hover:bg-primary hover:opacity-85">
        Pick
      </Button>
    </form>
  );
}
