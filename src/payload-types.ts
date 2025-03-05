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
    news: News;
    projects: Project;
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
    news: NewsSelect<false> | NewsSelect<true>;
    projects: ProjectsSelect<false> | ProjectsSelect<true>;
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
  template: 'home' | 'about' | 'contact';
  slug: string;
  homeFields?: {
    hero: {
      heroText: {
        en: string;
        ar: string;
      };
      subText?: {
        en?: string | null;
        ar?: string | null;
      };
      heroImage: string | Media;
    };
    stats: {
      title: {
        en: string;
        ar: string;
      };
      statistics?:
        | {
            number: string;
            description: {
              en: string;
              ar: string;
            };
            id?: string | null;
          }[]
        | null;
    };
    partners: {
      title: {
        en: string;
        ar: string;
      };
      description: {
        en: string;
        ar: string;
      };
      images?:
        | {
            image: string | Media;
            id?: string | null;
          }[]
        | null;
    };
  };
  aboutFields?: {
    welcomeSection: {
      title: {
        en: string;
        ar: string;
      };
      subtitle: {
        en: string;
        ar: string;
      };
    };
    mission: {
      title: {
        en: string;
        ar: string;
      };
      subtitle: {
        en: string;
        ar: string;
      };
      description: {
        en: string;
        ar: string;
      };
      image: string | Media;
    };
    journey: {
      title: {
        en: string;
        ar: string;
      };
      subtitle: {
        en: string;
        ar: string;
      };
      items?:
        | {
            title: {
              en: string;
              ar: string;
            };
            content: {
              en: string;
              ar: string;
            };
            id?: string | null;
          }[]
        | null;
    };
  };
  contactFields?: {
    welcomeSection: {
      title: {
        en: string;
        ar: string;
      };
      subtitle: {
        en: string;
        ar: string;
      };
    };
    contactInfo: {
      email: string;
      phone: string;
      address: {
        en: string;
        ar: string;
      };
    };
    jobs?:
      | {
          title: {
            en: string;
            ar: string;
          };
          location: {
            en: string;
            ar: string;
          };
          offerings?:
            | {
                offering: {
                  en: string;
                  ar: string;
                };
                id?: string | null;
              }[]
            | null;
          description: {
            en: string;
            ar: string;
          };
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
  serviceTitle?: string | null;
  /**
   * This will be auto-generated from the service name
   */
  slug: string;
  name: {
    en: string;
    ar: string;
  };
  shortDescription: {
    en: string;
    ar: string;
  };
  longDescription: {
    en: string;
    ar: string;
  };
  image: string | Media;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "news".
 */
export interface News {
  id: string;
  date: string;
  type: {
    en: string;
    ar: string;
  };
  title: {
    en: string;
    ar: string;
  };
  content: {
    en: string;
    ar: string;
  };
  author: {
    profileImage: string | Media;
    name: string;
    jobTitle: {
      en: string;
      ar: string;
    };
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "projects".
 */
export interface Project {
  id: string;
  title?: string | null;
  /**
   * Select the service category this project belongs to
   */
  service: string | Service;
  name: {
    en: string;
    ar: string;
  };
  /**
   * This will be auto-generated from the project name
   */
  slug: string;
  assets?:
    | {
        /**
         * Upload an image or video file
         */
        media: string | Media;
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
        relationTo: 'news';
        value: string | News;
      } | null)
    | ({
        relationTo: 'projects';
        value: string | Project;
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
  template?: T;
  slug?: T;
  homeFields?:
    | T
    | {
        hero?:
          | T
          | {
              heroText?:
                | T
                | {
                    en?: T;
                    ar?: T;
                  };
              subText?:
                | T
                | {
                    en?: T;
                    ar?: T;
                  };
              heroImage?: T;
            };
        stats?:
          | T
          | {
              title?:
                | T
                | {
                    en?: T;
                    ar?: T;
                  };
              statistics?:
                | T
                | {
                    number?: T;
                    description?:
                      | T
                      | {
                          en?: T;
                          ar?: T;
                        };
                    id?: T;
                  };
            };
        partners?:
          | T
          | {
              title?:
                | T
                | {
                    en?: T;
                    ar?: T;
                  };
              description?:
                | T
                | {
                    en?: T;
                    ar?: T;
                  };
              images?:
                | T
                | {
                    image?: T;
                    id?: T;
                  };
            };
      };
  aboutFields?:
    | T
    | {
        welcomeSection?:
          | T
          | {
              title?:
                | T
                | {
                    en?: T;
                    ar?: T;
                  };
              subtitle?:
                | T
                | {
                    en?: T;
                    ar?: T;
                  };
            };
        mission?:
          | T
          | {
              title?:
                | T
                | {
                    en?: T;
                    ar?: T;
                  };
              subtitle?:
                | T
                | {
                    en?: T;
                    ar?: T;
                  };
              description?:
                | T
                | {
                    en?: T;
                    ar?: T;
                  };
              image?: T;
            };
        journey?:
          | T
          | {
              title?:
                | T
                | {
                    en?: T;
                    ar?: T;
                  };
              subtitle?:
                | T
                | {
                    en?: T;
                    ar?: T;
                  };
              items?:
                | T
                | {
                    title?:
                      | T
                      | {
                          en?: T;
                          ar?: T;
                        };
                    content?:
                      | T
                      | {
                          en?: T;
                          ar?: T;
                        };
                    id?: T;
                  };
            };
      };
  contactFields?:
    | T
    | {
        welcomeSection?:
          | T
          | {
              title?:
                | T
                | {
                    en?: T;
                    ar?: T;
                  };
              subtitle?:
                | T
                | {
                    en?: T;
                    ar?: T;
                  };
            };
        contactInfo?:
          | T
          | {
              email?: T;
              phone?: T;
              address?:
                | T
                | {
                    en?: T;
                    ar?: T;
                  };
            };
        jobs?:
          | T
          | {
              title?:
                | T
                | {
                    en?: T;
                    ar?: T;
                  };
              location?:
                | T
                | {
                    en?: T;
                    ar?: T;
                  };
              offerings?:
                | T
                | {
                    offering?:
                      | T
                      | {
                          en?: T;
                          ar?: T;
                        };
                    id?: T;
                  };
              description?:
                | T
                | {
                    en?: T;
                    ar?: T;
                  };
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
  serviceTitle?: T;
  slug?: T;
  name?:
    | T
    | {
        en?: T;
        ar?: T;
      };
  shortDescription?:
    | T
    | {
        en?: T;
        ar?: T;
      };
  longDescription?:
    | T
    | {
        en?: T;
        ar?: T;
      };
  image?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "news_select".
 */
export interface NewsSelect<T extends boolean = true> {
  date?: T;
  type?:
    | T
    | {
        en?: T;
        ar?: T;
      };
  title?:
    | T
    | {
        en?: T;
        ar?: T;
      };
  content?:
    | T
    | {
        en?: T;
        ar?: T;
      };
  author?:
    | T
    | {
        profileImage?: T;
        name?: T;
        jobTitle?:
          | T
          | {
              en?: T;
              ar?: T;
            };
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "projects_select".
 */
export interface ProjectsSelect<T extends boolean = true> {
  title?: T;
  service?: T;
  name?:
    | T
    | {
        en?: T;
        ar?: T;
      };
  slug?: T;
  assets?:
    | T
    | {
        media?: T;
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