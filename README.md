Api Rest para integração entre Telegram Bot API (https://core.telegram.org/bots/api) para criação de chatbot

Requisitos:

Necessário ter uma url de acesso externo para configuração do Telegram Bot API

Passo a passo:

Crie um bot no telegram através do BotFather (@BotFather ou https://web.telegram.org/a/#93372553)
Obtenha o token do seu bot
Utilize o a seguinte Url para definir o webhook https://api.telegram.org/bot<token>/setWebhook?url=<url>
Dessa forma, todas as interações feitas no bot criado serão enviadas para o endereço da url configurada anteriormente

