"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { ArrowRight, Plug } from "lucide-react";

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
    }, 4000);
  }, []);

  return (
    <ToastContext.Provider value={{ showIntegrationToast }}>
      {children}

      {/* Toast container */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2 items-center pointer-events-none max-w-lg w-[calc(100%-3rem)]">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="flex items-start gap-3 px-4 py-3 bg-[#131820] border border-planara-teal/30 rounded-lg shadow-2xl shadow-black/50 pointer-events-auto animate-[toast-in_0.2s_ease-out] w-full"
          >
            <Plug className="w-4 h-4 text-planara-teal shrink-0 mt-0.5" strokeWidth={1.5} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-0.5">
                <ArrowRight className="w-3 h-3 text-planara-teal" strokeWidth={2} />
                <span className="text-[10px] font-mono uppercase tracking-wider text-planara-teal">
                  Integration Point
                </span>
              </div>
              <span className="text-xs text-white/70 leading-relaxed">
                {toast.message}
              </span>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
