import { __decorate, __param, __metadata, __extends } from 'tslib';
import { Inject, PLATFORM_ID, Injectable, NgModule, InjectionToken, Injector, ViewEncapsulation, RendererFactory2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { from } from 'rxjs';
import { tap } from 'rxjs/operators';
import { isPlatformBrowser, isPlatformServer, APP_BASE_HREF, DOCUMENT, CommonModule } from '@angular/common';

var TransferHttpService = /** @class */ (function () {
    function TransferHttpService(transferState, httpClient, platformId) {
        this.transferState = transferState;
        this.httpClient = httpClient;
        this.platformId = platformId;
    }
    TransferHttpService.prototype.request = function (method, uri, options) {
        var _this = this;
        // tslint:disable-next-line:no-shadowed-variable
        return this.getData(method, uri, options, function (method, url, options) {
            return _this.httpClient.request(method, url, options);
        });
    };
    /**
     * Performs a request with `get` http method.
     */
    TransferHttpService.prototype.get = function (url, options) {
        var _this = this;
        // tslint:disable-next-line:no-shadowed-variable
        return this.getData('get', url, options, function (_method, url, options) {
            return _this.httpClient.get(url, options);
        });
    };
    /**
     * Performs a request with `post` http method.
     */
    TransferHttpService.prototype.post = function (url, body, options) {
        var _this = this;
        // tslint:disable-next-line:no-shadowed-variable
        return this.getPostData('post', url, body, options, 
        // tslint:disable-next-line:no-shadowed-variable
        function (_method, url, body, options) {
            return _this.httpClient.post(url, body, options);
        });
    };
    /**
     * Performs a request with `put` http method.
     */
    TransferHttpService.prototype.put = function (url, _body, options) {
        var _this = this;
        // tslint:disable-next-line:no-shadowed-variable
        return this.getPostData('put', url, _body, options, function (_method, url, _body, options) {
            return _this.httpClient.put(url, _body, options);
        });
    };
    /**
     * Performs a request with `delete` http method.
     */
    TransferHttpService.prototype.delete = function (url, options) {
        var _this = this;
        // tslint:disable-next-line:no-shadowed-variable
        return this.getData('delete', url, options, function (_method, url, options) {
            return _this.httpClient.delete(url, options);
        });
    };
    /**
     * Performs a request with `patch` http method.
     */
    TransferHttpService.prototype.patch = function (url, body, options) {
        var _this = this;
        // tslint:disable-next-line:no-shadowed-variable
        return this.getPostData('patch', url, body, options, 
        // tslint:disable-next-line:no-shadowed-variable
        function (_method, url, body, options) {
            return _this.httpClient.patch(url, body, options);
        });
    };
    /**
     * Performs a request with `head` http method.
     */
    TransferHttpService.prototype.head = function (url, options) {
        var _this = this;
        // tslint:disable-next-line:no-shadowed-variable
        return this.getData('head', url, options, function (_method, url, options) {
            return _this.httpClient.head(url, options);
        });
    };
    /**
     * Performs a request with `options` http method.
     */
    TransferHttpService.prototype.options = function (url, options) {
        var _this = this;
        // tslint:disable-next-line:no-shadowed-variable
        return this.getData('options', url, options, 
        // tslint:disable-next-line:no-shadowed-variable
        function (_method, url, options) {
            return _this.httpClient.options(url, options);
        });
    };
    // tslint:disable-next-line:max-line-length
    TransferHttpService.prototype.getData = function (method, uri, options, callback) {
        var _this = this;
        var url = uri;
        if (typeof uri !== 'string') {
            url = uri.url;
        }
        var tempKey = url + (options ? JSON.stringify(options) : '');
        var key = makeStateKey(tempKey);
        try {
            return this.resolveData(key);
        }
        catch (e) {
            return callback(method, uri, options).pipe(tap(function (data) {
                if (isPlatformBrowser(_this.platformId)) {
                    // Client only code.
                    // nothing;
                }
                if (isPlatformServer(_this.platformId)) {
                    _this.setCache(key, data);
                }
            }));
        }
    };
    TransferHttpService.prototype.getPostData = function (_method, uri, body, options, callback) {
        var _this = this;
        var url = uri;
        if (typeof uri !== 'string') {
            url = uri.url;
        }
        var tempKey = url + (body ? JSON.stringify(body) : '') + (options ? JSON.stringify(options) : '');
        var key = makeStateKey(tempKey);
        try {
            return this.resolveData(key);
        }
        catch (e) {
            return callback(_method, uri, body, options).pipe(tap(function (data) {
                if (isPlatformBrowser(_this.platformId)) {
                    // Client only code.
                    // nothing;
                }
                if (isPlatformServer(_this.platformId)) {
                    _this.setCache(key, data);
                }
            }));
        }
    };
    TransferHttpService.prototype.resolveData = function (key) {
        var data = this.getFromCache(key);
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
    };
    TransferHttpService.prototype.setCache = function (key, data) {
        return this.transferState.set(key, data);
    };
    TransferHttpService.prototype.getFromCache = function (key) {
        return this.transferState.get(key, null);
    };
    TransferHttpService.ctorParameters = function () { return [
        { type: TransferState },
        { type: HttpClient },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    TransferHttpService = __decorate([
        Injectable(),
        __param(2, Inject(PLATFORM_ID)),
        __metadata("design:paramtypes", [TransferState,
            HttpClient,
            Object])
    ], TransferHttpService);
    return TransferHttpService;
}());

var TransferHttpModule = /** @class */ (function () {
    function TransferHttpModule() {
    }
    TransferHttpModule = __decorate([
        NgModule({
            providers: [TransferHttpService],
        })
    ], TransferHttpModule);
    return TransferHttpModule;
}());

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

var COOKIE_OPTIONS = new InjectionToken('COOKIE_OPTIONS');
var CookieOptionsProvider = /** @class */ (function () {
    function CookieOptionsProvider(options, _injector) {
        if (options === void 0) { options = {}; }
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
    Object.defineProperty(CookieOptionsProvider.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    CookieOptionsProvider.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [COOKIE_OPTIONS,] }] },
        { type: Injector }
    ]; };
    CookieOptionsProvider = __decorate([
        Injectable(),
        __param(0, Inject(COOKIE_OPTIONS)),
        __metadata("design:paramtypes", [Object, Injector])
    ], CookieOptionsProvider);
    return CookieOptionsProvider;
}());

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

