export interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  title: string;
  rightAction?: React.ReactNode;

  onClose?(): void;
}
