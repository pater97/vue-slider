const app = new Vue({
    el:`#root`,
    data:{
        counter:0,
        articoli:[
            {
                title:"Svezia",
                immagini:"img/01.jpg",
                content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis"
            },
            {
                title:"Svizzera",
                immagini:"img/02.jpg",
                content:"lorem ipsum"
            },
            {
                title:"Gran Bretagna",
                immagini:"img/03.jpg",
                content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit."
            },
            {
                title:"Germania",
                immagini:"img/04.jpg",
                content:"lorem ipsum, dolor sit amet"
            },
            {
                title:"Paradise",
                immagini:"img/05.jpg",
                content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit."
            }
        ]
    },
    methods: {
        up: function up(){
            if(this.counter <= 0){
                this.counter = 5
            }
            this.counter--
        },
        down: function down(){
            if(this.counter >= 4){
                this.counter = 0 -1
            }
            return this.counter++
        }
    }
})