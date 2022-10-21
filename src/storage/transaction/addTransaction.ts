import AsyncStorage from '@react-native-async-storage/async-storage';
//import { AppError } from '@utils/AppError';
import { TRANSACTION_COLLECTION } from '../storageConfig';
import { transactionStorageDTO } from './transactionStorageDTO';
import { getTransactions } from './getTransactions';

export async function addTransaction(data: transactionStorageDTO){
    try {
        const storedTransactions = await getTransactions();

        const storage = JSON.stringify([...storedTransactions, data])

        await AsyncStorage.setItem(`${TRANSACTION_COLLECTION}`, storage);

    } catch (error) {
        throw (error);
    }
}