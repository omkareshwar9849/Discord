import { v4 as uuidV4 } from 'uuid';
import { NextResponse } from "next/server";
import { MemberRole } from '@prisma/client';

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

export async function POST(req: Request){
    try {
        const { name, imageUrl} = await req.json();
        const profile = await currentProfile();


        if(!profile){
            return new NextResponse("Unauthorised", { status: 401})
        }

        const server = await db.server.create({
            data:{
                profileId: profile.id,
                name,
                imageUrl,
                inviteCode: uuidV4(),
                channels: {
                    create:[
                        { name: 'general', profileId: profile.id}
                    ]
                },
                members:{
                    create:[
                        { profileId: profile.id, role: MemberRole.ADMIN}
                    ]
                }
            }
        })
        return NextResponse.json(server);
    } catch (error) {
        console.log("[servers_POST", error)
        return new NextResponse("Internal Error", { status: 500});
    }
}

export async function GET(req: Request){
    return NextResponse.json({message: "Not implemented"})
}