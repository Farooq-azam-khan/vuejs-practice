const app = new Vue({
    el: '#watch-example', 
    data: {
        question: '', 
        answer: 'I cannot give you an answer until you give me a question.'
    }, 
    watch: {
        question: function(newQuestion, oldQuestion) {
            this.answer = 'Waiting for you to stop typing...'
            this.debouncedGetAnswer()
        }
    }, 
    created: function() {
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    }, 
    methods: {
        getAnswer: function() {
            if (this.question.indexOf('?') === -1) {
                this.answer = 'Question contains ? ;-)'
                return 
            }
            this.answer = 'Thinking...'
            var vm = this 
            axios.get('http://yesno.wtf/api')
            .then(function (response) {
                vm.answer = _.capitalize(response.data.answer)
            })
            .catch(function (error) {
                vm.answer = 'Error!' + error
            }); 
        }
    }
});