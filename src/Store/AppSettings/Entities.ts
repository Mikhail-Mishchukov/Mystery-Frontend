export interface AppSettingsState {
    userData: UserData;
}

export interface UserData {
    username: string;
    isAuthorized: boolean;
}
