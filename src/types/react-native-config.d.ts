declare module 'react-native-config' {
  export interface NativeConfig {
    KEY_ENV: string;
    ANALYTICS_ENABLED: boolean;
    TERMS_OF_SERVICE: string;
    PRIVACY_POLICY: string;
    ZONE_NOTIFICATIONS_BUNDLE_IDENTIFIER: string;
    DISPLAY_NAME: string;
    API_URL: string;
    AUTH0_DOMAIN: string;
    API_VERSION: string;
    AUTH0_CLIENT_ID: string;
    AUTH0_AUDIENCE: string;
    APP_VERSION: string;
    AUTH0_CLIENT_ID__PIN: string;
    TERMS_OF_USE: string;
    FRIENDLY_EXPRESS_TENANT: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
