import{ae as r,j as a,aa as i,g as s}from"./index-DCnRgger.js";function l(){let e=null;const n=s();function t(){e!==null&&(clearTimeout(e),e=null)}return r(t),a(t),{removeTimeout:t,registerTimeout(o,u){t(),i(n)===!1&&(e=setTimeout(()=>{e=null,o()},u))}}}export{l as u};
