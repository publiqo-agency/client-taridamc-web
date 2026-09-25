/**
 * Runs synchronously in <head>, before first paint, next to the CORE
 * REVEAL_INIT_SCRIPT.
 *
 * - `data-motion="on"` lets globals.css hold every `data-m` element in its
 *   starting state, so nothing paints in place and then jumps.
 * - `data-intro="on"` shows the first-visit curtain (once per session).
 * - The fail-safe: if the engine has not reported `data-motion-ready` after a
 *   few seconds (bundle blocked, script error), both attributes are removed
 *   and the page shows complete and static instead of blank.
 *
 * Reduced motion: nothing is armed at all.
 */
export const INTRO_KEY = "tarida:intro";

export const MOTION_INIT_SCRIPT = `(function(){try{var d=document.documentElement;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;d.setAttribute("data-motion","on");var seen=false;try{seen=sessionStorage.getItem("${INTRO_KEY}")==="1"}catch(e){}if(!seen)d.setAttribute("data-intro","on");setTimeout(function(){if(!d.hasAttribute("data-motion-ready")){d.removeAttribute("data-motion");d.removeAttribute("data-intro")}},3000)}catch(e){}})()`;
