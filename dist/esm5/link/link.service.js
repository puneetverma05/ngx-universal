// https://github.com/angular/angular/issues/15776#issuecomment-291862953
import { __decorate, __metadata, __param } from "tslib";
import { Injectable, Optional, RendererFactory2, ViewEncapsulation, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
var LinkService = /** @class */ (function () {
    function LinkService(rendererFactory, document) {
        this.rendererFactory = rendererFactory;
        this.document = document;
    }
    /**
     * Inject the State into the bottom of the <head>
     */
    LinkService.prototype.addTag = function (tag, forceCreation) {
        try {
            var renderer_1 = this.rendererFactory.createRenderer(this.document, {
                id: '-1',
                encapsulation: ViewEncapsulation.None,
                styles: [],
                data: {}
            });
            var link_1 = renderer_1.createElement('link');
            var head = this.document.head;
            var selector = this._parseSelector(tag);
            if (head === null) {
                throw new Error('<head> not found within DOCUMENT.');
            }
            Object.keys(tag).forEach(function (prop) {
                return renderer_1.setAttribute(link_1, prop, tag[prop]);
            });
            // [TODO]: get them to update the existing one (if it exists) ?
            renderer_1.appendChild(head, link_1);
        }
        catch (e) {
            console.error('Error within linkService : ', e);
        }
    };
    LinkService.prototype._parseSelector = function (tag) {
        // Possibly re-work this
        var attr = tag.rel ? 'rel' : 'hreflang';
        return attr + "=\"" + tag[attr] + "\"";
    };
    LinkService.ctorParameters = function () { return [
        { type: RendererFactory2 },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    LinkService = __decorate([
        Injectable({
            providedIn: 'root'
        })
        /*
         * -- LinkService --        [Temporary]
         * @MarkPieszak
         *
         * Similar to Meta service but made to handle <link> creation for SEO purposes
         * -- NOTE: Soon there will be an overall DocumentService within Angular that handles Meta/Link everything
         */
        ,
        Injectable(),
        __param(1, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [RendererFactory2, Object])
    ], LinkService);
    return LinkService;
}());
export { LinkService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdvcm5pdi9uZ3gtdW5pdmVyc2FsLyIsInNvdXJjZXMiOlsibGluay9saW5rLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUVBQXlFOztBQUV6RSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBYzNDO0lBRUkscUJBQ1ksZUFBaUMsRUFDZixRQUFRO1FBRDFCLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUNmLGFBQVEsR0FBUixRQUFRLENBQUE7SUFFdEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsNEJBQU0sR0FBTixVQUFPLEdBQW1CLEVBQUUsYUFBdUI7UUFFL0MsSUFBSTtZQUNBLElBQU0sVUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2hFLEVBQUUsRUFBRSxJQUFJO2dCQUNSLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxNQUFNLEVBQUUsRUFBRTtnQkFDVixJQUFJLEVBQUUsRUFBRTthQUNYLENBQUMsQ0FBQztZQUVILElBQU0sTUFBSSxHQUFHLFVBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDaEMsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUUxQyxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7Z0JBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO2FBQ3hEO1lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFZO2dCQUNsQyxPQUFPLFVBQVEsQ0FBQyxZQUFZLENBQUMsTUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN4RCxDQUFDLENBQUMsQ0FBQztZQUVILCtEQUErRDtZQUMvRCxVQUFRLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxNQUFJLENBQUMsQ0FBQztTQUVwQztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1IsT0FBTyxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNuRDtJQUNMLENBQUM7SUFFTyxvQ0FBYyxHQUF0QixVQUF1QixHQUFtQjtRQUN0Qyx3QkFBd0I7UUFDeEIsSUFBTSxJQUFJLEdBQVcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDbEQsT0FBVSxJQUFJLFdBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFHLENBQUM7SUFDcEMsQ0FBQzs7Z0JBMUM0QixnQkFBZ0I7Z0RBQ3hDLE1BQU0sU0FBQyxRQUFROztJQUpYLFdBQVc7UUFadkIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztRQUNGOzs7Ozs7V0FNRzs7UUFFRixVQUFVLEVBQUU7UUFLSixXQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTt5Q0FEUSxnQkFBZ0I7T0FIcEMsV0FBVyxDQThDdkI7SUFBRCxrQkFBQztDQUFBLEFBOUNELElBOENDO1NBOUNZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xNTc3NiNpc3N1ZWNvbW1lbnQtMjkxODYyOTUzXG5cbmltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBSZW5kZXJlckZhY3RvcnkyLCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuLyogXG4gKiAtLSBMaW5rU2VydmljZSAtLSAgICAgICAgW1RlbXBvcmFyeV1cbiAqIEBNYXJrUGllc3pha1xuICogXG4gKiBTaW1pbGFyIHRvIE1ldGEgc2VydmljZSBidXQgbWFkZSB0byBoYW5kbGUgPGxpbms+IGNyZWF0aW9uIGZvciBTRU8gcHVycG9zZXNcbiAqIC0tIE5PVEU6IFNvb24gdGhlcmUgd2lsbCBiZSBhbiBvdmVyYWxsIERvY3VtZW50U2VydmljZSB3aXRoaW4gQW5ndWxhciB0aGF0IGhhbmRsZXMgTWV0YS9MaW5rIGV2ZXJ5dGhpbmdcbiAqL1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGlua1NlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxuICAgICAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50XG4gICAgKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZWN0IHRoZSBTdGF0ZSBpbnRvIHRoZSBib3R0b20gb2YgdGhlIDxoZWFkPlxuICAgICAqL1xuICAgIGFkZFRhZyh0YWc6IExpbmtEZWZpbml0aW9uLCBmb3JjZUNyZWF0aW9uPzogYm9vbGVhbikge1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZW5kZXJlciA9IHRoaXMucmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKHRoaXMuZG9jdW1lbnQsIHtcbiAgICAgICAgICAgICAgICBpZDogJy0xJyxcbiAgICAgICAgICAgICAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgICAgICAgICAgICAgIHN0eWxlczogW10sXG4gICAgICAgICAgICAgICAgZGF0YToge31cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBsaW5rID0gcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICAgICAgY29uc3QgaGVhZCA9IHRoaXMuZG9jdW1lbnQuaGVhZDtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yID0gdGhpcy5fcGFyc2VTZWxlY3Rvcih0YWcpO1xuXG4gICAgICAgICAgICBpZiAoaGVhZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignPGhlYWQ+IG5vdCBmb3VuZCB3aXRoaW4gRE9DVU1FTlQuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRhZykuZm9yRWFjaCgocHJvcDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcmVyLnNldEF0dHJpYnV0ZShsaW5rLCBwcm9wLCB0YWdbcHJvcF0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFtUT0RPXTogZ2V0IHRoZW0gdG8gdXBkYXRlIHRoZSBleGlzdGluZyBvbmUgKGlmIGl0IGV4aXN0cykgP1xuICAgICAgICAgICAgcmVuZGVyZXIuYXBwZW5kQ2hpbGQoaGVhZCwgbGluayk7XG5cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igd2l0aGluIGxpbmtTZXJ2aWNlIDogJywgZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9wYXJzZVNlbGVjdG9yKHRhZzogTGlua0RlZmluaXRpb24pOiBzdHJpbmcge1xuICAgICAgICAvLyBQb3NzaWJseSByZS13b3JrIHRoaXNcbiAgICAgICAgY29uc3QgYXR0cjogc3RyaW5nID0gdGFnLnJlbCA/ICdyZWwnIDogJ2hyZWZsYW5nJztcbiAgICAgICAgcmV0dXJuIGAke2F0dHJ9PVwiJHt0YWdbYXR0cl19XCJgO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlY2xhcmUgdHlwZSBMaW5rRGVmaW5pdGlvbiA9IHtcbiAgICBjaGFyc2V0Pzogc3RyaW5nO1xuICAgIGNyb3Nzb3JpZ2luPzogc3RyaW5nO1xuICAgIGhyZWY/OiBzdHJpbmc7XG4gICAgaHJlZmxhbmc/OiBzdHJpbmc7XG4gICAgbWVkaWE/OiBzdHJpbmc7XG4gICAgcmVsPzogc3RyaW5nO1xuICAgIHJldj86IHN0cmluZztcbiAgICBzaXplcz86IHN0cmluZztcbiAgICB0YXJnZXQ/OiBzdHJpbmc7XG4gICAgdHlwZT86IHN0cmluZztcbn0gJiB7XG4gICAgICAgIFtwcm9wOiBzdHJpbmddOiBzdHJpbmc7XG4gICAgfTsiXX0=