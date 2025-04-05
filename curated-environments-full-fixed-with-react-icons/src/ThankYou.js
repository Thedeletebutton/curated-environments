
export default function ThankYou() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-10 text-center">
      <img src="/logo.png" alt="Logo" className="w-[80px] h-[80px] mb-6" />
      <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
      <p className="text-lg mb-6 max-w-xl">
        We’ve received your message and will be in touch shortly to help you curate your ideal space.
      </p>
      <div className="mb-6">
        <p className="font-semibold mb-2">Connect with us:</p>
        <div className="flex flex-wrap justify-center gap-4 text-blue-600 text-lg">
          <a href="https://www.instagram.com/CuratedEnvironments" target="_blank" className="hover:underline">Instagram</a>
          <a href="https://www.youtube.com/@CuratedEnvironments" target="_blank" className="hover:underline">YouTube</a>
          <a href="https://www.facebook.com/CuratedEnvironments" target="_blank" className="hover:underline">Facebook</a>
          <a href="https://www.tiktok.com/@CuratedEnvironments" target="_blank" className="hover:underline">TikTok</a>
          <a href="https://www.twitch.tv/CuratedEnvironments" target="_blank" className="hover:underline">Twitch</a>
        </div>
      </div>
      <a href="/" className="text-blue-600 underline">← Back to Home</a>
    </main>
  );
}
