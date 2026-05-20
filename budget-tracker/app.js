const form = document.getElementById('expense-form');
const list = document.getElementById('list');
const desc = document.getElementById('desc');
const amount = document.getElementById('amount');

function load() {
  const items = JSON.parse(localStorage.getItem('expenses') || '[]');
  list.innerHTML = '';
  items.forEach((it, i) => {
    const li = document.createElement('li');
    li.textContent = `${it.desc} — $${it.amount}`;
    const del = document.createElement('button');
    del.textContent = 'Delete';
    del.onclick = () => { items.splice(i,1); localStorage.setItem('expenses', JSON.stringify(items)); load(); };
    li.appendChild(del);
    list.appendChild(li);
  });
}

form.onsubmit = e => {
  e.preventDefault();
  const items = JSON.parse(localStorage.getItem('expenses') || '[]');
  items.push({ desc: desc.value, amount: parseFloat(amount.value).toFixed(2) });
  localStorage.setItem('expenses', JSON.stringify(items));
  desc.value = ''; amount.value = '';
  load();
};

load();
