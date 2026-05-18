'use client';

export default function ConnectPage() {
  return (
    <div className="min-h-screen bg-[#eef0f5] flex flex-col items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-3">Connect</h1>
        <p className="text-gray-500 text-sm">
          Plug into a collective healing experience.
        </p>
        <button className="mt-6 bg-[#3dbf9e] hover:bg-[#33a888] text-white font-bold text-sm px-6 py-2.5 rounded-full shadow-lg transition-all active:scale-95">
          Join us now, it's free!
        </button>
      </div>
    </div>
  );
}