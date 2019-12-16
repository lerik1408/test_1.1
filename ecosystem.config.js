require('dotenv').config();

module.exports = {
    apps : [
        {
            name: "ssr",
            script: "./node_modules/nuxt/bin/nuxt-start",
            // env: {
                // "HOST": "0.0.0.0",
                // "NODE_TLS_REJECT_UNAUTHORIZED":"0"
                // "PORT": 86,
                // "NODE_ENV": "production",
            // }
        }
    ]
}