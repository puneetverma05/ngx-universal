// https://github.com/angular/angular/issues/15776#issuecomment-291862953
import { __decorate, __metadata, __param } from "tslib";
import { Injectable, Optional, RendererFactory2, ViewEncapsulation, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
let LinkService = class LinkService {
    constructor(rendererFactory, document) {
        this.rendererFactory = rendererFactory;
        this.document = document;
    }
    /**
     * Inject the State into the bottom of the <head>
     */
    addTag(tag, forceCreation) {
        try {
            const renderer = this.rendererFactory.createRenderer(this.document, {
                id: '-1',
                encapsulation: ViewEncapsulation.None,
                styles: [],
                data: {}
            });
            const link = renderer.createElement('link');
            const head = this.document.head;
            const selector = this._parseSelector(tag);
            if (head === null) {
                throw new Error('<head> not found within DOCUMENT.');
            }
            Object.keys(tag).forEach((prop) => {
                return renderer.setAttribute(link, prop, tag[prop]);
            });
            // [TODO]: get them to update the existing one (if it exists) ?
            renderer.appendChild(head, link);
        }
        catch (e) {
            console.error('Error within linkService : ', e);
        }
    }
    _parseSelector(tag) {
        // Possibly re-work this
        const attr = tag.rel ? 'rel' : 'hreflang';
        return `${attr}="${tag[attr]}"`;
    }
};
LinkService.ctorParameters = () => [
    { type: RendererFactory2 },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
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
export { LinkService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdvcm5pdi9uZ3gtdW5pdmVyc2FsLyIsInNvdXJjZXMiOlsibGluay9saW5rLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUVBQXlFOztBQUV6RSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBYzNDLElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVc7SUFFcEIsWUFDWSxlQUFpQyxFQUNmLFFBQVE7UUFEMUIsb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBQ2YsYUFBUSxHQUFSLFFBQVEsQ0FBQTtJQUV0QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNLENBQUMsR0FBbUIsRUFBRSxhQUF1QjtRQUUvQyxJQUFJO1lBQ0EsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDaEUsRUFBRSxFQUFFLElBQUk7Z0JBQ1IsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLE1BQU0sRUFBRSxFQUFFO2dCQUNWLElBQUksRUFBRSxFQUFFO2FBQ1gsQ0FBQyxDQUFDO1lBRUgsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNoQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTFDLElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtnQkFDZixNQUFNLElBQUksS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7YUFDeEQ7WUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQVksRUFBRSxFQUFFO2dCQUN0QyxPQUFPLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN4RCxDQUFDLENBQUMsQ0FBQztZQUVILCtEQUErRDtZQUMvRCxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUVwQztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1IsT0FBTyxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNuRDtJQUNMLENBQUM7SUFFTyxjQUFjLENBQUMsR0FBbUI7UUFDdEMsd0JBQXdCO1FBQ3hCLE1BQU0sSUFBSSxHQUFXLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQ2xELE9BQU8sR0FBRyxJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEMsQ0FBQztDQUNKLENBQUE7O1lBM0NnQyxnQkFBZ0I7NENBQ3hDLE1BQU0sU0FBQyxRQUFROztBQUpYLFdBQVc7SUFadkIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztJQUNGOzs7Ozs7T0FNRzs7SUFFRixVQUFVLEVBQUU7SUFLSixXQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtxQ0FEUSxnQkFBZ0I7R0FIcEMsV0FBVyxDQThDdkI7U0E5Q1ksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE1Nzc2I2lzc3VlY29tbWVudC0yOTE4NjI5NTNcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIFJlbmRlcmVyRmFjdG9yeTIsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG4vKiBcbiAqIC0tIExpbmtTZXJ2aWNlIC0tICAgICAgICBbVGVtcG9yYXJ5XVxuICogQE1hcmtQaWVzemFrXG4gKiBcbiAqIFNpbWlsYXIgdG8gTWV0YSBzZXJ2aWNlIGJ1dCBtYWRlIHRvIGhhbmRsZSA8bGluaz4gY3JlYXRpb24gZm9yIFNFTyBwdXJwb3Nlc1xuICogLS0gTk9URTogU29vbiB0aGVyZSB3aWxsIGJlIGFuIG92ZXJhbGwgRG9jdW1lbnRTZXJ2aWNlIHdpdGhpbiBBbmd1bGFyIHRoYXQgaGFuZGxlcyBNZXRhL0xpbmsgZXZlcnl0aGluZ1xuICovXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMaW5rU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXG4gICAgICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnRcbiAgICApIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmplY3QgdGhlIFN0YXRlIGludG8gdGhlIGJvdHRvbSBvZiB0aGUgPGhlYWQ+XG4gICAgICovXG4gICAgYWRkVGFnKHRhZzogTGlua0RlZmluaXRpb24sIGZvcmNlQ3JlYXRpb24/OiBib29sZWFuKSB7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpcy5yZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIodGhpcy5kb2N1bWVudCwge1xuICAgICAgICAgICAgICAgIGlkOiAnLTEnLFxuICAgICAgICAgICAgICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgICAgICAgICAgICAgc3R5bGVzOiBbXSxcbiAgICAgICAgICAgICAgICBkYXRhOiB7fVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSByZW5kZXJlci5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgICAgICBjb25zdCBoZWFkID0gdGhpcy5kb2N1bWVudC5oZWFkO1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSB0aGlzLl9wYXJzZVNlbGVjdG9yKHRhZyk7XG5cbiAgICAgICAgICAgIGlmIChoZWFkID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCc8aGVhZD4gbm90IGZvdW5kIHdpdGhpbiBET0NVTUVOVC4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgT2JqZWN0LmtleXModGFnKS5mb3JFYWNoKChwcm9wOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyZXIuc2V0QXR0cmlidXRlKGxpbmssIHByb3AsIHRhZ1twcm9wXSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gW1RPRE9dOiBnZXQgdGhlbSB0byB1cGRhdGUgdGhlIGV4aXN0aW5nIG9uZSAoaWYgaXQgZXhpc3RzKSA/XG4gICAgICAgICAgICByZW5kZXJlci5hcHBlbmRDaGlsZChoZWFkLCBsaW5rKTtcblxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB3aXRoaW4gbGlua1NlcnZpY2UgOiAnLCBlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3BhcnNlU2VsZWN0b3IodGFnOiBMaW5rRGVmaW5pdGlvbik6IHN0cmluZyB7XG4gICAgICAgIC8vIFBvc3NpYmx5IHJlLXdvcmsgdGhpc1xuICAgICAgICBjb25zdCBhdHRyOiBzdHJpbmcgPSB0YWcucmVsID8gJ3JlbCcgOiAnaHJlZmxhbmcnO1xuICAgICAgICByZXR1cm4gYCR7YXR0cn09XCIke3RhZ1thdHRyXX1cImA7XG4gICAgfVxufVxuXG5leHBvcnQgZGVjbGFyZSB0eXBlIExpbmtEZWZpbml0aW9uID0ge1xuICAgIGNoYXJzZXQ/OiBzdHJpbmc7XG4gICAgY3Jvc3NvcmlnaW4/OiBzdHJpbmc7XG4gICAgaHJlZj86IHN0cmluZztcbiAgICBocmVmbGFuZz86IHN0cmluZztcbiAgICBtZWRpYT86IHN0cmluZztcbiAgICByZWw/OiBzdHJpbmc7XG4gICAgcmV2Pzogc3RyaW5nO1xuICAgIHNpemVzPzogc3RyaW5nO1xuICAgIHRhcmdldD86IHN0cmluZztcbiAgICB0eXBlPzogc3RyaW5nO1xufSAmIHtcbiAgICAgICAgW3Byb3A6IHN0cmluZ106IHN0cmluZztcbiAgICB9OyJdfQ==