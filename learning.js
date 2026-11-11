const key = 'ufufu-learning-journal-v1';
const starter = [{ id: 'starter', date: '2026-11-10', topic: '学习笔记', title: '从这里开始记录', body: '每一次实践与思考，都是下一次进步的起点。之后可以在这里记下概念、实验结果和问题排查过程。' }];
const list = document.querySelector('#journal-list');
const form = document.querySelector('#entry-form');
const filter = document.querySelector('#topic-filter');
const count = document.querySelector('#entry-count');
const message = document.querySelector('#form-message');
const read = () => { try { return JSON.parse(localStorage.getItem(key)) || starter; } catch { return starter; } };
let entries = read();
const fmt = (value) => { const date = new Date(`${value}T12:00:00`); return Number.isNaN(date.getTime()) ? value : new Intl.DateTimeFormat('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' }).format(date); };
function render() {
  const visible = entries.filter((entry) => filter.value === 'all' || entry.topic === filter.value);
  count.textContent = String(entries.length).padStart(2, '0');
  list.replaceChildren();
  if (!visible.length) { const empty = document.createElement('p'); empty.className = 'empty-state'; empty.textContent = '这个主题还没有记录。'; list.append(empty); return; }
  visible.slice().sort((a, b) => b.date.localeCompare(a.date)).forEach((entry) => {
    const article = document.createElement('article'); article.className = 'journal-entry';
    const date = document.createElement('time'); date.className = 'journal-date'; date.dateTime = entry.date; date.textContent = fmt(entry.date);
    const content = document.createElement('div'); content.className = 'journal-content';
    const topic = document.createElement('span'); topic.className = 'learning-category'; topic.textContent = entry.topic;
    const title = document.createElement('h3'); title.textContent = entry.title;
    const body = document.createElement('p'); body.textContent = entry.body;
    content.append(topic, title, body); article.append(date, content);
    if (entry.id !== 'starter') { const remove = document.createElement('button'); remove.className = 'delete-entry'; remove.type = 'button'; remove.textContent = '删除'; remove.setAttribute('aria-label', `删除记录：${entry.title}`); remove.addEventListener('click', () => { entries = entries.filter((item) => item.id !== entry.id); localStorage.setItem(key, JSON.stringify(entries)); render(); }); article.append(remove); }
    list.append(article);
  });
}
filter.addEventListener('change', render);
form.elements.date.value = new Date().toISOString().slice(0, 10);
form.addEventListener('submit', (event) => {
  event.preventDefault(); const data = new FormData(form);
  const entry = { id: crypto.randomUUID(), title: String(data.get('title')).trim(), date: String(data.get('date')), topic: String(data.get('topic')), body: String(data.get('body')).trim() };
  if (!entry.title || !entry.body) return;
  entries.push(entry); localStorage.setItem(key, JSON.stringify(entries)); form.reset(); form.elements.date.value = new Date().toISOString().slice(0, 10); message.textContent = '已保存在此浏览器'; render(); window.setTimeout(() => { message.textContent = ''; }, 3200);
});
render();
