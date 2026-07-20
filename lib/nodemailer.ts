import nodemailer from 'nodemailer';

// Configuration du transporteur Nodemailer utilisant SMTP Gmail.
export function createTransporter(){
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if(!user || !pass) throw new Error('Variables GMAIL_USER et GMAIL_APP_PASSWORD requises');

  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: { user, pass }
  });
}
