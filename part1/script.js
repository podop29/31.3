

let numUrl = 'http://numbersapi.com'

let numBtn = document.querySelector('#numenter')
let numInput = document.querySelector('#num')


//1
async function func1(){
    let data = await axios.get(`${numUrl}/${5}?json`)
    console.log(data)
}
func1()

//2
async function func2(){
let nums = [4,5,7]
let res = await axios.get(`${numUrl}/${nums}?json`)
console.log(res)
}
func2()

//3
numBtn.addEventListener('click', async function(e){
    e.preventDefault()
    let num = numInput.value
    let promises = await Promise.all([
        axios.get(`${numUrl}/${num}?json`),
        axios.get(`${numUrl}/${num}?json`),
        axios.get(`${numUrl}/${num}?json`),
        axios.get(`${numUrl}/${num}?json`)
    ])
        
        for(promise of promises){
            document.querySelector('#content').append(`${promise.data.text}`)
        }
      });

    
   
