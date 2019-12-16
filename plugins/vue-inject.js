import Vue from 'vue'
import axios from "axios";
import config from "~/config"
import GiftCardService from "./services/GiftCardService";
import Vuelidate from "vuelidate";
import Helpers from "~/utils/helpers"
import https from 'https';
import 'url-search-params-polyfill';

const http = axios.create({
    https: true,
    baseURL: config.API_BASE_URL,
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
});

Vue.use(Vuelidate); // server&client

export default (context, inject) => {
    inject('http', http);
    inject('config', config);
    inject('helpers', Helpers);
    inject('GiftCardService', GiftCardService);
}
