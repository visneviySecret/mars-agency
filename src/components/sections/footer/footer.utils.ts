import { Instagram } from '@/assets/Icons/instagram'
import { Telegram } from '@/assets/Icons/telegram'
import { Whatsup } from '@/assets/Icons/whatsup'
import { Contacts } from '@/utils/consts'

export const contacts = [
  { title: 'Место', name: 'Санкт-Петербург и Ленинградская область' },
  { title: 'Телефон', name: Contacts.phone, isPhone: true },
  { title: 'Почта', name: Contacts.email },
]

export const social = [
  { title: 'Telegram', url: '', img: Telegram },
  { title: 'Instagram', url: '', img: Instagram },
  { title: 'WhatsApp', url: '', img: Whatsup },
]
