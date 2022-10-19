import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { pt_card_model } from "./3pt-card-model";

@Injectable(
    { providedIn: 'root' }
)

export class PtCardService {
    private BaseUrl: string = "https://cyberseek-app-default-rtdb.firebaseio.com/"
    private endPoint: string = "pt_card.json"

    constructor(private http: HttpClient) {
    }

    getPtCard() {
        return this.http.get<pt_card_model[]>(this.BaseUrl + this.endPoint);
    }

    getOnePtCard(index: number) {
        return this.http.get<pt_card_model[]>(this.BaseUrl + "pt_card" + "/" + index + ".json");
    }
}