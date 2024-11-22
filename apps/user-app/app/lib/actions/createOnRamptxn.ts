"use server"

import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";


export async function createOnRampTransaction(amount : number, provider : string){

    const session = await getServerSession(authOptions);
    const userId = session.user.id;
    const token = Math.random().toString();

    if (!userId){
        return {
            msg : "User is not logged in!"
        }
    }

    await prisma.onRampTransaction.create({
        data : {
            userId : Number(userId),
            amount : amount,
            status : "Processing",
            startTime : new Date(),
            provider : provider,
            token : token


        }
    })
}