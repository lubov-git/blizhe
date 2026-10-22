document.querySelectorAll('[data-page]').forEach(button=>button.addEventListener('click',()=>location.href=button.dataset.page));
document.querySelectorAll('[data-book]').forEach(button=>{const link=document.createElement('a');link.className=button.className;link.innerHTML=button.innerHTML;link.href='contact-us.html';button.replaceWith(link)});
