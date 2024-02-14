import { Plus } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const idealWidth = `max(880px, 25%)`;

export const InviteButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus className="h-4 w-4 mr-2" />
          Invite Members
        </Button>
      </DialogTrigger>
      <DialogContent
        className="p-0 bg-transparent border-none z-[101]"
        style={{ maxWidth: idealWidth }}
      >
        <OrganizationProfile />
      </DialogContent>
    </Dialog>
  );
};
