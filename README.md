 <p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f172a,100:0d9488&height=180&section=header&text=Raft%20Consensus%20Lab&fontColor=ffffff&fontSize=38" alt="Raft Consensus Lab banner" />
  <br/>
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=21&duration=2600&pause=700&center=true&vCenter=true&width=620&lines=Explore+distributed+consensus;Step+through+leader+elections;Watch+replicated+logs+in+action" alt="Animated project title" />
  <br/>
  <img src="https://img.shields.io/github/license/CyberLoop-dev/raft-consensus-lab" alt="MIT license" />
  <img src="https://img.shields.io/github/languages/top/CyberLoop-dev/raft-consensus-lab" alt="Top language" />
  <img src="https://img.shields.io/github/stars/CyberLoop-dev/raft-consensus-lab" alt="GitHub stars" />
  <img src="https://img.shields.io/github/last-commit/CyberLoop-dev/raft-consensus-lab" alt="Last commit" />
  <br/>
  <img src="assets/mark.svg" width="210" alt="Raft cluster illustration" />
</p>

## 🧭 Overview

Raft Consensus Lab is a small, deterministic browser simulation that makes the core ideas of leader-based replication visible. Advance logical time, trigger an election, and append a command to see the leader and followers update.

## ✨ Features

- 🗳️ Step through simplified leader elections.
- 💓 See heartbeat activity and term changes.
- 📚 Append a command and replicate it across the cluster.
- 🧪 Reset the simulation to repeat the same scenario.
- 🔒 Runs locally without accounts, uploads, or external libraries.

## 🎬 Demo

Start the local server and use **Tick**, **Append command**, and **Reset**. The interface renders the cluster state and event history live; no hosted demo is claimed.

## 🚀 Quick Start

Requires Node.js 18 or newer.

```bash
npm start
```

Open http://localhost:4173 in your browser.

## 🧰 Tech Stack

- 🟢 Node.js built-in HTTP server
- 🌐 HTML, CSS, and browser JavaScript
- 📦 No third-party runtime dependencies

## 🗂️ Folder Structure

```text
raft-consensus-lab/
├── assets/mark.svg
├── app.js
├── index.html
├── server.js
├── package.json
├── README.md
├── LICENSE
└── .gitignore
```

## 🛣️ Roadmap

- [ ] Add controllable network partitions.
- [ ] Visualize quorum and commit indexes.
- [ ] Add configurable election timeouts.

## 🤝 Contributing

Issues and pull requests are welcome. Keep changes small, explain the behavior being changed, and test the local workflow with `npm start`.

## 📄 License

Released under the MIT License. See [LICENSE](LICENSE).

<p align="center"><img src="https://capsule-render.vercel.app/api?type=waving&color=0:0d9488,100:0f172a&height=105&section=footer" alt="Wave footer" /></p>
