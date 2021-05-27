# Recuperação de senha

**RF**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF**

- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mail deve acontecer em segundo plano (background job);

**RN**

- O link enviado por email para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha para resetar a senha;

# Atualização do perfil

**RF**

- O usuário deve poder atualizar seu nome, email e senha;

**RNF**

**RN**

- O usuário não pode alterar o seu email para um email já utilizado;
- Para atualizar sua senha o usuário deve informar a senha antiga;
- Para atualizar sua senha o usuário deve confirmar a nova senha;

# Painel do prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notifições não lidas;

**RNF**

- Os agendamentos de um dia do prestador deve ficar salva em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando socket.io

**RN**

- A notificação deve ter sttus de lida e não-lida;

# Agendamento de serviços

**RF**

- O usuário deve poder listar todos prestadores de serviço cadastrado;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com o prestador escolhido

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar exatamente 1h;
- Os agendamentos devem estar disponíveis entre 8h às 18h (8h: Primeiro horário / 17h: Último horário);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode cadastrar um horário em um horário que já passou;
- O usuário não pode marcar um horário consigo mesmo;
