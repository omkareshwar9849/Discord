import { v4 as uuidV4 } from 'uuid';
import { NextResponse } from "next/server";

import { currentProfile } from '@/lib/current-profile';
import { db } from '@/lib/db';

export async function PATCH(
    req: Request,
    { params }: { params: { serverId: string } }
) {
    try {
        const profile = await currentProfile();

        if (!profile) {
            return new NextResponse('Unauthorised', { status: 401 });
        }

        if(!params.serverId){
            return new NextResponse('Server Id Missing', { status: 400 });
        }

        const server = await db.server.update({
            where: {
                id: params.serverId,
                profileId: profile.id
            },
            data: {
                inviteCode: uuidV4()
            }
        });

        return NextResponse.json(server);
    } catch (error) {
        console.log('[SERVER_ID]',error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}