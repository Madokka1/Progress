let progress = 0;

export default function handler(req, res) {
    // Настройка CORS для Tilda
    res.setHeader('Access-Control-Allow-Origin', 'https://matroskin-perm.ru');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'GET') {
        res.status(200).json({ success: true, amount: progress });
    } 
    else if (req.method === 'POST') {
        const { amount } = req.body;
        progress += parseInt(amount);
        res.status(200).json({ success: true, newAmount: progress });
    }
} 
