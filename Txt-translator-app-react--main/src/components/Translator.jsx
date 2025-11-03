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
        from: sourceLang,
        to: targetLang,
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
      setTranslatedText(response.data.translation);
    } catch (error) {
      console.error("Translation Error:", error);
      alert("Translation failed. See console for details.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-100 to-blue-200 p-6">
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-10 w-full max-w-2xl transition-all duration-300 hover:shadow-blue-200">
        {/* Header with logo */}
        <div className="flex items-center justify-center mb-8 gap-3">
          <img
            src="/translate.png"
            alt="Translate Logo"
            className="w-10 h-10 object-contain"
          />
          <h1 className="text-4xl font-extrabold text-center text-blue-700">
            Text Translator
          </h1>
        </div>

        {/* Input area */}
        <textarea
          className="w-full p-4 border-2 border-blue-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4 resize-none"
          rows="4"
          placeholder="Enter text to translate..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        {/* Language selector */}
        <div className="flex items-center gap-3 mb-4">
          <select
            className="flex-1 p-3 rounded-2xl border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl transition-all shadow-md hover:shadow-blue-300"
            onClick={translateText}
          >
            <img
              src="/translate-use.png"
              alt="Translate Logo"
              className="w-8 h-8 object-contain"
            />
            Translate
          </button>
        </div>

        {/* Result */}
        <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200 shadow-inner">
          <p className="font-bold text-gray-700 mb-1">Translated Text:</p>
          <p className="text-gray-900 whitespace-pre-line">{translatedText}</p>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-400 mt-8">
          🌍 Translate in your suitable language
        </p>
      </div>
    </div>
  );
};

export default Translator;
