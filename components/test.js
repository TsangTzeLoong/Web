 <script>
            //import {Root} from "./index.js"
            const Root = {
                data(){
                    return{
                        txt:"message txt",
                        hello:"hello world",
                        count: 0
                    }
                },
                template: "<button @click = 'count++'> hit button </button> <h1>hit {{count}} times, {{txt}}</h1> <p>{{hello}}</p>"
            }
            //const app = Vue.createApp(Root)
            //app.mount("#root")
            //Vue.createApp(Root).mount("#root")
        </script>
