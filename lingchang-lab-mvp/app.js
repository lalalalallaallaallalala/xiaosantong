const questions = [
  { category: '当下状态 · NOW', text: '最近的你，醒来时更接近哪一种感觉？', answers: ['像重新充满电，想开始新的事', '平静，但还需要一点时间进入状态', '脑子里有很多事，不太容易停下来', '有些疲惫，只想先照顾好自己'] },
  { category: '情绪流动 · FLOW', text: '当一个计划没有按预期发生时，你通常会？', answers: ['相信它会以另一种方式回来', '先观察，再决定下一步', '马上找原因，重新安排一遍', '有点失落，需要时间消化'] },
  { category: '接收能力 · RECEIVE', text: '面对一份意料之外的好消息，你会？', answers: ['很自然地接住它，并分享喜悦', '觉得开心，但会确认它是否可靠', '先想想自己是否真的配得上', '有点不知所措，怕好事很快消失'] },
  { category: '关系能量 · RELATION', text: '你最近在人际关系里的能量更像？', answers: ['愿意靠近，也愿意被看见', '保持舒服的距离，慢慢了解', '总是先照顾别人，再想自己', '需要更多独处与边界'] },
  { category: '行动频率 · ACTION', text: '你有一个很想做的事情时，第一反应是？', answers: ['先迈出最小的一步', '把信息搜集清楚再开始', '列出计划，让一切可控', '等自己感觉更有把握一点'] },
  { category: '自我价值 · WORTH', text: '当别人夸奖你的时候，你会？', answers: ['谢谢，并让这份肯定停留一会儿', '开心，但会觉得对方可能只是客气', '马上想到自己还可以做得更好', '不知道该怎么回应，会转移话题'] },
  { category: '直觉信号 · INTUITION', text: '做选择时，你更常依靠？', answers: ['身体和直觉给出的第一感觉', '直觉与现实信息的平衡', '清晰的逻辑和可验证的结果', '身边人的建议与经验'] },
  { category: '丰盛观 · ABUNDANCE', text: '你听到“丰盛”这个词时，最先想到？', answers: ['自由、流动、可以选择的生活', '稳定的收入和有余地的时间', '完成目标，被更多人看见', '内心安定，有人可以彼此支持'] },
  { category: '释放 · RELEASE', text: '你最想从生活里放下的是什么？', answers: ['对结果的过度控制', '反复比较和迟迟不开始', '必须证明自己的压力', '总是为别人负责的习惯'] },
  { category: '未来画面 · VISION', text: '想象六个月后的自己，你最希望看见？', answers: ['一个更勇敢、更自由的我', '一份稳定且有成长的事业', '一段真诚、互相滋养的关系', '更健康的身体和更安静的内心'] },
  { category: '边界 · BOUNDARY', text: '别人把情绪带给你时，你会？', answers: ['理解对方，但知道那不是我的情绪', '先听一听，再决定是否回应', '下意识想帮对方解决问题', '很容易被影响，需要独处恢复'] },
  { category: '专注 · FOCUS', text: '你觉得自己最容易被什么打断？', answers: ['过多的选择和新的灵感', '不确定自己是否走在正确方向', '别人的期待与评价', '疲惫、焦虑或睡眠不足'] },
  { category: '节奏 · RHYTHM', text: '你喜欢怎样的生活节奏？', answers: ['有空间即兴，也有惊喜发生', '规律中留一点自由', '目标清晰、效率优先', '慢一点，跟着身体感觉走'] },
  { category: '显化语言 · WORDS', text: '如果给最近的自己一句话，你会说？', answers: ['你比想象中更有力量', '不用急，一切正在成形', '先开始，答案会在路上出现', '你可以被照顾，也可以休息'] },
  { category: '信念 · BELIEF', text: '当你想要的东西还没有出现时，你更容易？', answers: ['继续保持开放，留意新的可能', '调整期待，确认真正想要什么', '加倍努力，试着让它快一点发生', '怀疑自己是不是还不够好'] },
  { category: '身体 · BODY', text: '最近你的身体最想告诉你什么？', answers: ['去行动，去晒太阳，去接触新鲜空气', '给自己更稳定的作息和饮食', '不要再一直绷着，放松肩膀', '需要真正停下来，好好睡一觉'] },
  { category: '表达 · EXPRESSION', text: '你有一个很好的想法时，会？', answers: ['迫不及待和信任的人分享', '先在心里打磨到满意', '立刻转成计划和待办事项', '担心被评价，所以暂时藏起来'] },
  { category: '允许 · ALLOW', text: '对你来说，“允许好事发生”更像？', answers: ['不再追赶，感受正在拥有的一切', '接受自己不需要掌控每个细节', '承认自己已经做了很多努力', '相信有人和世界愿意支持我'] },
  { category: '关系愿望 · CONNECTION', text: '你希望别人如何感受到你？', answers: ['真实、明亮，让人想靠近', '可靠、舒服，可以放心做自己', '有能力、有想法，值得信赖', '温柔、包容，有安全感'] },
  { category: '能量补给 · RESTORE', text: '什么最容易帮你恢复能量？', answers: ['换个环境，开始一段小冒险', '整理房间、散步、做有秩序的事', '完成一个拖延很久的小目标', '独处、泡澡、听音乐或写下感受'] },
  { category: '行动阻力 · RESISTANCE', text: '你迟迟没有开始的原因通常是？', answers: ['总觉得还有更好的方法', '害怕开始后发现自己做不到', '担心别人不认可或不理解', '能量不够，还没有真正准备好'] },
  { category: '自我信任 · TRUST', text: '你最希望自己更相信什么？', answers: ['自己的直觉和创造力', '事情会在合适的时间展开', '自己有能力照顾好生活', '自己值得被爱、被选择'] },
  { category: '收获 · HARVEST', text: '当一件事终于成功时，你会？', answers: ['马上想把喜悦分享出去', '安静地享受一会儿，再想下一步', '复盘自己做对了什么', '终于松一口气，开始担心下一次'] },
  { category: '愿景 · INTENTION', text: '你现在最想拥有的能量是？', answers: ['勇气：允许自己被世界看见', '稳定：内在有一个可以回去的地方', '丰盛：拥有更多选择与资源', '柔软：不再用力，也能被接住'] },
  { category: '清理 · CLEARING', text: '如果今天可以清理一种杂音，你会选？', answers: ['“我是不是太晚了？”', '“我必须让所有人满意。”', '“我还不够好，所以不能开始。”', '“如果失败了，一切就完了。”'] },
  { category: '机会 · OPENING', text: '新的机会靠近时，你希望自己？', answers: ['敢于回应，而不是先想太多', '看见它的边界，也看见它的可能', '把准备做足，然后稳稳接住', '相信自己不用完美也可以尝试'] },
  { category: '当下选择 · CHOICE', text: '此刻最想送给自己的一个动作？', answers: ['发出一条想发很久的消息', '把今天最重要的一件事完成', '拒绝一个不再适合自己的安排', '去休息，不把休息当作奖励'] },
  { category: '自我叙事 · STORY', text: '你希望未来回头看现在时，觉得自己？', answers: ['终于开始为自己而活', '没有放弃，慢慢走出了自己的路', '把想法变成了真实的生活', '学会不再和自己对抗'] },
  { category: '接收 · RECEIVING', text: '今天如果宇宙只送你一句话，你希望是？', answers: ['你正在被看见，继续发光', '不用着急，你没有错过', '你可以拥有比想象中更多的好事', '你不需要证明，爱和支持本来就存在'] },
  { category: '落地 · GROUNDING', text: '完成这次测试后，你愿意带走什么？', answers: ['一个勇敢开始的念头', '一份更清晰的方向感', '一个每天提醒自己的视觉锚点', '允许自己慢一点的许可'] }
];

