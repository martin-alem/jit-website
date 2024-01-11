function Windows() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Download Jit for Windows</h1>
      <p>Optimized for 64-bit Windows architectures. Enjoy efficient performance and compatibility with modern hardware.</p>
      <ul className="list-disc pl-5 my-4">
        <li>Supports Windows 10 and 11</li>
        <li>Windows 7 and 8.1: Supported with some limitations</li>
        <li>.NET Framework 4.6.2 or later required</li>
        <li>Minimum 100 MB Free Disk Space</li>
      </ul>
      <a href="download/jit-windows.exe" className="bg-blue-500 text-white py-2 px-4 rounded inline-block">
        Download for Windows
      </a>
    </div>
  );
}

export default Windows;
