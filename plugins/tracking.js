/* eslint-disable */

export default ({ app }) => {
    /*
    ** Only run on client-side and only in production mode
    */
    if (process.env.NODE_ENV !== 'production') return;

   // Google Tag Manager
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-MFWK5S6');



    // Set to false if opt-in required
    var trackByDefault = true;

    function acEnableTracking() {
        var expiration = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 30);
        document.cookie = "ac_enable_tracking=1; expires= " + expiration + "; path=/";
        acTrackVisit();
    }

    function acTrackVisit() {
        var trackcmp_email = '';

        var trackcmp = document.createElement("script");
        trackcmp.async = true;
        trackcmp.type = 'text/javascript';
        trackcmp.src = '//trackcmp.net/visit?actid=223779913&e='+encodeURIComponent(trackcmp_email)+'&r='+encodeURIComponent(document.referrer)+'&u='+encodeURIComponent(window.location.href);
        var trackcmp_s = document.getElementsByTagName("script");
        if (trackcmp_s.length) {
            trackcmp_s[0].parentNode.appendChild(trackcmp);
        } else {
            var trackcmp_h = document.getElementsByTagName("head");
            trackcmp_h.length && trackcmp_h[0].appendChild(trackcmp);
        }
    }

    if (trackByDefault || /(^|; )ac_enable_tracking=([^;]+)/.test(document.cookie)) {
        acEnableTracking();
    }

    /*
    ** Every time the route changes (fired on initialization too)
    */
    app.router.afterEach((to, from) => {
        /*
        ** We tell Google Analytics to add a `pageview`
        */
        // ga('set', 'page', to.fullPath)
        // ga('send', 'pageview')
    })
}