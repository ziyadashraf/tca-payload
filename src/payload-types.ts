/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji';

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  blocks: {};
  collections: {
    pages: Page;
    users: User;
    media: Media;
    services: Service;
    header: Header;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    pages: PagesSelect<false> | PagesSelect<true>;
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    services: ServicesSelect<false> | ServicesSelect<true>;
    header: HeaderSelect<false> | HeaderSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {};
  globalsSelect: {};
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  title: string;
  slug: string;
  landing: {
    heroText: string;
    subText?: string | null;
    heroImage: string | Media;
  };
  services: {
    title: string;
    description?: string | null;
  };
  partners: {
    title: string;
    description: string;
    images?:
      | {
          image: string | Media;
          id?: string | null;
        }[]
      | null;
  };
  stats: {
    title: string;
    statistics?:
      | {
          number: number;
          description: string;
          id?: string | null;
        }[]
      | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  role: 'admin' | 'editor' | 'user';
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "services".
 */
export interface Service {
  id: string;
  service: string;
  description: string;
  image: string | Media;
  link: string;
  type: 'white' | 'gray';
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header".
 */
export interface Header {
  id: string;
  logo: string | Media;
  products?:
    | {
        name: string;
        description: string;
        href: string;
        image: string | Media;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'pages';
        value: string | Page;
      } | null)
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'media';
        value: string | Media;
      } | null)
    | ({
        relationTo: 'services';
        value: string | Service;
      } | null)
    | ({
        relationTo: 'header';
        value: string | Header;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages_select".
 */
export interface PagesSelect<T extends boolean = true> {
  title?: T;
  slug?: T;
  landing?:
    | T
    | {
        heroText?: T;
        subText?: T;
        heroImage?: T;
      };
  services?:
    | T
    | {
        title?: T;
        description?: T;
      };
  partners?:
    | T
    | {
        title?: T;
        description?: T;
        images?:
          | T
          | {
              image?: T;
              id?: T;
            };
      };
  stats?:
    | T
    | {
        title?: T;
        statistics?:
          | T
          | {
              number?: T;
              description?: T;
              id?: T;
            };
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  role?: T;
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "services_select".
 */
export interface ServicesSelect<T extends boolean = true> {
  service?: T;
  description?: T;
  image?: T;
  link?: T;
  type?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header_select".
 */
export interface HeaderSelect<T extends boolean = true> {
  logo?: T;
  products?:
    | T
    | {
        name?: T;
        description?: T;
        href?: T;
        image?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}