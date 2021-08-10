export interface ChatProps {
  messages: string;
  chat: Chat;
}

interface Chat {
  id: string;
  users: string[];
}