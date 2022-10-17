export interface loginModel {
    email: string,
    password: string,
}

export interface signUpModel {
    email: string,
    userName: string,
    password: string,
    confirmPassword: string,
    // add more fields as required.
}

export interface forgotPasswordModel {
    email: string,
}

export interface resetPasswordModel {
    token: string, // token we get on email on resetPassword link's querry
    newPassword: string,
    confirmPassword: string,
}

export interface updatePasswordModel {
    oldPassword: string,
    newPassword: string,
    confirmPassword: string,
}

// create more models here

export interface userModel {
    // fields for user
}