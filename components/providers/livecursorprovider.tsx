'use client';

import React, { PointerEvent } from 'react'
import { useMyPresence, useOthers } from '@liveblocks/react/suspense';

function livecursorprovider({ children }: { children: React.ReactNode }) {

    const [mypresence, updatemypresence] = useMyPresence();
    const others = useOthers();

    function handlePointermove(e: PointerEvent<HTMLDivElement>) {
        const cursor = { x: Math.floor(e.pageX), y: Math.floor(e.pageY) };
        updatemypresence({ cursor });
    }

    function handlePointerCancel() {

        updatemypresence({ cursor: null });
    }


    return (
        <div
            onPointerMove={handlePointermove}
            onPointerLeave={handlePointerCancel}
        >
            {others.filter((other) => other.presence.cursor !== null).map(({connectionId, presence, info}) => (
                <FollowPointer
                    key={connectionId}
                    info={info}
                    x={presence.cursor!.x}
                    y={presence.cursor!.y}

                />
            ))}

            {children}
        </div>
    )
}

export default livecursorprovider