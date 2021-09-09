import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { StreamChat, ChannelData, Message, User } from 'stream-chat'

@Injectable({
  providedIn: 'root'
})
export class ChatsService {
  messages$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([])
  title = 'angular-chat'
  channel!: ChannelData
  username = ''
  messages: Message[] = []
  newMessage = ''
  channelList!: ChannelData[]
  chatClient: any
  currentUser!: User
  private urlAPI = 'https://chat-base-ftzholxit-hsibrian1.vercel.app/api'
  constructor(private httpClient: HttpClient) {}

  async joinChat() {
    // const { username } = this
    // try {
    //   const response = await axios.post('http://localhost:5500/join', {
    //     username
    //   })
    //   const { token } = response.data
    //   const apiKey = response.data.api_key
    //   this.chatClient = StreamChat.getInstance(apiKey)
    //   this.currentUser = await this.chatClient.setUser(
    //     {
    //       id: username,
    //       name: username
    //     },
    //     token
    //   )
    //   const channel = this.chatClient.channel('chatbase', 'talkshop')
    //   await channel.watch()
    //   this.channel = channel
    //   this.messages = channel.state.messages
    //   this.channel.on('message.new', (event) => {
    //     this.messages = [...this.messages, event.message]
    //   })
    //   const filter = {
    //     type: 'team',
    //     members: { $in: [`${this.currentUser.me.id}`] }
    //   }
    //   const sort = { last_message_at: -1 }
    //   this.channelList = await this.chatClient.queryChannels(filter, sort, {
    //     watch: true,
    //     state: true
    //   })
    // } catch (err) {
    //   console.log(err)
    //   return
    // }
  }

  async sendMessage() {
    // if (this.newMessage.trim() === '') {
    //   return
    // }
    // try {
    //   await this.channel.sendMessage({
    //     text: this.newMessage
    //   })
    //   this.newMessage = ''
    // } catch (err) {
    //   console.log(err)
    // }
  }

  async connectUser(username: string, userToken: string): Promise<void> {
    const chatClient = StreamChat.getInstance(environment.chatStreamAPIKey)
    await chatClient.connectUser({
      id: username,
      name: `- -${username}- -`,
      image: 'https://getstream.io/random_svg/?name=John'
    }, userToken)
  }

  createChannel(): Observable<Object> {
    return this.httpClient.post<Object>(`api/chat/init`, {
      userSender: 'Hemny',
      userReceiver: 'Saul'
    })
  }

  sendMessageLocal(message: string): void {
    this.messages$.next([...this.messages$.getValue(), message])
  }
}
