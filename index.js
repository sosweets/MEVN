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

function random(cb) {
    setTimeout(()=>{
        cb(Math.random(),Math.random())
        
    },1000)
}

random((result1,result2)=>{
    console.log(result1,result2)
})

+++++++++++++++++
    
    function random(value, cb) {
    setTimeout(()=>{
        cb(Math.random() * value)
        
    },1000)
}

random(100, (result)=>{
    console.log(result)
})
