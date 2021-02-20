class comment {
    constructor(id, name, email, phone) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.phone = phone;
    }
  }

const app = new Vue({
    el: '#main',   
    data: {
        postList : [],
        search: null,
        message: 'Search...',        
        responseAvailable: false,
        //apiKey: '<YOUR_API_KEY>'
    },
    created () {
        this.fetchAPIData()
    },
    methods: {
        fetchAPIData( ) { 
            this.responseAvailable = false;
            fetch("https://jsonplaceholder.typicode.com/users", {
                "method": "GET"
            })
            .then(response => response.json())
            .then(json => {
                this.comment = null;
                this.postList = "";
                this.postList = json;
                this.responseAvailable = true;
            }) 
            .catch(err => {
                console.log(err); 
            });
        }    
    },
    computed: {
        comments() {
            return this.postList.filter(comment => {
                if(typeof comment.name === 'string' && this.search){
                    return comment.name.toLowerCase().includes(this.search.toLowerCase())
                }
                return comment;
            })
          }
    }
    
})
