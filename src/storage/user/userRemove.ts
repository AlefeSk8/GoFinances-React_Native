import AsyncStorage from '@react-native-async-storage/async-storage';
import { PLAYER_COLLECTION, GROUP_COLLECTION } from '@storage/storageConfig';
import { groupsGetAll } from './getUser';

export async function groupRemoveByName(groupDeleted: string){
    try {
        const storedGroups = await groupsGetAll();

        const filteredGroups = storedGroups.filter(group => group !== groupDeleted);

        await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(filteredGroups))//Sobrescreve em GROUP_COLLECTION a variavel FilteredGroups
        await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`)


    } catch (error) {
        throw error;
    }
}
