import { Injectable } from "@angular/core";
import { about_model } from "./about_model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable(
    { providedIn: 'root' }
)

export class AboutService {
    private baseurl: string = "https://cyberseek-app-default-rtdb.firebaseio.com/"
    private aboutEndPoint = "about_card"

    constructor(private db: AngularFireDatabase) {
    }

    getAbout() {
        return this.db.list<about_model>("about_card").valueChanges();
    }

    addAbout(about: about_model) {
        this.db.list<about_model>("about_card").push(about)
    }
}