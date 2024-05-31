import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(randomMessage());

  return (
    <div className="mb-2">
      <h3 className="mb-2 text-2xl font-bold">{greeting}, Thank you for visiting!</h3>
      <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 rounded-lg text-white font-semibold mb-1" onClick={() => setGreeting(randomMessage())}>
        New greting
      </button>
    </div>
  );
}
