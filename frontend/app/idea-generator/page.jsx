"use client";
import { useState } from 'react';

const IdeaGenerator = () => {
  const [idea, setIdea] = useState('');

  const generateIdea = async () => {
    // Make an API call to OpenAI to generate social media post content
    // Replace 'YOUR_API_KEY' with your actual OpenAI API key
    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY',
      },
      body: JSON.stringify({
        prompt: 'Generate a social media post about',
        max_tokens: 50, // Maximum number of tokens in the generated text
      }),
    });

    const data = await response.json();
    const generatedIdea = data.choices[0].text.trim();

    setIdea(generatedIdea);
  };

  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Social Media Idea Generator</h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-lg text-gray-700 mb-4">{idea}</p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={generateIdea}
          >
            Generate Idea
          </button>
        </div>
      </div>
    </div>
  );
};

export default IdeaGenerator;
