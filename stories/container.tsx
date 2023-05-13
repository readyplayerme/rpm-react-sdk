import React from "react"
import { FC } from "react"

interface ContainerProps {
    children: React.ReactNode
}

export const Container: FC<ContainerProps> = ({ children }: ContainerProps) => {
    return <div style={{ height: 700, width: 900, marginLeft: 'auto', marginRight: 'auto', borderRadius: 8, overflow: 'hidden' }}>{children}</div>
}
