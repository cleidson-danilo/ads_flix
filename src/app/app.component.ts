import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import {
	IonApp,
	IonContent,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonListHeader,
	IonMenu,
	IonMenuToggle,
	IonNote,
	IonRouterLink,
	IonRouterOutlet,
	IonSplitPane,
} from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import {
	bookmarkOutline,
	bookmarkSharp,
	homeOutline,
	homeSharp,
} from "ionicons/icons";

@Component({
	selector: "app-root",
	templateUrl: "app.component.html",
	styleUrls: ["app.component.scss"],
	imports: [
		RouterLink,
		RouterLinkActive,
		IonApp,
		IonSplitPane,
		IonMenu,
		IonContent,
		IonList,
		IonListHeader,
		IonNote,
		IonMenuToggle,
		IonItem,
		IonIcon,
		IonLabel,
		IonRouterLink,
		IonRouterOutlet,
	],
})
export class AppComponent {
	public appPages = [{ title: "Home", url: "/home", icon: "home" }];

	constructor() {
		addIcons({ homeOutline, homeSharp, bookmarkOutline, bookmarkSharp });
	}
}
