import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
import { Search } from "lucide-react";

export default function CollectionLoading() {
  return (
    <div className="space-y-8 animate-pulse">
      {/* Header Skeleton */}
      <div className="space-y-2">
        <Skeleton className="h-10 w-64 rounded-lg" />
        <Skeleton className="h-4 w-3/4 rounded" />
      </div>

      {/* Search Bar Skeleton */}
      <div className="flex items-center gap-3 border border-orange-200 bg-orange-50 px-4 py-2 rounded-xl shadow-sm w-full max-w-md">
        <Search className="h-4 w-4 text-orange-400 opacity-30" />
        <Skeleton className="h-4 w-full rounded bg-orange-100" />
      </div>

      {/* Tag Filter Skeleton */}
      <Skeleton className="h-4 w-24 rounded-full bg-orange-100" />

      {/* Entry Cards Skeleton */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((index) => (
          <Card
            key={index}
            className="p-6 rounded-2xl border border-orange-100 shadow-sm space-y-4"
          >
            {/* Header */}
            <div className="flex items-center gap-3">
              <Skeleton className="h-6 w-6 rounded-full bg-orange-200" />
              <Skeleton className="h-6 w-32 rounded bg-orange-100" />
            </div>
            <Skeleton className="h-4 w-20 bg-orange-100" />

            {/* Content Preview */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-full bg-orange-50 rounded" />
              <Skeleton className="h-4 w-3/4 bg-orange-50 rounded" />
            </div>

            {/* Tags */}
            <div className="flex gap-2">
              <Skeleton className="h-6 w-20 rounded-full bg-orange-100" />
              <Skeleton className="h-6 w-16 rounded-full bg-orange-100" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

