import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { info_model } from "./info-model";

@Injectable(
    { providedIn: 'root' }
)

export class InfoService {
    private BaseUrl: string = "https://cyberseek-app-default-rtdb.firebaseio.com/"
    private endPoint: string = "info_card.json"

    constructor(private http: HttpClient) {
    }

    getInfo() {
        return this.http.get<info_model[]>(this.BaseUrl + this.endPoint);
    }
}