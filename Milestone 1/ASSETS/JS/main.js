const app = new Vue({
    el: '#app',

    data: {
        url: 'https://api.themoviedb.org/3/search/movie?api_key=e9adcb3a8787e160dfea6702af87220c&query=Back to the Future Part III',
        filmData: [],

    }, 

    methods: {

    },

    mounted() {
        const fullUrl = this.url;
        axios
            .get(fullUrl)
            .then(resp => {
                this.filmData = resp.data.response;
            })

            .catch(e => {
                console.error(e)
        })
    }

})
