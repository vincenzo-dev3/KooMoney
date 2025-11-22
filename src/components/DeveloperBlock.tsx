"use client";

import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

const codeSnippet = `// The Koo SDK
import { Koo } from '@justkoo/sdk';

await Koo.send({
  to: "@elon",
  amount: 1000,
  token: "HBAR"
});`;

export const DeveloperBlock = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="developers" className="py-24 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                Build with Koo Actions.
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Build the next viral Hedera app with Koo Actions. Integrate tipping, 
                gifting, and payments with just a few lines of code.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-slate-900 text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Read the Docs
              </motion.button>
            </motion.div>
          </div>

          {/* Code Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="bg-slate-900 rounded-2xl p-6 shadow-2xl relative group overflow-hidden border border-slate-800">
              {/* Window Controls */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              {/* Copy Button */}
              <button
                onClick={handleCopy}
                className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors bg-white/5 p-2 rounded-lg"
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </button>

              {/* Code */}
              <pre className="font-mono text-sm md:text-base overflow-x-auto">
                <code className="language-javascript">
                  {codeSnippet.split('\n').map((line, i) => (
                    <div key={i} className="table-row">
                      <span className="table-cell text-slate-600 select-none pr-4 text-right w-8">{i + 1}</span>
                      <span className="table-cell">
                        {line.trim().startsWith('//') ? (
                          <span className="text-slate-500">{line}</span>
                        ) : (
                          <span className="text-blue-300">
                            {line.split(' ').map((word, wordIndex) => {
                                if (['import', 'from', 'await', 'const'].includes(word)) return <span key={wordIndex} className="text-purple-400">{word} </span>;
                                if (word.startsWith('"') || word.startsWith("'")) return <span key={wordIndex} className="text-green-400">{word} </span>;
                                if (word.includes(':')) return <span key={wordIndex} className="text-sky-300">{word} </span>;
                                if (word.includes('//')) return <span key={wordIndex} className="text-slate-500">{word} </span>;
                                return <span key={wordIndex} className="text-blue-100">{word} </span>;
                            })}
                          </span>
                        )}
                      </span>
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

