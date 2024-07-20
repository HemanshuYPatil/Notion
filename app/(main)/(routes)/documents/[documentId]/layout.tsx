import React from "react"


function Doclayout({ children, params: {id} }: { children: React.ReactNode, params: {id: string} }) {

    return (
        <div>{children}</div>
    )
}

export default Doclayout