import { DrawElement } from 'types/WsMessage/DrawElement';

export type ServerResult<T = unknown> =
  | {
      result: 'failure' | 'error';
      message: string;
    }
  | ({ result: 'success' } & T);

export interface HandshakeServerMessageData {
  resolution: { height: number; width: number };
}

export type LayerDrawServerMessageData = {
  name: string;
  contents: DrawElement[];
};
