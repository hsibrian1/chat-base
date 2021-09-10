import { Injectable } from '@angular/core'
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore'
import { BehaviorSubject, Observable } from 'rxjs'
import { Chat, Message, User } from '../models'
import { UserService } from './user.service'
import * as firebase from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class ChatsService {
  messages$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([])

  private urlAPI = 'https://chat-base-git-main-hsibrian1.vercel.app/api'
  constructor(
    private angularFirestore: AngularFirestore,
    private userService: UserService
  ) {}

  async add(currentUser: string, toUser: string): Promise<void> {
    const chatId = this.angularFirestore.createId()
    await this.angularFirestore
      .collection<Chat>('chats')
      .doc(chatId)
      .set({
        identification: chatId,
        users: {
          currentUser,
          toUser
        },
        messages: []
      })
    await this.angularFirestore
      .collection<User>('users')
      .doc(currentUser)
      .update({
        chats: firebase.default.firestore.FieldValue.arrayUnion({
          identifiaction: chatId,
          user: toUser
        })
      })
    await this.angularFirestore
      .collection<User>('users')
      .doc(currentUser)
      .update({
        chats: firebase.default.firestore.FieldValue.arrayUnion({
          identifiaction: chatId,
          user: currentUser
        })
      })
  }

  get(identification: string): Observable<Chat | undefined> {
    return this.angularFirestore
      .collection<Chat>('chats')
      .doc(identification)
      .valueChanges()
  }

  list(): Observable<DocumentChangeAction<Chat>[]> {
    return this.angularFirestore.collection<Chat>('chats').snapshotChanges()
  }

  async update(user: Chat): Promise<void> {
    await this.angularFirestore
      .collection<Chat>('chats')
      .doc(user.identification)
      .update(user)
  }

  async delete(identification: string): Promise<void> {
    await this.angularFirestore.collection('chats').doc(identification).delete()
  }

  async sendMessage(chatId: string, message: string) {
    const identification = this.angularFirestore.createId()
    return new Promise<void>((resolve, reject) => {
      this.get(chatId).subscribe(async (chat) => {
        console.log(chat)
        await this.angularFirestore
          .collection<Message>(`chats/${chatId}/messages`)
          .doc(identification)
          .set({
            message: message,
            identification: identification,
            sentAT: new Date()
          })
        resolve()
      })
    })
  }
}
