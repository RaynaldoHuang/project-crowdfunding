import { hashPassword } from "../auth";
import prisma from "../db";

async function main() {
    const systemAdminAccount = await prisma.account.create({
        data: {
            username: 'systemadmin',
            email: 'systemadmin@sedekah.co.id',
            password: hashPassword('systemadmin123'),
            role: "ADMIN"
        }
    })

    let date = new Date()
    let today = date.getFullYear() + "-" + '06' + "-" + date.getDate() + "T00:00:00"

    const systemAdminProfile = await prisma.profile.create({
        data: {
            accountUsername: 'systemadmin',
            firstName: 'System Admin',
            lastName: 'System Admin',
        }
    })

    console.log(systemAdminAccount, systemAdminProfile)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })