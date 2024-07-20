import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogDescription, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { UserProfile } from "@clerk/clerk-react";
import { useProfileStore } from "@/lib/profile";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { CopyIcon } from "lucide-react";

const Profile: React.FC = () => {
  const { isOpen, closeProfile } = useProfileStore((state) => ({
    isOpen: state.isOpen,
    closeProfile: state.closeProfile,
  }));

  const [input , setinput] = useState<string>("");

  return (
    <Dialog open={isOpen} onOpenChange={closeProfile}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Invite</DialogTitle>
          <DialogDescription>
            Anyone who is invited will be able to edit this Document.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input type="email" placeholder="Email" onChange={(e) => {setinput(e.target.value)}}></Input>
          </div>

        </div>
        <DialogFooter className="sm:justify-end">
          <Button type="button" variant="default">
            Invite
          </Button>

        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Profile;
