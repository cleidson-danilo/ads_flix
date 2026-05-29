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
	searchOutline,
	searchSharp,
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
		IonContent,
		IonMenu,
	],
})
export class AppComponent {
	public appPages = [
		{ title: "Home", url: "/home", icon: "home" },
		{ title: "Buscar", url: "/buscar", icon: "search" },
	];

	constructor() {
		addIcons({ homeOutline, homeSharp, bookmarkOutline, bookmarkSharp, searchOutline, searchSharp });
	}
}
