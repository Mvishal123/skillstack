"use client";

import { useState } from "react";
import { Pencil, PlusCircle } from "lucide-react";
import Image from "next/image";
import * as z from "zod";

import { DropZone } from "@/components/DropZone";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

import { CameraIcon } from "lucide-react";

interface PageProps {
  initialValue?: string;
  courseId: string;
}

const ImageSection = ({ initialValue, courseId }: PageProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const router = useRouter();

  const handleEdit = () => setIsEdit((prev) => !prev);

  const onSubmit = async ({ imageUrl }: { imageUrl: string }) => {
    try {
      await axios.patch(`/api/courses/${courseId}`, { imageUrl });
      toast.success("Image updated successfully");
      handleEdit();
      router.refresh();
    } catch (error: any) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="mt-4 rounded-lg bg-slate-100 p-4">
      <div className="flex justify-between items-center">
        <h1>Course image</h1>
        {!isEdit && !initialValue && (
          <Button variant={"ghost"} onClick={handleEdit}>
            <PlusCircle className="h-4 w-4 mr-2" /> Add an image
          </Button>
        )}

        {!isEdit && initialValue && (
          <Button variant={"ghost"} onClick={handleEdit}>
            <Pencil className="h-4 w-4 mr-2" /> Edit Course
          </Button>
        )}
        {isEdit && (
          <Button variant={"ghost"} onClick={handleEdit}>
            Cancel
          </Button>
        )}
      </div>
      <div className="mt-6">
        {!isEdit && !initialValue && (
          <div>
            <div className="h-60 flex items-center justify-center bg-slate-200 rounded-lg">
              <CameraIcon className="h-10 w-10 text-muted-foreground" />
            </div>
          </div>
        )}
        {!isEdit && initialValue && (
          <div className="relative aspect-video">
            <Image
              src={`${initialValue}`}
              alt="course image"
              fill
              className="object-contain"
            />
          </div>
        )}

        {isEdit && (
          <div>
            <DropZone
              endpoint={"courseImage"}
              onChange={(url) => {
                if (url) {
                  onSubmit({ imageUrl: url });
                }
              }}
            />
            <div className="text-sm text-muted-foreground">
              <p>16 : 9 aspect ratio recommended</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageSection;
