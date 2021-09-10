import { Injectable } from '@angular/core'
import {
  AngularFireList,
  AngularFireObject
} from '@angular/fire/database'
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore'
import { Observable } from 'rxjs'
import { User } from '../models'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private angularFirestore: AngularFirestore) {}

  /**
   * add new user
   * @param user
   */
  async add(user: User): Promise<void> {
    await this.angularFirestore
    .collection<User>("users")
    .add(user)
  }

  /**
   * get user by id name and password
   * @param identification
   */
  get(identification: string): Observable<User | undefined> {
    return this.angularFirestore
    .collection<User>('users')
    .doc(identification)
    .valueChanges()
  }

  list(): Observable<DocumentChangeAction<User>[]> {
    return this.angularFirestore
    .collection<User>("users")
    .snapshotChanges();
  }

  async update(user: User): Promise<void> {
    await this.angularFirestore
      .collection<User>("users")
      .doc(user.identification)
      .update(user);
  }

  async delete(identification: string): Promise<void> {
    await this.angularFirestore
      .collection("users")
      .doc(identification)
      .delete();
  }
}
