const displayEl = document.getElementById("display");
const keysEl = document.querySelector(".keys");

const state = {
  input: "0", // string we are typing
  acc: null, // number
  op: null, // "+", "−", "×", "÷"
  resetInput: false, // next digit starts fresh
  error: false,
};

function toNumber(str) {
  const n = Number(str);
  if (!Number.isFinite(n)) throw new Error("Invalid number");
  return n;
}

function formatNumber(n) {
  if (!Number.isFinite(n)) throw new Error("Invalid result");
  const abs = Math.abs(n);
  if (abs !== 0 && (abs >= 1e12 || abs < 1e-9)) {
    return n.toExponential(6).replace(/(\.\d*?[1-9])0+e/, "$1e").replace(/\.0+e/, "e");
  }
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 9 }).format(n);
}

function setDisplay(text) {
  displayEl.textContent = text;
}

function setError() {
  state.error = true;
  state.input = "0";
  state.acc = null;
  state.op = null;
  state.resetInput = true;
  setDisplay("Error");
}

function clearAll() {
  state.input = "0";
  state.acc = null;
  state.op = null;
  state.resetInput = false;
  state.error = false;
  setDisplay("0");
}

function applyOp(a, op, b) {
  switch (op) {
    case "+":
      return a + b;
    case "−":
      return a - b;
    case "×":
      return a * b;
    case "÷":
      if (b === 0) throw new Error("Divide by zero");
      return a / b;
    default:
      return b;
  }
}

function commitPendingOperation(nextOp = null) {
  const current = toNumber(state.input);
  if (state.acc === null) {
    state.acc = current;
  } else if (state.op) {
    state.acc = applyOp(state.acc, state.op, current);
    state.input = String(state.acc);
  } else {
    state.acc = current;
  }
  state.op = nextOp;
  state.resetInput = true;
  setDisplay(formatNumber(toNumber(state.input)));
}

function pressDigit(d) {
  if (state.error) clearAll();

  if (state.resetInput) {
    state.input = d;
    state.resetInput = false;
    setDisplay(d);
    return;
  }

  if (state.input === "0") {
    state.input = d;
  } else {
    if (state.input.length < 16) state.input += d;
  }
  setDisplay(state.input);
}

function pressDecimal() {
  if (state.error) clearAll();

  if (state.resetInput) {
    state.input = "0.";
    state.resetInput = false;
    setDisplay(state.input);
    return;
  }

  if (!state.input.includes(".")) {
    state.input += ".";
    setDisplay(state.input);
  }
}

function pressSign() {
  if (state.error) return clearAll();

  if (state.input === "0") return;
  state.input = state.input.startsWith("-") ? state.input.slice(1) : `-${state.input}`;
  setDisplay(state.input);
}

function pressPercent() {
  if (state.error) return clearAll();

  const current = toNumber(state.input);
  const base = state.op && state.acc !== null ? state.acc : 1;
  const result = (base * current) / 100;
  state.input = String(result);
  setDisplay(formatNumber(result));
}

function pressOp(op) {
  if (state.error) return clearAll();
  commitPendingOperation(op);
}

function pressEquals() {
  if (state.error) return clearAll();
  if (!state.op) {
    setDisplay(formatNumber(toNumber(state.input)));
    state.resetInput = true;
    return;
  }
  commitPendingOperation(null);
  state.op = null;
}

keysEl.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;

  try {
    const action = btn.dataset.action;
    if (action === "digit") return pressDigit(btn.dataset.digit);
    if (action === "decimal") return pressDecimal();
    if (action === "clear") return clearAll();
    if (action === "sign") return pressSign();
    if (action === "percent") return pressPercent();
    if (action === "op") return pressOp(btn.dataset.op);
    if (action === "equals") return pressEquals();
  } catch (err) {
    setError();
  }
});

// Optional keyboard support (simple)
document.addEventListener("keydown", (e) => {
  try {
    const k = e.key;
    if (k >= "0" && k <= "9") return pressDigit(k);
    if (k === ".") return pressDecimal();
    if (k === "Escape") return clearAll();
    if (k === "Enter" || k === "=") return pressEquals();
    if (k === "+") return pressOp("+");
    if (k === "-") return pressOp("−");
    if (k === "*") return pressOp("×");
    if (k === "/") return pressOp("÷");
    if (k === "%") return pressPercent();
  } catch (err) {
    setError();
  }
});

