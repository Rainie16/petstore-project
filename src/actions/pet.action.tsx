import {appConstants} from "../shared/constants/constants";
import {Pet} from "../shared/models/pet";
import axios from "axios";

export const getPets = () => {
    const getPetsPromise = axios.get(`http://localhost:8080/pets`);
    return {
        type: appConstants.GET_PETS,
        payload: getPetsPromise,
    };
}

export const addPet = (pet: Pet) => {
    const addPetPromise = axios.post(`http://localhost:8080/pets`, pet);
    return {
        type: appConstants.ADD_PET,
        payload: addPetPromise,
    };
}

export const editPet = (pet: Pet) => {
    const addPetPromise = axios.put(`http://localhost:8080/pets`, pet);
    return {
        type: appConstants.EDIT_PET,
        payload: addPetPromise,
    }
}