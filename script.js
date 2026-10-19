const ctaForm = document.getElementById('demoForm');
if (ctaForm) {
  const msg = document.getElementById('cf-msg');
  ctaForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!ctaForm.checkValidity()) { ctaForm.reportValidity(); return; }
    const btn = ctaForm.querySelector('[type="submit"]');
    btn.disabled = true;
    btn.classList.add('loading');
    msg.textContent = '';
    msg.classList.remove('err');
    try {
      const data = new URLSearchParams(new FormData(ctaForm));
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json' },
        body: data.toString(),
      });
      const json = await res.json();
      if (json.success) {
        const wrap = document.getElementById('demoFormWrap');
        wrap.innerHTML = '<div class="cf-card-success"><h3>Thanks, demo booked.</h3><p>Check your email for a confirmation and next steps.</p></div>';
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      msg.textContent = 'Something went wrong. Please try again or email info@mashaaiconnect.com.';
      msg.classList.add('err');
    } finally {
      btn.disabled = false;
      btn.classList.remove('loading');
    }
  });
}

const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

const stagger = document.querySelectorAll('[data-stagger]');
if (stagger.length) {
  const so = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const steps = e.target.querySelectorAll('.flow-step');
      steps.forEach((s, i) => {
        setTimeout(() => s.classList.add('in'), 200 + i * 420);
      });
      so.unobserve(e.target);
    });
  }, { threshold: 0.4 });
  stagger.forEach((el) => so.observe(el));
}

const phone = document.querySelector('.phone');
if (phone) {
  const po = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const chat = e.target.querySelector('[data-chat]');
      setTimeout(() => chat.classList.add('in'), 420);
      e.target.querySelectorAll('[data-chk]').forEach((c, i) => {
        setTimeout(() => c.classList.add('in'), 2000 + i * 650);
      });
      setTimeout(() => e.target.querySelector('[data-qualified]').classList.add('in'), 4400);
      po.unobserve(e.target);
    });
  }, { threshold: 0.4 });
  po.observe(phone);
}

const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.tab-panel');
if (tabs.length) {
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.dataset.tab;
      panels.forEach((p) => {
        p.classList.toggle('active', p.dataset.panel === target);
      });
    });
  });
}

const counters = document.querySelectorAll('[data-count]');
if (counters.length) {
  const counterIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      let val = 9;
      const run = setInterval(() => {
        val += 1;
        el.textContent = val;
        if (val >= 13) clearInterval(run);
      }, 2300);
      setTimeout(() => counterIO.unobserve(el), 15000);
    });
  }, { threshold: 0.5 });
  counters.forEach((el) => counterIO.observe(el));
}

const callRows = document.querySelectorAll('[data-call]');
if (callRows.length) {
  const callIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const row = e.target;
      const status = row.querySelector('[data-status]');
      const state = row.querySelector('[data-state]');
      setTimeout(() => {
        status.textContent = 'Qualified';
        status.className = 'badge qualified';
        if (state) { state.className = 'bx bx-check-circle state'; state.style.color = 'var(--green)'; }
        row.classList.add('done');
      }, 5200);
      callIO.unobserve(row);
    });
  }, { threshold: 0.5 });
  callRows.forEach((el) => callIO.observe(el));
}

const pbFlow = document.getElementById('pb-win');
if (pbFlow) {
  const pbIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.querySelectorAll('.pb-step').forEach((s, i) => {
        setTimeout(() => s.classList.add('in'), 150 + i * 350);
      });
      pbIO.unobserve(e.target);
    });
  }, { threshold: 0.4 });
  pbIO.observe(pbFlow);
}

