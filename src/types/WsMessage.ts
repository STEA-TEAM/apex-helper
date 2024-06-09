export enum WsAction {
  Handshake = 'Handshake',
}

export interface WsMessage {
  action: WsAction;
  data: unknown;
}

export type ServerResult<T = unknown> =
  | {
      result: 'failure' | 'error';
      message: string;
    }
  | ({ result: 'success' } & T);

interface HandshakeServerMessageData {
  resolution: { height: number; width: number };
}

export class HandshakeServerMessage implements WsMessage {
  action = WsAction.Handshake;
  data: ServerResult<HandshakeServerMessageData>;

  constructor(data: ServerResult<HandshakeServerMessageData>) {
    this.data = data;
  }
}

export interface WsMessageMapping {
  [WsAction.Handshake]: HandshakeServerMessage;
}
