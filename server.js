const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = __dirname;
const port = Number(process.env.PORT || 4173);
const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".svg": "image/svg+xml" };

http.createServer((req, res) => {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405, { "content-type": "text/plain; charset=utf-8" });
    return res.end("Method not allowed");
  }
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname); }
  catch { res.writeHead(400); return res.end("Bad request"); }
  if (pathname === "/") pathname = "/index.html";
  const target = path.resolve(root, "." + pathname);
  if (!target.startsWith(root + path.sep) && target !== root) {
    res.writeHead(403); return res.end("Forbidden");
  }
  fs.stat(target, (error, stat) => {
    if (error || !stat.isFile()) { res.writeHead(404); return res.end("Not found"); }
    res.writeHead(200, { "content-type": types[path.extname(target)] || "application/octet-stream", "cache-control": "no-store" });
    if (req.method === "HEAD") return res.end();
    fs.createReadStream(target).pipe(res);
  });
}).listen(port, "127.0.0.1", () => console.log("Raft Consensus Lab: http://localhost:" + port));
