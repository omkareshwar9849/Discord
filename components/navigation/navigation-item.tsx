'use client';

import { useParams, useRouter } from "next/navigation";
import { ActionTooltip } from "../action-tooltip";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface NavigationItemProps {
    id: string;
    imageUrl: string;
    name: string
}

export const NavigationItem = ({ id, imageUrl, name }: NavigationItemProps) => {
    const params = useParams();
    const router = useRouter();

    const onClick = () => {
        router.push(`/servers/${id}`);
    }

    return (
        <ActionTooltip side="right" align="center" label={name}>
            <button className="group relative flex items-center" onClick={onClick}>
                <div className={cn(
                    "absolute left-0 bg-primary rounded-rfull transition-all w-[4px]",
                    params?.serverId !== id ? 'group-hover:h-[20px] h-[8px]' : 'h-[38px]'
                )} />
                <div className={cn(
                    "relative group flex mx-3 h-[48px] w-[48px] rounded-[24px] overflow-hidden group-hover:rounded-[16px] transition-all",
                    params?.serverId === id && 'bg-primary/10 text-primary rounded-[16px]'
                )}>
                    <Image 
                        src={imageUrl}
                        fill
                        alt="Channel"
                    />
                </div>
            </button>
        </ActionTooltip>
    )
}