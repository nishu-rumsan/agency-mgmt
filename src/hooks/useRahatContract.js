import { useAuthContext } from 'src/auth/useAuthContext';
import { useContract } from './contracts';
import { useRahatAbi } from './useRahatAbi';
import { useWallet } from './useWallet';

export const useRahatContract = () => {
  const { contracts } = useAuthContext();
  const wallet = useWallet();
  const [abi] = useRahatAbi();
  const contract = useContract(wallet, contracts.rahat, abi);

  return contract;
};
