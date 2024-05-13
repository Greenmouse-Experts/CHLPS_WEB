export interface TicketItem {
  admin_id: string | null;
  created_at: string;
  id: number;
  message: string;
  status: string;
  title: string;
  unique_id: string;
  updated_at: string;
  user_id: string;
}

export enum TICKET_STATUS {
    OPEN = "open",
    CLOSED = "closed",
    ANSWERED = "answered"
}