// Sticky header shrink
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('shrink', window.scrollY > 40);
  });

  // Scroll-reveal + pulse-line draw
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  document.querySelectorAll('.pulse-divider').forEach(el => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    obs.observe(el);
  });

  // Booking form (demo — no backend)
  document.getElementById('booking-form').addEventListener('submit', function(e){
    e.preventDefault();
    document.getElementById('booking-msg').classList.add('show');
  });

  // Newsletter (demo)
  document.getElementById('newsletter-form').addEventListener('submit', function(e){
    e.preventDefault();
    const btn = this.querySelector('button');
    btn.style.background = 'var(--teal)';
    this.querySelector('input').value = '';
  });

  // Doctor carousel controls
  const track = document.getElementById('doctor-track');
  document.getElementById('scroll-right').addEventListener('click', () => {
    track.scrollBy({ left: 280, behavior: 'smooth' });
  });
  document.getElementById('scroll-left').addEventListener('click', () => {
    track.scrollBy({ left: -280, behavior: 'smooth' });
  });

  // Mobile menu (simple toggle of primary nav as a dropdown)
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav.primary');
  toggle.addEventListener('click', () => {
    const open = nav.style.display === 'flex';
    nav.style.display = open ? 'none' : 'flex';
    nav.style.position = 'absolute';
    nav.style.top = '100%';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.background = 'var(--paper)';
    nav.style.flexDirection = 'column';
    nav.style.padding = '20px 24px';
    nav.style.borderBottom = '1px solid var(--line)';
    nav.style.gap = '16px';
  });
