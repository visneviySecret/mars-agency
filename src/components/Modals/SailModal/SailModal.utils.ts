import * as yup from 'yup'
import {
  cleanObject,
  objectToString,
  convertToStringObject,
} from '@/utils/helpers/transformObject'

const defaultContacts = {
  name: '',
  phone: '',
}

export const defaultValues = {
  contacts: defaultContacts,
  objects: [],
  locations: [],
  area: [],
  time: [],
}

const shemaContacts = yup.object().shape({
  name: yup
    .string()
    .required('Это поле обязательно')
    .min(5, 'Минимум 5 символов'),
  phone: yup
    .string()
    .required('Это поле обязательно')
    .min(13, 'Минимум 9 символов'),
})

export const schema = yup
  .object()
  .shape({
    contacts: shemaContacts,
    objects: yup.array().of(yup.string()),
    locations: yup.array().of(yup.string()),
    area: yup.array().of(yup.string()),
    time: yup.array().of(yup.string()),
  })
  .required()

export const getFormattedData = (data: any) => {
  const result = convertToStringObject(data)
  const cleared = cleanObject(result)
  const translated = translateObjectKeys(cleared)
  console.log(translated)
  const array = objectToString(translated)
  return array
}

function translateObjectKeys(obj: { [key: string]: string }) {
  const result = {} as { [key: string]: string }
  Object.keys(obj).map((key) => {
    if (key === 'objects') result['Предложение на продажу'] = obj[key]
    if (key === 'locations') result['Выбранный район'] = obj[key]
    if (key === 'area') result['Площадь объекта, м²'] = obj[key]
    if (key === 'time') result['Сроки продажи'] = obj[key]
    if (key === 'name') result['Имя'] = obj[key]
    if (key === 'phone') result['Номер'] = obj[key]
  })

  return result
}
