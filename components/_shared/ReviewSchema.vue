<template>
    <div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                structuredData: {
                    "@context": "http://schema.org",
                    "@type": "Product",
                    "name": "Sprizzy Media-Mt Laurel",
                    "aggregateRating":
                        {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "reviewCount": "106"
                        }
                },
            }
        },
        head() {
            return {
                __dangerouslyDisableSanitizers: ['script'],
                script: [{
                    innerHTML: JSON.stringify(this.structuredData),
                    type: 'application/ld+json',
                    class: 'reviews-schema',
                    'data-ref': 'a2e120eea4de13de74adb77918a04e870e810feb'
                }]
            }
        },
        async asyncData(context) {
            // Pre-fetch and return recipe data server-side.
        }
    };
</script>
