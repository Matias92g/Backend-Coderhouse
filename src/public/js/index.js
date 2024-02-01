const socket = io();

socket.on('prodsData', (data)=> {
    console.log(data)
})