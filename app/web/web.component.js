"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var web_view_1 = require("ui/web-view");
var nativescript_webview_interface_1 = require("nativescript-webview-interface");
var WebComponent = (function () {
    function WebComponent() {
        this.loadedHtml = false;
    }
    WebComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.webViewInterface = new nativescript_webview_interface_1.WebViewInterface(this.htmlWebView, '~/www/index.html');
        this.htmlWebView.on(web_view_1.WebView.loadFinishedEvent, function () {
            _this.loadedHtml = true;
        });
    };
    Object.defineProperty(WebComponent.prototype, "htmlWebView", {
        get: function () {
            return this.htmlWebViewRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.ViewChild('web'),
        __metadata("design:type", core_1.ElementRef)
    ], WebComponent.prototype, "htmlWebViewRef", void 0);
    WebComponent = __decorate([
        core_1.Component({
            selector: "osd-web",
            moduleId: module.id,
            template: "<WebView #web></WebView>"
        })
    ], WebComponent);
    return WebComponent;
}());
exports.WebComponent = WebComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0Y7QUFDeEYsd0NBQXFEO0FBS3JELGlGQUFrRTtBQVFsRTtJQUxBO1FBUVksZUFBVSxHQUFZLEtBQUssQ0FBQztJQWlCeEMsQ0FBQztJQVpHLCtCQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLGlEQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQ3pELGtCQUFrQixDQUFDLENBQUM7UUFFeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsa0JBQU8sQ0FBQyxpQkFBaUIsRUFBRTtZQUMzQyxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQTtRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQkFBWSxxQ0FBVzthQUF2QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQztRQUM3QyxDQUFDOzs7T0FBQTtJQWJEO1FBREMsZ0JBQVMsQ0FBQyxLQUFLLENBQUM7a0NBQ0QsaUJBQVU7d0RBQUM7SUFObEIsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSwwQkFBMEI7U0FDdkMsQ0FBQztPQUNXLFlBQVksQ0FvQnhCO0lBQUQsbUJBQUM7Q0FBQSxBQXBCRCxJQW9CQztBQXBCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgV2ViVmlldywgTG9hZEV2ZW50RGF0YSB9IGZyb20gXCJ1aS93ZWItdmlld1wiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwidWkvbGFiZWxcIjtcblxuaW1wb3J0IHsgV2ViVmlld0ludGVyZmFjZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC13ZWJ2aWV3LWludGVyZmFjZSc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwib3NkLXdlYlwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGU6IFwiPFdlYlZpZXcgI3dlYj48L1dlYlZpZXc+XCJcbn0pXG5leHBvcnQgY2xhc3MgV2ViQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHByaXZhdGUgd2ViVmlld0ludGVyZmFjZTogV2ViVmlld0ludGVyZmFjZTtcbiAgICBwcml2YXRlIGxvYWRlZEh0bWw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBWaWV3Q2hpbGQoJ3dlYicpXG4gICAgaHRtbFdlYlZpZXdSZWY6IEVsZW1lbnRSZWY7XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy53ZWJWaWV3SW50ZXJmYWNlID0gbmV3IFdlYlZpZXdJbnRlcmZhY2UodGhpcy5odG1sV2ViVmlldyxcbiAgICAgICAgICAgICd+L3d3dy9pbmRleC5odG1sJyk7XG5cbiAgICAgICAgdGhpcy5odG1sV2ViVmlldy5vbihXZWJWaWV3LmxvYWRGaW5pc2hlZEV2ZW50LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRlZEh0bWwgPSB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IGh0bWxXZWJWaWV3KCk6IFdlYlZpZXcge1xuICAgICAgICByZXR1cm4gdGhpcy5odG1sV2ViVmlld1JlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cbn0iXX0=