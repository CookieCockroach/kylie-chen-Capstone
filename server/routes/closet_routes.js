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

router.get('/tops', async (req, res) => {
    try {
        const data = await knex('clothes').where({ type: 'Top', dirty: false })
        res.status(200).json(data)
    }
    catch (err) {
        console.error(`Error in /tops route: ${err.message}`); 
        res.status(400).send(`Error retrieving Tops: ${err}`)
    }
})

router.get('/bottoms', async (req, res) => {
    try {
        const data = await knex('clothes').where({ type: 'Bottom', dirty: false })
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
            await knex('clothes').where({ cloth_id: item.id }).update({ dirty: false })
        })
        res.status(200).json(data)
    }
    catch (err) {
        res.status(400).send(`Error retrieving Laundry Basket: ${err}`)
    }
})

router.put('/laundry/:cloth_id', async (req, res) => {
    try {
        const data = await knex('clothes').where({ cloth_id: req.params.cloth_id }).update({ dirty: req.body })
        res.status(200).json(data)
    }
    catch (err) {
        res.status(400).send(`Error retrieving Laundry Basket: ${err}`)
    }
})

router.get('/:cloth_id', async (req, res) => {
    try {
        const data = await knex('clothes').where({ cloth_id: req.params.cloth_id }).first()
        if (!data) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.status(200).json(data)
    }
    catch (err) {
        res.status(400).send(`Error retrieving cloth: ${err}`)
    }
})

router.put('/:cloth_id', async (req, res) => {
    try {
        const data = await knex('clothes').where({ cloth_id: req.params.cloth_id }).update(req.body)
        if (!data) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.status(200).json(data)
    }
    catch (err) {
        res.status(400).send(`Error updating cloth: ${err}`)
    }
})

router.delete('/:cloth_id', async (req, res) => {
    try {
        const data = await knex('clothes').where({ cloth_id: req.params.cloth_id }).del()
        if (!data) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.status(204).json(data)
    }
    catch (err) {
        res.status(400).send(`Error deleting cloth: ${err}`)
    }
})


module.exports = router