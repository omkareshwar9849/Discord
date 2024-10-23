"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';

import { useModel } from '@/hooks/use-model-store';

export const InviteModel = () => {
    const { isOpen, onClose, type } = useModel();

    const isModelOpen = isOpen && type === 'invite';

    return <>
        <Dialog open={isModelOpen} onOpenChange={onClose}>
            <DialogContent className='bg-white text-black p-0 overflow-hidden border'>
                <DialogHeader className='pt-8 px-6'>
                    <DialogTitle className='text-2xl text-center font-bold'>Customize your server</DialogTitle>
                    <DialogDescription className='text-center font-zinc-500'>
                        Give your server a personality with a name and an image. You can always change it later.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    </>
}