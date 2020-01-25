import React from 'react'

export interface ButtonProps {
   text: string
   onClick: (e: React.MouseEvent) => void
   className: string
   textTypo: React.ElementType
   textClassName?: string
   disabled: boolean
   id?: string
}
