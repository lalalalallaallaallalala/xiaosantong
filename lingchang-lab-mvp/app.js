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

const ELEMENT_NAMES = ['木', '火', '土', '金', '水'];
const VISUAL_MOTIFS = [
  { name: 'moon-garden', label: '月光花园' },
  { name: 'celestial-portal', label: '星象门户' },
  { name: 'floating-bloom', label: '漂浮花束' },
  { name: 'orbit-ribbon', label: '轨道丝带' },
  { name: 'deep-constellation', label: '深海星群' }
];
const WALLPAPER_LIBRARY = [
  { id: 'moon-garden-01', name: '月光花园', elements: ['水', '金'], scene: 'moon-garden', orbMode: 'moon' },
  { id: 'petal-field-01', name: '漂浮花野', elements: ['木', '土'], scene: 'petal-field', orbMode: 'flower' },
  { id: 'celestial-portal-01', name: '星象门户', elements: ['金', '水'], scene: 'portal', orbMode: 'portal' },
  { id: 'silk-ribbon-01', name: '星河丝带', elements: ['火', '木'], scene: 'silk-ribbon', orbMode: 'small' },
  { id: 'deep-constellation-01', name: '深海星群', elements: ['水'], scene: 'constellation', orbMode: 'halo' },
  { id: 'water-mirror-01', name: '月下水镜', elements: ['水', '土'], scene: 'water-mirror', orbMode: 'moon' },
  { id: 'aurora-bloom-01', name: '极光花冠', elements: ['木', '火'], scene: 'aurora', orbMode: 'flower' },
  { id: 'golden-gate-01', name: '金色入口', elements: ['火', '金'], scene: 'golden-gate', orbMode: 'portal' },
  { id: 'mist-lotus-01', name: '雾中莲心', elements: ['土', '水'], scene: 'mist-lotus', orbMode: 'flower' },
  { id: 'starfall-01', name: '星尘落幕', elements: ['火', '金'], scene: 'starfall', orbMode: 'small' },
  { id: 'botanical-orbit-01', name: '植物轨道', elements: ['木'], scene: 'botanical-orbit', orbMode: 'flower' },
  { id: 'violet-tide-01', name: '紫色潮汐', elements: ['金', '水'], scene: 'violet-tide', orbMode: 'halo' }
];
const ELEMENT_VISUALS = {
  木: { cssPalette: 'pastel', colors: ['#fff8ef', '#d8e9dd', '#b7dcd2', '#f4e8ef', '#f4c8d2'], motion: '轻柔生长' },
  火: { cssPalette: 'amber', colors: ['#ffe9b5', '#dfa08c', '#a86e82', '#302849', '#fff1cb'], motion: '暖光扩散' },
  土: { cssPalette: 'pastel', colors: ['#f3e3cb', '#d1c2b0', '#b18fa3', '#555875', '#fff5dc'], motion: '缓慢呼吸' },
  金: { cssPalette: 'lavender', colors: ['#f7f3ec', '#d9d5e7', '#b8a7cf', '#38385f', '#fff6d8'], motion: '月光闪烁' },
  水: { cssPalette: 'indigo', colors: ['#bddaff', '#718bd0', '#263675', '#09112e', '#d7edff'], motion: '深海流动' }
};

function hashText(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) { hash ^= value.charCodeAt(index); hash = Math.imul(hash, 16777619); }
  return hash >>> 0;
}

function seededRandom(seed) {
  let value = seed >>> 0;
  return () => { value += 0x6D2B79F5; let result = value; result = Math.imul(result ^ result >>> 15, result | 1); result ^= result + Math.imul(result ^ result >>> 7, result | 61); return ((result ^ result >>> 14) >>> 0) / 4294967296; };
}

