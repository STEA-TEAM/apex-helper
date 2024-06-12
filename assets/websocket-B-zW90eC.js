import{ag as t}from"./index-DCnRgger.js";class o{_onOpenHandlers=[()=>t.create({type:"positive",message:"WebSocket connected",icon:"check"})];_handlers=new Map;_url;_ws;set url(e){this._url=e}connect(){if(!this._url){t.create({type:"warning",message:"WebSocket URL not set"});return}this._ws=new WebSocket(this._url),this._ws.onclose=()=>{t.create({type:"negative",message:"WebSocket closed, reconnecting...",icon:"close"}),setTimeout(()=>{this.connect()},3e3)},this._ws.onmessage=e=>{const s=JSON.parse(e.data),n=this._handlers.get(s.action);n?n(s):t.create({type:"warning",message:`Unknown action: ${s.action}`,caption:JSON.stringify(s.data),icon:"help_outline"})},this._ws.onopen=()=>{this._onOpenHandlers.forEach(e=>e())}}addOnOpenHandler(e){this._onOpenHandlers.push(e)}isOpen(){return this._ws?.readyState===WebSocket.OPEN}registerWsAction(e,s){this._handlers.set(e,s)}send(e){this._sendRaw(JSON.stringify(e))}unregisterWsAction(e){this._handlers.delete(e)}_sendRaw(e){this.isOpen()?this._ws?.send(e):console.log("WebSocket not connected")}}const c=new o;export{c as websocket};
