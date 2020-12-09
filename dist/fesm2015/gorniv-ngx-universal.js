import { __decorate, __param, __metadata } from 'tslib';
import { Inject, PLATFORM_ID, Injectable, NgModule, InjectionToken, Injector, ViewEncapsulation, RendererFactory2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { from } from 'rxjs';
import { tap } from 'rxjs/operators';
import { isPlatformBrowser, isPlatformServer, APP_BASE_HREF, DOCUMENT, CommonModule } from '@angular/common';

let TransferHttpService = class TransferHttpService {
    constructor(transferState, httpClient, platformId) {
        this.transferState = transferState;
        this.httpClient = httpClient;
        this.platformId = platformId;
    }
    request(method, uri, options) {
        // tslint:disable-next-line:no-shadowed-variable
        return this.getData(method, uri, options, (method, url, options) => {
            return this.httpClient.request(method, url, options);
        });
    }
    /**
     * Performs a request with `get` http method.
     */
    get(url, options) {
        // tslint:disable-next-line:no-shadowed-variable
        return this.getData('get', url, options, (_method, url, options) => {
            return this.httpClient.get(url, options);
        });
    }
    /**
     * Performs a request with `post` http method.
     */
    post(url, body, options) {
        // tslint:disable-next-line:no-shadowed-variable
        return this.getPostData('post', url, body, options, 
        // tslint:disable-next-line:no-shadowed-variable
        (_method, url, body, options) => {
            return this.httpClient.post(url, body, options);
        });
    }
    /**
     * Performs a request with `put` http method.
     */
    put(url, _body, options) {
        // tslint:disable-next-line:no-shadowed-variable
        return this.getPostData('put', url, _body, options, (_method, url, _body, options) => {
            return this.httpClient.put(url, _body, options);
        });
    }
    /**
     * Performs a request with `delete` http method.
     */
    delete(url, options) {
        // tslint:disable-next-line:no-shadowed-variable
        return this.getData('delete', url, options, (_method, url, options) => {
            return this.httpClient.delete(url, options);
        });
    }
    /**
     * Performs a request with `patch` http method.
     */
    patch(url, body, options) {
        // tslint:disable-next-line:no-shadowed-variable
        return this.getPostData('patch', url, body, options, 
        // tslint:disable-next-line:no-shadowed-variable
        (_method, url, body, options) => {
            return this.httpClient.patch(url, body, options);
        });
    }
    /**
     * Performs a request with `head` http method.
     */
    head(url, options) {
        // tslint:disable-next-line:no-shadowed-variable
        return this.getData('head', url, options, (_method, url, options) => {
            return this.httpClient.head(url, options);
        });
    }
    /**
     * Performs a request with `options` http method.
     */
    options(url, options) {
        // tslint:disable-next-line:no-shadowed-variable
        return this.getData('options', url, options, 
        // tslint:disable-next-line:no-shadowed-variable
        (_method, url, options) => {
            return this.httpClient.options(url, options);
        });
    }
    // tslint:disable-next-line:max-line-length
    getData(method, uri, options, callback) {
        let url = uri;
        if (typeof uri !== 'string') {
            url = uri.url;
        }
        const tempKey = url + (options ? JSON.stringify(options) : '');
        const key = makeStateKey(tempKey);
        try {
            return this.resolveData(key);
        }
        catch (e) {
            return callback(method, uri, options).pipe(tap((data) => {
                if (isPlatformBrowser(this.platformId)) {
                    // Client only code.
                    // nothing;
                }
                if (isPlatformServer(this.platformId)) {
                    this.setCache(key, data);
                }
            }));
        }
    }
    getPostData(_method, uri, body, options, callback) {
        let url = uri;
        if (typeof uri !== 'string') {
            url = uri.url;
        }
        const tempKey = url + (body ? JSON.stringify(body) : '') + (options ? JSON.stringify(options) : '');
        const key = makeStateKey(tempKey);
        try {
            return this.resolveData(key);
        }
        catch (e) {
            return callback(_method, uri, body, options).pipe(tap((data) => {
                if (isPlatformBrowser(this.platformId)) {
                    // Client only code.
                    // nothing;
                }
                if (isPlatformServer(this.platformId)) {
                    this.setCache(key, data);
                }
            }));
        }
    }
    resolveData(key) {
        const data = this.getFromCache(key);
        if (!data) {
            throw new Error();
        }
        if (isPlatformBrowser(this.platformId)) {
            // Client only code.
            this.transferState.remove(key);
        }
        if (isPlatformServer(this.platformId)) {
            // Server only code.
        }
        return from(Promise.resolve(data));
    }
    setCache(key, data) {
        return this.transferState.set(key, data);
    }
    getFromCache(key) {
        return this.transferState.get(key, null);
    }
};
TransferHttpService.ctorParameters = () => [
    { type: TransferState },
    { type: HttpClient },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
TransferHttpService = __decorate([
    Injectable(),
    __param(2, Inject(PLATFORM_ID)),
    __metadata("design:paramtypes", [TransferState,
        HttpClient,
        Object])
], TransferHttpService);

let TransferHttpModule = class TransferHttpModule {
};
TransferHttpModule = __decorate([
    NgModule({
        providers: [TransferHttpService],
    })
], TransferHttpModule);

function isBlank(obj) {
    return obj === undefined || obj === null;
}
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
function isString(obj) {
    return typeof obj === 'string';
}
function mergeOptions(oldOptions, newOptions) {
    if (!newOptions) {
        return oldOptions;
    }
    return {
        path: isPresent(newOptions.path) ? newOptions.path : oldOptions.path,
        domain: isPresent(newOptions.domain) ? newOptions.domain : oldOptions.domain,
        expires: isPresent(newOptions.expires) ? newOptions.expires : oldOptions.expires,
        secure: isPresent(newOptions.secure) ? newOptions.secure : oldOptions.secure,
        httpOnly: isPresent(newOptions.httpOnly) ? newOptions.httpOnly : oldOptions.httpOnly,
        storeUnencoded: isPresent(newOptions.storeUnencoded) ? newOptions.storeUnencoded : oldOptions.storeUnencoded,
    };
}
function safeDecodeURIComponent(str) {
    try {
        return decodeURIComponent(str);
    }
    catch (e) {
        return str;
    }
}
function safeJsonParse(str) {
    try {
        return JSON.parse(str);
    }
    catch (e) {
        return str;
    }
}

const COOKIE_OPTIONS = new InjectionToken('COOKIE_OPTIONS');
let CookieOptionsProvider = class CookieOptionsProvider {
    constructor(options = {}, _injector) {
        this._injector = _injector;
        this.defaultOptions = {
            path: this._injector.get(APP_BASE_HREF, '/'),
            domain: null,
            expires: null,
            secure: false,
            httpOnly: false
        };
        this._options = mergeOptions(this.defaultOptions, options);
    }
    get options() {
        return this._options;
    }
};
CookieOptionsProvider.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [COOKIE_OPTIONS,] }] },
    { type: Injector }
];
CookieOptionsProvider = __decorate([
    Injectable(),
    __param(0, Inject(COOKIE_OPTIONS)),
    __metadata("design:paramtypes", [Object, Injector])
], CookieOptionsProvider);

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