function buildVisualRecipe(strongest) {
  const profileText = JSON.stringify(state.profile || {});
  const seed = hashText(`${state.answers.join(',')}|${state.intention}|${profileText}`);
  const random = seededRandom(seed);
  const elementScores = [0, 0, 0, 0, 0];
  state.answers.forEach((answer, index) => { const main = (index * 3 + answer * 2 + seed) % 5; elementScores[main] += 1; elementScores[(main + 1) % 5] += .22; });
  if (state.profile?.birthDate) { const date = new Date(`${state.profile.birthDate}T12:00:00`); const month = Number.isNaN(date.getTime()) ? 0 : date.getMonth() + 1; elementScores[(month + seed) % 5] += 1.7; }
  if (state.profile?.birthTime) { const hour = Number(state.profile.birthTime.split(':')[0]) || 0; elementScores[(hour + seed) % 5] += 1.1; }
  const primaryIndex = elementScores.indexOf(Math.max(...elementScores));
  const element = ELEMENT_NAMES[primaryIndex];
  const visual = ELEMENT_VISUALS[element];
  const compatibleAssets = WALLPAPER_LIBRARY.filter((asset) => asset.elements.includes(element));
  const asset = compatibleAssets[Math.floor(random() * compatibleAssets.length)] || WALLPAPER_LIBRARY[Math.floor(random() * WALLPAPER_LIBRARY.length)];
  const motif = VISUAL_MOTIFS.find((item) => item.name === asset.scene) || VISUAL_MOTIFS[Math.floor(random() * VISUAL_MOTIFS.length)];
  const stars = Array.from({ length: 22 + Math.floor(random() * 16) }, () => ({ x: .08 + random() * .84, y: .06 + random() * .86, size: .35 + random() * .95, phase: random() * Math.PI * 2, tint: random() }));
  const petals = Array.from({ length: 5 + Math.floor(random() * 7) }, () => ({ x: .12 + random() * .76, y: .2 + random() * .62, size: .4 + random() * .8, rotation: random() * Math.PI, phase: random() * Math.PI * 2 }));
  return { seed, element, elementScores, cssPalette: visual.cssPalette, colors: visual.colors, motion: visual.motion, motif: motif.name, motifLabel: motif.label, assetId: asset.id, assetName: asset.name, asset, stars, petals, ringCount: 3 + Math.floor(random() * 3), orbitTilt: -38 + random() * 80, speed: .7 + random() * .8, orbScale: .94 + random() * .1, energyType: ['展开', '流动', '落地', '滋养'][strongest] };
}

function populateResult() {
  const strongest = state.scores.indexOf(Math.max(...state.scores));
  const profiles = [
    { score: 81, keywords: '勇气 · 展开 · 被看见', message: '你正在从“等待确定”走向“允许开始”。' },
    { score: 78, keywords: '流动 · 信任 · 丰盛', message: '你正在从“用力证明”走向“允许发生”。' },
    { score: 84, keywords: '聚焦 · 落地 · 成长', message: '你正在从“想得更多”走向“把愿望变成一步”。' },
    { score: 76, keywords: '柔软 · 安定 · 滋养', message: '你正在从“独自撑住”走向“让自己也被照顾”。' }
  ];
  const resultProfile = profiles[strongest];
  const recipe = buildVisualRecipe(strongest);
  resultProfile.recipe = recipe;
  $('#energy-score').textContent = resultProfile.score;
  $('#energy-keywords').textContent = resultProfile.keywords;
  const energyCard = $('.energy-card');
  energyCard.querySelector('.muted').textContent = resultProfile.message;
  $('#recipe-note').textContent = `素材库抽取：${recipe.assetName} · ${recipe.element} · ${recipe.motion}`;
  const ring = $('.energy-ring');
  ring.style.background = `radial-gradient(circle at center,transparent 54%,rgba(237,200,149,.1) 55%,rgba(237,200,149,.1) 56%,transparent 57%),conic-gradient(var(--gold) 0 ${resultProfile.score}%,rgba(248,244,238,.08) ${resultProfile.score}% 100%)`;
  $('.meter span').style.width = `${resultProfile.score}%`;
  const art = $('#wallpaper-art');
  art.dataset.palette = recipe.cssPalette;
  art.dataset.motif = recipe.motif;
  art.style.setProperty('--orbit-tilt', `${recipe.orbitTilt}deg`);
  art.style.setProperty('--orbit-tilt-neg', `${-recipe.orbitTilt}deg`);
  art.style.setProperty('--constellation-tilt', `${recipe.orbitTilt * -.55}deg`);
  art.style.setProperty('--orb-scale', recipe.orbScale);
  art.style.setProperty('--motion-speed', `${recipe.speed}s`);
  art.classList.add('motion-on');
  state.resultProfile = resultProfile;
  state.visualRecipe = recipe;
  const previewCanvas = $('#wallpaper-canvas');
  if (previewCanvas) { previewCanvas.width = 1170; previewCanvas.height = 2532; }
  const badge = $('#wallpaper-library-badge');
  if (badge) badge.textContent = `素材库 · ${recipe.assetName}`;
  startWallpaperPreview();
}

