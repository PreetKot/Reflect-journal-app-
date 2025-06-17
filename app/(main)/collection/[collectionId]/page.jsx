import { getJournalEntries } from "@/actions/journal";
import { getCollections } from "@/actions/collection";
import { JournalFilters } from "./_components/journal-filters";
import DeleteCollectionDialog from "./_components/delete-collection";

export default async function CollectionPage({ params }) {
  const { collectionId } = params;
  const entries = await getJournalEntries({ collectionId });
  const collections =
    collectionId !== "unorganized" ? await getCollections() : null;
  const collection = collections?.find((c) => c.id === collectionId);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold gradient-title">
              {collectionId === "unorganized"
                ? "Unorganized Entries"
                : collection?.name || "Collection"}
            </h1>
            {collection?.description && (
              <p className="text-sm text-muted-foreground mt-1">
                {collection.description}
              </p>
            )}
          </div>

          {collection && (
            <DeleteCollectionDialog
              collection={collection}
              entriesCount={entries.data.entries.length}
            />
          )}
        </div>
      </div>

      {/* Filters + Entry Grid */}
      <JournalFilters entries={entries.data.entries} />
    </div>
  );
}
