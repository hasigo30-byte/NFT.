const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let nfts = [];

// Mint NFT
app.post('/mint', (req, res) => {
    const { name, owner } = req.body;

    const nft = {
        id: nfts.length + 1,
        name,
        owner
    };

    nfts.push(nft);
    res.json(nft);
});

// Get all NFTs
app.get('/nfts', (req, res) => {
    res.json(nfts);
});

app.listen(3000, () => console.log("Server running on port 3000"));
