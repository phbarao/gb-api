import ISendMailDTO from '../dtos/ISendMailDTO';

// Define as props que nosso envio de e-mail necessita
export default interface IMailProvider {
  sendMail(data: ISendMailDTO): Promise<void>;
}
