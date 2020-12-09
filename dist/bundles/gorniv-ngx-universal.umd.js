(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@angular/platform-browser'), require('rxjs'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@gorniv/ngx-universal', ['exports', '@angular/core', '@angular/common/http', '@angular/platform-browser', 'rxjs', 'rxjs/operators', '@angular/common'], factory) :
    (global = global || self, factory((global.gorniv = global.gorniv || {}, global.gorniv['ngx-universal'] = {}), global.ng.core, global.ng.common.http, global.ng.platformBrowser, global.rxjs, global.rxjs.operators, global.ng.common));
}(this, (function (exports, core, http, platformBrowser, rxjs, operators, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

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
            var key = platformBrowser.makeStateKey(tempKey);
            try {
                return this.resolveData(key);
            }
            catch (e) {
                return callback(method, uri, options).pipe(operators.tap(function (data) {
                    if (common.isPlatformBrowser(_this.platformId)) {
                        // Client only code.
                        // nothing;
                    }
                    if (common.isPlatformServer(_this.platformId)) {
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
            var key = platformBrowser.makeStateKey(tempKey);
            try {
                return this.resolveData(key);
            }
            catch (e) {
                return callback(_method, uri, body, options).pipe(operators.tap(function (data) {
                    if (common.isPlatformBrowser(_this.platformId)) {
                        // Client only code.
                        // nothing;
                    }
                    if (common.isPlatformServer(_this.platformId)) {
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
            if (common.isPlatformBrowser(this.platformId)) {
                // Client only code.
                this.transferState.remove(key);
            }
            if (common.isPlatformServer(this.platformId)) {
                // Server only code.
            }
            return rxjs.from(Promise.resolve(data));
        };
        TransferHttpService.prototype.setCache = function (key, data) {
            return this.transferState.set(key, data);
        };
        TransferHttpService.prototype.getFromCache = function (key) {
            return this.transferState.get(key, null);
        };
        TransferHttpService.ctorParameters = function () { return [
            { type: platformBrowser.TransferState },
            { type: http.HttpClient },
            { type: Object, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] }
        ]; };
        TransferHttpService = __decorate([
            core.Injectable(),
            __param(2, core.Inject(core.PLATFORM_ID)),
            __metadata("design:paramtypes", [platformBrowser.TransferState,
                http.HttpClient,
                Object])
        ], TransferHttpService);
        return TransferHttpService;
    }());

    var TransferHttpModule = /** @class */ (function () {
        function TransferHttpModule() {
        }
        TransferHttpModule = __decorate([
            core.NgModule({
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

    var COOKIE_OPTIONS = new core.InjectionToken('COOKIE_OPTIONS');
    var CookieOptionsProvider = /** @class */ (function () {
        function CookieOptionsProvider(options, _injector) {
            if (options === void 0) { options = {}; }
            this._injector = _injector;
            this.defaultOptions = {
                path: this._injector.get(common.APP_BASE_HREF, '/'),
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
            { type: undefined, decorators: [{ type: core.Inject, args: [COOKIE_OPTIONS,] }] },
            { type: core.Injector }
        ]; };
        CookieOptionsProvider = __decorate([
            core.Injectable(),
            __param(0, core.Inject(COOKIE_OPTIONS)),
            __metadata("design:paramtypes", [Object, core.Injector])
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
            core.Injectable(),
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
            { type: undefined, decorators: [{ type: core.Inject, args: [NgxRequest,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [NgxResponse,] }] },
            { type: CookieOptionsProvider }
        ]; };
        CookieBackendService = __decorate([
            core.Injectable(),
            __param(0, core.Inject(NgxRequest)),
            __param(1, core.Inject(NgxResponse)),
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
            core.NgModule({
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
                    encapsulation: core.ViewEncapsulation.None,
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
            { type: core.RendererFactory2 },
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
        ]; };
        LinkService = __decorate([
            core.Injectable({
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
            core.Injectable(),
            __param(1, core.Inject(common.DOCUMENT)),
            __metadata("design:paramtypes", [core.RendererFactory2, Object])
        ], LinkService);
        return LinkService;
    }());

    var LinkModule = /** @class */ (function () {
        function LinkModule() {
        }
        LinkModule = __decorate([
            core.NgModule({
                imports: [
                    common.CommonModule
                ],
                providers: [LinkService]
            })
        ], LinkModule);
        return LinkModule;
    }());

    exports.COOKIE_OPTIONS = COOKIE_OPTIONS;
    exports.CookieBackendService = CookieBackendService;
    exports.CookieModule = CookieModule;
    exports.CookieOptionsProvider = CookieOptionsProvider;
    exports.CookieService = CookieService;
    exports.LinkModule = LinkModule;
    exports.LinkService = LinkService;
    exports.NgxRequest = NgxRequest;
    exports.NgxResponse = NgxResponse;
    exports.TransferHttpModule = TransferHttpModule;
    exports.TransferHttpService = TransferHttpService;
    exports.cookieServiceFactory = cookieServiceFactory;
    exports.isBlank = isBlank;
    exports.isPresent = isPresent;
    exports.isString = isString;
    exports.mergeOptions = mergeOptions;
    exports.safeDecodeURIComponent = safeDecodeURIComponent;
    exports.safeJsonParse = safeJsonParse;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=gorniv-ngx-universal.umd.js.map
