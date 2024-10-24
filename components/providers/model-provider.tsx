"use client";

import { useEffect, useState } from "react";
import { CreateServerModel } from "@/components/models/create-server-model";
import { InviteModel } from "@/components/models/intive-model";
import { EditServerModel } from "@/components/models/edit-server-model";

export const ModelProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(()=>{
        setIsMounted(true);
    },[]);

    if(!isMounted){
        return null;
    }

    return (
        <>
            <CreateServerModel />
            <InviteModel/>
            <EditServerModel/>
        </>
    );
}