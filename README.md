# Scheduling tasks with Cron
- Exemplo implementação de Schedule em uma lambda utilizando serverless framework
- A cada minuto será criada uma instância do lambda e fara o processamento que consiste em fazer uma requisição e gravar a resposta no banco dynamoDB

## Info
- propriedade _enabled_ em .yml : false (desabilitada) - true(habilitada)
- Dependendo da flag chamada no terminal será executada em prod ou qa
- pasta config/serverless config que condizem ao yml (qual bd, colunas, permissões dos recursos)
- pasta config/serverless/resources config que condizem recursos necessário (BD, SQS, SNS)
