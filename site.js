const urls = [
    'https://tse1.mm.bing.net/th/id/OIP.sPaKjof7hK2-nRHeLJkmWAHaEH?w=293&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
    'https://tse4.mm.bing.net/th/id/OIP.U75Fj8v0cbPax1WHib3peAHaE8?w=259&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
    'https://tse1.mm.bing.net/th/id/OIP.VvgcKs2O4q_O98LGTNjpgAHaHc?w=214&h=215&c=7&r=0&o=7&pid=1.7&rm=3',
    'https://tse2.mm.bing.net/th/id/OIP.kLuvzvHT580ApX9cABjtgAHaHa?w=171&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
    'https://tse1.mm.bing.net/th/id/OIP.1M9OfYCbzL_-49kp8A6o_AHaHa?w=213&h=213&c=7&r=0&o=7&pid=1.7&rm=3',
    'https://tse1.mm.bing.net/th/id/OIP.h1AssAph21A56-v0f9ll5QHaHa?w=181&h=182&c=7&r=0&o=7&pid=1.7&rm=3'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0

const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

// Select buttons
const prevButton = document.querySelector('#prev')
const nextButton = document.querySelector('#next')

// Button for event listeners
prevButton.addEventListener('click', () => {
    currentImage--
    showImages()
})

nextButton.addEventListener('click', () => {
    currentImage++
    showImages()
})

// Switches the images every 5 seconds
setInterval(() => {
    currentImage++
    showImages()
}, 5000)