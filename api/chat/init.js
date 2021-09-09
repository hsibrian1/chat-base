import { StreamChat } from 'stream-chat'

export default function init (req, res) {
  try {
    const serverSideClient = StreamChat.getInstance(process.env.STREAM_CHAT_API_KEY, process.env.STREAM_CHAT_SECRET_KEY)
    console.info(process.env.STREAM_CHAT_API_KEY)
    res.json({ message: 'Hello Word' })
  } catch (e) {
    console.error(e)
    res.status(e.status || 500).json(e)
  }
}