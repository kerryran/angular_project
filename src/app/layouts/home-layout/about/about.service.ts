import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { about_model } from "./about_model";

@Injectable(
    { providedIn: 'root' }
)

export class AboutService {
    private BaseUrl: string = "https://cyberseek-app-default-rtdb.firebaseio.com/"
    private endPoint: string = "about_card.json"

    constructor(private http: HttpClient) {
    }

    getAbout() {
        return this.http.get<about_model[]>(this.BaseUrl + this.endPoint);
    }

    getOneAbout(index: number) {
        return this.http.get<about_model[]>(this.BaseUrl + "about_card" + "/" + index + ".json");
    }
}