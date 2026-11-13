// SPDX-License-Identifier: Apache-2.0
const config=window.WAIDROP_CONFIG||{};
// Set YouTube IDs in config.js when the videos have been uploaded.
for(const slot of document.querySelectorAll('[data-youtube]')){const id=config[slot.dataset.youtube];if(id&&/^[A-Za-z0-9_-]{11}$/.test(id)){const frame=document.createElement('iframe');frame.src='https://www.youtube-nocookie.com/embed/'+id;frame.title=slot.dataset.title;frame.loading='lazy';frame.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';frame.allowFullscreen=true;frame.referrerPolicy='strict-origin-when-cross-origin';slot.replaceChildren(frame);slot.parentElement.querySelector('.video-caption span')?.remove();}}
if(config.chromeWebStoreUrl){for(const a of document.querySelectorAll('.store-link')){a.href=config.chromeWebStoreUrl;a.textContent='Add to Chrome ↗';a.removeAttribute('aria-disabled');a.target='_blank';a.rel='noopener';}}