const lf = document.getElementById('leadflow');
if (lf) {
  const steps = lf.querySelectorAll('.lf-step');
  const conns = lf.querySelectorAll('.lf-conn');
  let cycle;
  const stepCycle = () => {
    let i = 0;
    const tick = () => {
      steps.forEach((s, idx) => {
        s.classList.remove('active', 'done');
        if (idx < i) s.classList.add('done');
        if (idx === i) s.classList.add('active');
      });
      conns.forEach((c, idx) => c.classList.toggle('hot', idx < i));
      i = (i + 1) % steps.length;
    };
    tick();
    cycle = setInterval(tick, 1300);
  };
  const lfIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting && !cycle) {
        stepCycle();
        lfIO.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  lfIO.observe(lf);
}

const speedLine = document.getElementById('speedLine');
if (speedLine) {
  const spSteps = speedLine.querySelectorAll('.speed-step');
  const spIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      spSteps.forEach((s, i) => setTimeout(() => s.classList.add('in'), 500 + i * 850));
      setTimeout(() => speedLine.classList.add('grown'), 200);
      spIO.unobserve(e.target);
    });
  }, { threshold: 0.4 });
  spIO.observe(speedLine);
}

const accordions = document.querySelectorAll('.acc-item');
if (accordions.length) {
  accordions.forEach((item) => {
    const btn = item.querySelector('.acc-q');
    const panel = item.querySelector('.acc-a');
    if (item.classList.contains('open')) panel.style.maxHeight = panel.scrollHeight + 'px';
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      accordions.forEach((o) => {
        o.classList.remove('open');
        o.querySelector('.acc-a').style.maxHeight = '0';
      });
      if (!isOpen) {
        item.classList.add('open');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });
}

const wrProbs = document.getElementById('wr-prob-win');
if (wrProbs) {
  const wrPIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.querySelectorAll('.wr-pstep').forEach((s, i) => {
        setTimeout(() => s.classList.add('in'), 200 + i * 350);
      });
      wrPIO.unobserve(e.target);
    });
  }, { threshold: 0.4 });
  wrPIO.observe(wrProbs);
}

const wrTimeline = document.querySelector('.wr-timeline');
if (wrTimeline) {
  const wSteps = wrTimeline.querySelectorAll('.wr-step');
  const wTIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      wSteps.forEach((s, i) => setTimeout(() => s.classList.add('in'), 300 + i * 650));
      setTimeout(() => wrTimeline.classList.add('grown'), 150);
      wTIO.unobserve(e.target);
    });
  }, { threshold: 0.4 });
  wTIO.observe(wrTimeline);
}

document.querySelectorAll('.wr-prog').forEach((prog) => {
  const steps = prog.querySelectorAll('.wr-prog-step');
  const alertCard = prog.dataset.card ? document.getElementById(prog.dataset.card) : null;
  let cycle = null;
  let i = 0;
  const tick = () => {
    steps.forEach((s, idx) => {
      s.classList.remove('active', 'done');
      if (idx < i) s.classList.add('done');
      if (idx === i) s.classList.add('active');
    });
    i = (i + 1) % steps.length;
  };
  const wPIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting || cycle) return;
      if (alertCard) alertCard.classList.add('in');
      tick();
      cycle = setInterval(tick, 1400);
      wPIO.unobserve(e.target);
    });
  }, { threshold: 0.4 });
  wPIO.observe(prog);
});

const wrNight = document.getElementById('wr-night-steps');
if (wrNight) {
  const wSteps = wrNight.querySelectorAll('.wr-nstep');
  const clockTime = document.getElementById('wr-clock-time');
  const clockLabel = document.getElementById('wr-clock-label');
  let i = 0;
  const tick = () => {
    wSteps.forEach((s, idx) => s.classList.toggle('active', idx === i));
    if (clockTime) clockTime.textContent = wSteps[i].dataset.t;
    if (clockLabel) clockLabel.textContent = wSteps[i].dataset.l;
    i = (i + 1) % wSteps.length;
  };
  const wNIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      tick();
      setInterval(tick, 2100);
      wNIO.unobserve(e.target);
    });
  }, { threshold: 0.4 });
  wNIO.observe(wrNight);
}

