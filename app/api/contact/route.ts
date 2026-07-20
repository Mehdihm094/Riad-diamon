import { createTransporter } from '../../../lib/nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validation serveur basique
    if(!name || !email || !message) return new Response(JSON.stringify({error:'Champs manquants'}),{status:400});

    const transporter = createTransporter();

    const mail = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `[Contact Riad Diamond] ${subject || 'Nouveau message'}`,
      text: `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone || '-'}\n\nMessage:\n${message}`
    };

    await transporter.sendMail(mail);

    return new Response(JSON.stringify({ok:true}),{status:200});
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({error:'Erreur serveur'}),{status:500});
  }
}
