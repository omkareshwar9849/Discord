import { redirect } from "next/navigation";

import { currentProfile } from "@/lib/current-profile"
import { db } from "@/lib/db";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

import { NavigationAction } from "@/components/navigation/navigation-action";
import { NavigationItem } from "@/components/navigation/navigation-item";

export const NavigationSidebar = async () => {
    const profile = await currentProfile();
    
    if(!profile){
        return redirect('/');
    }

    const servers = await db.server.findMany({
        where: {
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    })

    return (
        <div className="space-y-4 flex flex-col items-center h-full text-primary w-full py-3 dark:bg-[#1E1F22]">
            <NavigationAction/>
            <Separator className="h-2 bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto"/>
            <ScrollArea className="w-full flex-1">
                {servers.map((server) => (
                    <div key={server.id} className="mb-4">
                        <NavigationItem id={server.id} imageUrl={server.imageUrl} name={server.name}/>
                    </div>
                ))}
            </ScrollArea>
            <div className="pb-3 flex mt-auto flex-col items-center gap-y-4">
                <ModeToggle/>
                <UserButton 
                    appearance={{
                        elements: {
                            avatarBox: 'h-[48px] w-[48px]',
                        }
                    }}
                />
            </div>
        </div>
    )
}