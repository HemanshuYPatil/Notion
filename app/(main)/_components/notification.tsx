import React from "react";
import { Bell } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";



export const Notification = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="ghost">
          <Bell className="h-4 w-4" />  
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-50"
        align="end"
        alignOffset={8}
        forceMount
      >
        <DropdownMenuItem>
        
          Notification
        </DropdownMenuItem>
        <DropdownMenuSeparator />

      </DropdownMenuContent>
    </DropdownMenu>
  );
}
