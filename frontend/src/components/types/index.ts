export enum BtnType {
   Primary = 'primary',
   SecondaryIcon = 'secondary-icon'
}

export interface registerForm {
   full_name: string;
   email: string;
   password: string;
   repeat_password: string;
}

export interface loginForm {
   email: string;
   password: string;
}

export interface errorField {
   name: string,
   message: string
}
