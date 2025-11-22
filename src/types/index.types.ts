export interface TMeta {
  totalPages: number;
  total: number;
  limit: number;
  page: number;
}

/** Standard API response sent to the client */
export type TApiResponse<T = any> = {
  statusCode?: number; // HTTP status code
  success?: boolean; // true if statusCode is 2xx/3xx
  message?: string; // optional message, could be from top-level or data.message
  data?:
    | {
        signOut?: boolean;
        accessTokenExpired?: boolean;
        refreshTokenExpired?: boolean;
        [key: string]: any;
      }
    | T;
  meta?: TMeta; // optional pagination/meta info
};

export interface User {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: any;
  role: string;
  dateOfBirth: any;
  status: string;
  deviceToken: string;
  bio: any;
  location: string;
  profile: any;
  isPushNotificationAllowed: boolean;
  isPriceAlertsNotificationAllowed: boolean;
  isOrderUpdateNotificationAllowed: boolean;
  isPhoneVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export type TQueryParam = {
  name: string;
  value: boolean | React.Key;
};

export type ServerError_T = {
  status?: number;
  data?: {
    signOut?: boolean;
    accessTokenExpired?: boolean;
    refreshTokenExpired?: boolean;
  };
};
