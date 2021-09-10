import * as firebase from 'firebase/app';
export interface User {
  identification?: string
  username: string
  chats: firebase.default.firestore.FieldValue
}

export interface Message {
  identification?: string
  message: string
  sentAT: Date
}

export interface Chat {
  identification?: string
  users: {
    [key: string]: string
  }
  messages: Message[]
}
