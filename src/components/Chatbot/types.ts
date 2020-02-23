export interface ChatMessage {
  /** Contents of chat message */
  message: string;
  /** Flag to mark whether or not message should animate on mount */
  initial: boolean;
  /** Flag to control which side of screen the message floats towards */
  isSender: boolean;
  /** Unique index for each message */
  type?: 'message' | 'button';
  action?: any;
}
