Vue.component('todo-item', {
    props: ['todo'], 
    template: '<li>{{ todo.text }}</li>'
})

const app7 = new Vue({
    el: '#app7', 
    data: {
        groceryList: [
            {id: 0, text: 'vegetables'}, 
            {id: 1, text: 'cheese'}, 
            {id: 2, text: 'milk'}
        ]

    }
})