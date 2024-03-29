import { VendorService } from '@services';
import { createContext, useCallback, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useAuthContext } from 'src/auth/useAuthContext';
import { ethers } from 'ethers';
import { useWallet } from '@hooks/useWallet';

const initialState = {
  vendors: [],
  singleVendor: {},
  chainData: {},
  refresh: false,
  vendorEthBalance: 0,
  getVendorsList: () => {},
  getVendorById: () => {},
  setChainData: () => {},
  refreshData: () => {},
  getVendorEthBalance: () => {},
};

const VendorsContext = createContext(initialState);

export const VendorProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const wallet = useWallet();

  const refreshData = () => setState((prev) => ({ ...prev, refresh: !prev.refresh }));

  const getVendorsList = useCallback(async (params) => {
    const response = await VendorService.getVendorsList(params);

    const formatted = response.data?.data?.data?.map((item) => ({
      ...item,
      id: item?.id,
      registrationDate: item?.createdAt,
      cashBalance: item?.cashBalance || 0,
      cashAllowance: item?.cashAllowance || 0,
      tokenBalance: item?.tokenBalance || 0,
      hasVendorRole: String(item?.hasVendorRole) || 'N/A',
    }));

    setState((prevState) => ({
      ...prevState,
      vendors: {
        data: formatted,
        start: response.data?.data?.start,
        limit: response.data?.data?.limit,
        totalPage: response.data?.data?.totalPage,
      },
    }));
    return formatted;
  }, []);

  const setChainData = useCallback((chainData) => {
    setState((prev) => ({
      ...prev,
      chainData,
    }));
  }, []);

  const getVendorById = useCallback(async (id) => {
    const response = await VendorService.getVendorById(id);

    const formatted = {
      ...response.data,
      email: response.data?.email || 'N/A',
      registrationDate: response.data?.created_at || 'N/A',
      pan: response.data?.pan || 'N/A',
      shopName: response.data?.shopName || 'N/A',
      projects: response.data?.projects || [],
    };

    setState((prev) => ({
      ...prev,
      singleVendor: formatted,
    }));
    return formatted;
  }, []);

  const getVendorEthBalance = useCallback(async () => {
    if (!wallet) return;
    if (!state?.singleVendor?.wallet_address) return;
    const balance = await ethers?.utils?.formatEther(
      await wallet?.provider.getBalance(state.singleVendor?.wallet_address)
    );
    setState((prev) => ({
      ...prev,
      vendorEthBalance: balance,
    }));
  }, [state.singleVendor?.wallet_address, wallet]);

  const contextValue = {
    ...state,
    refreshData,
    setChainData,
    getVendorsList,
    getVendorById,
    getVendorEthBalance,
  };

  return <VendorsContext.Provider value={contextValue}>{children}</VendorsContext.Provider>;
};

VendorProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useVendorsContext = () => {
  const context = useContext(VendorsContext);
  if (!context) {
    throw new Error('useVendorsContext must be used within a VendorsContext');
  }
  return context;
};
