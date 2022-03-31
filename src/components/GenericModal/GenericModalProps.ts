import { ReactElement } from "react";

export interface GenericModalProps {
  className: string;
  isOpen?: boolean;
  toggle: () => void;
  content: {
    header: {
      className?: string
      title: string,
    },
    body: {
      className?: string
      content: ReactElement,
    }
    footer?: {
      className?: string,
      content?: ReactElement
    }
  }
}