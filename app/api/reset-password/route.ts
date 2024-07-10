import { NextRequest, NextResponse } from "next/server";
const nodemailer = require('nodemailer')

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

    const otp = generateOTP()

    const info = await transporter.sendMail({
        from: '"Sedekah Customer Service" <winstencoellins13@gmail.com>',
        to: data.email,
        subject: 'OTP Lupa Password - Sedekah',
        text: `${otp}`,
    })

    console.log('Message sent: ', info.messageId)

    return NextResponse.json({ success: true, message: 'Email sent successfully.', otp }, { status: 200 })
}

export async function PUT(req: NextRequest, res: NextResponse) {
    console.log('CHANGE PASSWORD')

    return NextResponse.json({ success: true, message: 'Password changed successfully' }, { status: 201 })
}