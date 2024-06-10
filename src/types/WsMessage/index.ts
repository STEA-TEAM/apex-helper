import {
  LayerDrawServerMessageData,
  HandshakeServerMessageData,
  ServerResult,
} from 'types/WsMessage/types';

export enum WsAction {
  Handshake = 'Handshake',
  LayerDraw = 'LayerDraw',
}

export interface WsMessage {
  action: WsAction;
  data: unknown;
}

export class HandshakeServerMessage implements WsMessage {
  action = WsAction.Handshake;
  data: ServerResult<HandshakeServerMessageData>;

  constructor(data: ServerResult<HandshakeServerMessageData>) {
    this.data = data;
  }
}

export class LayerDrawServerMessage implements WsMessage {
  action = WsAction.LayerDraw;
  data: ServerResult<LayerDrawServerMessageData>;

  constructor(data: ServerResult<LayerDrawServerMessageData>) {
    this.data = data;
  }
}

export interface WsMessageMapping {
  [WsAction.Handshake]: HandshakeServerMessage;
  [WsAction.LayerDraw]: LayerDrawServerMessage;
}
