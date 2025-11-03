let words = [
      {"hu": "alma", "en": "apple"},
      {"hu": "ház", "en": "house"},
      {"hu": "kutya", "en": "dog"},
      {"hu": "macska", "en": "cat"},
      {"hu": "iskola", "en": "school"},
      {"hu": "könyv", "en": "book"},
      {"hu": "szék", "en": "chair"},
      {"hu": "asztal", "en": "table"},
      {"hu": "ablak", "en": "window"},
      {"hu": "autó", "en": "car"},
      {"hu": "bicikli", "en": "bicycle"},
      {"hu": "piros", "en": "red"},
      {"hu": "kék", "en": "blue"},
      {"hu": "zöld", "en": "green"},
      {"hu": "sárga", "en": "yellow"},
      {"hu": "fekete", "en": "black"},
      {"hu": "fehér", "en": "white"},
      {"hu": "barna", "en": "brown"},
      {"hu": "narancs", "en": "orange"},
      {"hu": "rózsaszín", "en": "pink"},
      {"hu": "fa", "en": "tree"},
      {"hu": "virág", "en": "flower"},
      {"hu": "víz", "en": "water"},
      {"hu": "kenyér", "en": "bread"},
      {"hu": "tej", "en": "milk"},
      {"hu": "hús", "en": "meat"},
      {"hu": "tojás", "en": "egg"},
      {"hu": "hal", "en": "fish"},
      {"hu": "alma", "en": "apple"},
      {"hu": "narancs", "en": "orange"},
      {"hu": "banán", "en": "banana"},
      {"hu": "szőlő", "en": "grape"},
      {"hu": "citrom", "en": "lemon"},
      {"hu": "hétfő", "en": "Monday"},
      {"hu": "kedd", "en": "Tuesday"},
      {"hu": "szerda", "en": "Wednesday"},
      {"hu": "csütörtök", "en": "Thursday"},
      {"hu": "péntek", "en": "Friday"},
      {"hu": "szombat", "en": "Saturday"},
      {"hu": "vasárnap", "en": "Sunday"},
      {"hu": "egy", "en": "one"},
      {"hu": "kettő", "en": "two"},
      {"hu": "három", "en": "three"},
      {"hu": "négy", "en": "four"},
      {"hu": "öt", "en": "five"},
      {"hu": "hat", "en": "six"},
      {"hu": "hét", "en": "seven"},
      {"hu": "nyolc", "en": "eight"},
      {"hu": "kilenc", "en": "nine"},
      {"hu": "tíz", "en": "ten"},
      {"hu": "reggel", "en": "morning"},
      {"hu": "dél", "en": "noon"},
      {"hu": "délután", "en": "afternoon"},
      {"hu": "este", "en": "evening"},
      {"hu": "éjszaka", "en": "night"},
      {"hu": "játék", "en": "game"},
      {"hu": "labda", "en": "ball"},
      {"hu": "óra", "en": "clock"},
      {"hu": "zene", "en": "music"},
      {"hu": "film", "en": "movie"},
      {"hu": "ceruza", "en": "pencil"},
      {"hu": "toll", "en": "pen"},
      {"hu": "papír", "en": "paper"},
      {"hu": "füzet", "en": "notebook"},
      {"hu": "kalap", "en": "hat"},
      {"hu": "cipő", "en": "shoe"},
      {"hu": "kabát", "en": "coat"},
      {"hu": "póló", "en": "shirt"},
      {"hu": "nadrág", "en": "pants"},
      {"hu": "eső", "en": "rain"},
      {"hu": "hó", "en": "snow"},
      {"hu": "nap", "en": "sun"},
      {"hu": "felhő", "en": "cloud"},
      {"hu": "szél", "en": "wind"},
      {"hu": "föld", "en": "earth"},
      {"hu": "tenger", "en": "sea"},
      {"hu": "hóember", "en": "snowman"},
      {"hu": "állat", "en": "animal"},
      {"hu": "madár", "en": "bird"},
      {"hu": "ló", "en": "horse"},
      {"hu": "tehén", "en": "cow"},
      {"hu": "disznó", "en": "pig"},
      {"hu": "csirke", "en": "chicken"},
      {"hu": "hal", "en": "fish"},
      {"hu": "elefánt", "en": "elephant"},
      {"hu": "hajó", "en": "boat"},
      {"hu": "repülő", "en": "plane"},
      {"hu": "vonat", "en": "train"},
      {"hu": "busz", "en": "bus"},
      {"hu": "park", "en": "park"},
      {"hu": "kert", "en": "garden"},
      {"hu": "erdő", "en": "forest"},
      {"hu": "hegy", "en": "mountain"},
      {"hu": "tó", "en": "lake"},
      {"hu": "barát", "en": "friend"},
      {"hu": "család", "en": "family"},
      {"hu": "testvér", "en": "sibling"},
      {"hu": "anya", "en": "mother"},
      {"hu": "apa", "en": "father"},
      {"hu": "gyerek", "en": "child"},
      {"hu": "felnőtt", "en": "adult"}
    ];


