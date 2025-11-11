'use client';

import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAnalytics, isSupported } from "firebase/analytics";
import firebaseConfig from './config';

interface FirebaseContextType {
  app: FirebaseApp | null;
}

const FirebaseContext = createContext<FirebaseContextType | null>(null);

export function FirebaseProvider({ children }: { children: ReactNode }) {
  const [app, setApp] = useState<FirebaseApp | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const apps = getApps();
      const firebaseApp = apps.length > 0 ? apps[0] : initializeApp(firebaseConfig);
      setApp(firebaseApp);
      
      isSupported().then((supported) => {
        if (supported) {
          getAnalytics(firebaseApp);
        }
      });
    }
  }, []);

  return (
    <FirebaseContext.Provider value={{ app }}>
      {children}
    </FirebaseContext.Provider>
  );
}

export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (context === null) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  return context;
};
