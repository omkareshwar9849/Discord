import { Server } from '@prisma/client';
import {create} from 'zustand';

export type ModelType = 'createServer' | 'invite';

interface ModelData {
    server?: Server
}

interface ModelStore {
    type: ModelType | null;
    data: ModelData;
    isOpen: boolean;
    onOpen: (type: ModelType, data?: ModelData) => void;
    onClose: () => void;
}

export const useModel = create<ModelStore>((set) => ({
    type: null,
    isOpen: false,
    data: {},
    onOpen: (type, data = {}) => set({isOpen: true, type, data }),
    onClose: () => set({type: null, isOpen: false}),
}))