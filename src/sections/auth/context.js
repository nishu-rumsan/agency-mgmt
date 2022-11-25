import { createContext, useContext, useState } from 'react';
import { useAuthContext } from '../../auth/useAuthContext';
import * as Services from './services';

const initialState = {
  otpSent: false,
  handleOtpRequest: () => {},
  handleOtpVerification: () => {},
};

const LoginContext = createContext(initialState);

export function LoginProvider({ children }) {
  const [state, setState] = useState(initialState);

  const { addToken, addUser, addKey } = useAuthContext();

  const handleOtpRequest = async (payload) => {
    const response = await Services.otpRequest(payload);
    setState((prev) => ({
      ...prev,
      otpSent: true,
    }));
    return response.data;
  };

  const handleOtpVerification = async (payload) => {
    const response = await Services.verifyOtp(payload);
    addToken(response.data.token);
    addUser(response.data.user);
    addKey(response.data.key);
    return response.data;
  };

  const contextValue = {
    ...state,
    handleOtpRequest,
    handleOtpVerification,
  };

  return <LoginContext.Provider value={contextValue}>{children}</LoginContext.Provider>;
}

export const useLoginContext = () => {
  const context = useContext(LoginContext);
  if (context === undefined) {
    throw new Error('useLoginContext must be used within a LoginProvider');
  }
  return context;
};
