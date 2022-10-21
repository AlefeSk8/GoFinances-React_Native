import AsyncStorage from '@react-native-async-storage/async-storage';
import { TRANSACTION_COLLECTION } from '../storageConfig';
import { getTransactions } from './getTransactions';

export async function transactionRemove(){
    try {
        const storage = await getTransactions();

        const filtered = storage.filter(transaction => transaction.id === 'deletar');

        const transactions = JSON.stringify(filtered);

        await AsyncStorage.setItem(`${TRANSACTION_COLLECTION}`, transactions);
    } catch (error) {
        console.log(error);
        throw error;   
    }
} 