class NgxRequest {
}
class NgxResponse {
}

let CookieBackendService = class CookieBackendService extends CookieService {
    constructor(request, response, _optionsProvider) {
        super(_optionsProvider);
        this.request = request;
        this.response = response;
    }
    get cookieString() {
        return this.request.cookie || this.request.headers['cookie'] || '';
    }
    set cookieString(val) {
        this.request.cookie = val;
        this.response.cookie = val;
    }
    put(key, value, options = {}) {
        let findKey = false;
        let newCookie = Object.keys(this.getAll())
            // tslint:disable-next-line: no-shadowed-variable
            .map((keyItem) => {
            if (keyItem === key) {
                findKey = true;
                return `${key}=${value}`;
            }
            return `${keyItem}=${this.get(keyItem)}`;
        })
            .join('; ');
        if (!findKey) {
            newCookie += `; ${key}=${value}`;
        }
        this.request.headers.cookie = newCookie;
        // not sure
        this.cookieString = newCookie;
    }
    remove(key, options) {
        const newCookie = Object.keys(this.getAll())
            // tslint:disable-next-line: no-shadowed-variable
            .map((keyItem) => {
            if (keyItem === key) {
                return '';
            }
            return `${keyItem}=${this.get(keyItem)}`;
        })
            .join('; ');
        this.request.headers.cookie = newCookie;
        // not sure
        this.cookieString = newCookie;
    }
};
CookieBackendService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NgxRequest,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [NgxResponse,] }] },
    { type: CookieOptionsProvider }
];
CookieBackendService = __decorate([
    Injectable(),
    __param(0, Inject(NgxRequest)),
    __param(1, Inject(NgxResponse)),
    __metadata("design:paramtypes", [Object, Object, CookieOptionsProvider])
], CookieBackendService);

function cookieServiceFactory(cookieOptionsProvider) {
    return new CookieService(cookieOptionsProvider);
}

var CookieModule_1;
let CookieModule = CookieModule_1 = class CookieModule {
    /**
     * Use this method in your root module to provide the CookieService
     */
    static forRoot(options = {}) {
        return {
            ngModule: CookieModule_1,
            providers: [
                { provide: COOKIE_OPTIONS, useValue: options },
                { provide: CookieService, useFactory: cookieServiceFactory, deps: [CookieOptionsProvider] }
            ]
        };
    }
    /**
     * Use this method in your other (non root) modules to import the directive/pipe
     */
    static forChild(options = {}) {
        return {
            ngModule: CookieModule_1,
            providers: [
                { provide: COOKIE_OPTIONS, useValue: options },
                { provide: CookieService, useFactory: cookieServiceFactory, deps: [CookieOptionsProvider] }
            ]
        };
    }
};
CookieModule = CookieModule_1 = __decorate([
    NgModule({
        providers: [CookieOptionsProvider]
    })
], CookieModule);

// https://github.com/angular/angular/issues/15776#issuecomment-291862953
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

let LinkModule = class LinkModule {
};
LinkModule = __decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        providers: [LinkService]
    })
], LinkModule);

/**
 * Generated bundle index. Do not edit.
 */

export { COOKIE_OPTIONS, CookieBackendService, CookieModule, CookieOptionsProvider, CookieService, LinkModule, LinkService, NgxRequest, NgxResponse, TransferHttpModule, TransferHttpService, cookieServiceFactory, isBlank, isPresent, isString, mergeOptions, safeDecodeURIComponent, safeJsonParse };
//# sourceMappingURL=gorniv-ngx-universal.js.map