const mdDemo = document.getElementById('md-demo');
if (mdDemo) {
  const md = (id) => document.getElementById(id);
  const mdSleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const MD_NAME = 'Daniel Reyes', MD_PHONE = '(602) 555-0148', MD_EMAIL = 'd.reyes@email.com', MD_INTEREST = '3-bed home';

  let mdTimerInterval = null;

  async function mdTypeInto(el, text, speed = 38) {
    el.innerHTML = '<span class="txt"></span><span class="caret"></span>';
    const txtEl = el.querySelector('.txt');
    for (let i = 0; i < text.length; i++) {
      txtEl.textContent += text[i];
      await mdSleep(speed);
    }
    el.querySelector('.caret')?.remove();
  }

  function mdSetStep(index, state) {
    mdDemo.querySelectorAll('.md-step').forEach((s) => {
      const i = +s.dataset.step;
      s.classList.remove('active', 'done', 'fill');
      if (i < index) s.classList.add('done', 'fill');
      else if (i === index) s.classList.add(state === 'done' ? 'done' : 'active');
      if (i === index && state === 'done') s.classList.add('fill');
    });
  }

  function mdShowPanel(id) {
    mdDemo.querySelectorAll('.md-panel').forEach((p) => p.classList.remove('show'));
    md(id).classList.add('show');
    md('md-stage').classList.toggle('expanded', id === 'md-panel-call');
  }

  async function mdFlash(text, cls, ms = 1100) {
    const f = md('md-flash'), t = md('md-flash-text');
    t.className = 'md-flash-text ' + cls;
    t.innerHTML = text;
    f.classList.add('show');
    await mdSleep(ms);
    f.classList.remove('show');
    await mdSleep(300);
  }

  function mdStartTimer() {
    let t = 0;
    md('md-timer').textContent = '00:00';
    md('md-timer').className = 'md-timer';
    mdTimerInterval = setInterval(() => {
      t++;
      const mm = String(Math.floor(t / 60)).padStart(2, '0');
      const ss = String(t % 60).padStart(2, '0');
      md('md-timer').textContent = `${mm}:${ss}`;
      if (t >= 8) md('md-timer').classList.add('hot');
    }, 1000);
  }

  function mdStopTimer() {
    clearInterval(mdTimerInterval);
    md('md-timer').classList.remove('hot');
    md('md-timer').classList.add('done');
  }

  async function mdResetAll() {
    ['md-f-name', 'md-f-phone', 'md-f-email', 'md-f-interest'].forEach((id) => {
      md(id).innerHTML = '<span class="caret"></span>';
    });
    md('md-f-check').classList.remove('checked');
    md('md-f-submit').classList.remove('armed', 'pressed');
    md('md-f-submit').textContent = 'Submit request';
    ['md-n1', 'md-n2', 'md-n3'].forEach((id) => md(id).classList.remove('lit'));
    ['md-c1', 'md-c2'].forEach((id) => md(id).classList.remove('on'));
    const video = md('md-call-video');
    video.pause();
    video.currentTime = 0;
    md('md-play-overlay').classList.remove('hide');
    md('md-sound-hint').classList.remove('show');
    md('md-video-missing').style.display = 'none';
    mdShowPanel('md-panel-form');
    mdSetStep(0, 'active');
    clearInterval(mdTimerInterval);
    md('md-timer').textContent = '00:00';
    md('md-timer').className = 'md-timer';
  }

  let mdSoundEnabled = false;
  function mdSyncSound() {
    const video = md('md-call-video');
    video.muted = !mdSoundEnabled;
    md('md-sound-hint').classList.toggle('show', !mdSoundEnabled);
  }

  document.addEventListener('pointerdown', () => { mdSoundEnabled = true; }, { once: true });
  document.addEventListener('keydown', () => { mdSoundEnabled = true; }, { once: true });

  function mdPlayCallVideo() {
    const video = md('md-call-video');
    const overlay = md('md-play-overlay');
    overlay.classList.add('hide');
    md('md-video-missing').style.display = 'none';

    mdSyncSound();
    const p = video.play();
    if (!p) return;
    p.catch(() => {
      video.muted = true;
      md('md-sound-hint').classList.add('show');
      const pm = video.play();
      if (pm) pm.catch(() => {
        md('md-video-missing').style.display = 'flex';
      });
    });
  }

  md('md-sound-hint').addEventListener('click', () => {
    mdSoundEnabled = true;
    mdSyncSound();
  });

  function mdWaitForCallStep() {
    return new Promise((resolve) => {
      const video = md('md-call-video');
      let done = false;
      const finish = () => { if (done) return; done = true; resolve(); };
      video.addEventListener('ended', finish, { once: true });
      md('md-skip-link').addEventListener('click', finish, { once: true });
      video.addEventListener('error', () => {
        md('md-video-missing').style.display = 'flex';
        md('md-play-overlay').classList.add('hide');
        setTimeout(finish, 2600);
      }, { once: true });

      mdPlayCallVideo();
    });
  }

  md('md-play-overlay').addEventListener('click', () => { mdPlayCallVideo(); });

  async function mdPlaySequence() {
    await mdResetAll();
    await mdSleep(500);

    mdSetStep(0, 'active');
    mdStartTimer();
    await mdTypeInto(md('md-f-name'), MD_NAME);
    await mdSleep(150);
    await mdTypeInto(md('md-f-phone'), MD_PHONE);
    await mdSleep(150);
    await mdTypeInto(md('md-f-email'), MD_EMAIL, 30);
    await mdSleep(150);
    await mdTypeInto(md('md-f-interest'), MD_INTEREST);
    await mdSleep(300);
    md('md-f-check').classList.add('checked');
    await mdSleep(300);
    md('md-f-submit').classList.add('armed');
    await mdSleep(400);
    md('md-f-submit').classList.add('pressed');
    md('md-f-submit').textContent = 'Submitting…';
    await mdSleep(250);
    md('md-f-submit').classList.remove('pressed');

    mdSetStep(0, 'done');
    await mdFlash('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l5 5L20 6"/></svg>FORM SUBMITTED', 'c-blue', 1000);

    mdShowPanel('md-panel-trigger');
    mdSetStep(1, 'active');
    md('md-n1').classList.add('lit');
    await mdSleep(500);
    md('md-c1').classList.add('on');
    await mdSleep(500);
    md('md-n2').classList.add('lit');
    await mdSleep(500);
    md('md-c2').classList.add('on');
    await mdSleep(500);
    md('md-n3').classList.add('lit');
    await mdSleep(700);
    mdSetStep(1, 'done');
    await mdFlash('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L4 14h6l-1 8 9-12h-6z"/></svg>WORKFLOW TRIGGERED', 'c-blue', 1000);

    mdShowPanel('md-panel-call');
    mdSetStep(2, 'active');
    await mdWaitForCallStep();
    mdSetStep(2, 'done');

    mdShowPanel('md-panel-booked');
    mdSetStep(3, 'active');
    await mdSleep(400);
    mdStopTimer();
    mdSetStep(3, 'done');
    await mdSleep(300);
    await mdFlash('APPOINTMENT BOOKED', 'c-green', 1300);
  }

  md('md-replay-btn').addEventListener('click', () => { mdPlaySequence(); });

  let mdStarted = false;
  const mdIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting && !mdStarted) {
        mdStarted = true;
        mdPlaySequence();
        mdIO.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  mdIO.observe(mdDemo);

  const mdVisIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      const video = e.target;
      if (video.ended) return;
      if (e.isIntersecting) {
        if (video.currentTime > 0 && video.paused) {
          video.muted = !mdSoundEnabled;
          video.play().catch(() => {});
        }
      } else if (!video.paused) {
        video.pause();
      }
    });
  }, { threshold: 0.1 });
  mdVisIO.observe(md('md-call-video'));
}