// https://www.npmjs.com/package/css-custom-properties
import CssCustomProperties from 'css-custom-properties';

export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            CssCustomProperties: CssCustomProperties
        }
    };

});
