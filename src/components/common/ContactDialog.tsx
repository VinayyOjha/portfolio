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

export function  ContactDialog() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild className="">
          <div className="w-fit px-3 py-1  gap-1 flex items-center font-sans-serif text-xs cursor-pointer rounded transition-all duration-300 border border-neutral-400 bg-neutral-200">
            <AddressBook size={12} />
            Contact
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] font-mono">
          <DialogHeader>
            <DialogTitle>Have a Question?</DialogTitle>
            <DialogDescription>
               Feel free to reach out for freelance work, project ideas, or any queries you might have!
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue="Awaad Anshuman" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email" about="email">Your Email</Label>
              <Input id="username-1" name="username" defaultValue="@gmail.com" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email" about="email">Your Message</Label>
              <div className="flex items-start border h-[200px] w-full rounded-md">
                <textarea id="msg-1" name="message" placeholder="Please type your message." className="h-full w-full p-4 rounded-md"/>
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Send message</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
