export default {
    install(Vue){
        Vue.prototype.hello=()=>{
            alert('hello')
        }
        console.log('hello')
    }
}