var NgxRequest = /** @class */ (function () {
    function NgxRequest() {
    }
    return NgxRequest;
}());
var NgxResponse = /** @class */ (function () {
    function NgxResponse() {
    }
    return NgxResponse;
}());

var CookieBackendService = /** @class */ (function (_super) {
    __extends(CookieBackendService, _super);
    function CookieBackendService(request, response, _optionsProvider) {
        var _this = _super.call(this, _optionsProvider) || this;
        _this.request = request;
        _this.response = response;
        return _this;
    }
    Object.defineProperty(CookieBackendService.prototype, "cookieString", {
        get: function () {
            return this.request.cookie || this.request.headers['cookie'] || '';
        },
        set: function (val) {
            this.request.cookie = val;
            this.response.cookie = val;
        },
        enumerable: true,
        configurable: true
    });
    CookieBackendService.prototype.put = function (key, value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var findKey = false;
        var newCookie = Object.keys(this.getAll())
            // tslint:disable-next-line: no-shadowed-variable
            .map(function (keyItem) {
            if (keyItem === key) {
                findKey = true;
                return key + "=" + value;
            }
            return keyItem + "=" + _this.get(keyItem);
        })
            .join('; ');
        if (!findKey) {
            newCookie += "; " + key + "=" + value;
        }
        this.request.headers.cookie = newCookie;
        // not sure
        this.cookieString = newCookie;
    };
    CookieBackendService.prototype.remove = function (key, options) {
        var _this = this;
        var newCookie = Object.keys(this.getAll())
            // tslint:disable-next-line: no-shadowed-variable
            .map(function (keyItem) {
            if (keyItem === key) {
                return '';
            }
            return keyItem + "=" + _this.get(keyItem);
        })
            .join('; ');
        this.request.headers.cookie = newCookie;
        // not sure
        this.cookieString = newCookie;
    };
    CookieBackendService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [NgxRequest,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [NgxResponse,] }] },
        { type: CookieOptionsProvider }
    ]; };
    CookieBackendService = __decorate([
        Injectable(),
        __param(0, Inject(NgxRequest)),
        __param(1, Inject(NgxResponse)),
        __metadata("design:paramtypes", [Object, Object, CookieOptionsProvider])
    ], CookieBackendService);
    return CookieBackendService;
}(CookieService));

function cookieServiceFactory(cookieOptionsProvider) {
    return new CookieService(cookieOptionsProvider);
}

var CookieModule = /** @class */ (function () {
    function CookieModule() {
    }
    CookieModule_1 = CookieModule;
    /**
     * Use this method in your root module to provide the CookieService
     */
    CookieModule.forRoot = function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: CookieModule_1,
            providers: [
                { provide: COOKIE_OPTIONS, useValue: options },
                { provide: CookieService, useFactory: cookieServiceFactory, deps: [CookieOptionsProvider] }
            ]
        };
    };
    /**
     * Use this method in your other (non root) modules to import the directive/pipe
     */
    CookieModule.forChild = function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: CookieModule_1,
            providers: [
                { provide: COOKIE_OPTIONS, useValue: options },
                { provide: CookieService, useFactory: cookieServiceFactory, deps: [CookieOptionsProvider] }
            ]
        };
    };
    var CookieModule_1;
    CookieModule = CookieModule_1 = __decorate([
        NgModule({
            providers: [CookieOptionsProvider]
        })
    ], CookieModule);
    return CookieModule;
}());

// https://github.com/angular/angular/issues/15776#issuecomment-291862953
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

var LinkModule = /** @class */ (function () {
    function LinkModule() {
    }
    LinkModule = __decorate([
        NgModule({
            imports: [
                CommonModule
            ],
            providers: [LinkService]
        })
    ], LinkModule);
    return LinkModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { COOKIE_OPTIONS, CookieBackendService, CookieModule, CookieOptionsProvider, CookieService, LinkModule, LinkService, NgxRequest, NgxResponse, TransferHttpModule, TransferHttpService, cookieServiceFactory, isBlank, isPresent, isString, mergeOptions, safeDecodeURIComponent, safeJsonParse };
//# sourceMappingURL=gorniv-ngx-universal.js.map
