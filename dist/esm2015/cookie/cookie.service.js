import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { CookieOptionsProvider } from './cookie-options-provider';
import { isBlank, isString, mergeOptions, safeDecodeURIComponent, safeJsonParse } from './utils';
let CookieService = class CookieService {
    constructor(_optionsProvider) {
        this._optionsProvider = _optionsProvider;
        this.options = this._optionsProvider.options;
    }
    get cookieString() {
        return document.cookie || '';
    }
    set cookieString(val) {
        document.cookie = val;
    }
    /**
     * @name CookieService#get
     *
     * @description
     * Returns the value of given cookie key.
     *
     * @param key Id to use for lookup.
     * @returns Raw cookie value.
     */
    get(key) {
        return this._cookieReader()[key];
    }
    /**
     * @name CookieService#getObject
     *
     * @description
     * Returns the deserialized value of given cookie key.
     *
     * @param key Id to use for lookup.
     * @returns Deserialized cookie value.
     */
    getObject(key) {
        const value = this.get(key);
        return value ? safeJsonParse(value) : value;
    }
    /**
     * @name CookieService#getAll
     *
     * @description
     * Returns a key value object with all the cookies.
     *
     * @returns All cookies
     */
    getAll() {
        return this._cookieReader();
    }
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
    put(key, value, options) {
        this._cookieWriter()(key, value, options);
    }
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
    putObject(key, value, options) {
        this.put(key, JSON.stringify(value), options);
    }
    /**
     * @name CookieService#remove
     *
     * @description
     * Remove given cookie.
     *
     * @param key Id of the key-value pair to delete.
     * @param options (Optional) Options object.
     */
    remove(key, options) {
        this._cookieWriter()(key, undefined, options);
    }
    /**
     * @name CookieService#removeAll
     *
     * @description
     * Remove all cookies.
     */
    removeAll(options) {
        const cookies = this.getAll();
        Object.keys(cookies).forEach(key => {
            this.remove(key, options);
        });
    }
    _cookieReader() {
        let lastCookies = {};
        let lastCookieString = '';
        let cookieArray, cookie, i, index, name;
        const currentCookieString = this.cookieString;
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
    }
    _cookieWriter() {
        const that = this;
        return function (name, value, options) {
            that.cookieString = that._buildCookieString(name, value, options);
        };
    }
    _buildCookieString(name, value, options) {
        const opts = mergeOptions(this.options, options);
        let expires = opts.expires;
        if (isBlank(value)) {
            expires = 'Thu, 01 Jan 1970 00:00:00 GMT';
            value = '';
        }
        if (isString(expires)) {
            expires = new Date(expires);
        }
        const cookieValue = opts.storeUnencoded ? value : encodeURIComponent(value);
        let str = encodeURIComponent(name) + '=' + cookieValue;
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
        const cookieLength = str.length + 1;
        if (cookieLength > 4096) {
            console.log(`Cookie \'${name}\' possibly not set or overflowed because it was too large (${cookieLength} > 4096 bytes)!`);
        }
        return str;
    }
};
CookieService.ctorParameters = () => [
    { type: CookieOptionsProvider }
];
CookieService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [CookieOptionsProvider])
], CookieService);
export { CookieService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2llLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ29ybml2L25neC11bml2ZXJzYWwvIiwic291cmNlcyI6WyJjb29raWUvY29va2llLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFbEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLHNCQUFzQixFQUFFLGFBQWEsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQWtCakcsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQVl4QixZQUFvQixnQkFBdUM7UUFBdkMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF1QjtRQUN6RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7SUFDL0MsQ0FBQztJQVZELElBQWMsWUFBWTtRQUN4QixPQUFPLFFBQVEsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCxJQUFjLFlBQVksQ0FBQyxHQUFXO1FBQ3BDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBQ3hCLENBQUM7SUFNRDs7Ozs7Ozs7T0FRRztJQUNILEdBQUcsQ0FBQyxHQUFXO1FBQ2IsT0FBYSxJQUFJLENBQUMsYUFBYSxFQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0gsU0FBUyxDQUFDLEdBQVc7UUFDbkIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDOUMsQ0FBQztJQUVEOzs7Ozs7O09BT0c7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Q0FBQztRQUNwQyxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFekMseUVBQXlFO1FBQ3pFLGdCQUFnQjtRQUNoQixpQ0FBaUM7UUFDakMsMEJBQTBCO1FBQzFCLE1BQU0sWUFBWSxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLElBQUksWUFBWSxHQUFHLElBQUksRUFBRTtZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksSUFBSSwrREFBK0QsWUFBWSxpQkFBaUIsQ0FBQyxDQUFDO1NBQzNIO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0NBQ0YsQ0FBQTs7WUFoS3VDLHFCQUFxQjs7QUFaaEQsYUFBYTtJQUR6QixVQUFVLEVBQUU7cUNBYTJCLHFCQUFxQjtHQVpoRCxhQUFhLENBNEt6QjtTQTVLWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb29raWVPcHRpb25zUHJvdmlkZXIgfSBmcm9tICcuL2Nvb2tpZS1vcHRpb25zLXByb3ZpZGVyJztcbmltcG9ydCB7IENvb2tpZU9wdGlvbnMgfSBmcm9tICcuL2Nvb2tpZS1vcHRpb25zLm1vZGVsJztcbmltcG9ydCB7IGlzQmxhbmssIGlzU3RyaW5nLCBtZXJnZU9wdGlvbnMsIHNhZmVEZWNvZGVVUklDb21wb25lbnQsIHNhZmVKc29uUGFyc2UgfSBmcm9tICcuL3V0aWxzJztcblxuZGVjbGFyZSBpbnRlcmZhY2UgRG9jdW1lbnQge1xuICBjb29raWU6IHN0cmluZztcbn1cbmRlY2xhcmUgY29uc3QgZG9jdW1lbnQ6IERvY3VtZW50O1xuXG5leHBvcnQgaW50ZXJmYWNlIElDb29raWVTZXJ2aWNlIHtcbiAgZ2V0KGtleTogc3RyaW5nKTogc3RyaW5nO1xuICBnZXRPYmplY3Qoa2V5OiBzdHJpbmcpOiBPYmplY3Q7XG4gIGdldEFsbCgpOiBPYmplY3Q7XG4gIHB1dChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZywgb3B0aW9ucz86IENvb2tpZU9wdGlvbnMpOiB2b2lkO1xuICBwdXRPYmplY3Qoa2V5OiBzdHJpbmcsIHZhbHVlOiBPYmplY3QsIG9wdGlvbnM/OiBDb29raWVPcHRpb25zKTogdm9pZDtcbiAgcmVtb3ZlKGtleTogc3RyaW5nLCBvcHRpb25zPzogQ29va2llT3B0aW9ucyk6IHZvaWQ7XG4gIHJlbW92ZUFsbChvcHRpb25zPzogQ29va2llT3B0aW9ucyk6IHZvaWQ7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb29raWVTZXJ2aWNlIGltcGxlbWVudHMgSUNvb2tpZVNlcnZpY2Uge1xuXG4gIHByb3RlY3RlZCBvcHRpb25zOiBDb29raWVPcHRpb25zO1xuXG4gIHByb3RlY3RlZCBnZXQgY29va2llU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNvb2tpZSB8fCAnJztcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXQgY29va2llU3RyaW5nKHZhbDogc3RyaW5nKSB7XG4gICAgZG9jdW1lbnQuY29va2llID0gdmFsO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfb3B0aW9uc1Byb3ZpZGVyOiBDb29raWVPcHRpb25zUHJvdmlkZXIpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLl9vcHRpb25zUHJvdmlkZXIub3B0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBDb29raWVTZXJ2aWNlI2dldFxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgZ2l2ZW4gY29va2llIGtleS5cbiAgICpcbiAgICogQHBhcmFtIGtleSBJZCB0byB1c2UgZm9yIGxvb2t1cC5cbiAgICogQHJldHVybnMgUmF3IGNvb2tpZSB2YWx1ZS5cbiAgICovXG4gIGdldChrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuICg8YW55PnRoaXMuX2Nvb2tpZVJlYWRlcigpKVtrZXldO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIENvb2tpZVNlcnZpY2UjZ2V0T2JqZWN0XG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBSZXR1cm5zIHRoZSBkZXNlcmlhbGl6ZWQgdmFsdWUgb2YgZ2l2ZW4gY29va2llIGtleS5cbiAgICpcbiAgICogQHBhcmFtIGtleSBJZCB0byB1c2UgZm9yIGxvb2t1cC5cbiAgICogQHJldHVybnMgRGVzZXJpYWxpemVkIGNvb2tpZSB2YWx1ZS5cbiAgICovXG4gIGdldE9iamVjdChrZXk6IHN0cmluZyk6IE9iamVjdCB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldChrZXkpO1xuICAgIHJldHVybiB2YWx1ZSA/IHNhZmVKc29uUGFyc2UodmFsdWUpIDogdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgQ29va2llU2VydmljZSNnZXRBbGxcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFJldHVybnMgYSBrZXkgdmFsdWUgb2JqZWN0IHdpdGggYWxsIHRoZSBjb29raWVzLlxuICAgKlxuICAgKiBAcmV0dXJucyBBbGwgY29va2llc1xuICAgKi9cbiAgZ2V0QWxsKCk6IE9iamVjdCB7XG4gICAgcmV0dXJuIDxhbnk+dGhpcy5fY29va2llUmVhZGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgQ29va2llU2VydmljZSNwdXRcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFNldHMgYSB2YWx1ZSBmb3IgZ2l2ZW4gY29va2llIGtleS5cbiAgICpcbiAgICogQHBhcmFtIGtleSBJZCBmb3IgdGhlIGB2YWx1ZWAuXG4gICAqIEBwYXJhbSB2YWx1ZSBSYXcgdmFsdWUgdG8gYmUgc3RvcmVkLlxuICAgKiBAcGFyYW0gb3B0aW9ucyAoT3B0aW9uYWwpIE9wdGlvbnMgb2JqZWN0LlxuICAgKi9cbiAgcHV0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBvcHRpb25zPzogQ29va2llT3B0aW9ucykge1xuICAgIHRoaXMuX2Nvb2tpZVdyaXRlcigpKGtleSwgdmFsdWUsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIENvb2tpZVNlcnZpY2UjcHV0T2JqZWN0XG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBTZXJpYWxpemVzIGFuZCBzZXRzIGEgdmFsdWUgZm9yIGdpdmVuIGNvb2tpZSBrZXkuXG4gICAqXG4gICAqIEBwYXJhbSBrZXkgSWQgZm9yIHRoZSBgdmFsdWVgLlxuICAgKiBAcGFyYW0gdmFsdWUgVmFsdWUgdG8gYmUgc3RvcmVkLlxuICAgKiBAcGFyYW0gb3B0aW9ucyAoT3B0aW9uYWwpIE9wdGlvbnMgb2JqZWN0LlxuICAgKi9cbiAgcHV0T2JqZWN0KGtleTogc3RyaW5nLCB2YWx1ZTogT2JqZWN0LCBvcHRpb25zPzogQ29va2llT3B0aW9ucykge1xuICAgIHRoaXMucHV0KGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBDb29raWVTZXJ2aWNlI3JlbW92ZVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogUmVtb3ZlIGdpdmVuIGNvb2tpZS5cbiAgICpcbiAgICogQHBhcmFtIGtleSBJZCBvZiB0aGUga2V5LXZhbHVlIHBhaXIgdG8gZGVsZXRlLlxuICAgKiBAcGFyYW0gb3B0aW9ucyAoT3B0aW9uYWwpIE9wdGlvbnMgb2JqZWN0LlxuICAgKi9cbiAgcmVtb3ZlKGtleTogc3RyaW5nLCBvcHRpb25zPzogQ29va2llT3B0aW9ucyk6IHZvaWQge1xuICAgIHRoaXMuX2Nvb2tpZVdyaXRlcigpKGtleSwgdW5kZWZpbmVkLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBDb29raWVTZXJ2aWNlI3JlbW92ZUFsbFxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogUmVtb3ZlIGFsbCBjb29raWVzLlxuICAgKi9cbiAgcmVtb3ZlQWxsKG9wdGlvbnM/OiBDb29raWVPcHRpb25zKTogdm9pZCB7XG4gICAgY29uc3QgY29va2llcyA9IHRoaXMuZ2V0QWxsKCk7XG4gICAgT2JqZWN0LmtleXMoY29va2llcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmUoa2V5LCBvcHRpb25zKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2Nvb2tpZVJlYWRlcigpOiBPYmplY3Qge1xuICAgIGxldCBsYXN0Q29va2llcyA9IHt9O1xuICAgIGxldCBsYXN0Q29va2llU3RyaW5nID0gJyc7XG4gICAgbGV0IGNvb2tpZUFycmF5OiBzdHJpbmdbXSwgY29va2llOiBzdHJpbmcsIGk6IG51bWJlciwgaW5kZXg6IG51bWJlciwgbmFtZTogc3RyaW5nO1xuICAgIGNvbnN0IGN1cnJlbnRDb29raWVTdHJpbmcgPSB0aGlzLmNvb2tpZVN0cmluZztcbiAgICBpZiAoY3VycmVudENvb2tpZVN0cmluZyAhPT0gbGFzdENvb2tpZVN0cmluZykge1xuICAgICAgbGFzdENvb2tpZVN0cmluZyA9IGN1cnJlbnRDb29raWVTdHJpbmc7XG4gICAgICBjb29raWVBcnJheSA9IGxhc3RDb29raWVTdHJpbmcuc3BsaXQoJzsgJyk7XG4gICAgICBsYXN0Q29va2llcyA9IHt9O1xuICAgICAgZm9yIChpID0gMDsgaSA8IGNvb2tpZUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvb2tpZSA9IGNvb2tpZUFycmF5W2ldO1xuICAgICAgICBpbmRleCA9IGNvb2tpZS5pbmRleE9mKCc9Jyk7XG4gICAgICAgIGlmIChpbmRleCA+IDApIHsgIC8vIGlnbm9yZSBuYW1lbGVzcyBjb29raWVzXG4gICAgICAgICAgbmFtZSA9IHNhZmVEZWNvZGVVUklDb21wb25lbnQoY29va2llLnN1YnN0cmluZygwLCBpbmRleCkpO1xuICAgICAgICAgIC8vIHRoZSBmaXJzdCB2YWx1ZSB0aGF0IGlzIHNlZW4gZm9yIGEgY29va2llIGlzIHRoZSBtb3N0XG4gICAgICAgICAgLy8gc3BlY2lmaWMgb25lLiAgdmFsdWVzIGZvciB0aGUgc2FtZSBjb29raWUgbmFtZSB0aGF0XG4gICAgICAgICAgLy8gZm9sbG93IGFyZSBmb3IgbGVzcyBzcGVjaWZpYyBwYXRocy5cbiAgICAgICAgICBpZiAoaXNCbGFuaygoPGFueT5sYXN0Q29va2llcylbbmFtZV0pKSB7XG4gICAgICAgICAgICAoPGFueT5sYXN0Q29va2llcylbbmFtZV0gPSBzYWZlRGVjb2RlVVJJQ29tcG9uZW50KGNvb2tpZS5zdWJzdHJpbmcoaW5kZXggKyAxKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBsYXN0Q29va2llcztcbiAgfVxuXG4gIHByaXZhdGUgX2Nvb2tpZVdyaXRlcigpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcblxuICAgIHJldHVybiBmdW5jdGlvbiAobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBvcHRpb25zPzogQ29va2llT3B0aW9ucykge1xuICAgICAgdGhhdC5jb29raWVTdHJpbmcgPSB0aGF0Ll9idWlsZENvb2tpZVN0cmluZyhuYW1lLCB2YWx1ZSwgb3B0aW9ucyk7XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX2J1aWxkQ29va2llU3RyaW5nKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgb3B0aW9ucz86IENvb2tpZU9wdGlvbnMpOiBzdHJpbmcge1xuICAgIGNvbnN0IG9wdHM6IENvb2tpZU9wdGlvbnMgPSBtZXJnZU9wdGlvbnModGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbiAgICBsZXQgZXhwaXJlczogYW55ID0gb3B0cy5leHBpcmVzO1xuICAgIGlmIChpc0JsYW5rKHZhbHVlKSkge1xuICAgICAgZXhwaXJlcyA9ICdUaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAwIEdNVCc7XG4gICAgICB2YWx1ZSA9ICcnO1xuICAgIH1cbiAgICBpZiAoaXNTdHJpbmcoZXhwaXJlcykpIHtcbiAgICAgIGV4cGlyZXMgPSBuZXcgRGF0ZShleHBpcmVzKTtcbiAgICB9XG4gICAgY29uc3QgY29va2llVmFsdWUgPSBvcHRzLnN0b3JlVW5lbmNvZGVkID8gdmFsdWUgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICAgIGxldCBzdHIgPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSkgKyAnPScgKyBjb29raWVWYWx1ZTtcbiAgICBzdHIgKz0gb3B0cy5wYXRoID8gJztwYXRoPScgKyBvcHRzLnBhdGggOiAnJztcbiAgICBzdHIgKz0gb3B0cy5kb21haW4gPyAnO2RvbWFpbj0nICsgb3B0cy5kb21haW4gOiAnJztcbiAgICBzdHIgKz0gZXhwaXJlcyA/ICc7ZXhwaXJlcz0nICsgZXhwaXJlcy50b1VUQ1N0cmluZygpIDogJyc7XG4gICAgc3RyICs9IG9wdHMuc2FtZVNpdGUgPyAnO3NhbWVTaXRlPScgKyBvcHRzLnNhbWVTaXRlIDogJycgO1xuICAgIHN0ciArPSBvcHRzLnNlY3VyZSA/ICc7c2VjdXJlJyA6ICcnO1xuICAgIHN0ciArPSBvcHRzLmh0dHBPbmx5ID8gJzsgSHR0cE9ubHknIDogJyc7XG5cbiAgICAvLyBwZXIgaHR0cDovL3d3dy5pZXRmLm9yZy9yZmMvcmZjMjEwOS50eHQgYnJvd3NlciBtdXN0IGFsbG93IGF0IG1pbmltdW06XG4gICAgLy8gLSAzMDAgY29va2llc1xuICAgIC8vIC0gMjAgY29va2llcyBwZXIgdW5pcXVlIGRvbWFpblxuICAgIC8vIC0gNDA5NiBieXRlcyBwZXIgY29va2llXG4gICAgY29uc3QgY29va2llTGVuZ3RoID0gc3RyLmxlbmd0aCArIDE7XG4gICAgaWYgKGNvb2tpZUxlbmd0aCA+IDQwOTYpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBDb29raWUgXFwnJHtuYW1lfVxcJyBwb3NzaWJseSBub3Qgc2V0IG9yIG92ZXJmbG93ZWQgYmVjYXVzZSBpdCB3YXMgdG9vIGxhcmdlICgke2Nvb2tpZUxlbmd0aH0gPiA0MDk2IGJ5dGVzKSFgKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuIl19