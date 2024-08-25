import { Injectable, inject } from '@angular/core';
import { CookieDict, CookieService } from 'ngx-cookie';

@Injectable({ providedIn: 'root' })
export class AppCookieService {
  private cookieService = inject(CookieService);

  get(key: string): string {
    return this.cookieService.get(key)!;
  }

  set(key: string, value: string): void {
    return this.cookieService.put(key, value, {
      path: '/',
    });
  }

  remove(key: string): void {
    return this.cookieService.remove(key);
  }

  removeAll(): void {
    return this.cookieService.removeAll();
  }

  getAll(): CookieDict {
    return this.cookieService.getAll();
  }

  putObject(key: string, object) {
    return this.cookieService.putObject(key, object);
  }

  getObject(key: string): object {
    return this.cookieService.getObject(key)!;
  }
}
