import { CookieOptionsProvider } from './cookie-options-provider';
import { CookieOptions } from './cookie-options.model';
export interface ICookieService {
    get(key: string): string;
    getObject(key: string): Object;
    getAll(): Object;
    put(key: string, value: string, options?: CookieOptions): void;
    putObject(key: string, value: Object, options?: CookieOptions): void;
    remove(key: string, options?: CookieOptions): void;
    removeAll(options?: CookieOptions): void;
}
export declare class CookieService implements ICookieService {
    private _optionsProvider;
    protected options: CookieOptions;
    protected get cookieString(): string;
    protected set cookieString(val: string);
    constructor(_optionsProvider: CookieOptionsProvider);
    /**
     * @name CookieService#get
     *
     * @description
     * Returns the value of given cookie key.
     *
     * @param key Id to use for lookup.
     * @returns Raw cookie value.
     */
    get(key: string): string;
    /**
     * @name CookieService#getObject
     *
     * @description
     * Returns the deserialized value of given cookie key.
     *
     * @param key Id to use for lookup.
     * @returns Deserialized cookie value.
     */
    getObject(key: string): Object;
    /**
     * @name CookieService#getAll
     *
     * @description
     * Returns a key value object with all the cookies.
     *
     * @returns All cookies
     */
    getAll(): Object;
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
    put(key: string, value: string, options?: CookieOptions): void;
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
    putObject(key: string, value: Object, options?: CookieOptions): void;
    /**
     * @name CookieService#remove
     *
     * @description
     * Remove given cookie.
     *
     * @param key Id of the key-value pair to delete.
     * @param options (Optional) Options object.
     */
    remove(key: string, options?: CookieOptions): void;
    /**
     * @name CookieService#removeAll
     *
     * @description
     * Remove all cookies.
     */
    removeAll(options?: CookieOptions): void;
    private _cookieReader;
    private _cookieWriter;
    private _buildCookieString;
}
