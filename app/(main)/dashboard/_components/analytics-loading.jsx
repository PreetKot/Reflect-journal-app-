import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const MoodAnalyticsSkeleton = () => {
  return (
    <div className="space-y-6">
      {/* Title Skeleton */}
      <Skeleton className="h-10 w-48" />

      {/* Stats Cards Skeleton */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="p-4 space-y-3">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-7 w-16" />
            <Skeleton className="h-3 w-28" />
          </Card>
        ))}
      </div>

      {/* Mood Chart Skeleton */}
      <Card>
        <CardHeader>
          <CardTitle>
            <Skeleton className="h-5 w-32" />
          </CardTitle>
        </CardHeader>
        <CardContent className="relative">
          <div className="h-[300px] w-full rounded-md bg-muted animate-pulse" />

          {/* X-axis Labels */}
          <div className="flex justify-between mt-4 px-4">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-3 w-12" />
            ))}
          </div>

          {/* Y-axis Labels */}
          <div className="absolute left-0 top-12 h-[240px] py-2 px-1 flex flex-col justify-between">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-3 w-6" />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MoodAnalyticsSkeleton;

