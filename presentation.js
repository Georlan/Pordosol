import {imageInfo} from './image-info.js';

// Navigation polish lives here because this module is loaded on every page.
// It keeps the header visually aligned and adds desktop hover/focus behavior
// without changing the mobile click fallback already handled by app.js.
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.dataset.headerEnhancement = 'true';
  style.textContent = `
    .site-header > nav {
      align-items: center;
    }
    .site-header > nav > a,
    .nav-products {
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 999px;
      transition: background-color .22s ease, transform .22s ease, color .22s ease;
    }
    .site-header > nav > a {
      padding: 10px 12px;
    }
    .nav-products {
      gap: 2px;
      padding: 2px 6px 2px 12px;
      position: relative;
    }
    .nav-products > a {
      min-height: 40px;
      display: flex;
      align-items: center;
    }
    .nav-products > button {
      width: 34px;
      height: 34px;
      display: inline-grid;
      place-items: center;
      padding: 0;
      border: 0;
      border-radius: 50%;
      background: transparent;
      line-height: 1;
      transition: transform .24s cubic-bezier(.2,.7,.2,1), background-color .2s ease;
    }
    .nav-products::after {
      content: '';
      position: absolute;
      left: 12px;
      right: calc(100% - 12px);
      bottom: 4px;
      height: 2px;
      border-radius: 2px;
      background: var(--red);
      transition: right .22s cubic-bezier(.2,.7,.2,1);
    }
    .site-header > nav > a::after {
      left: 12px;
      right: calc(100% - 12px);
      bottom: 4px;
    }
    .site-header > nav > a:hover::after,
    .site-header > nav > a:focus-visible::after {
      right: 12px;
    }
    .nav-products:hover::after,
    .nav-products:focus-within::after {
      right: 12px;
    }
    @media (hover:hover) and (pointer:fine) and (min-width:851px) {
      .site-header > nav > a:hover,
      .site-header > nav > a:focus-visible,
      .nav-products:hover,
      .nav-products:focus-within {
        background: rgba(23,136,4,.075);
        transform: translateY(-1px);
      }
      .nav-products:hover > button,
      .nav-products:focus-within > button,
      .nav-products > button[aria-expanded='true'] {
        transform: rotate(180deg);
        background: rgba(23,136,4,.07);
      }
    }
    @media (prefers-reduced-motion:reduce) {
      .site-header > nav > a,
      .nav-products,
      .nav-products > button,
      .nav-products::after,
      .site-header > nav > a::after {
        transition: none !important;
      }
    }
  `;
  document.head.append(style);

  const navProducts = document.querySelector('.nav-products');
  const megaMenu = document.querySelector('#mega-menu');
  const megaToggle = document.querySelector('#mega-toggle');
  const finePointer = matchMedia('(hover:hover) and (pointer:fine) and (min-width:851px)');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let closeTimer;

  const openMega = () => {
    if (!finePointer.matches || !navProducts || !megaMenu || !megaToggle) return;
    clearTimeout(closeTimer);
    const wasHidden = megaMenu.hidden;
    megaMenu.hidden = false;
    megaToggle.setAttribute('aria-expanded', 'true');
    if (wasHidden && !reducedMotion.matches) {
      megaMenu.animate(
        [{opacity: 0, transform: 'translateY(-8px)'}, {opacity: 1, transform: 'translateY(0)'}],
        {duration: 220, easing: 'cubic-bezier(.2,.7,.2,1)'}
      );
    }
  };

  const closeMega = () => {
    if (!finePointer.matches || !navProducts || !megaMenu || !megaToggle) return;
    closeTimer = setTimeout(() => {
      const focused = document.activeElement;
      if (navProducts.matches(':hover') || megaMenu.matches(':hover') || navProducts.contains(focused) || megaMenu.contains(focused)) return;
      megaMenu.hidden = true;
      megaToggle.setAttribute('aria-expanded', 'false');
    }, 110);
  };

  navProducts?.addEventListener('mouseenter', openMega);
  navProducts?.addEventListener('mouseleave', closeMega);
  navProducts?.addEventListener('focusin', openMega);
  navProducts?.addEventListener('focusout', closeMega);
  megaMenu?.addEventListener('mouseenter', () => clearTimeout(closeTimer));
  megaMenu?.addEventListener('mouseleave', closeMega);
  megaMenu?.addEventListener('focusin', openMega);
  megaMenu?.addEventListener('focusout', closeMega);
}

// A single family entry avoids presenting the same 500 g photograph as two packs.
export function catalogEntries(items){return items.filter(p=>p.id!=='discos-10');}
export function productCard(p){const discs=p.category==='discos';return `<article class="product"><a href="/produto/${p.id}/"><div class="product-picture"><img src="/assets/official/${p.image}.webp" alt="${p.name}" width="${imageInfo[p.image].width}" height="${imageInfo[p.image].height}" loading="lazy" decoding="async"></div><span class="eyebrow">${discs?'15 cm · 500 g / 10 cm · 200 g':p.format}</span><h3>${p.label}</h3></a>${discs?'<a class="text-link" href="/produto/discos-15/">Escolher formato →</a>':`<button class="text-button" data-add="${p.id}">Adicionar à cotação <span>＋</span></button>`}</article>`;}
