import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AddressBook } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must contain at least 2 characters")
    .max(50, "Name is too long"),

  email: z.email("Please enter a valid email"),

  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters")
    .max(1000, "Message cannot exceed 1000 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export function ContactDialog() {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
      isValid,
    },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: ContactForm) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      alert("Message sent successfully!");

      reset();
    } catch (err) {
      console.error(err);
      alert("Failed to send message.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild className="">
        <div className="w-fit px-3 py-1 gap-1 flex items-center font-sans-serif text-xs cursor-pointer rounded transition-all duration-300 border border-neutral-400 bg-neutral-200">
          <AddressBook size={12} />
          Contact
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] font-mono">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Have a Question?</DialogTitle>

            <DialogDescription>
              Feel free to reach out for freelance work, project ideas, or any
              queries you might have!
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 mt-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>

              <Input
                id="name-1"
                placeholder="John Doe"
                {...register("name")}
              />

              {errors.name && (
                <p className="text-red-500 text-xs">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="grid gap-3">
              <Label htmlFor="email">Your Email</Label>

              <Input
                id="email"
                type="email"
                placeholder="john@gmail.com"
                {...register("email")}
              />

              {errors.email && (
                <p className="text-red-500 text-xs">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="grid gap-3">
              <Label htmlFor="message">Your Message</Label>

              <div className="flex items-start border h-[200px] w-full rounded-md">
                <textarea
                  id="message"
                  placeholder="Please type your message."
                  className="h-full w-full p-4 rounded-md"
                  {...register("message")}
                />
              </div>

              {errors.message && (
                <p className="text-red-500 text-xs">
                  {errors.message.message}
                </p>
              )}
            </div>
          </div>

          <DialogFooter className="mt-6">
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </DialogClose>

            <Button
              type="submit"
              disabled={!isValid || isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}