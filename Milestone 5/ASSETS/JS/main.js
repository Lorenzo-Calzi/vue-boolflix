const app = new Vue({
    el: '#app',

    data: {
        fullUrl: '',
        search: '',
        error: null,

        urlFilm: 'https://api.themoviedb.org/3/search/movie?api_key=e9adcb3a8787e160dfea6702af87220c&query=',
        filmData: [],
        
        urlSerie: 'https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=',
        serieData: [],

        urlGenre: 'https://api.themoviedb.org/3/genre/movie/list?api_key=e9adcb3a8787e160dfea6702af87220c',
        genreData: [],
    }, 

    methods: {  
        searchFilm() {
            fullUrl = this.urlFilm + this.search;

            axios
            .get(fullUrl)
            .then(resp => {
                this.filmData = resp.data;
            })

            .catch(e => {
                console.error(e);
                this.error = 'Sorry something went Wrong! ' + e;
            })

        },

        searchSerie(){
            fullUrl = this.urlSerie + this.search;

            /* Serie */
            axios
            .get(fullUrl)
            .then(resp => {
                this.serieData = resp.data;
            })

            .catch(e => {
                console.error(e)
                this.error = 'Sorry something went Wrong! ' + e;
            })

            /* Generi */
            axios
            .get(this.urlGenre)
            .then(resp => {
                this.genreData = resp.data;
                console.log(this.genreData);
            })

            .catch(e => {
                console.error(e)
                this.error = 'Sorry something went Wrong! ' + e;
            })


        },

        bothSearch() {
            this.searchFilm();
            this.searchSerie();
        },

        getVote(number){
            const result = (Math.round(number/2));
            return result
        },
        
        svuotaPagina(){
            this.filmData = '';
            this.serieData = '';
            this.search = '';
        }

    },

    mounted() {

    }
})











