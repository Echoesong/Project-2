const Icebreaker = require('../models/Icebreaker')

module.exports = {
    create, 
    edit, 
    update,
    delete: destroy
}

function create(req, res){
    Icebreaker.findById(req.params.id)
    .then( function(icebreaker){
        console.log("req body:", req.body)
        icebreaker.answers.push(req.body)
        return icebreaker.save()
    })
    .then( function (icebreaker){
        res.redirect(`/icebreakers/${req.params.id}`)
    })
    .catch( function(err){
        console.log(err)
        res.redirect('/')
    })
}

function edit(req, res){
    let foundAnswer, foundIcebreaker

    Icebreaker.findOne({'answers._id': req.params.id})
    .then( function(icebreaker) {
        foundIcebreaker = icebreaker
        return foundAnswer = icebreaker.answers.id(req.params.id)
    })
    .then( function() {
        console.log(foundAnswer)
        res.render('responses/edit', {
            title: "Edit Answer", 
            answer: foundAnswer, 
            icebreaker: foundIcebreaker
        })
    })
    .catch( function(err){
        console.log(err)
        res.redirect('/')
    })
}

function update(req, res){
    let foundIcebreaker

    Icebreaker.findOne({'answers._id': req.params.id})
    .then( function(icebreaker) {
        return foundIcebreaker = icebreaker
    })
    .then( function() {
        return foundIcebreaker.answers.remove(req.params.id)
    })
    .then( function() {
        foundIcebreaker.answers.push(req.body)
        return foundIcebreaker.save()
    })
    .then( function() {
        res.redirect(`/icebreakers/${foundIcebreaker._id}`)
    })
    .catch(function (err) {
        console.log(err)
        res.redirect('/')
    })
}

function destroy(req, res){
    let foundIcebreaker

    Icebreaker.findOne({'answers._id': req.params.id})
    .then( function(icebreaker) {
        return foundIcebreaker = icebreaker
    })
    .then( function() {
        return foundIcebreaker.answers.remove(req.params.id)
    })
    .then( function(){
        return foundIcebreaker.save()
    })
    .then( function() {
        return res.redirect(`/icebreakers/${foundIcebreaker._id}`)
    })
    .catch( function(err){
        console.log(err)
        res.redirect('/icebreakers')
    })
}