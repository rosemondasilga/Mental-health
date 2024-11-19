import express from 'express';

const router = express.Router();

// Mock assessment endpoint
router.post('/', (req, res) => {
    const { answers } = req.body;

    // Input validation
    if (!answers || !Array.isArray(answers)) {
        return res.status(400).json({ error: 'Invalid input' });
    }

    // Calculate score
    const score = answers.reduce((acc, val) => acc + val, 0);

    // Example response based on score
    let result;
    if (score > 80) result = 'High';
    else if (score > 50) result = 'Medium';
    else result = 'Low';

    return res.json({ score, result });
});

export default router;
