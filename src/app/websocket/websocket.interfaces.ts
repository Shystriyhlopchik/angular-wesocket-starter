import { Observable } from 'rxjs';

// Публичный интерфейс сервиса
export interface IWebsocketService {
  on<T>(event: string): Observable<T>;
  send(event: string, data: any): void;
  status: Observable<boolean>;
}

export interface WebSocketConfig {
  url: string;
  reconnectInterval?: number;
  reconnectAttempts?: number;
}

// интерфейс сообщения вебсокета
export interface IWsMessage<T> {
  event: string;
  data: T;
}
