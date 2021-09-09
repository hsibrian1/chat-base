import { StreamChat } from 'stream-chat'

export default async function init(req, res) {
  const { userSender, userReceiver } = req.body
  try {
    console.log(userSender, userReceiver)
    const serverClient = StreamChat.getInstance(
      "fpdx7ab5gr6x",
      "yrdtbb2cmcf42jad2b95vytnf9aym93dn3da3b9uuuqsg66hasundfseyc347dr5"
    )
    const token = serverClient.createToken(userSender)
    const response = await serverClient.upsertUsers([
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
    res.status(e.status || 500).json(e.message || 'Que pasa vale?')
  }
}
