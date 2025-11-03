import React, { useState } from "react";
import axios from "axios";

const Translator = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("hi");

  const languages = [
    { name: "Hindi", code: "hi" },
    { name: "Marathi", code: "mr" },
    { name: "Bengali", code: "bn" },
    { name: "Tamil", code: "ta" },
    { name: "Telugu", code: "te" },
    { name: "Kannada", code: "kn" },
    { name: "Gujarati", code: "gu" },
    { name: "Malayalam", code: "ml" },
    { name: "Punjabi", code: "pa" },
    { name: "Urdu", code: "ur" },
    { name: "French", code: "fr" },
    { name: "Spanish", code: "es" },
    { name: "German", code: "de" },
  ];

  const translateText = async () => {
    if (!inputText.trim()) {
      alert("Please enter some text.");
      return;
    }

    const options = {
      method: "POST",
      url: "https://free-google-translator.p.rapidapi.com/external-api/free-google-translator",
      params: {
        from: sourceLang, // source language
        to: targetLang, // target language (like "es", "hi", "fr")
        query: inputText,
      },
      headers: {
        "x-rapidapi-key": "061faf86eemsh0c65ab21401233bp169830jsnd85636ed56e9",
        "x-rapidapi-host": "free-google-translator.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: {
        translate: "rapidapi",
      },
    };

    try {
      const response = await axios.request(options);
      console.log("API Response:", response.data);
      setTranslatedText(response.data.translation); // the translated string
    } catch (error) {
      console.error("Translation Error:", error);
      alert("Translation failed. See console for details.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-6">
          🌐 Text Translator
        </h1>

        <textarea
          className="w-full p-4 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
          rows="4"
          placeholder="Enter text in English"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        <select
          className="w-full p-3 rounded-xl border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
          value={targetLang}
          onChange={(e) => setTargetLang(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all"
          onClick={translateText}
        >
          🔁 Translate
        </button>

        <div className="mt-6 p-4 bg-gray-100 rounded-xl border border-gray-300">
          <p className="font-bold text-gray-700 mb-1">Translated Text:</p>
          <p className="text-gray-900 whitespace-pre-line">{translatedText}</p>
        </div>
      </div>
    </div>
  );
};

export default Translator;
