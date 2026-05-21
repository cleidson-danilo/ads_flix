import { Component, type OnInit } from "@angular/core";
import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonTitle,
	IonToolbar,
	IonSearchbar,
	IonCard,
	IonCardHeader,
	IonCardTitle,
	IonCardContent,
	IonList,
	IonItem,
	IonLabel,
} from "@ionic/angular/standalone";

@Component({
	selector: "app-home",
	templateUrl: "home.page.html",
	styleUrls: ["home.page.scss"],
	imports: [
		IonHeader,
		IonToolbar,
		IonButtons,
		IonMenuButton,
		IonTitle,
		IonContent,
		IonSearchbar,
		IonCard,
		IonCardHeader,
		IonCardTitle,
		IonCardContent,
		IonList,
		IonItem,
		IonLabel,
	],
})
export class HomePage implements OnInit {
	constructor() {
		// Home component initialized
	}

	ngOnInit() {}
}
