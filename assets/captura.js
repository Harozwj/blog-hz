(function () {
  var params = new URLSearchParams(window.location.search);
  var utm = params.get('utm_campaign') || '';

  document.querySelectorAll('.captura-form').forEach(function (form) {
    var msg = form.querySelector('.captura-msg');
    var botao = form.querySelector('button');

    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var dados = new FormData(form);
      var email = String(dados.get('email') || '').trim();
      if (!email || email.indexOf('@') < 1) { msg.textContent = 'Confira o seu e-mail.'; return; }
      if (!dados.get('perfil')) { msg.textContent = 'Escolha quem você é no tênis.'; return; }
      if (!dados.get('consentimento')) { msg.textContent = 'Marque a autorização para receber os e-mails.'; return; }

      botao.disabled = true;
      botao.textContent = 'Enviando...';
      var corpo = {
        nome: dados.get('nome') || '',
        email: email,
        perfil: dados.get('perfil'),
        origem: 'blog-' + (form.getAttribute('data-origem') || 'home') + ':' + window.location.pathname,
        utm_campaign: utm,
        consentimento: 'sim'
      };

      fetch(window.HRZ_LEAD_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(corpo)
      }).then(function (r) {
        if (!r.ok) { throw new Error('falha'); }
        form.innerHTML = '<p class="captura-ok">Pronto! Confira o seu e-mail agora: a primeira mensagem já está chegando. 🙌🎾</p>';
        if (window.fbq) { window.fbq('track', 'Lead', { content_name: 'Carta de Quadra', perfil: corpo.perfil }); }
      }).catch(function () {
        botao.disabled = false;
        botao.textContent = 'Quero receber';
        msg.textContent = 'Não consegui enviar agora. Tente de novo em instantes.';
      });
    });
  });
})();
