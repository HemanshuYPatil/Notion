"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
} from "@liveblocks/react/suspense";

export function LiveBlocksProvider({ children }: { children: ReactNode }) {
  return (
    <LiveblocksProvider throttle={16} authEndpoint={'/auth-endpoint'}>
          {children}    
    </LiveblocksProvider>
  );
}