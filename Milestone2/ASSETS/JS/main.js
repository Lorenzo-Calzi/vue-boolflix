const app = new Vue({
    el: '#app',

    data: {
        fullUrl: '',
        search: '',

        urlFilm: 'https://api.themoviedb.org/3/search/movie?api_key=e9adcb3a8787e160dfea6702af87220c&query=',
        filmData: [],
        
        urlSerie: 'https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=',
        serieData: [],
    }, 

    methods: {  
        searchFilm() {
            fullUrl = this.urlFilm + this.search;

            axios
            .get(fullUrl)
            .then(resp => {
                this.filmData = resp.data.results;
            })

            .catch(e => {
                console.error(e)
            })

        },

        searchSerie(){
            fullUrl = this.urlSerie + this.search;

            axios
            .get(fullUrl)
            .then(resp => {
                this.serieData = resp.data.results;
            })

            .catch(e => {
                console.error(e)
            })
        }
    },

    mounted() {

    }
})



