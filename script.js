(function () {
  'use strict';

  const menuToggle = document.getElementById('menuToggle');
  const primaryNav = document.getElementById('primaryNav');

  if (menuToggle && primaryNav) {
    menuToggle.addEventListener('click', function () {
      const isOpen = primaryNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    });

    primaryNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        primaryNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Open navigation menu');
      });
    });
  }

  // Category buttons preselect a product in the enquiry form.
  document.querySelectorAll('.quote-product').forEach(function (button) {
    button.addEventListener('click', function () {
      const productSelect = document.getElementById('productSelect');
      const requestedProduct = button.getAttribute('data-product');
      if (productSelect && requestedProduct) {
        const option = Array.from(productSelect.options).find(function (item) {
          return item.text.trim() === requestedProduct;
        });
        if (option) productSelect.value = option.value;
        else productSelect.value = 'Other / Multiple products';
      }
      const contactSection = document.getElementById('contact');
      if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Demo form: validate fields, then open a prefilled email draft.
  // Replace this with a real backend or form provider before production.
  const quoteForm = document.getElementById('quoteForm');
  const formStatus = document.getElementById('formStatus');
  if (quoteForm) {
    quoteForm.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!quoteForm.reportValidity()) return;

      const formData = new FormData(quoteForm);
      const subject = 'Trade enquiry - ' + (formData.get('product') || 'Product enquiry');
      const body = [
        'Shiv Sai Global Impex - Website enquiry (prototype)',
        '',
        'Name: ' + (formData.get('name') || ''),
        'Company: ' + (formData.get('company') || ''),
        'Email: ' + (formData.get('email') || ''),
        'Phone / WhatsApp: ' + (formData.get('phone') || ''),
        'Product category: ' + (formData.get('product') || ''),
        'Destination country: ' + (formData.get('destination') || ''),
        'Estimated quantity: ' + (formData.get('quantity') || 'Not specified'),
        'Preferred packaging: ' + (formData.get('packaging') || 'Not specified'),
        '',
        'Requirement:',
        (formData.get('message') || '')
      ].join('\n');

      if (formStatus) {
        formStatus.textContent = 'Your email application may open with a prepared draft. This prototype does not send the enquiry automatically.';
      }
      // TODO before production: replace the placeholder with the company's confirmed email.
      const confirmedBusinessEmail = '';
      const mailto = 'mailto:' + encodeURIComponent(confirmedBusinessEmail) +
        '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      if (!confirmedBusinessEmail) {
        if (formStatus) formStatus.textContent = 'Demo only: the company email is not configured yet. The enquiry details are ready to be connected after the client confirms a business email or backend.';
        const blob = new Blob([subject + '\n\n' + body], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = 'shiv-sai-trade-enquiry.txt';
        downloadLink.textContent = 'Download enquiry details';
        downloadLink.className = 'text-link enquiry-download';
        downloadLink.style.marginTop = '8px';
        const existing = quoteForm.querySelector('.enquiry-download');
        if (existing) existing.remove();
        quoteForm.appendChild(downloadLink);
        downloadLink.click();
        setTimeout(function () { URL.revokeObjectURL(url); }, 1500);
      } else {
        window.location.href = mailto;
      }
    });
  }

  // Lightweight reveal animation; content remains visible if IntersectionObserver is unavailable.
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(function (item) { observer.observe(item); });
  } else {
    revealItems.forEach(function (item) { item.classList.add('is-visible'); });
  }

  // Mark the current year automatically.
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
