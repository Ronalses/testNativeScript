import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { WebView, LoadEventData } from "ui/web-view";
import { Page } from "ui/page";
import { TextField } from "ui/text-field";
import { Label } from "ui/label";


@Component({
    selector: "osd-web",
    moduleId: module.id,
    templateUrl: "./web.component.html",
})
export class WebComponent implements AfterViewInit {
    public webViewSrc: string = 'https://openseadragon.github.io/';

    @ViewChild("myWebView") webViewRef: ElementRef;
    @ViewChild("urlField") urlFieldRef: ElementRef;
    @ViewChild("labelResult") labelResultRef: ElementRef;

    ngAfterViewInit() {
        let webview: WebView = this.webViewRef.nativeElement;
        let label: Label = this.labelResultRef.nativeElement;
        label.text = "WebView is still loading...";

        webview.on(WebView.loadFinishedEvent, function (args: LoadEventData) {
            let message;
            if (!args.error) {
                message = "WebView finished loading of " + args.url;
            } else {
                message = "Error loading " + args.url + ": " + args.error;
            }

            label.text = message;
            console.log("WebView message - " + message);
        });
    }
}