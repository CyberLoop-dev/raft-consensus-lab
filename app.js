const count = 5;
let state;
const $ = (id) => document.getElementById(id);
function reset() {
  state = { tick: 0, term: 0, leader: null, sequence: 0, nodes: Array.from({ length: count }, (_, i) => ({ id: i + 1, role: "follower", term: 0, log: [], heartbeat: 0 })), events: ["Cluster initialized with five followers."] };
  render();
}
function event(message) { state.events.unshift("t=" + state.tick + " · " + message); state.events = state.events.slice(0, 35); }
function advance() {
  state.tick += 1;
  if (state.leader !== null) {
    const leader = state.nodes.find((n) => n.id === state.leader);
    leader.heartbeat = state.tick;
    state.nodes.filter((n) => n.id !== state.leader).forEach((n) => { n.term = state.term; n.heartbeat = state.tick; });
    event("Leader " + state.leader + " sent heartbeats.");
  } else if (state.tick % 3 === 0) {
    state.term += 1;
    const candidate = state.nodes[(Math.floor(state.tick / 3) - 1) % count];
    state.leader = candidate.id;
    state.nodes.forEach((n) => { n.term = state.term; n.role = n.id === candidate.id ? "leader" : "follower"; n.heartbeat = state.tick; });
    event("Node " + candidate.id + " won a simplified majority election for term " + state.term + ".");
  }
  render();
}
function append() {
  if (state.leader === null) { event("No leader yet. Advance time until an election occurs."); return render(); }
  state.sequence += 1;
  const command = "set-value-" + state.sequence;
  state.nodes.forEach((n) => n.log.push({ term: state.term, command }));
  event("Leader " + state.leader + " appended and replicated " + command + ".");
  render();
}
function render() {
  $("clock").textContent = state.tick;
  $("term").textContent = state.term;
  $("leader").textContent = state.leader === null ? "None" : "Node " + state.leader;
  $("nodes").innerHTML = state.nodes.map((n) => '<article class="node ' + (n.role === "leader" ? "leader" : "") + '"><div class="id">N' + n.id + '</div><div class="role">' + n.role + '</div><div class="term">Term ' + n.term + '</div><div class="log">' + n.log.length + ' log entries</div></article>').join("");
  $("events").innerHTML = state.events.map((e) => '<div class="event">' + e.replaceAll("&", "&amp;").replaceAll("<", "&lt;") + '</div>').join("");
}
$("tick").addEventListener("click", advance);
$("append").addEventListener("click", append);
$("reset").addEventListener("click", reset);
reset();
