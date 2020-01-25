export interface ValidationResponseType {
   errorMessage: string
   shouldShowError: boolean
}

export interface InputProps {
   onChange?: (event: any) => void
   containerClassName?: string
   value?: string
   validate?: () => ValidationResponseType
   shouldValidateOnBlur?: boolean
   [x: string]: any
}
