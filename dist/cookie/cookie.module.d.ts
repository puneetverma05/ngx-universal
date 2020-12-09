import { ModuleWithProviders } from '@angular/core';
import { CookieOptions } from './cookie-options.model';
export declare class CookieModule {
    /**
     * Use this method in your root module to provide the CookieService
     */
    static forRoot(options?: CookieOptions): ModuleWithProviders<CookieModule>;
    /**
     * Use this method in your other (non root) modules to import the directive/pipe
     */
    static forChild(options?: CookieOptions): ModuleWithProviders<CookieModule>;
}
