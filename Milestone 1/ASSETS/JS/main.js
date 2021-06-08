const app = new Vue({
    el: '#app',

    data: {
        url: 'https://api.themoviedb.org/3/search/movie?api_key=e9adcb3a8787e160dfea6702af87220c&query=',
        filmData: [],
        search: '',
    }, 

    methods: {
        searchFilm() {
            console.log(this.search);
        }
    },

    mounted() {
        const fullUrl = this.url + this.search;
        axios
            .get(fullUrl)
            .then(resp => {
                this.filmData = resp.data.results;
                console.log(this.filmData);
            })

            .catch(e => {
                console.error(e)
        })
    }

})
