import express from "express";
import { PrismaClient } from "./generated/prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

const app=express()

const pool = new Pool({connectionString: process.env.DATABASE_URL});
const adapter = new PrismaPg(pool);
const prismaClient=new PrismaClient({adapter});

app.get("/",async (req,res)=>
	{
		const data = await prismaClient.user.findMany();
		res.json({
			data
		})
	})
app.post("/send",async (req,res)=>
{
	await prismaClient.user.create({
			data:{
				username:Math.random().toString(),
				password:Math.random().toString()
			}
		})
    res.send({
        message:"Post data successfully"
    })
})
	app.listen(3000);
