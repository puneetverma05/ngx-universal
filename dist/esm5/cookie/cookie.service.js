import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { CookieOptionsProvider } from './cookie-options-provider';
import { isBlank, isString, mergeOptions, safeDecodeURIComponent, safeJsonParse } from './utils';
var CookieService = /** @class */ (function () {
    function CookieService(_optionsProvider) {
        this._optionsProvider = _optionsProvider;
        this.options = this._optionsProvider.options;
    }
    Object.defineProperty(CookieService.prototype, "cookieString", {
        get: function () {
            return document.cookie || '';
        },
        set: function (val) {
            document.cookie = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @name CookieService#get
     *
     * @description
     * Returns the value of given cookie key.
     *
     * @param key Id to use for lookup.
     * @returns Raw cookie value.
     */
    CookieService.prototype.get = function (key) {
        return this._cookieReader()[key];
    };
    /**
     * @name CookieService#getObject
     *
     * @description
     * Returns the deserialized value of given cookie key.
     *
     * @param key Id to use for lookup.
     * @returns Deserialized cookie value.
     */
    CookieService.prototype.getObject = function (key) {
        var value = this.get(key);
        return value ? safeJsonParse(value) : value;
    };
    /**
     * @name CookieService#getAll
     *
     * @description
     * Returns a key value object with all the cookies.
     *
     * @returns All cookies
     */
    CookieService.prototype.getAll = function () {
        return this._cookieReader();
    };
    /**
     * @name CookieService#put
     *
     * @description
     * Sets a value for given cookie key.
     *
     * @param key Id for the `value`.
     * @param value Raw value to be stored.
     * @param options (Optional) Options object.
     */
    CookieService.prototype.put = function (key, value, options) {
        this._cookieWriter()(key, value, options);
    };
    /**
     * @name CookieService#putObject
     *
     * @description
     * Serializes and sets a value for given cookie key.
     *
     * @param key Id for the `value`.
     * @param value Value to be stored.
     * @param options (Optional) Options object.
     */
    CookieService.prototype.putObject = function (key, value, options) {
        this.put(key, JSON.stringify(value), options);
    };
    /**
     * @name CookieService#remove
     *
     * @description
     * Remove given cookie.
     *
     * @param key Id of the key-value pair to delete.
     * @param options (Optional) Options object.
     */
    CookieService.prototype.remove = function (key, options) {
        this._cookieWriter()(key, undefined, options);
    };
    /**
     * @name CookieService#removeAll
     *
     * @description
     * Remove all cookies.
     */
    CookieService.prototype.removeAll = function (options) {
        var _this = this;
        var cookies = this.getAll();
        Object.keys(cookies).forEach(function (key) {
            _this.remove(key, options);
        });
    };
    CookieService.prototype._cookieReader = function () {
        var lastCookies = {};
        var lastCookieString = '';
        var cookieArray, cookie, i, index, name;
        var currentCookieString = this.cookieString;
        if (currentCookieString !== lastCookieString) {
            lastCookieString = currentCookieString;
            cookieArray = lastCookieString.split('; ');
            lastCookies = {};
            for (i = 0; i < cookieArray.length; i++) {
                cookie = cookieArray[i];
                index = cookie.indexOf('=');
                if (index > 0) { // ignore nameless cookies
                    name = safeDecodeURIComponent(cookie.substring(0, index));
                    // the first value that is seen for a cookie is the most
                    // specific one.  values for the same cookie name that
                    // follow are for less specific paths.
                    if (isBlank(lastCookies[name])) {
                        lastCookies[name] = safeDecodeURIComponent(cookie.substring(index + 1));
                    }
                }
            }
        }
        return lastCookies;
    };
    CookieService.prototype._cookieWriter = function () {
        var that = this;
        return function (name, value, options) {
            that.cookieString = that._buildCookieString(name, value, options);
        };
    };
    CookieService.prototype._buildCookieString = function (name, value, options) {
        var opts = mergeOptions(this.options, options);
        var expires = opts.expires;
        if (isBlank(value)) {
            expires = 'Thu, 01 Jan 1970 00:00:00 GMT';
            value = '';
        }
        if (isString(expires)) {
            expires = new Date(expires);
        }
        var cookieValue = opts.storeUnencoded ? value : encodeURIComponent(value);
        var str = encodeURIComponent(name) + '=' + cookieValue;
        str += opts.path ? ';path=' + opts.path : '';
        str += opts.domain ? ';domain=' + opts.domain : '';
        str += expires ? ';expires=' + expires.toUTCString() : '';
        str += opts.sameSite ? ';sameSite=' + opts.sameSite : '';
        str += opts.secure ? ';secure' : '';
        str += opts.httpOnly ? '; HttpOnly' : '';
        // per http://www.ietf.org/rfc/rfc2109.txt browser must allow at minimum:
        // - 300 cookies
        // - 20 cookies per unique domain
        // - 4096 bytes per cookie
        var cookieLength = str.length + 1;
        if (cookieLength > 4096) {
            console.log("Cookie '" + name + "' possibly not set or overflowed because it was too large (" + cookieLength + " > 4096 bytes)!");
        }
        return str;
    };
    CookieService.ctorParameters = function () { return [
        { type: CookieOptionsProvider }
    ]; };
    CookieService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [CookieOptionsProvider])
    ], CookieService);
    return CookieService;
}());
export { CookieService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2llLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ29ybml2L25neC11bml2ZXJzYWwvIiwic291cmNlcyI6WyJjb29raWUvY29va2llLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFbEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLHNCQUFzQixFQUFFLGFBQWEsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQWtCakc7SUFZRSx1QkFBb0IsZ0JBQXVDO1FBQXZDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBdUI7UUFDekQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO0lBQy9DLENBQUM7SUFWRCxzQkFBYyx1Q0FBWTthQUExQjtZQUNFLE9BQU8sUUFBUSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDL0IsQ0FBQzthQUVELFVBQTJCLEdBQVc7WUFDcEMsUUFBUSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDeEIsQ0FBQzs7O09BSkE7SUFVRDs7Ozs7Ozs7T0FRRztJQUNILDJCQUFHLEdBQUgsVUFBSSxHQUFXO1FBQ2IsT0FBYSxJQUFJLENBQUMsYUFBYSxFQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0gsaUNBQVMsR0FBVCxVQUFVLEdBQVc7UUFDbkIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDOUMsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCw4QkFB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LE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDcEMsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRXpDLHlFQUF5RTtRQUN6RSxnQkFBZ0I7UUFDaEIsaUNBQWlDO1FBQ2pDLDBCQUEwQjtRQUMxQixJQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNwQyxJQUFJLFlBQVksR0FBRyxJQUFJLEVBQUU7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFZLElBQUksbUVBQStELFlBQVksb0JBQWlCLENBQUMsQ0FBQztTQUMzSDtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7Z0JBL0pxQyxxQkFBcUI7O0lBWmhELGFBQWE7UUFEekIsVUFBVSxFQUFFO3lDQWEyQixxQkFBcUI7T0FaaEQsYUFBYSxDQTRLekI7SUFBRCxvQkFBQztDQUFBLEFBNUtELElBNEtDO1NBNUtZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvb2tpZU9wdGlvbnNQcm92aWRlciB9IGZyb20gJy4vY29va2llLW9wdGlvbnMtcHJvdmlkZXInO1xuaW1wb3J0IHsgQ29va2llT3B0aW9ucyB9IGZyb20gJy4vY29va2llLW9wdGlvbnMubW9kZWwnO1xuaW1wb3J0IHsgaXNCbGFuaywgaXNTdHJpbmcsIG1lcmdlT3B0aW9ucywgc2FmZURlY29kZVVSSUNvbXBvbmVudCwgc2FmZUpzb25QYXJzZSB9IGZyb20gJy4vdXRpbHMnO1xuXG5kZWNsYXJlIGludGVyZmFjZSBEb2N1bWVudCB7XG4gIGNvb2tpZTogc3RyaW5nO1xufVxuZGVjbGFyZSBjb25zdCBkb2N1bWVudDogRG9jdW1lbnQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvb2tpZVNlcnZpY2Uge1xuICBnZXQoa2V5OiBzdHJpbmcpOiBzdHJpbmc7XG4gIGdldE9iamVjdChrZXk6IHN0cmluZyk6IE9iamVjdDtcbiAgZ2V0QWxsKCk6IE9iamVjdDtcbiAgcHV0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBvcHRpb25zPzogQ29va2llT3B0aW9ucyk6IHZvaWQ7XG4gIHB1dE9iamVjdChrZXk6IHN0cmluZywgdmFsdWU6IE9iamVjdCwgb3B0aW9ucz86IENvb2tpZU9wdGlvbnMpOiB2b2lkO1xuICByZW1vdmUoa2V5OiBzdHJpbmcsIG9wdGlvbnM/OiBDb29raWVPcHRpb25zKTogdm9pZDtcbiAgcmVtb3ZlQWxsKG9wdGlvbnM/OiBDb29raWVPcHRpb25zKTogdm9pZDtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvb2tpZVNlcnZpY2UgaW1wbGVtZW50cyBJQ29va2llU2VydmljZSB7XG5cbiAgcHJvdGVjdGVkIG9wdGlvbnM6IENvb2tpZU9wdGlvbnM7XG5cbiAgcHJvdGVjdGVkIGdldCBjb29raWVTdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY29va2llIHx8ICcnO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldCBjb29raWVTdHJpbmcodmFsOiBzdHJpbmcpIHtcbiAgICBkb2N1bWVudC5jb29raWUgPSB2YWw7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9vcHRpb25zUHJvdmlkZXI6IENvb2tpZU9wdGlvbnNQcm92aWRlcikge1xuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuX29wdGlvbnNQcm92aWRlci5vcHRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIENvb2tpZVNlcnZpY2UjZ2V0XG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiBnaXZlbiBjb29raWUga2V5LlxuICAgKlxuICAgKiBAcGFyYW0ga2V5IElkIHRvIHVzZSBmb3IgbG9va3VwLlxuICAgKiBAcmV0dXJucyBSYXcgY29va2llIHZhbHVlLlxuICAgKi9cbiAgZ2V0KGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKDxhbnk+dGhpcy5fY29va2llUmVhZGVyKCkpW2tleV07XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgQ29va2llU2VydmljZSNnZXRPYmplY3RcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFJldHVybnMgdGhlIGRlc2VyaWFsaXplZCB2YWx1ZSBvZiBnaXZlbiBjb29raWUga2V5LlxuICAgKlxuICAgKiBAcGFyYW0ga2V5IElkIHRvIHVzZSBmb3IgbG9va3VwLlxuICAgKiBAcmV0dXJucyBEZXNlcmlhbGl6ZWQgY29va2llIHZhbHVlLlxuICAgKi9cbiAgZ2V0T2JqZWN0KGtleTogc3RyaW5nKTogT2JqZWN0IHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0KGtleSk7XG4gICAgcmV0dXJuIHZhbHVlID8gc2FmZUpzb25QYXJzZSh2YWx1ZSkgOiB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBDb29raWVTZXJ2aWNlI2dldEFsbFxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogUmV0dXJucyBhIGtleSB2YWx1ZSBvYmplY3Qgd2l0aCBhbGwgdGhlIGNvb2tpZXMuXG4gICAqXG4gICAqIEByZXR1cm5zIEFsbCBjb29raWVzXG4gICAqL1xuICBnZXRBbGwoKTogT2JqZWN0IHtcbiAgICByZXR1cm4gPGFueT50aGlzLl9jb29raWVSZWFkZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBDb29raWVTZXJ2aWNlI3B1dFxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogU2V0cyBhIHZhbHVlIGZvciBnaXZlbiBjb29raWUga2V5LlxuICAgKlxuICAgKiBAcGFyYW0ga2V5IElkIGZvciB0aGUgYHZhbHVlYC5cbiAgICogQHBhcmFtIHZhbHVlIFJhdyB2YWx1ZSB0byBiZSBzdG9yZWQuXG4gICAqIEBwYXJhbSBvcHRpb25zIChPcHRpb25hbCkgT3B0aW9ucyBvYmplY3QuXG4gICAqL1xuICBwdXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIG9wdGlvbnM/OiBDb29raWVPcHRpb25zKSB7XG4gICAgdGhpcy5fY29va2llV3JpdGVyKCkoa2V5LCB2YWx1ZSwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgQ29va2llU2VydmljZSNwdXRPYmplY3RcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFNlcmlhbGl6ZXMgYW5kIHNldHMgYSB2YWx1ZSBmb3IgZ2l2ZW4gY29va2llIGtleS5cbiAgICpcbiAgICogQHBhcmFtIGtleSBJZCBmb3IgdGhlIGB2YWx1ZWAuXG4gICAqIEBwYXJhbSB2YWx1ZSBWYWx1ZSB0byBiZSBzdG9yZWQuXG4gICAqIEBwYXJhbSBvcHRpb25zIChPcHRpb25hbCkgT3B0aW9ucyBvYmplY3QuXG4gICAqL1xuICBwdXRPYmplY3Qoa2V5OiBzdHJpbmcsIHZhbHVlOiBPYmplY3QsIG9wdGlvbnM/OiBDb29raWVPcHRpb25zKSB7XG4gICAgdGhpcy5wdXQoa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSksIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIENvb2tpZVNlcnZpY2UjcmVtb3ZlXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBSZW1vdmUgZ2l2ZW4gY29va2llLlxuICAgKlxuICAgKiBAcGFyYW0ga2V5IElkIG9mIHRoZSBrZXktdmFsdWUgcGFpciB0byBkZWxldGUuXG4gICAqIEBwYXJhbSBvcHRpb25zIChPcHRpb25hbCkgT3B0aW9ucyBvYmplY3QuXG4gICAqL1xuICByZW1vdmUoa2V5OiBzdHJpbmcsIG9wdGlvbnM/OiBDb29raWVPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5fY29va2llV3JpdGVyKCkoa2V5LCB1bmRlZmluZWQsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIENvb2tpZVNlcnZpY2UjcmVtb3ZlQWxsXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBSZW1vdmUgYWxsIGNvb2tpZXMuXG4gICAqL1xuICByZW1vdmVBbGwob3B0aW9ucz86IENvb2tpZU9wdGlvbnMpOiB2b2lkIHtcbiAgICBjb25zdCBjb29raWVzID0gdGhpcy5nZXRBbGwoKTtcbiAgICBPYmplY3Qua2V5cyhjb29raWVzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZShrZXksIG9wdGlvbnMpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29va2llUmVhZGVyKCk6IE9iamVjdCB7XG4gICAgbGV0IGxhc3RDb29raWVzID0ge307XG4gICAgbGV0IGxhc3RDb29raWVTdHJpbmcgPSAnJztcbiAgICBsZXQgY29va2llQXJyYXk6IHN0cmluZ1tdLCBjb29raWU6IHN0cmluZywgaTogbnVtYmVyLCBpbmRleDogbnVtYmVyLCBuYW1lOiBzdHJpbmc7XG4gICAgY29uc3QgY3VycmVudENvb2tpZVN0cmluZyA9IHRoaXMuY29va2llU3RyaW5nO1xuICAgIGlmIChjdXJyZW50Q29va2llU3RyaW5nICE9PSBsYXN0Q29va2llU3RyaW5nKSB7XG4gICAgICBsYXN0Q29va2llU3RyaW5nID0gY3VycmVudENvb2tpZVN0cmluZztcbiAgICAgIGNvb2tpZUFycmF5ID0gbGFzdENvb2tpZVN0cmluZy5zcGxpdCgnOyAnKTtcbiAgICAgIGxhc3RDb29raWVzID0ge307XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgY29va2llQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29va2llID0gY29va2llQXJyYXlbaV07XG4gICAgICAgIGluZGV4ID0gY29va2llLmluZGV4T2YoJz0nKTtcbiAgICAgICAgaWYgKGluZGV4ID4gMCkgeyAgLy8gaWdub3JlIG5hbWVsZXNzIGNvb2tpZXNcbiAgICAgICAgICBuYW1lID0gc2FmZURlY29kZVVSSUNvbXBvbmVudChjb29raWUuc3Vic3RyaW5nKDAsIGluZGV4KSk7XG4gICAgICAgICAgLy8gdGhlIGZpcnN0IHZhbHVlIHRoYXQgaXMgc2VlbiBmb3IgYSBjb29raWUgaXMgdGhlIG1vc3RcbiAgICAgICAgICAvLyBzcGVjaWZpYyBvbmUuICB2YWx1ZXMgZm9yIHRoZSBzYW1lIGNvb2tpZSBuYW1lIHRoYXRcbiAgICAgICAgICAvLyBmb2xsb3cgYXJlIGZvciBsZXNzIHNwZWNpZmljIHBhdGhzLlxuICAgICAgICAgIGlmIChpc0JsYW5rKCg8YW55Pmxhc3RDb29raWVzKVtuYW1lXSkpIHtcbiAgICAgICAgICAgICg8YW55Pmxhc3RDb29raWVzKVtuYW1lXSA9IHNhZmVEZWNvZGVVUklDb21wb25lbnQoY29va2llLnN1YnN0cmluZyhpbmRleCArIDEpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGxhc3RDb29raWVzO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29va2llV3JpdGVyKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIG9wdGlvbnM/OiBDb29raWVPcHRpb25zKSB7XG4gICAgICB0aGF0LmNvb2tpZVN0cmluZyA9IHRoYXQuX2J1aWxkQ29va2llU3RyaW5nKG5hbWUsIHZhbHVlLCBvcHRpb25zKTtcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfYnVpbGRDb29raWVTdHJpbmcobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBvcHRpb25zPzogQ29va2llT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgY29uc3Qgb3B0czogQ29va2llT3B0aW9ucyA9IG1lcmdlT3B0aW9ucyh0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIGxldCBleHBpcmVzOiBhbnkgPSBvcHRzLmV4cGlyZXM7XG4gICAgaWYgKGlzQmxhbmsodmFsdWUpKSB7XG4gICAgICBleHBpcmVzID0gJ1RodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgR01UJztcbiAgICAgIHZhbHVlID0gJyc7XG4gICAgfVxuICAgIGlmIChpc1N0cmluZyhleHBpcmVzKSkge1xuICAgICAgZXhwaXJlcyA9IG5ldyBEYXRlKGV4cGlyZXMpO1xuICAgIH1cbiAgICBjb25zdCBjb29raWVWYWx1ZSA9IG9wdHMuc3RvcmVVbmVuY29kZWQgPyB2YWx1ZSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG4gICAgbGV0IHN0ciA9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKSArICc9JyArIGNvb2tpZVZhbHVlO1xuICAgIHN0ciArPSBvcHRzLnBhdGggPyAnO3BhdGg9JyArIG9wdHMucGF0aCA6ICcnO1xuICAgIHN0ciArPSBvcHRzLmRvbWFpbiA/ICc7ZG9tYWluPScgKyBvcHRzLmRvbWFpbiA6ICcnO1xuICAgIHN0ciArPSBleHBpcmVzID8gJztleHBpcmVzPScgKyBleHBpcmVzLnRvVVRDU3RyaW5nKCkgOiAnJztcbiAgICBzdHIgKz0gb3B0cy5zYW1lU2l0ZSA/ICc7c2FtZVNpdGU9JyArIG9wdHMuc2FtZVNpdGUgOiAnJyA7XG4gICAgc3RyICs9IG9wdHMuc2VjdXJlID8gJztzZWN1cmUnIDogJyc7XG4gICAgc3RyICs9IG9wdHMuaHR0cE9ubHkgPyAnOyBIdHRwT25seScgOiAnJztcblxuICAgIC8vIHBlciBodHRwOi8vd3d3LmlldGYub3JnL3JmYy9yZmMyMTA5LnR4dCBicm93c2VyIG11c3QgYWxsb3cgYXQgbWluaW11bTpcbiAgICAvLyAtIDMwMCBjb29raWVzXG4gICAgLy8gLSAyMCBjb29raWVzIHBlciB1bmlxdWUgZG9tYWluXG4gICAgLy8gLSA0MDk2IGJ5dGVzIHBlciBjb29raWVcbiAgICBjb25zdCBjb29raWVMZW5ndGggPSBzdHIubGVuZ3RoICsgMTtcbiAgICBpZiAoY29va2llTGVuZ3RoID4gNDA5Nikge1xuICAgICAgY29uc29sZS5sb2coYENvb2tpZSBcXCcke25hbWV9XFwnIHBvc3NpYmx5IG5vdCBzZXQgb3Igb3ZlcmZsb3dlZCBiZWNhdXNlIGl0IHdhcyB0b28gbGFyZ2UgKCR7Y29va2llTGVuZ3RofSA+IDQwOTYgYnl0ZXMpIWApO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG4iXX0=