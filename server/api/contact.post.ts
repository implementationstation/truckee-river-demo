import { Resend } from 'resend'

/*
========================
INITIALIZE RESEND
========================
*/

const resend = new Resend(
  process.env.RESEND_API_KEY
)

export default defineEventHandler(async (event) => {

  /*
  ========================
  DEBUG
  ========================
  */

  console.log('CONTACT API HIT')

  /*
  ========================
  FORM DATA
  ========================
  */

  const body = await readBody(event)

  console.log(body)

  /*
  ========================
  SEND EMAIL
  ========================
  */

  const response = await resend.emails.send({

    from: 'onboarding@resend.dev',

    to: 'implementeroftechnologia@proton.me',

    subject: `New Lead From ${body.name}`,

    text: `
Name: ${body.name}

Email: ${body.email}

Message:
${body.message}
    `

  })

  /*
  ========================
  DEBUG RESPONSE
  ========================
  */

  console.log(response)

  return {
    success: true
  }

})
