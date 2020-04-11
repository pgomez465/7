let Peer = require('simple-peer')
let socket = io()
const video = document.querySelector('video')
let client = {}

// get video stream
