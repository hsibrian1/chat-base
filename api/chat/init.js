import { StreamChat } from 'stream-chat'

export default async (req, res) => {
  const { userSender, userReceiver } = req.body
  try {
    const serverClient = StreamChat.getInstance(
      process.env.STREAM_CHAT_API_KEY,
      process.env.STREAM_CHAT_SECRET_KEY
    )
    console.log(
      process.env.STREAM_CHAT_API_KEY,
      process.env.STREAM_CHAT_SECRET_KEY
    )
    const token = serverClient.createToken(userSender)
    const response = await client.upsertUsers([
      {
        id: userSender,
        role: 'admin',
        mycustomfield: userSender
      },
      {
        id: userReceiver,
        role: 'receicer',
        mycustomfield: userReceiver
      }
    ])
    const channel = serverClient.channel(
      `${userSender}-To-${userReceiver}`, // type
      `${userSender}__${userReceiver}`, // Channel Id
      {
        name: 'Chat Base',
        created_by: { id: userSender }
      }
    )
    await channel.create()
    await channel.addMembers([userReceiver, userSender])
    res.json({ message: 'Success!' })
  } catch (e) {
    console.error(e)
    res.status(e.status || 500).json(e)
  }
}
