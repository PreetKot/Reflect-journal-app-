"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { deleteCollection } from "@/actions/collection";
import useFetch from "@/hooks/use-fetch";

import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

export default function DeleteCollectionDialog({
  collection,
  entriesCount = 0,
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const {
    loading: isDeleting,
    fn: deleteCollectionFn,
    data: deletedCollection,
  } = useFetch(deleteCollection);

  useEffect(() => {
    if (deletedCollection && !isDeleting) {
      toast.error(
        `Collection "${collection.name}" and all its entries deleted.`
      );
      setOpen(false);
      router.push("/dashboard");
    }
  }, [deletedCollection, isDeleting, collection.name, router]);

  const handleDelete = async () => {
    await deleteCollectionFn(collection.id);
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size="sm" className="gap-2">
          <Trash2 className="h-4 w-4" />
          Delete
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Delete <span className="text-destructive">"{collection.name}"</span>?
          </AlertDialogTitle>
          <div className="mt-2 text-sm text-muted-foreground space-y-2">
            <p>This will permanently remove:</p>
            <ul className="list-disc list-inside">
              <li>The collection <strong>{collection.name}</strong></li>
              <li>{entriesCount} journal {entriesCount === 1 ? "entry" : "entries"}</li>
            </ul>
            <p className="font-semibold text-destructive">
              This action cannot be undone.
            </p>
          </div>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
          <Button
            onClick={handleDelete}
            variant="destructive"
            disabled={isDeleting}
          >
            {isDeleting ? "Deleting..." : "Delete Collection"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