const state = { index: 0, scores: [0, 0, 0, 0], answers: [], intention: '我正在开放地接收属于我的丰盛', profile: {} };
const $ = (selector) => document.querySelector(selector);
const intro = $('#quiz-intro');
const quiz = $('#quiz-panel');
const profile = $('#profile-panel');
const loading = $('#loading-panel');
const result = $('#result-panel');

function scrollToId(id) { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
document.querySelectorAll('[data-scroll-to]').forEach((button) => button.addEventListener('click', () => scrollToId(button.dataset.scrollTo)));

$('#start-quiz').addEventListener('click', () => { intro.classList.add('hidden'); quiz.classList.remove('hidden'); renderQuestion(); scrollToId('quiz-shell'); });

function renderQuestion() {
  const question = questions[state.index];
  $('#question-count').textContent = `${String(state.index + 1).padStart(2, '0')} / ${questions.length}`;
  $('#progress-fill').style.width = `${((state.index + 1) / questions.length) * 100}%`;
  $('#question-category').textContent = question.category;
  $('#question-text').textContent = question.text;
  const letters = ['A', 'B', 'C', 'D'];
  $('#answer-list').innerHTML = question.answers.map((answer, index) => `<button class="answer-button" type="button" data-answer="${index}"><span>${letters[index]}</span><b>${answer}</b></button>`).join('');
  document.querySelectorAll('.answer-button').forEach((button) => button.addEventListener('click', () => chooseAnswer(Number(button.dataset.answer))));
}

function chooseAnswer(answerIndex) {
  state.answers.push(answerIndex);
  state.scores[answerIndex] += 1;
  state.index += 1;
  if (state.index < questions.length) { renderQuestion(); return; }
  quiz.classList.add('hidden'); profile.classList.remove('hidden'); scrollToId('quiz-shell');
}

function submitProfile(event) { event.preventDefault(); const data = new FormData(event.currentTarget); state.profile = Object.fromEntries(data.entries()); state.intention = state.profile.intention?.trim() || state.intention; beginGeneration(); }
$('#profile-form').addEventListener('submit', submitProfile);
$('#skip-profile').addEventListener('click', () => { state.profile = {}; beginGeneration(); });

function beginGeneration() {
  profile.classList.add('hidden'); loading.classList.remove('hidden'); scrollToId('quiz-shell');
  const steps = [...document.querySelectorAll('.loading-steps span')];
  steps.forEach((step, index) => setTimeout(() => { steps.forEach((item) => item.classList.remove('active')); step.classList.add('active'); }, index * 650));
  setTimeout(() => { loading.classList.add('hidden'); result.classList.remove('hidden'); populateResult(); scrollToId('quiz-shell'); }, 2350);
}

function populateResult() {
  const strongest = state.scores.indexOf(Math.max(...state.scores));
  const profiles = [
    { score: 81, keywords: '勇气 · 展开 · 被看见', message: '你正在从“等待确定”走向“允许开始”。', gradient: 'violet', phrase: 'I AM READY<br>TO BE SEEN' },
    { score: 78, keywords: '流动 · 信任 · 丰盛', message: '你正在从“用力证明”走向“允许发生”。', gradient: 'green', phrase: 'I AM OPEN<br>TO RECEIVING' },
    { score: 84, keywords: '聚焦 · 落地 · 成长', message: '你正在从“想得更多”走向“把愿望变成一步”。', gradient: 'orange', phrase: 'I TURN<br>VISION INTO FORM' },
    { score: 76, keywords: '柔软 · 安定 · 滋养', message: '你正在从“独自撑住”走向“让自己也被照顾”。', gradient: 'rose', phrase: 'I AM HELD<br>AND SUPPORTED' }
  ];
  const resultProfile = profiles[strongest];
  $('#energy-score').textContent = resultProfile.score;
  $('#energy-keywords').textContent = resultProfile.keywords;
  const energyCard = $('.energy-card');
  energyCard.querySelector('.muted').textContent = resultProfile.message;
  const ring = $('.energy-ring');
  ring.style.background = `radial-gradient(circle at center,transparent 54%,rgba(237,200,149,.1) 55%,rgba(237,200,149,.1) 56%,transparent 57%),conic-gradient(var(--gold) 0 ${resultProfile.score}%,rgba(248,244,238,.08) ${resultProfile.score}% 100%)`;
  $('.meter span').style.width = `${resultProfile.score}%`;
  $('#wallpaper-intention').innerHTML = resultProfile.phrase;
  const art = $('#wallpaper-art');
  art.dataset.palette = resultProfile.gradient;
  art.style.background = palette(resultProfile.gradient);
  state.resultProfile = resultProfile;
}

function palette(name) {
  const palettes = { violet: 'radial-gradient(circle at 30% 26%,#dcb2dd 0,#936fa4 20%,transparent 45%),radial-gradient(circle at 70% 70%,#5b668e 0,#25244e 43%,#111226 78%)', green: 'radial-gradient(circle at 30% 26%,#e0b880 0,#af7485 20%,transparent 45%),radial-gradient(circle at 70% 70%,#57766d 0,#24254d 43%,#111226 78%)', orange: 'radial-gradient(circle at 30% 26%,#f3c178 0,#b66d54 20%,transparent 45%),radial-gradient(circle at 70% 70%,#526a69 0,#262441 43%,#111226 78%)', rose: 'radial-gradient(circle at 30% 26%,#f3b89d 0,#b56d89 20%,transparent 45%),radial-gradient(circle at 70% 70%,#5a6f88 0,#26213f 43%,#111226 78%)' };
  return palettes[name] || palettes.green;
}

$('#download-wallpaper').addEventListener('click', () => { downloadWallpaper(); showToast('正在保存你的显化壁纸预览'); });
$('#buy-button').addEventListener('click', () => showToast('这是演示入口：正式上线后可替换为电商平台商品链接'));

function downloadWallpaper() {
  const canvas = document.createElement('canvas'); canvas.width = 1170; canvas.height = 2532;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createRadialGradient(330, 500, 10, 780, 1850, 1700); gradient.addColorStop(0, '#c8907e'); gradient.addColorStop(.22, '#6e548d'); gradient.addColorStop(.58, '#222446'); gradient.addColorStop(1, '#0d1020'); ctx.fillStyle = gradient; ctx.fillRect(0, 0, canvas.width, canvas.height);
  const glow = ctx.createRadialGradient(330, 450, 10, 330, 450, 650); glow.addColorStop(0, 'rgba(242,204,147,.85)'); glow.addColorStop(1, 'rgba(242,204,147,0)'); ctx.fillStyle = glow; ctx.fillRect(0, 0, canvas.width, 1300);
  ctx.save(); ctx.translate(585, 1150); ctx.rotate(.38); ctx.strokeStyle = 'rgba(237,200,149,.45)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.ellipse(0, 0, 720, 260, 0, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
  ctx.save(); ctx.translate(585, 1150); ctx.rotate(-.7); ctx.strokeStyle = 'rgba(149,189,150,.4)'; ctx.beginPath(); ctx.ellipse(0, 0, 570, 360, 0, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
  const orb = ctx.createRadialGradient(500, 930, 30, 585, 1150, 370); orb.addColorStop(0, '#f0ca8b'); orb.addColorStop(.28, '#bd7793'); orb.addColorStop(.68, '#63519a'); orb.addColorStop(1, '#20213c'); ctx.fillStyle = orb; ctx.beginPath(); ctx.arc(585, 1150, 310, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = 'rgba(255,240,210,.75)'; ctx.font = '18px monospace'; ctx.textAlign = 'center'; ctx.letterSpacing = '5px'; ctx.fillText('MY INTENTION', 585, 1090); ctx.fillStyle = '#fff4df'; ctx.font = '42px serif'; const lines = $('#wallpaper-intention').innerText.split('\n'); lines.forEach((line, index) => ctx.fillText(line, 585, 1180 + index * 68));
  ctx.fillStyle = 'rgba(248,244,238,.75)'; ctx.font = '14px monospace'; ctx.textAlign = 'left'; ctx.fillText('灵场 LAB · PERSONAL FREQUENCY', 70, 2400); ctx.textAlign = 'right'; ctx.fillText('01 / 01', 1100, 2400);
  const link = document.createElement('a'); link.download = 'lingchang-lab-wallpaper.png'; link.href = canvas.toDataURL('image/png'); link.click();
}

let toastTimer;
function showToast(message) { const toast = $('#toast'); toast.textContent = message; toast.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('show'), 3200); }


