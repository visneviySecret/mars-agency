import axios from 'axios'

export const sendMessageToTelegram = async (text: string) => {
  const chat_id = process.env.NEXT_PUBLIC_CHAT_ID
  const token = process.env.NEXT_PUBLIC_BOT_TOKEN
  const uri_api = `https://api.telegram.org/bot${token}/sendMessage`

  try {
    axios.post(uri_api, { chat_id, parse_mode: 'html', text })
  } catch (e) {
    console.log('error: ', e)
  }
}
