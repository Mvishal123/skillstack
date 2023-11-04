"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";
import axios from "axios";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  title: z.string().min(3, {
    message: "Title must be at least 3 characters long",
  }),
});

const CreateCoursePage = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const onSubmit = async (formData: z.infer<typeof formSchema>) => {
    // console.log(formData);

    try {
        const res = await axios.post("/api/courses", formData);
        console.log("CreateCoursePage", res.data);
        router.push(`/teacher/courses/${res.data.course.userId}`);
        toast.success("Course created successfully");
        
    } catch (error:any) {
      console.log(error.message);
      
        toast.error("Something went wrong");
    }
  };

  return (
    <div className="p-6 mx-auto max-w-5xl h-full flex space-y-8 md:items-center md:justify-center">
      <div className="space-y-5">
        <h1 className="text-4xl">Title</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl text-black">
                    What would you like to name your course
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g. blockchain in 30 days"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This will be displayed as the title for the course
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-4 flex gap-8">
              <Link href={"/teacher/courses"}>
                <Button className="" type="button" variant={"secondary"}>
                  Cancel
                </Button>
              </Link>
              <Button className="" type="submit" disabled={!form.formState.isValid || form.formState.isLoading}>
                Continue
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateCoursePage;
