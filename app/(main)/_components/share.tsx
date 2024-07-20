import React from 'react';
import { Button } from '@/components/ui/button';
import { toast } from "sonner";

export const Share = () => {
  const handleClick = () => {
    
    toast.message("This feature is currently under development and not yet available.");
   
  };

  return (
    <Button onClick={handleClick} size="sm" variant="ghost">
      Invite
    </Button>
  );
};
