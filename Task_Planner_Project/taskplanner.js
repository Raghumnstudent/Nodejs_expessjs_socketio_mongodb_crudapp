const _ = require('lodash')
const fs = require('fs')
const { upperCase } = require('lodash')

var items = []


function adding(item){
    var item = upperCase(item)
    items.push(item)
    // fs.appendFileSync('tasks.txt',`\nList of tasks are doing today  \n\n`)
    // for(let i=0;i<items.length;i++){
    //     fs.appendFileSync('tasks.txt',`${items[i]}\n`)
    // }
}


function delelting(name){
    var name = upperCase(name)
    deleted_items = _.remove(items, function(n) { 
            return n==name;}) 
            // remove method take array and pass element one by one into function, then if  it return true, it remove element from array(items) and added to new array(deleted_items)
            //now in deleted_items array contain the deleted items
}


function listalltask(){
    // fs.appendFileSync('tasks.txt','\n-----------------------------\n')
    fs.appendFileSync('tasks.txt','\nUpdated List of tasks are doing today \n\n')
    for(let i=0;i<items.length;i++){
        fs.appendFileSync('tasks.txt',`${items[i]}\n`)
    }
    console.log(items)
}



//adding and deleting the elements from list
adding('working on Project')
adding('learning new concepts of html5')
adding('Attending the meeting')
adding('Need to talk with Manager')
delelting('Attending the meeting')
adding('going to shopping')
adding('Money Transfer to Home')
delelting('going to shopping')

// Showing the updated allTask
listalltask()