$('#download-wallpaper').addEventListener('click', () => { downloadWallpaper(); showToast('正在保存你的专属显化壁纸'); });
$('#download-motion').addEventListener('click', downloadMotionWallpaper);
$('#buy-button').addEventListener('click', () => showToast('这是演示入口：正式上线后可替换为电商平台商品链接'));

function wallpaperColors() { return state.visualRecipe?.colors || ELEMENT_VISUALS.水.colors; }

function drawSoftPetal(ctx, x, y, size, rotation, color, alpha) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(rotation); ctx.globalAlpha = alpha; ctx.fillStyle = color; ctx.beginPath(); ctx.ellipse(0, 0, 12 * size, 27 * size, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore(); ctx.globalAlpha = 1;
}

function drawLibraryScene(ctx, recipe, colors, width, height, cx, cy, time, speed) {
  const scene = recipe.asset?.scene || recipe.motif;
  ctx.save();
  ctx.lineCap = 'round';
  if (scene === 'moon-garden' || scene === 'water-mirror') {
    ctx.strokeStyle = colors[4] + '90'; ctx.lineWidth = 4;
    for (let stem = 0; stem < 5; stem += 1) { ctx.beginPath(); ctx.moveTo(130 + stem * 230, 1770); ctx.bezierCurveTo(160 + stem * 220, 1550, 240 + stem * 175, 1390, 265 + stem * 150, 1160); ctx.stroke(); }
    for (let bloom = 0; bloom < 10; bloom += 1) drawSoftPetal(ctx, 165 + (bloom % 5) * 220, 1320 + Math.floor(bloom / 5) * 250, .32, bloom * .47, colors[4], .42);
    if (scene === 'water-mirror') { ctx.strokeStyle = colors[0] + '70'; ctx.lineWidth = 3; for (let wave = 0; wave < 7; wave += 1) { ctx.beginPath(); ctx.ellipse(cx, 1900 + wave * 48, 420 - wave * 28, 44 + wave * 5, 0, 0, Math.PI * 2); ctx.stroke(); } }
  }
  if (scene === 'petal-field' || scene === 'mist-lotus') {
    for (let petal = 0; petal < 24; petal += 1) { const x = 80 + ((petal * 193) % 1010); const y = 330 + ((petal * 317) % 1730); drawSoftPetal(ctx, x + Math.sin(time * .25 * speed + petal) * 16, y, .24 + (petal % 4) * .08, petal * .52 + time * .03, petal % 2 ? colors[4] : '#fff7f4', .42); }
    if (scene === 'mist-lotus') { ctx.strokeStyle = colors[0] + '68'; ctx.lineWidth = 3; for (let wave = 0; wave < 5; wave += 1) { ctx.beginPath(); ctx.ellipse(cx, 1790 + wave * 42, 300 + wave * 46, 35 + wave * 7, 0, 0, Math.PI * 2); ctx.stroke(); } }
  }
  if (scene === 'portal' || scene === 'golden-gate') {
    ctx.strokeStyle = colors[4] + '9c'; ctx.lineWidth = 5;
    for (let gate = 0; gate < 5; gate += 1) { ctx.beginPath(); ctx.ellipse(cx, cy, 280 + gate * 88, 450 + gate * 112, recipe.orbitTilt * Math.PI / 180 + gate * .04, 0, Math.PI * 2); ctx.stroke(); }
    ctx.fillStyle = colors[4] + '45'; ctx.beginPath(); ctx.arc(cx, cy, 92 + Math.sin(time * speed) * 8, 0, Math.PI * 2); ctx.fill();
  }
  if (scene === 'silk-ribbon' || scene === 'violet-tide' || scene === 'aurora') {
    for (let line = 0; line < 11; line += 1) { ctx.strokeStyle = (line % 2 ? colors[4] : '#eff8ff') + '65'; ctx.lineWidth = 4 + (line % 3); ctx.beginPath(); ctx.moveTo(-80, 440 + line * 80); ctx.bezierCurveTo(260, 240 + line * 66, 700, 770 - line * 28, width + 70, 420 + line * 94); ctx.stroke(); }
    if (scene === 'violet-tide') { ctx.strokeStyle = colors[0] + '55'; ctx.lineWidth = 5; for (let wave = 0; wave < 8; wave += 1) { ctx.beginPath(); ctx.ellipse(cx, 1930 + wave * 40, 500 - wave * 20, 48, 0, 0, Math.PI * 2); ctx.stroke(); } }
  }
  if (scene === 'constellation' || scene === 'starfall') {
    ctx.strokeStyle = colors[4] + '72'; ctx.lineWidth = 3;
    for (let link = 0; link < recipe.stars.length - 1; link += 3) { const first = recipe.stars[link]; const second = recipe.stars[Math.min(link + 1, recipe.stars.length - 1)]; ctx.beginPath(); ctx.moveTo(first.x * width, first.y * height); ctx.lineTo(second.x * width, second.y * height); ctx.stroke(); }
    if (scene === 'starfall') { ctx.strokeStyle = '#fff5d6' + '72'; ctx.lineWidth = 5; for (let streak = 0; streak < 12; streak += 1) { const x = 80 + streak * 98; ctx.beginPath(); ctx.moveTo(x, 300 + streak * 92); ctx.lineTo(x - 110, 430 + streak * 92); ctx.stroke(); } }
  }
  if (scene === 'botanical-orbit') {
    ctx.strokeStyle = colors[4] + '82'; ctx.lineWidth = 4;
    for (let stem = 0; stem < 8; stem += 1) { const angle = stem * Math.PI / 4; ctx.beginPath(); ctx.moveTo(cx, cy); ctx.quadraticCurveTo(cx + Math.cos(angle) * 260, cy + Math.sin(angle) * 260, cx + Math.cos(angle) * 510, cy + Math.sin(angle) * 510); ctx.stroke(); drawSoftPetal(ctx, cx + Math.cos(angle) * 490, cy + Math.sin(angle) * 490, .48, angle, colors[4], .55); }
  }
  ctx.restore();
}

