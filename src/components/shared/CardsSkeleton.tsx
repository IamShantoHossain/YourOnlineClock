import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";

const CardsSkeleton = ({
  cardsCount = 3,
  containerClass,
}: {
  cardsCount?: number;
  containerClass?: string;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3",
        containerClass,
      )}
    >
      {Array.from({ length: cardsCount }).map((_, index) => (
        <Skeleton key={index} className="h-36" />
      ))}
    </div>
  );
};

export default CardsSkeleton;
