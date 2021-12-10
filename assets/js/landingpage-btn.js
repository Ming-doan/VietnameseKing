const createRoom = document.querySelector('.create')
const joinRoom = document.querySelector('.join')
const randomRoom = document.querySelector('.random')
const container = document.querySelector('.container')
const overlay = document.querySelector('.overlay')
const guide = document.querySelector('.container.guide-overlay')
const createInput = document.querySelector('.container.room-input-overlay')
const helpBtn = document.querySelector('.help')
const rankBtn = document.querySelector('.rank')
const closeBtn = document.querySelector('.guide i')

joinRoom.addEventListener('click',function() {
    createInput.classList.remove('hidden')
})

overlay.addEventListener('click', function() {
    createInput.classList.add('hidden')
    guide.classList.add('hidden')
})

helpBtn.addEventListener('click', function() {
    guide.classList.remove('hidden')
})

closeBtn.addEventListener('click', function() {
    guide.classList.add('hidden')
})

randomRoom.addEventListener('click', function() {
    location.replace('https://ming-doan.github.io/VietnameseKing/assets/html/gamelauncher.html')
})