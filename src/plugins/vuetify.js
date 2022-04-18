import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import ja from 'vuetify/es5/locale/ja';

Vue.use(Vuetify);

const opts = {
    lang: {
        locales: {ja},
        current: 'ja',
    },
};
export default new Vuetify(opts
);
