let userAddress = "";

async function connectWallet() {
    if (!window.ethereum) {
        alert("Install MetaMask");
        return;
    }

    const accounts = await ethereum.request({
        method: 'eth_requestAccounts'
    });

    userAddress = accounts[0];
    alert("Connected: " + userAddress);
}

async function mintNFT() {
    if (!userAddress) {
        alert("Connect wallet first!");
        return;
    }

    const nft = {
        name: "My NFT",
        owner: userAddress
    };

    await fetch("https://your-backend-url/mint", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(nft)
    });

    alert("NFT Minted!");
    loadNFTs();
}

async function loadNFTs() {
    const res = await fetch("https://your-backend-url/nfts");
    const data = await res.json();

    const list = document.getElementById("nftList");
    list.innerHTML = "";

    data.forEach(nft => {
        const li = document.createElement("li");
        li.innerText = nft.name + " - " + nft.owner;
        
