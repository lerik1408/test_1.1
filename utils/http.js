import axios from "axios";

export default (context, inject) => {
    const HTTP = axios.create({
        baseURL: context.$config.API_BASE_URL
    });

    inject('http', HTTP);
}
