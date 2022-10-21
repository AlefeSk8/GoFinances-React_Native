import AsyncStorage from '@react-native-async-storage/async-storage';
import { TRANSACTION_COLLECTION } from '../storageConfig';
import { transactionStorageDTO } from './transactionStorageDTO';

export async function getTransactions(){
    try {
        const storage = await AsyncStorage.getItem(`${TRANSACTION_COLLECTION}`)
        const transactions: transactionStorageDTO[] = storage ? JSON.parse(storage) : [];

        return transactions;
    } catch (error) {
        throw error;
    }
} 