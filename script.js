function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    if (!obj) return;
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        obj.innerHTML = id === 'count-kg' ? value + "kg" : value;
        if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            if (entry.target.classList.contains('impact-container')) {
                animateValue("count-dogs", 0, 120, 2000);
                animateValue("count-kg", 0, 850, 2000);
            }
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


window.addEventListener('scroll', function() {
    const nav = document.querySelector('.header-nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(254, 250, 224, 0.95)';
        nav.style.position = 'fixed';
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        nav.style.background = 'transparent';
        nav.style.position = 'absolute';
        nav.style.boxShadow = 'none';
    }
});

// Adicione dentro do seu script.js
document.querySelector('.pix-box').addEventListener('click', function() {
    const pixKey = "04.696.312/0001-32";
    navigator.clipboard.writeText(pixKey).then(() => {
        const originalText = this.querySelector('.pix-label').innerText;
        this.querySelector('.pix-label').innerText = "✅ CNPJ Copiado!";
        this.querySelector('.pix-label').style.color = "#a3b18a";
        
        setTimeout(() => {
            this.querySelector('.pix-label').innerText = originalText;
            this.querySelector('.pix-label').style.color = "";
        }, 2000);
    });
});

// Suavizar a entrada dos elementos de forma sequencial (Staggering)
const observerOptions = { threshold: 0.1 };
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('active');
            }, index * 100); // Delay entre cada card
        }
    });
}, observerOptions);

function copyPix(valor) {
    const pixKey = "04.696.312/0001-32";
    navigator.clipboard.writeText(pixKey);
    
    // Feedback visual moderno usando um alerta customizado
    alert(`Chave PIX copiada! \n\nObrigado por considerar doar R$ ${valor}. Este valor salvará uma vida! ❤️`);
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(reg => {
        console.log('PWA registrado com sucesso!', reg.scope);
      })
      .catch(err => {
        console.error('Falha ao registrar PWA:', err);
      });
  });
}