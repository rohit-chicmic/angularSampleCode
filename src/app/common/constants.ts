export const APIS = {
    AUTH: {
        LOGIN: "/v1/user/login",
        SIGN_UP: "/v1/user/sign-up",
        FORGOT_PASSWORD: "​/v1​/user​/forgot-password",
        RESET_PASSWORD: "/v1/user/reset-password",
        UPDATE_PASSWORD: "/v1/user/update-password",
        VERIFY_OTP: "/v1/user/verify-otp",
        RESEND_OTP: "/v1/user/resend-otp",
        LOGOUT: "/v1/user/logout",
        VALIDATE_CAPTCHA: "/v1/user/validate-captcha",
        GET_ROLES: "/v1/user/get-roles-for-signup",
        GET_OTP: "/v1/user/get-otp"
    },
}

export const REGEX = {
    PASSWORD: /^(?=.*[A-Za-z])(?=(.*[\d]){1,})(?=.*?[^\w\s]).{8,}$/, //Contains 8 characters atleast 1 number, 1 alphabet, 1 special char
    EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/,
    ONLY_ALPHABETS: /^([a-zA-Z]+)$/,
    PHONE_NUMBER: /^[1-9]{1}[0-9]{9}$/,
    NUMER_GREATER_THAN_0: /^([1-9][0-9]*(\.[0-9]+)?)|(0+[0-9]*[1-9][0-9]*$)/,
    NUMBER_GREATER_THAN_0_OR_EQUALTO_ZERO: /^[0-9]*$/,
    ALPHA_NUMERIC: /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/,
    ADDRESS: /^[a-zA-Z0-9\s,.'-]{3,}$/,
    NAME: /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/,
}

export const PARENT_PATHS = {
    DEFAULT: '',
    AUTH: 'auth',
    MAIN: 'main',
    WILDCARD: '**'
}

export const PATHS = {
    AUTH: {
        LOGIN: 'login',
        REGISTER: 'register',
        FORGOT_PASSWORD: 'forgot-password',
        RESET_PASSWORD: 'reset-password'
    },
    MAIN: {
        DASHBOARD: 'dashboard'
    }
}

export const PATH_MATCH = {
    FULL: 'full',
    PREFIX: 'prefix'
}

export const STORAGE_KEYS = {
    TOKEN: 'token',
    RESET_TOKEN: 'resetToken',
    USER_DATA: 'userData'
}