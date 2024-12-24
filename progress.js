let totalAmount = 0;

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json({ amount: totalAmount });
    } 
    else if (req.method === 'POST') {
        const amount = req.body.amount;
        totalAmount += amount;
        res.status(200).json({ newAmount: totalAmount });
    }
} 