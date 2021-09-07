console.log('0')

setTimeout(() => {
    console.log('1')
},1000)

console.log('2')

+++++++++++++++++++++
    
function random() {
    return Math.random()  
}
console.log(random())

++++++++++++++++++++++++
call back

// function random() {
//     setTimeout(()=>{
//          return Math.random()
//     },1000)
     
// }
// console.log(random())

function random(cb) {
    setTimeout(()=>{
        cb(Math.random())
    },3000)
}

random((result)=>{
    console.log(result)
})

+++++++++++++++++++++


