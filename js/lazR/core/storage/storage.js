import { DEFAULT_SETTINGS } from "../../../../app-default-settings.js";
import { APP_SHORT_NAME } from "../../../data/app.data.js";

const STORAGE = localStorage;

if (STORAGE.getItem(`${APP_SHORT_NAME}FirstTime`) === null) {
    STORAGE.setItem(`${APP_SHORT_NAME}FirstTime`, '0');
    let userTMP = {
        isDev: false,
        settings: DEFAULT_SETTINGS
    };
    STORAGE.setItem(`${APP_SHORT_NAME}User`, JSON.stringify(userTMP));
}
/* ------------------------------------------------------------------------- */
export const getUser = () => {
    return JSON.parse(STORAGE.getItem(`${APP_SHORT_NAME}User`));
}
export const setUser = (user) => {
    STORAGE.setItem(`${APP_SHORT_NAME}User`, JSON.stringify(user));
}
export const isUserDev = () => {
    const user = getUser();
    return user.isDev;
}
/* ------------------------------------------------------------------------- */
export const getUserSetting = (id) => {
    let settingToReturn = '';
    const user = getUser();
    const settings = user.settings;
    settings.forEach(settingsGroups => {
        settingsGroups.settings.forEach(setting => {
            if (setting.id == id) {
                settingToReturn = setting;
            }
        });
    });
    return settingToReturn;
}