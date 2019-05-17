// data obj
const data = {
    newTodoText: '', 
    visitCount: 0, 
    hideCompletedTodos: false, 
    todos: [], 
    error: null, 
    a: 1, 
    b: 'hi',
    firstName: 'Michael', 
    middleName: 'Dunder', 
    lastName: 'Scott'
}

const vm = new Vue({
    el: '#app',
    data: data, 
    computed: {
        fullName:{
            get: function() {
                return `${this.firstName} ${this.middleName} ${this.lastName}`
            }, 
            set: function(newValue) {
                const names = newValue.split(' ')
                this.firstName = names[0]
                this.middleName = names[1]
                this.lastName = names[2]
            }
        } 
    },
    created: function() {
        console.log('instance created: a is = ' + this.a);
    }
})
