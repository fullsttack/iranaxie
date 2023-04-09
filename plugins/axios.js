export default function ({ $axios, store }) {

    $axios.onRequest(config => {

        if (process.browser) {

            config.headers.common = {
                token: localStorage.token
            }
        }
    })
}
