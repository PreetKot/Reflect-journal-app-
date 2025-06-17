import React from "react";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { format } from "date-fns";

const EntryCard = ({ entry }) => {
  const formattedDate = format(new Date(entry.createdAt), "MMM d, yyyy");

  return (
    <Link
      href={`/journal/${entry.id}`}
      aria-label={`View journal entry titled ${entry.title}`}
    >
      <Card className="hover:shadow-md transition-shadow duration-200">
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2 w-full">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{entry.moodData?.emoji ?? "📝"}</span>
                <h3 className="font-semibold text-lg truncate">
                  {entry.title || "Untitled Entry"}
                </h3>
              </div>
              <div
                className="text-gray-600 text-sm line-clamp-2 break-words"
                dangerouslySetInnerHTML={{
                  __html: entry.content || "<i>No content</i>",
                }}
              />
            </div>
            <time
              className="text-xs text-gray-500 whitespace-nowrap"
              title={formattedDate}
            >
              {formattedDate}
            </time>
          </div>

          {entry.collection?.name && (
            <div className="mt-4">
              <span className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded">
                {entry.collection.name}
              </span>
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default EntryCard;

