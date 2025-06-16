import React, { useCallback, useEffect, useRef, useState } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeSymbol, setIncludeSymbol] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const PasswordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";

    if (includeNumber) str += "1234567890";
    if (includeSymbol) str += "!@#$%^&*()_+-=";

    for (let i = 1; i <= length; i++) {
      let char = str.charAt(Math.floor(Math.random() * str.length + 1));
      pass += char;
    }
    setPassword(pass);
  }, [length, includeNumber, includeSymbol, setPassword]);

  useEffect(() => {
    PasswordGenerator();
  }, [length, includeNumber, includeSymbol, PasswordGenerator]);

  // copy to clipboard function
  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Password Generator
        </h1>
        <p className="text-gray-600">Create secure passwords instantly</p>
      </div>

      <div className="space-y-6">
        <div className="relative flex gap-1">
          <input
            type="text"
            placeholder="Password"
            value={password}
            readOnly
            ref={passwordRef}
            className="w-full px-4 py-4 pr-24 bg-gray-50 border-2 border-gray-200 rounded-xl font-mono text-lg focus:outline-none focus:border-blue-500 transition-colors"
          />
          <button
            onClick={copyToClipboard}
            className="outline-none border-2 border-blue-500 px-3 py-1 rounded-2xl font-bold text-gray-400 hover:bg-blue-300 hover:text-black"
          >
            copy
          </button>
        </div>

        {/* Length Slider */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label htmlFor="length" className="text-gray-700 font-medium">
              Password Length
            </label>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
              {length}
            </span>
          </div>
          <input
            type="range"
            min={8}
            max={50}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>8</span>
            <span>50</span>
          </div>
        </div>

        {/* Checkboxes */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            <input
              type="checkbox"
              id="numbers"
              defaultChecked={includeNumber}
              onChange={(e) => {
                setIncludeNumber(e.target.checked);
              }}
              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="numbers"
              className="flex-1 text-gray-700 font-medium cursor-pointer"
            >
              Include Numbers
              <span className="block text-sm text-gray-500">0123456789</span>
            </label>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            <input
              type="checkbox"
              id="symbols"
              defaultChecked={includeSymbol}
              onChange={(e) => setIncludeSymbol(e.target.checked)}
              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="symbols"
              className="flex-1 text-gray-700 font-medium cursor-pointer"
            >
              Include Symbols
              <span className="block text-sm text-gray-500">
                !@#$%^&*()_+-=
              </span>
            </label>
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={PasswordGenerator}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Generate New Password
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
