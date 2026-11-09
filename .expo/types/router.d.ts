/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(stack)'}/products` | `/products`; params?: Router.UnknownInputParams; } | { pathname: `${'/(stack)'}/profile` | `/profile`; params?: Router.UnknownInputParams; } | { pathname: `${'/(stack)'}/settings` | `/settings`; params?: Router.UnknownInputParams; } | { pathname: `${'/(stack)'}/home` | `/home`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(stack)'}/products` | `/products`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(stack)'}/profile` | `/profile`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(stack)'}/settings` | `/settings`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(stack)'}/home` | `/home`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(stack)'}/products${`?${string}` | `#${string}` | ''}` | `/products${`?${string}` | `#${string}` | ''}` | `${'/(stack)'}/profile${`?${string}` | `#${string}` | ''}` | `/profile${`?${string}` | `#${string}` | ''}` | `${'/(stack)'}/settings${`?${string}` | `#${string}` | ''}` | `/settings${`?${string}` | `#${string}` | ''}` | `${'/(stack)'}/home${`?${string}` | `#${string}` | ''}` | `/home${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString | Router.ExternalPathString | `/` | `/_sitemap` | `${'/(stack)'}/products` | `/products` | `${'/(stack)'}/profile` | `/profile` | `${'/(stack)'}/settings` | `/settings` | `${'/(stack)'}/home` | `/home`; params?: Router.UnknownInputParams; };
    }
  }
}
