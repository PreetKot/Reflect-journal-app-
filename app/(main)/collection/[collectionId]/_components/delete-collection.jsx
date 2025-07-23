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
        <Button variant="destructive" size="sm" className="gap-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 shadow-md">
          <Trash2 className="h-4 w-4" />
          Delete
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="bg-gradient-to-br from-red-50 to-pink-50 border border-red-200">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-red-800">
            Delete <span className="text-red-600 font-bold">&quot;{collection.name}&quot;</span>?
          </AlertDialogTitle>
          <div className="mt-2 text-sm text-red-700 space-y-2">
            <p>This will permanently remove:</p>
            <ul className="list-disc list-inside bg-red-100 p-3 rounded-lg">
              <li>The collection <strong>{collection.name}</strong></li>
              <li>{entriesCount} journal {entriesCount === 1 ? "entry" : "entries"}</li>
            </ul>
            <p className="font-semibold text-red-800 bg-red-200 p-2 rounded-lg">
              ⚠️ This action cannot be undone.
            </p>
          </div>
        </AlertDialogHeader>

        <AlertDialogFooter className="bg-red-25">
          <AlertDialogCancel disabled={isDeleting} className="border-gray-300 hover:bg-gray-50">Cancel</AlertDialogCancel>
          <Button
            onClick={handleDelete}
            variant="destructive"
            disabled={isDeleting}
            className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 shadow-md"
          >
            {isDeleting ? "Deleting... 🗑️" : "Delete Collection"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
