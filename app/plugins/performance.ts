export default defineNuxtPlugin(() => {
    if (import.meta.client) {
        useHead({
            script: [
                {
                    children: ` performance.mark('app-start');
                    new PerformanceObserver((list) => {
                        list.getEntries().forEach((entry) => {
                                console.log('LCP:', entry.startTime, entry);
                            });
                        })
                        .observe({ entryTypes: ['largest-contentful-paint'] });

                        new PerformanceObserver((list) => {
                            list.getEntries().forEach((entry) => {
                            console.log('FID:', entry.processingStart - entry.startTime);
                        });

                    })
                    .observe({ entryTypes: ['first-input'] });
            `,
                    type: 'module'
                }
            ]
        })
    }
})
