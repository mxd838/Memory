// Get DOM elements
const cells = document.querySelectorAll('.cell img')
for (let i = 0; i < cells.length; i++){
    cells[i].id = 'pic' + i
}

// Variables
const imgSrcs = ['./img/afghan.png', './img/albania.png', './img/algeria.png', './img/angola.png', './img/argentina.png','./img/bangladesh.png']
let imgComparisonArray = []

// -- build complete images array
const completeImgSrcs = imgSrcs.concat(imgSrcs)

// Functions
const toggleImg = (image) => {
    const imageToToggle = document.querySelector(`#${image.id}`)

    if( imageToToggle.getAttribute('src') === './img/questionMark.png') {
        imageToToggle.setAttribute('src', image.picture) 
    } else {
        imageToToggle.setAttribute('src', './img/questionMark.png')
    }

    return image
}

const compareImgs = () => {
    if (imgComparisonArray[0].picture === imgComparisonArray[1].picture){
        document.getElementById(`${imgComparisonArray[0].id}`).removeEventListener('click', playGame)
        document.getElementById(`${imgComparisonArray[1].id}`).removeEventListener('click', playGame)
        imgComparisonArray = []
    } else {
        setTimeout(() => {
            toggleImg(imgComparisonArray[0])
            toggleImg(imgComparisonArray[1])
            imgComparisonArray = []
        }, 1000);
    }
}

const playGame = (e) => {

    const imgRegistered = {
        id: e.target.id,
        picture: completeImgSrcs[e.target.id.slice(3)],
        found: false
    }

    if (imgComparisonArray.length === 0){
        imgComparisonArray.push(imgRegistered)
        toggleImg(imgRegistered)
    } else if (imgComparisonArray.length === 1 && imgRegistered !== imgComparisonArray[0]){
        imgComparisonArray.push(imgRegistered)
        toggleImg(imgRegistered)
        compareImgs()
    }
}


// Event listeners
cells.forEach(cell => {
  cell.addEventListener('click', playGame)  
})



// why not :
// -- randomized images at loading
// -- timer and records for completion
// -- size of the grid chosen by user up until 128(must be even) 