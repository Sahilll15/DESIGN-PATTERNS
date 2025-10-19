"use strict";
class AppConfig {
    constructor(apiUrl, theme) {
        this.apiUrl = apiUrl;
        this.theme = theme;
    }
    static getInstance(apiUrl, theme) {
        if (!AppConfig.instance) {
            AppConfig.instance = new AppConfig(apiUrl, theme);
        }
        return AppConfig.instance;
    }
}
const config1 = AppConfig.getInstance('https://api.com', 'black');
const config2 = AppConfig.getInstance('https://random.com', 'laal');
console.log('are they same', config1 === config2);
