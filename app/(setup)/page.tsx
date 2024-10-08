import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { redirect } from "next/navigation";
import { InitialModel } from "@/components/models/initial-model";

const SetupPage = async() =>{
    const profile = await initialProfile();
    const server = await db.server.findFirst({
        where:{
            members:{
                some:{
                    profileId: profile?.id
                }
            }
        }
    })

    if(server){
        redirect(`/servers/${server.id}`);
    }

    return <InitialModel/>
};

export default SetupPage;