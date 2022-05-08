import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4d5a19290987c0",
    pass: "d59699f5f00d0e",
  },
});
export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ body, subject }: SendMailData) {
    await transport.sendMail({
      from: "Equipe feedget <oi@feedget.com>",
      to: "Emersson Cardim Mota <emerssoncardim@gmail.com>",
      subject,
      html: body,
    });
  }
}
