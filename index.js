const app1 = new Vue({
    el: '#app1', 
    data: {
        message: 'Hello World Vue.js'
    }
}); 

const app2 = new Vue({
    el: '#app2', 
    data: {
        message: 'You visited this webpage on ' + new Date().toLocaleString()
    }
});

const app3 = new Vue({
    el: '#app3', 
    data: {
        seen: true
    }
}); 

app3.seen = false; 

const app4 = new Vue({
    el: '#app4', 
    data: {
        todos: [
            {text: 'Learn JS'}, 
            {text: 'Learn React'}, 
            {text: 'Learn Vue'}
        ]
    }
}); 

app4.todos.push({text: 'New Item'}); 

const app5 = new Vue({
    el: '#app5', 
    data: {
        message: 'Hello Vue.js'
    }, 
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join(''); 
        }
    }
}); 

const app6 = new Vue({
    el: '#app6', 
    data: {
        message: 'Random Message'
    }
})