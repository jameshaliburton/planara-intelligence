"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { Plug } from "lucide-react";

interface Toast {
  id: number;
  message: string;
}

interface ToastContextType {
  showIntegrationToast: (message: string) => void;
}

const ToastContext = createContext<ToastContextType>({
  showIntegrationToast: () => {},
});

export function useIntegrationToast() {
  return useContext(ToastContext);
}

let nextId = 0;

export function IntegrationToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showIntegrationToast = useCallback((message: string) => {
    const id = nextId++;
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ showIntegrationToast }}>
      {children}

      {/* Toast container */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2 items-center pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="flex items-center gap-2.5 px-4 py-2.5 bg-[#1A1E27] border border-white/10 rounded-lg shadow-xl shadow-black/30 pointer-events-auto animate-[toast-in_0.2s_ease-out]"
          >
            <Plug className="w-3.5 h-3.5 text-planara-teal shrink-0" strokeWidth={1.5} />
            <span className="text-xs font-mono text-white/70">{toast.message}</span>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
