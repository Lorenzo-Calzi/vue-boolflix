const app = new Vue({
    el: '#app',

    data: {
        urlFilm: 'https://api.themoviedb.org/3/search/movie?api_key=e9adcb3a8787e160dfea6702af87220c&query=',
        filmData: [],
        fullUrl: '',

        urlSerie: 'https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=',
        serieData: [],
        prova: '',

        search: '',
       /*  urlImg: "https://www.countryflags.io/" + "it" + "/shiny/64.png" */
        image: "https://www.countryflags.io/be/shiny/64.png"
    }, 

    methods: {
        searchFilm() {
            fullUrl = this.urlFilm + this.search;

            axios
            .get(fullUrl)
            .then(resp => {
                this.filmData = resp.data.results;
                console.log(this.filmData);
                console.log(this.urlSerie);
            })

            .catch(e => {
                console.error(e)
            })

        },

        searchSerie(){
            prova = this.urlSerie + this.search;
    
                axios
                .get(prova)
                .then(resp => {
                    this.serieData = resp.data.results;
                    console.log('Serie ' + this.serieData);
                })
    
                .catch(e => {
                    console.error(e)
                })
        }
    },

    

    mounted() {

    }

})



