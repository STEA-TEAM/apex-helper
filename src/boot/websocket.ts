import { Notify } from 'quasar';

import { WsAction, WsMessage, WsMessageMapping } from 'types/WsMessage';

class WsWrapper {
  private _onOpenHandlers: (() => void)[] = [
    () =>
      Notify.create({
        type: 'positive',
        message: 'WebSocket connected',
        icon: 'check',
      }),
  ];
  private _handlers = new Map<
    WsAction,
    (message: WsMessageMapping[keyof WsMessageMapping]) => void
  >();
  private _url?: string;
  private _ws: WebSocket | undefined;

  set url(url: string) {
    this._url = url;
  }

  connect() {
    if (!this._url) {
      Notify.create({
        type: 'warning',
        message: 'WebSocket URL not set',
      });
      return;
    }
    this._ws = new WebSocket(this._url);
    this._ws.onclose = () => {
      Notify.create({
        type: 'negative',
        message: 'WebSocket closed, reconnecting...',
        icon: 'close',
      });
      setTimeout(() => {
        this.connect();
      }, 3000);
    };
    this._ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      const handler = this._handlers.get(message.action);
      if (handler) {
        handler(message);
      } else {
        Notify.create({
          type: 'warning',
          message: `Unknown action: ${message.action}`,
          caption: JSON.stringify(message.data),
          icon: 'help_outline',
        });
      }
    };
    this._ws.onopen = () => {
      this._onOpenHandlers.forEach((handler) => handler());
    };
  }

  addOnOpenHandler(handler: () => void) {
    this._onOpenHandlers.push(handler);
  }

  isOpen() {
    return this._ws?.readyState === WebSocket.OPEN;
  }

  registerWsAction<T extends keyof WsMessageMapping>(
    wsAction: T,
    callback: (message: WsMessageMapping[T]) => void,
  ) {
    this._handlers.set(wsAction, callback);
  }

  send(object: WsMessage) {
    this.sendRaw(JSON.stringify(object));
  }

  private sendRaw(message: string | ArrayBufferLike | Blob | ArrayBufferView) {
    if (this.isOpen()) {
      this._ws?.send(message);
    } else {
      console.log('WebSocket not connected');
    }
  }
}

export const websocket = new WsWrapper();
