const knex = require('knex')(require('../knexfile'));
const router = require('express').Router();

router.post('/', async (req, res) => {
    try {
        const id = await knex('clothes').insert(req.body)
        const data = await knex('clothes').where({ id: id[0] }).first()
        res.status(200).json(data)
    }
    catch (err) {
        res.status(400).send(`Error retrieving Closet: ${err}`)
    }
})

router.put('/:cloth_id', async (req, res) => {
    const id = req.params.cloth_id
    try {
        const data = await knex('clothes').where({ id: id }).update(req.body)
        res.status(200).json(data)
    }
    catch (err) {
        res.status(400).send(`Error retrieving Closet: ${err}`)
    }
})

router.delete('/:cloth_id', async (req, res) => {
    const id = req.params.cloth_id
    try {
        const data = await knex('clothes').where({ id: id }).del()
        res.status(204).json(data)
    }
    catch (err) {
        res.status(400).send(`Error retrieving Closet: ${err}`)
    }
})

router.get('/tops', async (req, res) => {
    try {
        const data = await knex('clothes').where({ type: 'top' })
        res.status(200).json(data)
    }
    catch (err) {
        res.status(400).send(`Error retrieving Tops: ${err}`)
    }
})

router.get('/bottoms', async (req, res) => {
    try {
        const data = await knex('clothes').where({ type: 'bottom' })
        res.status(200).json(data)
    }
    catch (err) {
        res.status(400).send(`Error retrieving Bottoms: ${err}`)
    }
})

router.get('/laundry', async (req, res) => {
    try {
        const data = await knex('clothes').where({ dirty: true })
        res.status(200).json(data)
    }
    catch (err) {
        res.status(400).send(`Error retrieving Laundry Basket: ${err}`)
    }
})

router.put('/laundry', async (req, res) => {
    try {
        const data = await knex('clothes').where({ dirty: true })
        //change the dirty property to false for all items in data
        data.forEach(async (item) => {
            await knex('clothes').where({ id: item.id }).update({ dirty: false })
        })
        res.status(200).json(data)
    }
    catch (err) {
        res.status(400).send(`Error retrieving Laundry Basket: ${err}`)
    }
})

router.put('/laundry/:cloth_id', async (req, res) => {
    const id = req.params.cloth_id
    try {
        const data = await knex('clothes').where({ id: id }).update({dirty: req.body})
        res.status(200).json(data)
    }
    catch (err) {
        res.status(400).send(`Error retrieving Laundry Basket: ${err}`)
    }
})
