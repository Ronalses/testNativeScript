import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { WebView, LoadEventData } from "ui/web-view";
import { Page } from "ui/page";
import { TextField } from "ui/text-field";
import { Label } from "ui/label";

import { WebViewInterface } from 'nativescript-webview-interface';


@Component({
    selector: "osd-web",
    moduleId: module.id,
    template: "<WebView #web></WebView>"
})
export class WebComponent implements OnInit {

    private webViewInterface: WebViewInterface;
    private loadedHtml: boolean = false

    @ViewChild('web')
    htmlWebViewRef: ElementRef;

    ngOnInit(): void {
        this.webViewInterface = new WebViewInterface(this.htmlWebView,
            '~/www/osd/demo.html');

        this.htmlWebView.on(WebView.loadFinishedEvent, () => {
            this.loadedHtml = true
        });
    }

    private get htmlWebView(): WebView {
        return this.htmlWebViewRef.nativeElement;
    }
}