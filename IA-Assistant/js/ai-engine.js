// AI Engine Logic

const { HfInference } = require('@huggingface/inference');

// Initialize the Hugging Face Inference API
const hf = new HfInference('YOUR_HUGGING_FACE_API_KEY');

async function generateResponse(input) {
    try {
        const response = await hf.textGeneration({
            model: 'gpt2',
            inputs: input,
        });
        return response;
    } catch (error) {
        console.error('Error generating response:', error);
        throw error;
    }
}

module.exports = { generateResponse };