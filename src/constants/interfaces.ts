export interface ReactChildren {
  children: React.ReactNode;
}

export interface AppContextType {
  alarm: { state: boolean; type: string; message: string };
  showAlarm: (type: string, message: string) => void;
  hideAlarm: () => void;
  success: boolean;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  direction: string;
  setDirection: React.Dispatch<React.SetStateAction<string>>;
}
