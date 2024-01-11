function Linux() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Download Jit for Linux</h1>
      <p>Tested extensively on popular Linux distributions. Jit is designed for compatibility and performance.</p>
      <ul className="list-disc pl-5 my-4">
        <li>Supports Ubuntu (20.04 LTS and later), Fedora (32 and later), Debian (10 and later)</li>
        <li>64-bit Processor required</li>
        <li>Minimum 50 MB Free Disk Space</li>
      </ul>
      <a href="download/jit-linux.tar.gz" className="bg-blue-500 text-white py-2 px-4 rounded inline-block">
        Download for Linux
      </a>
    </div>
  );
}

export default Linux;