function drawWallpaper(ctx, time = 0) {
  const recipe = state.visualRecipe || { colors: ELEMENT_VISUALS.水.colors, stars: [], petals: [], ringCount: 4, orbitTilt: 30, speed: 1, orbScale: 1, motif: 'celestial-portal' };
  const colors = recipe.colors; const width = 1170; const height = 2532; const cx = 585; const cy = 1150; const speed = recipe.speed;
  ctx.clearRect(0, 0, width, height);
  const base = ctx.createLinearGradient(0, 0, width, height); base.addColorStop(0, colors[0]); base.addColorStop(.24, colors[1]); base.addColorStop(.68, colors[2]); base.addColorStop(1, colors[3]); ctx.fillStyle = base; ctx.fillRect(0, 0, width, height);
  const haze = ctx.createRadialGradient(290, 410, 8, 320, 470, 870); haze.addColorStop(0, colors[4] + 'd8'); haze.addColorStop(1, colors[4] + '00'); ctx.fillStyle = haze; ctx.fillRect(0, 0, width, 1500);
  ctx.save(); ctx.translate(cx, cy); ctx.rotate(recipe.orbitTilt * Math.PI / 180 + time * .035 * speed); ctx.strokeStyle = 'rgba(235,245,255,.5)'; ctx.lineWidth = 2; for (let ring = 0; ring < recipe.ringCount; ring += 1) { ctx.globalAlpha = .65 - ring * .1; ctx.beginPath(); ctx.ellipse(0, 0, 720 - ring * 70, 260 + ring * 78, ring * .22, 0, Math.PI * 2); ctx.stroke(); } ctx.restore(); ctx.globalAlpha = 1;
  ctx.save(); ctx.translate(cx, cy); ctx.rotate(-recipe.orbitTilt * Math.PI / 180 - time * .022 * speed); ctx.strokeStyle = 'rgba(228,235,255,.25)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.ellipse(0, 0, 550, 370, 0, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
  drawLibraryScene(ctx, recipe, colors, width, height, cx, cy, time, speed);
  const orbRadius = 310 * recipe.orbScale + Math.sin(time * 1.1 * speed) * 7;
  const orb = ctx.createRadialGradient(500, 930, 30, cx, cy, 370); orb.addColorStop(0, colors[4]); orb.addColorStop(.28, colors[1]); orb.addColorStop(.68, colors[2]); orb.addColorStop(1, colors[3]); ctx.fillStyle = orb; ctx.beginPath(); ctx.arc(cx, cy, orbRadius, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = 'rgba(255,255,255,.4)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(cx, cy, orbRadius * .87 + Math.sin(time * .9) * 5, 0, Math.PI * 2); ctx.stroke(); ctx.strokeStyle = 'rgba(235,245,255,.18)'; ctx.beginPath(); ctx.arc(cx, cy, orbRadius * 1.1, 0, Math.PI * 2); ctx.stroke();
  recipe.stars.forEach((star, index) => { const pulse = .55 + Math.sin(time * 2 * speed + star.phase) * .3; ctx.globalAlpha = pulse; ctx.fillStyle = star.tint > .65 ? colors[4] : '#f2f5ff'; const x = star.x * width + Math.sin(time * .18 * speed + index) * 7; const y = star.y * height + Math.cos(time * .16 * speed + index) * 8; ctx.beginPath(); ctx.arc(x, y, 5 * star.size, 0, Math.PI * 2); ctx.fill(); }); ctx.globalAlpha = 1;
  recipe.petals.forEach((petal, index) => { const x = petal.x * width + Math.sin(time * .3 * speed + petal.phase) * 18; const y = petal.y * height + Math.cos(time * .22 * speed + petal.phase) * 20; drawSoftPetal(ctx, x, y, petal.size, petal.rotation + time * .08, index % 2 ? 'rgba(240,205,221,.54)' : 'rgba(208,237,226,.5)', .7); });
  if (recipe.motif === 'floating-bloom' || recipe.asset?.orbMode === 'flower') { ctx.save(); ctx.translate(cx, cy); for (let petal = 0; petal < 8; petal += 1) { ctx.rotate(Math.PI / 4); drawSoftPetal(ctx, 0, -250, .85, .15, colors[4], .25); } ctx.restore(); }
  if (recipe.asset?.orbMode === 'moon') { ctx.save(); ctx.fillStyle = colors[4] + 'd8'; ctx.beginPath(); ctx.arc(278, 500, 72, 0, Math.PI * 2); ctx.fill(); ctx.globalCompositeOperation = 'destination-out'; ctx.beginPath(); ctx.arc(306, 477, 67, 0, Math.PI * 2); ctx.fill(); ctx.restore(); }
}

let previewFrame;
function startWallpaperPreview() {
  cancelAnimationFrame(previewFrame);
  const canvas = $('#wallpaper-canvas');
  if (!canvas || !state.visualRecipe) return;
  const ctx = canvas.getContext('2d');
  const startedAt = performance.now();
  const renderPreview = (now) => {
    if (result.classList.contains('hidden')) return;
    drawWallpaper(ctx, (now - startedAt) / 1000);
    previewFrame = requestAnimationFrame(renderPreview);
  };
  previewFrame = requestAnimationFrame(renderPreview);
}

function downloadWallpaper() {
  const canvas = document.createElement('canvas'); canvas.width = 1170; canvas.height = 2532; drawWallpaper(canvas.getContext('2d'), 0);
  const link = document.createElement('a'); link.download = 'lingchang-lab-wallpaper.png'; link.href = canvas.toDataURL('image/png'); link.click();
}

function downloadMotionWallpaper() {
  const canvas = document.createElement('canvas'); canvas.width = 1170; canvas.height = 2532;
  if (!canvas.captureStream || !window.MediaRecorder) { showToast('当前浏览器暂不支持动态导出，可先保存静态 PNG'); return; }
  const mime = ['video/webm;codecs=vp9', 'video/webm;codecs=vp8', 'video/webm'].find((type) => MediaRecorder.isTypeSupported(type));
  if (!mime) { showToast('当前浏览器暂不支持动态导出，可先保存静态 PNG'); return; }
  const chunks = []; const recorder = new MediaRecorder(canvas.captureStream(24), { mimeType: mime }); const start = performance.now(); const ctx = canvas.getContext('2d');
  recorder.ondataavailable = (event) => { if (event.data.size) chunks.push(event.data); };
  recorder.onstop = () => { const blob = new Blob(chunks, { type: mime }); const link = document.createElement('a'); link.download = 'lingchang-lab-motion-wallpaper.webm'; link.href = URL.createObjectURL(blob); link.click(); setTimeout(() => URL.revokeObjectURL(link.href), 1000); showToast('动态壁纸已准备好，可以下载'); };
  recorder.start();
  function render(now) { const elapsed = (now - start) / 1000; drawWallpaper(ctx, elapsed); if (elapsed < 6) requestAnimationFrame(render); else recorder.stop(); }
  requestAnimationFrame(render); showToast('正在生成 6 秒轻动态壁纸');
}

let toastTimer;
function showToast(message) { const toast = $('#toast'); toast.textContent = message; toast.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('show'), 3200); }


