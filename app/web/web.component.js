"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var web_view_1 = require("ui/web-view");
var WebComponent = (function () {
    function WebComponent() {
        this.webViewSrc = 'https://openseadragon.github.io/';
    }
    WebComponent.prototype.ngAfterViewInit = function () {
        var webview = this.webViewRef.nativeElement;
        var label = this.labelResultRef.nativeElement;
        label.text = "WebView is still loading...";
        webview.on(web_view_1.WebView.loadFinishedEvent, function (args) {
            var message;
            if (!args.error) {
                message = "WebView finished loading of " + args.url;
            }
            else {
                message = "Error loading " + args.url + ": " + args.error;
            }
            label.text = message;
            console.log("WebView message - " + message);
        });
    };
    __decorate([
        core_1.ViewChild("myWebView"),
        __metadata("design:type", core_1.ElementRef)
    ], WebComponent.prototype, "webViewRef", void 0);
    __decorate([
        core_1.ViewChild("urlField"),
        __metadata("design:type", core_1.ElementRef)
    ], WebComponent.prototype, "urlFieldRef", void 0);
    __decorate([
        core_1.ViewChild("labelResult"),
        __metadata("design:type", core_1.ElementRef)
    ], WebComponent.prototype, "labelResultRef", void 0);
    WebComponent = __decorate([
        core_1.Component({
            selector: "osd-web",
            moduleId: module.id,
            templateUrl: "./web.component.html",
        })
    ], WebComponent);
    return WebComponent;
}());
exports.WebComponent = WebComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0Y7QUFDeEYsd0NBQXFEO0FBV3JEO0lBTEE7UUFNVyxlQUFVLEdBQVcsa0NBQWtDLENBQUM7SUF1Qm5FLENBQUM7SUFqQkcsc0NBQWUsR0FBZjtRQUNJLElBQUksT0FBTyxHQUFZLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ3JELElBQUksS0FBSyxHQUFVLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDO1FBQ3JELEtBQUssQ0FBQyxJQUFJLEdBQUcsNkJBQTZCLENBQUM7UUFFM0MsT0FBTyxDQUFDLEVBQUUsQ0FBQyxrQkFBTyxDQUFDLGlCQUFpQixFQUFFLFVBQVUsSUFBbUI7WUFDL0QsSUFBSSxPQUFPLENBQUM7WUFDWixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNkLE9BQU8sR0FBRyw4QkFBOEIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3hELENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixPQUFPLEdBQUcsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUM5RCxDQUFDO1lBRUQsS0FBSyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxPQUFPLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFwQnVCO1FBQXZCLGdCQUFTLENBQUMsV0FBVyxDQUFDO2tDQUFhLGlCQUFVO29EQUFDO0lBQ3hCO1FBQXRCLGdCQUFTLENBQUMsVUFBVSxDQUFDO2tDQUFjLGlCQUFVO3FEQUFDO0lBQ3JCO1FBQXpCLGdCQUFTLENBQUMsYUFBYSxDQUFDO2tDQUFpQixpQkFBVTt3REFBQztJQUw1QyxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHNCQUFzQjtTQUN0QyxDQUFDO09BQ1csWUFBWSxDQXdCeEI7SUFBRCxtQkFBQztDQUFBLEFBeEJELElBd0JDO0FBeEJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBXZWJWaWV3LCBMb2FkRXZlbnREYXRhIH0gZnJvbSBcInVpL3dlYi12aWV3XCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJ1aS9sYWJlbFwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm9zZC13ZWJcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vd2ViLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIFdlYkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICAgIHB1YmxpYyB3ZWJWaWV3U3JjOiBzdHJpbmcgPSAnaHR0cHM6Ly9vcGVuc2VhZHJhZ29uLmdpdGh1Yi5pby8nO1xuXG4gICAgQFZpZXdDaGlsZChcIm15V2ViVmlld1wiKSB3ZWJWaWV3UmVmOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJ1cmxGaWVsZFwiKSB1cmxGaWVsZFJlZjogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwibGFiZWxSZXN1bHRcIikgbGFiZWxSZXN1bHRSZWY6IEVsZW1lbnRSZWY7XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGxldCB3ZWJ2aWV3OiBXZWJWaWV3ID0gdGhpcy53ZWJWaWV3UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGxldCBsYWJlbDogTGFiZWwgPSB0aGlzLmxhYmVsUmVzdWx0UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGxhYmVsLnRleHQgPSBcIldlYlZpZXcgaXMgc3RpbGwgbG9hZGluZy4uLlwiO1xuXG4gICAgICAgIHdlYnZpZXcub24oV2ViVmlldy5sb2FkRmluaXNoZWRFdmVudCwgZnVuY3Rpb24gKGFyZ3M6IExvYWRFdmVudERhdGEpIHtcbiAgICAgICAgICAgIGxldCBtZXNzYWdlO1xuICAgICAgICAgICAgaWYgKCFhcmdzLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiV2ViVmlldyBmaW5pc2hlZCBsb2FkaW5nIG9mIFwiICsgYXJncy51cmw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkVycm9yIGxvYWRpbmcgXCIgKyBhcmdzLnVybCArIFwiOiBcIiArIGFyZ3MuZXJyb3I7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxhYmVsLnRleHQgPSBtZXNzYWdlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJXZWJWaWV3IG1lc3NhZ2UgLSBcIiArIG1lc3NhZ2UpO1xuICAgICAgICB9KTtcbiAgICB9XG59Il19