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
  locations: string[]
  area: string[]
  time: string[]
}

export interface FieldProps {
  name: 'objects' | 'locations' | 'area' | 'time' | 'contacts'
  control: Control<FormValues>
}
