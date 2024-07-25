import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";
const nodemailer = require('nodemailer')
import { hashPassword } from "@/auth";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_KEY
    },
})

function generateOTP() {
    let digits =  '0123456789'; 
    let OTP = ''; 
    let len = digits.length

    for (let i = 0; i < 6; i++) { 
        OTP += digits[Math.floor(Math.random() * len)]; 
    } 

    return OTP; 
}

export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.json()

    const emailExist = await prisma.account.findFirst({
        where: {
            email: data.email
        },
        select: {
            profile: true
        }
    })

    if (emailExist == null) {
        return NextResponse.json({ success: false, message: "Email tidak tersedia" }, { status: 403 })
    }

    const otp = generateOTP()

    const info = await transporter.sendMail({
        from: '"Sedekah Customer Service" <winstencoellins13@gmail.com>',
        to: data.email,
        subject: 'One-Time Password (OTP) untuk verifikasi',
        html: `
            <p>Dear Customer,</p>

            <br />

            <p>Anda telah meminta untuk memverifikasi identitas Anda. Silakan temukan OTP Anda di bawah ini:</p>

            <br />

            <p><strong>OTP: </strong> ${otp}</p>

            <br />

            <p>OTP ini hanya berlaku untuk jangka waktu singkat. Tolong jangan membaginya dengan siapa pun. Jika Anda tidak meminta OTP ini, harap abaikan email ini.</p>

            <br />

            <p>Best Regards, </p>
            <br />
            <p>Sedekah Team</p>
        `,
    })

    return NextResponse.json({ success: true, message: 'Email sent successfully.', otp }, { status: 200 })
}

export async function PUT(req: NextRequest, res: NextResponse) {
    const data = await req.json()

   
    // const changePass = await prisma.account.update({
    //     where: {
    //         email: data.email
    //     },
    //     data: {
    //         password: hashPassword(data.password)
    //     },
    // })

    return NextResponse.json({ success: true, message: 'Password changed successfully' }, { status: 201 })
}