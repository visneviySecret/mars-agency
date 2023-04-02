import { Control } from 'react-hook-form'

export interface ModalProps {
  isActive: boolean
  onClose: () => void
}

export type FormContacts = {
  name: string
  phone: string
}

export type FormValues = {
  contacts: FormContacts
  objects: string[]
  areas: string[]
  preferences: string[]
  cost: string[]
}

export interface FieldProps {
  name: 'objects' | 'areas' | 'preferences' | 'cost' | 'contacts'
  control: Control<FormValues>
}
