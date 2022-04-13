import './less/index.less'

// Your code goes here!


document.addEventListener("mouseover", function (evt){

    evt.target.classList.toggle('mouseover')

})
document.addEventListener('keydown', function(evt){
    if(evt.key === 6){
        document.body.innerHTML = 'you ran order 66'
    }

})

document.addEventListener('wheel', function(evt){
 Math.sign(evt.deltaY);
})

document.addEventListener('load', function (evt){
    evt.target.classList('load event')

})

document.addEventListener('focus', function(evt){
    evt.target.classList('focus')
})

window.addEventListener('resize', function(evt){
    evt.target.classList('height and width')

})
window.addEventListener('scroll', function(evt){
    evt.classList = this.window.scrollY
})

document.addEventListener('select', function(evt){
    evt.target.value('select')

})

document.addEventListener('dblclick', function(evt){
    evt.target.innerHTML = ' '
})

document.addEventListener('drag', 'drop', function (evt){



})

