deck_url = 'http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'



//1
async function func1(){
    deck = await axios.get(deck_url) 
    deck_id = deck.data.deck_id
    card = await axios.get(`http://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`)
    console.log(card.data.cards[0].value, " of " , card.data.cards[0].suit )
}
func1()

//2

async function func2(){
    deck = await axios.get(deck_url) 
    deck_id = deck.data.deck_id
    card = await axios.get(`http://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`)
    console.log(card.data.cards[0].value, " of " , card.data.cards[0].suit )
    console.log(card.data.cards[1].value, " of " , card.data.cards[1].suit )
}
func2()


//3
btn = document.querySelector("#btn")

btn.addEventListener('click',async function(e){
    e.preventDefault()
 let card = await axios.get(`http://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
    let img = card.data.cards[0].images.png
    var imgtag = document.createElement('img')
    imgtag.setAttribute('src', img)
    document.querySelector('#content').append(imgtag)

})