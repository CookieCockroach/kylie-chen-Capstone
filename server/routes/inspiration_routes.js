const axios = require('axios');
const router = require('express').Router();

const APIkey = 'lmwr_sk_YBaHn56COK_Y878Kxc2ldws2GO7nWKrw4A8VrpzoFWazKV8L'

router.post('/api/proxy/image', async (req, res) => {
    try {
        const response = await axios.post(
            'https://api.limewire.com/api/image/generation',
            req.body,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Version': 'v1',
                    Accept: 'application/json',
                    Authorization: `Bearer ${APIkey}`
                }
            }
        );
        res.status(response.status).json(response.data);
    }
    catch (error) {
        console.error('Error proxying request:', error);
        res.status(error.response?.status || 500).json({ error: 'An error occurred.' });
    }
});

module.exports = router