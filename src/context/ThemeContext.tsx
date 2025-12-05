import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';

const teamsData = {
  default: { primary: '#00E5FF', bg: '#121212' },
  ferrari: { primary: '#FF2800', bg: '#1A0505' },
  mercedes: { primary: '#00D2BE', bg: '#0A1A18' },
  redbull: { primary: '#0600EF', bg: '#08081C' },
  mclaren: { primary: '#FF8000', bg: '#1C0F00' },
  aston: { primary: '#006F62', bg: '#041411' }
};

const ThemeContext = createContext({
  theme: teamsData.default,
  setTeam: (teamKey: string) => {},
  currentTeam: 'default'
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTeam, setCurrentTeam] = useState('default');
  const [theme, setTheme] = useState(teamsData.default);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary-neon', theme.primary);
  }, [theme]);

  const setTeam = useCallback((teamKey: string) => {
    const newTheme = teamsData[teamKey as keyof typeof teamsData] || teamsData.default;
    setTheme(newTheme);
    setCurrentTeam(teamKey);
  }, []);

  const value = useMemo(() => ({ theme, setTeam, currentTeam }), [theme, currentTeam]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);