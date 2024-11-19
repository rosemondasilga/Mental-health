/* eslint-disable @typescript-eslint/no-unused-vars */
// src/types/firebase.d.ts
declare module '../../../frontend/src/firebase/auth.js' {
    import { UserCredential, User } from 'firebase/auth';
  
    export const doCreateUserWithEmailAndPassword: (email: string, password: string) => Promise<UserCredential>;
    export const doSignInWithEmailAndPassword: (email: string, password: string) => Promise<UserCredential>;
    export const doSignInWithGoogle: () => Promise<UserCredential>;
    export const doSignOut: () => Promise<void>;
    export const doPasswordReset: (email: string) => Promise<void>;
    export const doPasswordChange: (password: string) => Promise<void>;
    export const doSendEmailVerification: () => Promise<void>;
  }
  