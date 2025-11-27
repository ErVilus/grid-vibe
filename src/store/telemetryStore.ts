import { create } from 'zustand';

interface TelemetryPoint {
  time: number;
  speed: number;
  rpm: number;
  gear: number;
  throttle: number;
  brake: number;
}

interface TelemetryState {
  isConnected: boolean;
  currentData: TelemetryPoint;
  history: TelemetryPoint[];
  connect: () => void;
  disconnect: () => void;
}

export const useTelemetryStore = create<TelemetryState>((set, get) => {
  let socketInterval: NodeJS.Timeout;
  
  return {
    isConnected: false,
    currentData: { time: 0, speed: 0, rpm: 0, gear: 0, throttle: 0, brake: 0 },
    history: [],
    
    connect: () => {
      set({ isConnected: true });
      let time = 0;
      
      socketInterval = setInterval(() => {
        const state = get();
        time += 100;
        
        const baseSpeed = 280 + Math.sin(time / 1000) * 40;
        const noise = Math.random() * 2;
        
        const newData: TelemetryPoint = {
          time,
          speed: Math.floor(baseSpeed + noise),
          rpm: Math.floor(11000 + (baseSpeed * 10) + Math.random() * 100),
          gear: 8,
          throttle: baseSpeed > 260 ? 100 : Math.floor(Math.random() * 80),
          brake: baseSpeed < 250 ? Math.floor(Math.random() * 100) : 0,
        };

        const newHistory = [...state.history, newData].slice(-50);
        
        set({ 
          currentData: newData, 
          history: newHistory 
        });

      }, 100);
    },

    disconnect: () => {
      clearInterval(socketInterval);
      set({ isConnected: false });
    }
  };
});