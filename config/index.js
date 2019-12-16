export default {
    APP_IS_OLD_MODE: process.env.APP_IS_OLD_MODE === "true",
    APP_A2B_TEST_SLOT: parseInt(process.env.APP_A2B_TEST_SLOT || 1),
    APP_BASE_URL: process.env.APP_SPRIZZY_HOST,
    API_BASE_URL: process.env.APP_SPRIZZY_API_HOST,
    GOOGLE_CLIENT_ID: "449371837214-b0voahamhp6cqdgm87aq0q1rj7pc5akd.apps.googleusercontent.com",
    GOOGLE_SCOPES: [
        "https://www.googleapis.com/auth/userinfo.email",
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/youtube.readonly"
    ].join(" "),
    PAYPAL_API_URL: "https://www.sandbox.paypal.com",
    PAYPAL_BUSINESS_NAME: "cdk854-facilitator@gmail.com",
    META_HOME_DEFAULT: {
        TITLE: "Promote Your YouTube Video, Get More YouTube Views | Youtube Advertising by Sprizzy",
        DESCRIPTION: "Sprizzy helps your video go viral by promoting it across hundreds of websites.",
        KEYWORDS: "youtube promotion, youtube views, youtube advertising, youtube subscribers"
    }
}