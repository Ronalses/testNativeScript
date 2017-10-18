import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { WebComponent } from './web/web.component'

const routes: Routes = [
    { path: "", redirectTo: "/web", pathMatch: "full" },
    { path: "web", component: WebComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }