/**
 * Happy Birthday Nanda - Logika Aplikasi Web
 * Tema Game MiHoYo / HoYoverse (Honkai: Star Rail × Zenless Zone Zero × Genshin Impact)
 * Bahasa: Indonesia
 */

document.addEventListener('DOMContentLoaded', () => {
  // ========================================================
  // STATE MANAGEMENT
  // ========================================================
  const STATE = {
    age: parseInt(localStorage.getItem('nanda_birthday_age'), 10) || 21,
    bgmPlaying: false,
    bgmMuted: false,
    bgmVolume: 0.75,
    videoPopupActive: true,
    candlesLit: 21,
    unlockedCharacters: new Set(JSON.parse(localStorage.getItem('nanda_unlocked_chars') || '[]')),
    activeChatContact: 'firefly',
    currentFilter: 'all'
  };

  // ========================================================
  // DATABASE ASET: 18 GIF MIHOYO (BAHASA INDONESIA)
  // ========================================================
  const MEMORIES_DATA = [
    {
      id: 'firefly_bday',
      name: 'Firefly (Sam)',
      game: 'hsr',
      gameLabel: 'Honkai: Star Rail',
      src: 'Assets/firefly-hsr.gif',
      desc: '"Selamat Ulang Tahun, Trailblazer Nanda! Semoga tahun ini semanis kue gulung oak di Penacony!"',
      sound: 'chime'
    },
    {
      id: 'yoimiya_bday',
      name: 'Yoimiya',
      game: 'genshin',
      gameLabel: 'Genshin Impact',
      src: 'Assets/happy-birthday.gif',
      desc: '"Pertunjukan kembang api spesial Inazuma dipersembahkan khusus untuk Nanda!"',
      sound: 'fanfare'
    },
    {
      id: 'wise_eous',
      name: 'Wise & Eous',
      game: 'zzz',
      gameLabel: 'Zenless Zone Zero',
      src: 'Assets/zzz-zenless-zone-zero.gif',
      desc: '"Toko video Random Play mengucapkan selamat ulang tahun yang luar biasa untuk Proxy Nanda!"',
      sound: 'chime'
    },
    {
      id: 'ellen_dance',
      name: 'Ellen Joe (Tarian Maid)',
      game: 'zzz',
      gameLabel: 'Zenless Zone Zero',
      src: 'Assets/7197-peak.gif',
      desc: '"Rehat sejenak dari tugas pelayan Victoria Housekeeping untuk joget di hari ultah Nanda."',
      sound: 'pop'
    },
    {
      id: 'ellen_squish',
      name: 'Chibi Ellen Joe',
      game: 'zzz',
      gameLabel: 'Zenless Zone Zero',
      src: 'Assets/210a5aad4e49343f3005936ae651802c.gif',
      desc: '"Ellen imut mendoakan Nanda bebas lembur dan dapat camilan tanpa batas."',
      sound: 'pop'
    },
    {
      id: 'bangboo_dance',
      name: 'Goyangan Kamera Bangboo',
      game: 'zzz',
      gameLabel: 'Zenless Zone Zero',
      src: 'Assets/36le045l0psd1.gif',
      desc: '"Eh-nah! Eh-nah! Goyangan selebrasi resmi Bangboo untuk menyambut ulang tahun Nanda!"',
      sound: 'fanfare'
    },
    {
      id: 'silverwolf_gamer',
      name: 'Silver Wolf',
      game: 'hsr',
      gameLabel: 'Honkai: Star Rail',
      src: 'Assets/04e43a21618930b07e5c5a115b20ac6a_8813355330775154617.gif',
      desc: '"Aku sudah nge-hack algoritma ulang tahun. Keberuntungan gacha Nanda permanen rata kanan."',
      sound: 'beep'
    },
    {
      id: 'sparkle_theater',
      name: 'Sparkle',
      game: 'hsr',
      gameLabel: 'Honkai: Star Rail',
      src: 'Assets/CwIc-t.gif',
      desc: '"Kenapa tegang begitu? Ini kan hari ultah Nanda! Biarkan panggung sandiwara dimulai!"',
      sound: 'chime'
    },
    {
      id: 'herta_kuru',
      name: 'Madam Herta',
      game: 'hsr',
      gameLabel: 'Honkai: Star Rail',
      src: 'Assets/854e4448940d47a77b24897146c0dbb3_6470375566460720066.gif',
      desc: '"Kuru kuru~ Kururing! Met ultah Nanda, sekarang saatnya masuk ke Simulated Universe!"',
      sound: 'fanfare'
    },
    {
      id: 'stelle_trashcan',
      name: 'Trailblazer Stelle',
      game: 'hsr',
      gameLabel: 'Honkai: Star Rail',
      src: 'Assets/fb7167bbebada0160f400b622adbe917.gif',
      desc: '"Nemu harta karun paling kinclong di tong sampah emas Belobog khusus buat Nanda!"',
      sound: 'pop'
    },
    {
      id: 'zhuyuan_thumb',
      name: 'Zhu Yuan (PubSec)',
      game: 'zzz',
      gameLabel: 'Zenless Zone Zero',
      src: 'Assets/b667bf0b6cc874abe9d0e7d5b5c1a837_8564433332709119931.gif',
      desc: '"PubSec resmi menyetujui zona hijau perayaan ulang tahun Nanda di seluruh sektor!"',
      sound: 'beep'
    },
    {
      id: 'zhuyuan_buffering',
      name: 'Zhu Yuan (Loading Otak)',
      game: 'zzz',
      gameLabel: 'Zenless Zone Zero',
      src: 'Assets/f1360d0bb2887b75acedf5e6bf43590e.gif',
      desc: '"Bentar... Nanda umurnya udah segitu sekarang?! Otak lagi loading saking cepetnya waktu."',
      sound: 'pop'
    },
    {
      id: 'seed_heart',
      name: 'Seed (Tangan Cinta)',
      game: 'zzz',
      gameLabel: 'Zenless Zone Zero',
      src: 'Assets/e89ba6003caecbf3d2a8186b28bfdbe8_4645008944424366510.gif',
      desc: '"Kirim cinta antarbintang dan doa termanis penuh kehangatan untuk Nanda!"',
      sound: 'chime'
    },
    {
      id: 'evernight_pump',
      name: 'Evernight',
      game: 'hsr',
      gameLabel: 'Honkai: Star Rail',
      src: 'Assets/yhsos1maimng1.gif',
      desc: '"Evernight ikut bersorak merayakan hari ulang tahun Trailblazer Nanda dengan penuh semangat!"',
      sound: 'fanfare'
    },
    {
      id: 'miyabi_sword',
      name: 'Hoshimi Miyabi',
      game: 'zzz',
      gameLabel: 'Zenless Zone Zero',
      src: 'Assets/223300.gif',
      desc: '"Hormat dari komandan Seksi 6. Semoga langkah Nanda di tahun ini menebas segala rintangan."',
      sound: 'chime'
    },
    {
      id: 'mem_hsr',
      name: 'Mem',
      game: 'hsr',
      gameLabel: 'Honkai: Star Rail',
      src: 'Assets/200w.gif',
      desc: '"Mem dari Penacony tertidur pulas dan bermimpi indah mendoakan kebahagiaan untuk Nanda!"',
      sound: 'pop'
    },
    {
      id: 'jane_dance',
      name: 'Jane Doe',
      game: 'zzz',
      gameLabel: 'Zenless Zone Zero',
      src: 'Assets/73aae650a5d4027b6c51c5e67ac7e342.gif',
      desc: '"Peace peace! Joget penyamaran rahasia spesial ulang tahun untuk Nanda tercinta~"',
      sound: 'pop'
    },
    {
      id: 'zzz_idols',
      name: 'Grup Idol New Eridu',
      game: 'zzz',
      gameLabel: 'Zenless Zone Zero',
      src: 'Assets/jRFXQu.gif',
      desc: '"Panggung utama milik Nanda hari ini! Bernyanyi dan rayakan bersama seisi kota!"',
      sound: 'fanfare'
    }
  ];

  // ========================================================
  // DATA PERCAKAPAN CHAT DALAM BAHASA INDONESIA
  // ========================================================
  const CHAT_DATA = {
    firefly: {
      name: 'Firefly',
      avatar: 'Assets/firefly-hsr.gif',
      initialMessages: [
        { sender: 'them', text: 'Trailblazer Nanda! Selamat Ulang Tahun!! 🎉' },
        { sender: 'them', text: 'Aku nabung 20.000 kredit buat beliin kamu kue ulang tahun di Penacony. Kamu suka kue gulung oak kan?' }
      ],
      responses: {
        'choice1': {
          reply: 'Makasih banyak Firefly! Kue gulung oak emang favoritku!',
          charReply: 'Aku tahu pasti kamu suka!! Senang banget! Hari ini kita jalan-jalan di Golden Hour bareng ya, santai tanpa misi Stellaron Hunters!'
        },
        'choice2': {
          reply: 'Kamu nggak perlu repot-repot keluar kredit, punya sahabat sepertimu udah hadiah terbaik!',
          charReply: 'Aww... Manis banget kamu Nanda! Tapi ulang tahun cuma setahun sekali, jadi biarkan aku traktir kamu hari ini! ✨'
        }
      },
      choices: [
        { id: 'choice1', text: '🎂 Makasih Firefly! Kue gulung oak emang favoritku!' },
        { id: 'choice2', text: '💖 Sahabat sepertimu adalah hadiah terindah di galaksi!' }
      ]
    },
    ellen: {
      name: 'Ellen Joe',
      avatar: 'Assets/7197-peak.gif',
      initialMessages: [
        { sender: 'them', text: 'Hai Nanda... Met ultah ya.' },
        { sender: 'them', text: 'Lagi rehat dari shift kerja pelayan Victoria Housekeeping nih. Jangan bilang bos ya. Hari ini mau ngapain?' }
      ],
      responses: {
        'choice1': {
          reply: 'Yuk beli es teh manis sama camilan enak!',
          charReply: 'Bungkus, aku yang bayar. Asal hari ini nggak disuruh bebersih, aku ikut kemana aja.'
        },
        'choice2': {
          reply: 'Rebahan santai aja sambil tidur bareng Bangboo.',
          charReply: 'Nah, itu baru rencana ulang tahun bintang 5. Lagian Eous juga udah molor duluan dari tadi.'
        }
      },
      choices: [
        { id: 'choice1', text: '🧋 Yuk beli es teh manis dan camilan enak!' },
        { id: 'choice2', text: '😴 Rebahan santai aja bareng para Bangboo.' }
      ]
    },
    silverwolf: {
      name: 'Silver Wolf',
      avatar: 'Assets/04e43a21618930b07e5c5a115b20ac6a_8813355330775154617.gif',
      initialMessages: [
        { sender: 'them', text: 'Yo Nanda. Selamat ulang tahun.' },
        { sender: 'them', text: 'Aku udah bypass server dan masukin script winrate 100% ke akunmu. Gacha 50/50 berikutnya dijamin menang di pity awal.' }
      ],
      responses: {
        'choice1': {
          reply: 'GASSS KAN! Teman hacker terbaik sedunia!',
          charReply: 'Hehe, udah pasti dong. Jangan bocorin ke Elio ya. Ntar malem kita 1v1 game arcade dingdong!'
        },
        'choice2': {
          reply: 'Bisa hack 1.000.000 Stellar Jade juga sekalian?',
          charReply: 'Bisa aja sih, tapi ntar IPC ngirim Aventurine buat nagih utang ke rumahmu wkwk.'
        }
      },
      choices: [
        { id: 'choice1', text: '🔥 GASSS! Sahabat hacker terbaik seisi jagat!' },
        { id: 'choice2', text: '💎 Bisa hack 1.000.000 Stellar Jade juga?' }
      ]
    },
    herta: {
      name: 'Madam Herta',
      avatar: 'Assets/854e4448940d47a77b24897146c0dbb3_6470375566460720066.gif',
      initialMessages: [
        { sender: 'them', text: 'Kururin! Selamat ulang tahun, Nanda.' },
        { sender: 'them', text: 'Kado dariku: akses bebas ke Simulated Universe selama 24 jam penuh. Baik banget kan aku?' }
      ],
      responses: {
        'choice1': {
          reply: 'Kuru kuru! Terima kasih Madam Herta!',
          charReply: 'Bagus. Sekarang selesaikan World 9 dan segera laporkan datanya ke aku.'
        },
        'choice2': {
          reply: 'Boleh nggak kadonya libur sehari aja dari pengujian?',
          charReply: 'Ditolak mentah-mentah. Pengujian adalah hak istimewa terbaikmu di hari spesial!'
        }
      },
      choices: [
        { id: 'choice1', text: '🌀 Kuru kuru! Terima kasih Madam Herta!' },
        { id: 'choice2', text: '🛌 Boleh minta libur sehari dari Simulated Universe?' }
      ]
    },
    stelle: {
      name: 'Trailblazer Stelle',
      avatar: 'Assets/fb7167bbebada0160f400b622adbe917.gif',
      initialMessages: [
        { sender: 'them', text: 'NANDA! Liat apa yang kutemukan buat ulang tahunmu!' },
        { sender: 'them', text: 'Aku udah ngubek-ngubek semua tong sampah di Belobog dan Penacony. Liat tutup tong sampah emas yang mengilap ini!' }
      ],
      responses: {
        'choice1': {
          reply: 'Tutup tong sampah emas! Kehormatan tertinggi di galaksi!',
          charReply: 'Kan bener! Aku tahu kamu punya selera harta karun sejati! Yuk kita makan semangka bareng!'
        },
        'choice2': {
          reply: 'Stelle... tolong bilang kamu udah cuci tangan dulu ya.',
          charReply: 'Udah dong! Pakai gelembung mimpi Penacony yang wangi! Selamat ulang tahun kawan!'
        }
      },
      choices: [
        { id: 'choice1', text: '🗑️ Tutup tong sampah emas! Kehormatan tertinggi!' },
        { id: 'choice2', text: '🍉 Yuk kita makan semangka bareng!' }
      ]
    },
    zhuyuan: {
      name: 'Zhu Yuan (PubSec)',
      avatar: 'Assets/b667bf0b6cc874abe9d0e7d5b5c1a837_8564433332709119931.gif',
      initialMessages: [
        { sender: 'them', text: 'Kapten Zhu Yuan melapor!' },
        { sender: 'them', text: 'Seluruh petugas PubSec sudah diinstruksikan: hari ini adalah hari ultah Nanda! Protokol perayaan resmi diaktifkan!' }
      ],
      responses: {
        'choice1': {
          reply: 'Siap Kapten! Terima kasih atas perlindungannya!',
          charReply: 'Selalu siap bertugas! Semoga harimu aman, penuh kemenangan, dan bahagia selalu!'
        },
        'choice2': {
          reply: 'Bisa dapat kawalan patroli keliling Sixth Street?',
          charReply: 'Disetujui! Eous dan tim siap mengawalmu ke semua warung makanan favoritmu!'
        }
      },
      choices: [
        { id: 'choice1', text: '🫡 Siap Kapten! Terima kasih atas patrolinya!' },
        { id: 'choice2', text: '🎉 Polisi terbaik di New Eridu!' }
      ]
    }
  };

  // ========================================================
  // WEB AUDIO API SOUND SYNTHESIZER
  // ========================================================
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  const SFX = {
    beep: () => {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1320, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    },
    chime: () => {
      const ctx = getAudioContext();
      if (!ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.07);
        gain.gain.setValueAtTime(0.12, ctx.currentTime + idx * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.07 + 0.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.07);
        osc.stop(ctx.currentTime + idx * 0.07 + 0.4);
      });
    },
    warp: () => {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.7);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.75);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.75);
    },
    levelUp: () => {
      const ctx = getAudioContext();
      if (!ctx) return;
      const chords = [440, 554.37, 659.25, 880, 1108.73];
      chords.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.06);
        gain.gain.setValueAtTime(0.15, ctx.currentTime + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.06 + 0.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.06);
        osc.stop(ctx.currentTime + i * 0.06 + 0.5);
      });
    },
    pop: () => {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    },
    fanfare: () => {
      const ctx = getAudioContext();
      if (!ctx) return;
      const melody = [
        { f: 523.25, t: 0.0 },
        { f: 523.25, t: 0.12 },
        { f: 523.25, t: 0.24 },
        { f: 659.25, t: 0.36 },
        { f: 783.99, t: 0.55 },
        { f: 1046.50, t: 0.8 }
      ];
      melody.forEach(item => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(item.f, ctx.currentTime + item.t);
        gain.gain.setValueAtTime(0.2, ctx.currentTime + item.t);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + item.t + 0.45);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + item.t);
        osc.stop(ctx.currentTime + item.t + 0.45);
      });
    }
  };

  // ========================================================
  // ELEMEN DOM
  // ========================================================
  const popupVideoOverlay = document.getElementById('popup-video-overlay');
  const popupVideoPlayer = document.getElementById('popup-video-player');
  const videoStartPrompt = document.getElementById('video-start-prompt');
  const btnStartVideoAudio = document.getElementById('btn-start-video-audio');
  const btnSkipIntro = document.getElementById('btn-skip-intro');
  const btnCloseVideo = document.getElementById('btn-close-video');
  const btnEnterCelebration = document.getElementById('btn-enter-celebration');
  const btnToggleVideoPlay = document.getElementById('btn-toggle-video-play');
  const btnToggleVideoMute = document.getElementById('btn-toggle-video-mute');
  const btnReplayVideo = document.getElementById('btn-replay-video');

  const ageModalOverlay = document.getElementById('age-modal-overlay');
  const ageInputField = document.getElementById('age-input-field');
  const btnAgeDecrement = document.getElementById('btn-age-decrement');
  const btnAgeIncrement = document.getElementById('btn-age-increment');
  const previewAgeBadge = document.getElementById('preview-age-badge');
  const btnConfirmAge = document.getElementById('btn-confirm-age');
  const hudAgeTrigger = document.getElementById('hud-age-trigger');
  const btnHeroChangeAge = document.getElementById('btn-hero-change-age');

  const bgLiveWallpaper = document.getElementById('bg-live-wallpaper');
  const bgAudioPlayer = document.getElementById('bg-audio-player');
  const btnHudMusic = document.getElementById('btn-hud-music');
  const hudMusicStatus = document.getElementById('hud-music-status');
  const btnToggleDock = document.getElementById('btn-toggle-dock');
  const musicPlayerDock = document.getElementById('music-player-dock');
  const vinylDisc = document.getElementById('vinyl-disc');
  const btnAudioPlayPause = document.getElementById('btn-audio-play-pause');
  const btnAudioMute = document.getElementById('btn-audio-mute');
  const audioVolumeSlider = document.getElementById('audio-volume-slider');

  const cakeCandlesRow = document.getElementById('cake-candles-row');
  const monitorCandlesLit = document.getElementById('monitor-candles-lit');
  const monitorCakeStatus = document.getElementById('monitor-cake-status');
  const btnBlowAllCandles = document.getElementById('btn-blow-all-candles');
  const btnRelightCandles = document.getElementById('btn-relight-candles');
  const cakeWishBanner = document.getElementById('cake-wish-banner');

  const btnWarpSingle = document.getElementById('btn-warp-single');
  const btnWarpTen = document.getElementById('btn-warp-ten');
  const warpRevealOverlay = document.getElementById('warp-reveal-overlay');
  const warpCardsGrid = document.getElementById('warp-cards-grid');
  const btnCloseWarpReveal = document.getElementById('btn-close-warp-reveal');
  const collectionGrid = document.getElementById('collection-grid');
  const collectionCount = document.getElementById('collection-count');
  const btnClearCollection = document.getElementById('btn-clear-collection');

  const contactList = document.getElementById('contact-list');
  const chatHeaderName = document.getElementById('chat-header-name');
  const chatHeaderAvatar = document.getElementById('chat-header-avatar');
  const chatMessagesContainer = document.getElementById('chat-messages-container');
  const chatReplyOptions = document.getElementById('chat-reply-options');

  const memoriesGrid = document.getElementById('memories-grid');
  const filterButtons = document.querySelectorAll('.btn-filter');

  const passportAvatarImg = document.getElementById('passport-avatar-img');
  const mascotChips = document.querySelectorAll('.btn-mascot-chip');
  const btnCopyCard = document.getElementById('btn-copy-card');

  const fortuneResult = document.getElementById('fortune-result');
  const btnRollFortune = document.getElementById('btn-roll-fortune');

  // ========================================================
  // POPUP VIDEO SYSTEM (OPTIMIZED STREAMING)
  // ========================================================
  function openPopupVideo() {
    popupVideoOverlay.classList.add('active');
    STATE.videoPopupActive = true;
    if (bgAudioPlayer) {
      bgAudioPlayer.pause();
    }
    updateBgmControlsUI();
  }

  function closePopupVideo() {
    popupVideoPlayer.pause();
    popupVideoOverlay.classList.remove('active');
    STATE.videoPopupActive = false;

    // Load and play live wallpaper now (avoids bandwidth conflict during popup)
    if (bgLiveWallpaper) {
      if (bgLiveWallpaper.preload === 'none') {
        bgLiveWallpaper.preload = 'auto';
        bgLiveWallpaper.load();
      }
      bgLiveWallpaper.play().catch(() => {});
    }

    // Play BGM smoothly
    playBackgroundMusic();

    // Check if age is already set by user, otherwise open age modal
    if (!localStorage.getItem('nanda_birthday_age')) {
      openAgeModal();
    } else {
      showToast(`Selamat datang kembali, Trailblazer Nanda (Level ${STATE.age})!`);
    }
  }

  // Play Transmission with Sound
  btnStartVideoAudio.addEventListener('click', () => {
    SFX.beep();
    videoStartPrompt.classList.add('hidden');
    popupVideoPlayer.muted = false;
    popupVideoPlayer.currentTime = 0;
    popupVideoPlayer.play().then(() => {
      btnToggleVideoPlay.textContent = '⏸ Jeda';
      btnToggleVideoMute.textContent = '🔊 Suara Nyala';
    }).catch(err => {
      console.warn('Video play dicegah peramban:', err);
    });
  });

  // Skip Video / Enter Site
  btnSkipIntro.addEventListener('click', () => {
    SFX.beep();
    closePopupVideo();
  });
  btnCloseVideo.addEventListener('click', () => {
    SFX.beep();
    closePopupVideo();
  });
  btnEnterCelebration.addEventListener('click', () => {
    SFX.beep();
    closePopupVideo();
  });

  // Replay Video from top HUD
  btnReplayVideo.addEventListener('click', () => {
    SFX.beep();
    videoStartPrompt.classList.remove('hidden');
    openPopupVideo();
  });

  // Video ended naturally -> proceed to site
  popupVideoPlayer.addEventListener('ended', () => {
    showToast('Video selesai! Memasuki panggung perayaan...');
    setTimeout(closePopupVideo, 1200);
  });

  // Video in-modal controls
  btnToggleVideoPlay.addEventListener('click', () => {
    SFX.beep();
    if (popupVideoPlayer.paused) {
      popupVideoPlayer.play();
      btnToggleVideoPlay.textContent = '⏸ Jeda';
    } else {
      popupVideoPlayer.pause();
      btnToggleVideoPlay.textContent = '▶ Putar';
    }
  });

  btnToggleVideoMute.addEventListener('click', () => {
    SFX.beep();
    popupVideoPlayer.muted = !popupVideoPlayer.muted;
    btnToggleVideoMute.textContent = popupVideoPlayer.muted ? '🔇 Bisu' : '🔊 Suara Nyala';
  });

  // ========================================================
  // BACKGROUND MUSIC & PHONOGRAPH SYSTEM
  // ========================================================
  function playBackgroundMusic() {
    if (!bgAudioPlayer) return;
    bgAudioPlayer.volume = STATE.bgmVolume;
    bgAudioPlayer.play().then(() => {
      STATE.bgmPlaying = true;
      updateBgmControlsUI();
    }).catch(err => {
      console.log('Autoplay audio menunggu interaksi pengguna:', err);
      STATE.bgmPlaying = false;
      updateBgmControlsUI();
    });
  }

  function pauseBackgroundMusic() {
    if (!bgAudioPlayer) return;
    bgAudioPlayer.pause();
    STATE.bgmPlaying = false;
    updateBgmControlsUI();
  }

  function toggleBackgroundMusic() {
    SFX.beep();
    if (STATE.bgmPlaying) {
      pauseBackgroundMusic();
      showToast('Fonograf Dijeda');
    } else {
      playBackgroundMusic();
      showToast('Memutar: Beyond This Station (Robin EP)');
    }
  }

  function updateBgmControlsUI() {
    if (STATE.bgmPlaying) {
      hudMusicStatus.textContent = 'BGM: NYALA';
      btnAudioPlayPause.textContent = '⏸';
      vinylDisc.classList.add('spinning');
    } else {
      hudMusicStatus.textContent = 'BGM: MATI';
      btnAudioPlayPause.textContent = '▶';
      vinylDisc.classList.remove('spinning');
    }
  }

  btnHudMusic.addEventListener('click', toggleBackgroundMusic);
  btnAudioPlayPause.addEventListener('click', toggleBackgroundMusic);

  audioVolumeSlider.addEventListener('input', (e) => {
    const val = parseFloat(e.target.value);
    STATE.bgmVolume = val;
    if (bgAudioPlayer) {
      bgAudioPlayer.volume = val;
    }
    if (val === 0) {
      btnAudioMute.textContent = '🔇';
    } else {
      btnAudioMute.textContent = '🔊';
    }
  });

  btnAudioMute.addEventListener('click', () => {
    SFX.beep();
    if (bgAudioPlayer.volume > 0) {
      STATE.bgmVolume = 0;
      bgAudioPlayer.volume = 0;
      audioVolumeSlider.value = 0;
      btnAudioMute.textContent = '🔇';
    } else {
      STATE.bgmVolume = 0.75;
      bgAudioPlayer.volume = 0.75;
      audioVolumeSlider.value = 0.75;
      btnAudioMute.textContent = '🔊';
    }
  });

  // Dock Minimize / Expand
  btnToggleDock.addEventListener('click', () => {
    SFX.beep();
    musicPlayerDock.classList.toggle('minimized');
  });

  // Canvas Audio Visualizer Simulator
  const visualizerCanvas = document.getElementById('audio-visualizer-canvas');
  if (visualizerCanvas) {
    const vCtx = visualizerCanvas.getContext('2d');
    const barsCount = 20;
    const barWidth = visualizerCanvas.width / barsCount - 2;

    function renderVisualizer() {
      vCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
      for (let i = 0; i < barsCount; i++) {
        const height = STATE.bgmPlaying 
          ? Math.random() * (visualizerCanvas.height - 4) + 4 
          : 2;
        const x = i * (barWidth + 2);
        const y = visualizerCanvas.height - height;
        vCtx.fillStyle = '#f5c542';
        vCtx.shadowColor = '#f5c542';
        vCtx.shadowBlur = 4;
        vCtx.fillRect(x, y, barWidth, height);
      }
      setTimeout(() => requestAnimationFrame(renderVisualizer), 90);
    }
    renderVisualizer();
  }

  // ========================================================
  // SISTEM KALIBRASI UMUR / LEVEL ASCENSION
  // ========================================================
  function openAgeModal() {
    ageModalOverlay.classList.add('active');
    ageInputField.value = STATE.age;
    previewAgeBadge.textContent = STATE.age;
    highlightChip(STATE.age);
  }

  function closeAgeModal() {
    ageModalOverlay.classList.remove('active');
  }

  function setAge(newAge) {
    const parsed = Math.max(1, Math.min(120, parseInt(newAge, 10) || 21));
    STATE.age = parsed;
    localStorage.setItem('nanda_birthday_age', parsed);

    // Perbarui semua elemen dinamis di DOM
    document.querySelectorAll('.val-age-dynamic').forEach(el => {
      el.textContent = parsed;
    });

    previewAgeBadge.textContent = parsed;
    ageInputField.value = parsed;
    highlightChip(parsed);

    // Render ulang lilin kue sesuai umur baru
    renderCakeCandles();
  }

  function highlightChip(targetAge) {
    document.querySelectorAll('.btn-chip').forEach(chip => {
      if (parseInt(chip.getAttribute('data-age'), 10) === targetAge) {
        chip.classList.add('active');
      } else {
        chip.classList.remove('active');
      }
    });
  }

  btnAgeDecrement.addEventListener('click', () => {
    SFX.beep();
    setAge(STATE.age - 1);
  });

  btnAgeIncrement.addEventListener('click', () => {
    SFX.beep();
    setAge(STATE.age + 1);
  });

  ageInputField.addEventListener('input', (e) => {
    setAge(e.target.value);
  });

  document.querySelectorAll('.btn-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      SFX.beep();
      const val = parseInt(chip.getAttribute('data-age'), 10);
      setAge(val);
    });
  });

  btnConfirmAge.addEventListener('click', () => {
    SFX.levelUp();
    closeAgeModal();
    triggerConfetti();
    showToast(`★ Ascension Berhasil! Trailblazer Nanda resmi mencapai Level ${STATE.age}!`);
  });

  hudAgeTrigger.addEventListener('click', () => {
    SFX.beep();
    openAgeModal();
  });

  btnHeroChangeAge.addEventListener('click', () => {
    SFX.beep();
    openAgeModal();
  });

  // ========================================================
  // KUE ULANG TAHUN & PERMAINAN TIUP LILIN
  // ========================================================
  function renderCakeCandles() {
    cakeCandlesRow.innerHTML = '';
    STATE.candlesLit = STATE.age;
    updateCandleStatus();
    cakeWishBanner.classList.add('hidden');

    for (let i = 0; i < STATE.age; i++) {
      const candle = document.createElement('div');
      candle.className = 'candle-unit';
      candle.setAttribute('data-index', i);
      candle.innerHTML = `
        <div class="candle-flame"></div>
        <div class="candle-stick"></div>
      `;

      candle.addEventListener('click', () => {
        toggleCandle(candle);
      });

      cakeCandlesRow.appendChild(candle);
    }
  }

  function toggleCandle(candleEl) {
    if (candleEl.classList.contains('extinguished')) {
      candleEl.classList.remove('extinguished');
      STATE.candlesLit++;
      SFX.pop();
    } else {
      candleEl.classList.add('extinguished');
      STATE.candlesLit--;
      SFX.pop();
    }
    updateCandleStatus();
    checkAllCandlesBlown();
  }

  function updateCandleStatus() {
    monitorCandlesLit.textContent = STATE.candlesLit;
    if (STATE.candlesLit === 0) {
      monitorCakeStatus.textContent = 'SEMUA PADAM! 🎉';
      monitorCakeStatus.style.color = '#38ef7d';
    } else {
      monitorCakeStatus.textContent = `${STATE.candlesLit} MENYALA`;
      monitorCakeStatus.style.color = '#f5c542';
    }
  }

  function checkAllCandlesBlown() {
    if (STATE.candlesLit === 0) {
      SFX.fanfare();
      triggerConfetti();
      cakeWishBanner.classList.remove('hidden');
      showToast('🎉 Semua lilin padam! Berkah Ulang Tahun Terbuka!');
    }
  }

  btnBlowAllCandles.addEventListener('click', () => {
    const candles = document.querySelectorAll('.candle-unit');
    let delay = 0;
    candles.forEach((c) => {
      if (!c.classList.contains('extinguished')) {
        setTimeout(() => {
          c.classList.add('extinguished');
          SFX.pop();
        }, delay);
        delay += 60;
      }
    });

    setTimeout(() => {
      STATE.candlesLit = 0;
      updateCandleStatus();
      checkAllCandlesBlown();
    }, delay + 100);
  });

  btnRelightCandles.addEventListener('click', () => {
    SFX.chime();
    renderCakeCandles();
    showToast('Semua lilin dinyalakan kembali!');
  });

  // ========================================================
  // WARP GACHA ULANG TAHUN SPESIAL
  // ========================================================
  function getRandomDrop() {
    const randIdx = Math.floor(Math.random() * MEMORIES_DATA.length);
    return MEMORIES_DATA[randIdx];
  }

  function executeWarp(count) {
    SFX.warp();
    warpRevealOverlay.classList.add('active', 'animating');
    warpCardsGrid.innerHTML = '';

    const results = [];
    for (let i = 0; i < count; i++) {
      const drop = getRandomDrop();
      results.push(drop);
      STATE.unlockedCharacters.add(drop.id);
    }

    localStorage.setItem('nanda_unlocked_chars', JSON.stringify([...STATE.unlockedCharacters]));
    updateCollectionDrawer();

    setTimeout(() => {
      warpRevealOverlay.classList.remove('animating');
      SFX.fanfare();
      triggerConfetti();

      results.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'warp-drop-card';
        card.style.animationDelay = `${index * 0.12}s`;
        card.innerHTML = `
          <img src="${item.src}" alt="${item.name}">
          <div class="warp-drop-stars">★★★★★</div>
          <div class="warp-drop-name">${item.name}</div>
          <p class="warp-drop-quote">${item.desc}</p>
        `;
        warpCardsGrid.appendChild(card);
      });
    }, 900);
  }

  btnWarpSingle.addEventListener('click', () => executeWarp(1));
  btnWarpTen.addEventListener('click', () => executeWarp(10));

  btnCloseWarpReveal.addEventListener('click', () => {
    SFX.beep();
    warpRevealOverlay.classList.remove('active');
    showToast('Hadiah warp ditambahkan ke koleksimu!');
  });

  function updateCollectionDrawer() {
    collectionCount.textContent = STATE.unlockedCharacters.size;
    if (STATE.unlockedCharacters.size === 0) {
      collectionGrid.innerHTML = '<p class="collection-empty">Belum ada warp yang ditarik! Tekan <strong>WARP × 10</strong> di atas untuk membuka doa Bintang 5 pertamamu!</p>';
      return;
    }

    collectionGrid.innerHTML = '';
    MEMORIES_DATA.forEach(item => {
      if (STATE.unlockedCharacters.has(item.id)) {
        const mini = document.createElement('div');
        mini.className = 'unlocked-card-mini';
        mini.innerHTML = `
          <img src="${item.src}" alt="${item.name}">
          <div class="unlocked-mini-name">${item.name}</div>
        `;
        collectionGrid.appendChild(mini);
      }
    });
  }

  btnClearCollection.addEventListener('click', () => {
    SFX.beep();
    STATE.unlockedCharacters.clear();
    localStorage.removeItem('nanda_unlocked_chars');
    updateCollectionDrawer();
    showToast('Riwayat pull di-reset.');
  });

  // ========================================================
  // ASTRAL MESSENGER CHAT
  // ========================================================
  function loadChat(contactId) {
    STATE.activeChatContact = contactId;
    const data = CHAT_DATA[contactId];
    if (!data) return;

    chatHeaderName.textContent = data.name;
    chatHeaderAvatar.src = data.avatar;
    chatMessagesContainer.innerHTML = '';
    chatReplyOptions.innerHTML = '';

    // Render pesan awal
    data.initialMessages.forEach(msg => {
      appendChatMessage(msg.sender, msg.text);
    });

    // Render pilihan jawaban
    data.choices.forEach(ch => {
      const btn = document.createElement('button');
      btn.className = 'btn-reply-chip';
      btn.textContent = ch.text;
      btn.addEventListener('click', () => {
        handleUserReply(contactId, ch.id);
      });
      chatReplyOptions.appendChild(btn);
    });
  }

  function appendChatMessage(sender, text, gifSrc = null) {
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${sender === 'them' ? 'character' : 'nanda'}`;
    let html = `<span>${text}</span>`;
    if (gifSrc) {
      html += `<img src="${gifSrc}" alt="Reaksi">`;
    }
    bubble.innerHTML = html;
    chatMessagesContainer.appendChild(bubble);
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
  }

  function handleUserReply(contactId, choiceId) {
    SFX.beep();
    const data = CHAT_DATA[contactId];
    const respObj = data.responses[choiceId];
    if (!respObj) return;

    // Tambah pesan Nanda
    appendChatMessage('me', respObj.reply);
    chatReplyOptions.innerHTML = '<span class="reply-prompt">Teman sedang mengetik...</span>';

    setTimeout(() => {
      SFX.chime();
      appendChatMessage('them', respObj.charReply, data.avatar);
      chatReplyOptions.innerHTML = '<span class="reply-prompt">Percakapan selesai! Pilih teman lainnya di samping!</span>';
    }, 1100);
  }

  document.querySelectorAll('.contact-item').forEach(btn => {
    btn.addEventListener('click', () => {
      SFX.beep();
      document.querySelectorAll('.contact-item').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const contact = btn.getAttribute('data-contact');
      loadChat(contact);
    });
  });

  // ========================================================
  // GALERI KENANGAN & STIKER GIF
  // ========================================================
  function renderMemories(filter = 'all') {
    memoriesGrid.innerHTML = '';
    const filtered = filter === 'all' 
      ? MEMORIES_DATA 
      : MEMORIES_DATA.filter(m => m.game === filter);

    filtered.forEach(m => {
      const card = document.createElement('div');
      card.className = 'memory-card';
      card.innerHTML = `
        <div class="memory-img-wrapper">
          <img src="${m.src}" alt="${m.name}" loading="lazy">
          <span class="memory-tag-badge tag-${m.game}">${m.gameLabel}</span>
        </div>
        <div class="memory-info">
          <h4 class="memory-title">${m.name}</h4>
          <p class="memory-desc">${m.desc}</p>
          <button class="btn-memory-react" data-sound="${m.sound}">
            <span>✨ KIRIM DOA</span>
          </button>
        </div>
      `;

      card.querySelector('.btn-memory-react').addEventListener('click', (e) => {
        const soundType = e.currentTarget.getAttribute('data-sound');
        if (SFX[soundType]) SFX[soundType]();
        triggerConfetti();
        showToast(`Doa perayaan terkirim untuk ${m.name}!`);
      });

      memoriesGrid.appendChild(card);
    });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      SFX.beep();
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderMemories(filter);
    });
  });

  // ========================================================
  // PASPOR MASKOT SWITCHER & SALIN KARTU
  // ========================================================
  mascotChips.forEach(chip => {
    chip.addEventListener('click', () => {
      SFX.beep();
      mascotChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const newGif = chip.getAttribute('data-gif');
      passportAvatarImg.src = newGif;
    });
  });

  btnCopyCard.addEventListener('click', () => {
    SFX.chime();
    const blessingText = `🎉 SELAMAT ULANG TAHUN NANDA (LEVEL ${STATE.age})! 🎉\n` +
      `★ Karakter Resmi Bintang 5 Astral Express & New Eridu\n` +
      `★ Path: The Elation & The Harmony\n` +
      `★ Tipe Combat: Imaginary / Quantum\n` +
      `★ HP: 999,999 (Kebahagiaan & Kesehatan Prima)\n` +
      `★ CRIT Rate: 100% (Tahun Penuh Keberhasilan)\n` +
      `Semoga tahun ini selalu menang 50/50, dilimpahkan rezeki, dan bahagia selalu! 🎂✨`;

    navigator.clipboard.writeText(blessingText).then(() => {
      showToast('📋 Kartu Ucapan Ulang Tahun berhasil disalin!');
    }).catch(() => {
      showToast('Ucapan ulang tahun tersalin!');
    });
  });

  // ========================================================
  // MESIN RAMALAN HARIAN TRAILBLAZE
  // ========================================================
  const FORTUNES = [
    "✦ RAMALAN HARI INI: Stat keberuntungan Nanda naik 1000%! Setiap gacha 50/50 tahun ini dijamin menang di pity awal!",
    "✦ BERKAH PENACONY: Semua makanan manis dan kue yang dimakan hari ini mengandung 0 kalori dan 100% kebahagiaan!",
    "✦ TRANSMISI ASTRAL EXPRESS: Pom-Pom baru saja memanggang setoples kue kering ajaib khusus untuk Nanda!",
    "✦ SELAMAN HOLLOW NEW ERIDU: Nol korupsi, 100% S-Rank, dan pelukan hangat tanpa batas dari para Bangboo!",
    "✦ LAPORAN STASIUN HERTA: Madam Herta menobatkan Trailblazer Nanda sebagai rekan riset nomor satu terfavorit!",
    "✦ BONUS RANDOM PLAY: Setiap kaset video yang disewa Nanda tahun ini gratis martabak manis dan pizza lezat!",
    "✦ HACK SILVER WOLF: Hari-hari buruk telah berhasil di-uninstall dari kehidupan Nanda untuk setahun penuh!"
  ];

  btnRollFortune.addEventListener('click', () => {
    SFX.levelUp();
    const rand = FORTUNES[Math.floor(Math.random() * FORTUNES.length)];
    fortuneResult.textContent = rand;
    triggerConfetti();
    showToast('Ramalan Baru Berhasil Diputar!');
  });

  // ========================================================
  // SISTEM PEMBERITAHUAN TOAST
  // ========================================================
  const toastContainer = document.getElementById('toast-container');
  function showToast(msg) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.textContent = msg;
    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 3200);
  }

  // ========================================================
  // ENGINE CANVAS CONFETTI
  // ========================================================
  const confettiCanvas = document.getElementById('confetti-canvas');
  let confettiCtx = null;
  let confettiParticles = [];
  let confettiAnimId = null;

  if (confettiCanvas) {
    confettiCtx = confettiCanvas.getContext('2d');
    function resizeConfetti() {
      confettiCanvas.width = window.innerWidth;
      confettiCanvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeConfetti);
    resizeConfetti();
  }

  function triggerConfetti() {
    if (!confettiCtx) return;
    const colors = ['#f5c542', '#00f0ff', '#ff4d8b', '#ffffff', '#ffd166', '#a29bfe'];
    for (let i = 0; i < 90; i++) {
      confettiParticles.push({
        x: window.innerWidth / 2 + (Math.random() * 200 - 100),
        y: window.innerHeight / 2 + (Math.random() * 100 - 50),
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 1.2) * 14,
        size: Math.random() * 9 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vr: (Math.random() - 0.5) * 12,
        alpha: 1
      });
    }

    if (!confettiAnimId) {
      updateConfetti();
    }
  }

  function updateConfetti() {
    if (!confettiCtx) return;
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

    for (let i = confettiParticles.length - 1; i >= 0; i--) {
      const p = confettiParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35; // gravitasi
      p.rotation += p.vr;
      p.alpha -= 0.009;

      if (p.alpha <= 0 || p.y > window.innerHeight) {
        confettiParticles.splice(i, 1);
        continue;
      }

      confettiCtx.save();
      confettiCtx.globalAlpha = p.alpha;
      confettiCtx.translate(p.x, p.y);
      confettiCtx.rotate((p.rotation * Math.PI) / 180);
      confettiCtx.fillStyle = p.color;
      confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      confettiCtx.restore();
    }

    if (confettiParticles.length > 0) {
      confettiAnimId = requestAnimationFrame(updateConfetti);
    } else {
      confettiAnimId = null;
    }
  }

  // ========================================================
  // ENGINE CANVAS DEBU BINTANG KOSMIK
  // ========================================================
  const cosmicCanvas = document.getElementById('cosmic-canvas');
  if (cosmicCanvas) {
    const cCtx = cosmicCanvas.getContext('2d');
    function resizeCosmic() {
      cosmicCanvas.width = window.innerWidth;
      cosmicCanvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCosmic);
    resizeCosmic();

    const stars = [];
    for (let i = 0; i < 70; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 1.8 + 0.4,
        alpha: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.4 + 0.1,
        color: Math.random() > 0.5 ? '#f5c542' : '#00f0ff'
      });
    }

    function renderCosmic() {
      cCtx.clearRect(0, 0, cosmicCanvas.width, cosmicCanvas.height);
      stars.forEach(s => {
        s.y -= s.speed;
        if (s.y < 0) s.y = cosmicCanvas.height;

        cCtx.beginPath();
        cCtx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        cCtx.fillStyle = s.color;
        cCtx.globalAlpha = s.alpha * 0.6;
        cCtx.shadowBlur = 6;
        cCtx.shadowColor = s.color;
        cCtx.fill();
      });
      requestAnimationFrame(renderCosmic);
    }
    renderCosmic();
  }

  // ========================================================
  // INISIALISASI SAAT HALAMAN DIBUKA
  // ========================================================
  setAge(STATE.age);
  renderMemories('all');
  updateCollectionDrawer();
  loadChat('firefly');

  // Buka modal video pop-up pada saat awal dimuat
  openPopupVideo();
});
