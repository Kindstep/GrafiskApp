/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

getUsers = async() => {
    console.log('getNotes')
console.log(await window.exposed.getStuffFromMain())
await window.exposed.sendStuffToMain('Stuff from renderer')

const notes = await window.electron.getNotes()
console.log(note)
}
getNotes()

document.querySelector('#btn-login').addEventListener('click', cabinsLogin)