document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('start-btn');
  const leftCol = document.getElementById('bal-column');
  const rightCol = document.getElementById('jobb-column');
  const successEl = document.getElementById('sikeres-probalkozasok');
  const failEl = document.getElementById('sikeretlen-probalkozasok');

  let kijelolt = null; 
  let success = 0;
  let fail = 0;

  startBtn.addEventListener('click', startGame);

  function startGame() {
   
    leftCol.innerHTML = '';
    rightCol.innerHTML = '';
    success = 0;
    fail = 0;
    updateCounters();
    kijelolt = null;

    const count = 6;
    const max = words.length;
    const indices = new Set();
    while (indices.size < count) {
      const r = Math.floor(Math.random() * max);
      indices.add(r);
    }

    const pairs = Array.from(indices).map((i, idx) => ({ pairId: String(idx), hu: words[i].hu, en: words[i].en }));

    
    const left = [...pairs];
   
    const right = shuffle([...pairs]);

    left.forEach(p => {
      const btn = document.createElement('button');
      btn.textContent = p.hu;
      btn.className = 'szó-btn';
      btn.dataset.pairId = p.pairId;
      btn.dataset.side = 'left';
      btn.addEventListener('click', handleClick);
      leftCol.appendChild(btn);
    });

    right.forEach(p => {
      const btn = document.createElement('button');
      btn.textContent = p.en;
      btn.className = 'szó-btn';
      btn.dataset.pairId = p.pairId;
      btn.dataset.side = 'right';
      btn.addEventListener('click', handleClick);
      rightCol.appendChild(btn);
    });
  }

  function handleClick(e) {
    const btn = e.currentTarget;
    if (btn.disabled) return;
    const pairId = btn.dataset.pairId;
    const side = btn.dataset.side;

    if (!kijelolt) {
      kijelolt = { btn, side, pairId };
      btn.classList.add('kijelolt');
      return;
    }

    if (kijelolt.btn === btn) {
      btn.classList.remove('kijelolt');
      kijelolt = null;
      return;
    }

    if (kijelolt.side === side) {
      kijelolt.btn.classList.remove('kijelolt');
      kijelolt = { btn, side, pairId };
      btn.classList.add('kijelolt');
      return;
    }

    if (kijelolt.pairId === pairId) {
      kijelolt.btn.classList.remove('kijelolt');
      kijelolt.btn.classList.add('matched');
      btn.classList.add('matched');
      kijelolt.btn.disabled = true;
      btn.disabled = true;
      success++;
      updateCounters();

      if (document.querySelectorAll('.szó-btn:not(:disabled)').length === 0) {
        
      }
    } else {

      kijelolt.btn.classList.add('téves');
      btn.classList.add('téves');
      fail++;
      updateCounters();
      setTimeout(() => {
        kijelolt.btn.classList.remove('téves');
        btn.classList.remove('téves');
        kijelolt.btn.classList.remove('kijelolt');
        kijelolt = null;
      }, 700);
      return;
    }

    kijelolt = null;
  }

  function updateCounters() {
    successEl.textContent = success;
    failEl.textContent = fail;
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

});

