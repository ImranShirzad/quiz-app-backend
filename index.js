const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/quiz', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const questionSchema = new mongoose.Schema({
    question: String,
    options: [String],
    answer: String,
});

const Question = mongoose.model('Question', questionSchema);

// API endpoint to get questions
app.get('/questions', async (req, res) => {
    const questions = await Question.find();
    res.json(questions);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
