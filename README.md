# Desafio Target Sistemas

Apresento neste projeto as resoluções dos desafios propostos do processo seletivo para vaga de estágio em desenvolvimento na empresa Target sistemas

## Pré-requisitos

-Ter um terminal instalado
-Ter o nodeJs instalado
## Instalação

-WINDOWNS
ara instalar o Git no Windows, você pode seguir estas etapas:

Baixe o instalador do Git:
Vá para o site oficial do Git em https://git-scm.com/download/win e clique no link para baixar o instalador do Git para Windows.

Execute o instalador:
Após o download do instalador, execute-o clicando duas vezes no arquivo baixado. Isso iniciará o assistente de instalação do Git.

Configurações de instalação:
Durante o processo de instalação, você pode aceitar as configurações padrão ou personalizá-las de acordo com suas preferências. Certifique-se de selecionar a opção para adicionar o Git ao PATH do sistema. Isso permitirá que você execute comandos do Git a partir do Prompt de Comando do Windows.

Conclua a instalação:
Siga as instruções na tela para concluir a instalação. Depois que a instalação for concluída com sucesso, você deve poder usar o Git no seu sistema Windows.

Verifique a instalação:
Após a instalação, abra o Prompt de Comando do Windows e digite o seguinte comando para verificar se o Git foi instalado corretamente:

bash
Copy code
git --version
Isso deve exibir a versão do Git instalada no seu sistema.


Para baixar e instalar o Node.js no Windows, siga estas etapas:

Baixe o instalador do Node.js:
Acesse o site oficial do Node.js em https://nodejs.org/. Na página inicial, você verá botões de download para as versões LTS (Long Term Support) e Current (versão atual). Para a maioria dos casos, é recomendável baixar a versão LTS, pois é mais estável e é a versão mais amplamente suportada. Clique no botão de download correspondente à versão que deseja instalar.

Execute o instalador:
Após o download do instalador, clique duas vezes no arquivo baixado para executar o instalador do Node.js.

Configurações de instalação:
Durante o processo de instalação, você pode aceitar as configurações padrão ou personalizá-las conforme necessário. Selecione a opção para instalar o npm, o gerenciador de pacotes do Node.js, pois ele é frequentemente usado para instalar pacotes e bibliotecas adicionais para seus projetos.

Conclua a instalação:
Siga as instruções na tela para concluir a instalação. Após a instalação, o Node.js e o npm estarão disponíveis no seu sistema Windows.

Verifique a instalação:
Após a instalação, abra o Prompt de Comando do Windows e digite os seguintes comandos para verificar se o Node.js e o npm foram instalados corretamente e para verificar suas versões:

bash
Copy code
node --version
npm --version
Isso deve exibir as versões do Node.js e do npm instaladas no seu sistema.

-LINUX
ara instalar o Git no Linux, você pode usar o gerenciador de pacotes padrão da sua distribuição. Aqui estão as instruções para algumas das distribuições Linux mais populares:

Ubuntu / Debian:
No Ubuntu e outras distribuições baseadas no Debian, você pode instalar o Git usando o apt:

bash
Copy code
sudo apt update
sudo apt install git
CentOS / RHEL:
Para distribuições CentOS e Red Hat Enterprise Linux (RHEL), use o yum:

bash
Copy code
sudo yum install git
Fedora:
Para Fedora, use o dnf:

bash
Copy code
sudo dnf install git
Arch Linux:
Para Arch Linux e distribuições baseadas nele, use o pacman:

bash
Copy code
sudo pacman -S git
openSUSE:
Para openSUSE, use o zypper:

bash
Copy code
sudo zypper install git
Depois de executar o comando apropriado para a sua distribuição, o Git será instalado em seu sistema. Você pode verificar se a instalação foi bem-sucedida digitando git --version no terminal. Se o Git foi instalado corretamente, você verá a versão do Git instalada.



Para instalar o Node.js no Linux, você pode seguir os passos abaixo:

Atualize o gerenciador de pacotes:
Antes de instalar o Node.js, é uma boa prática garantir que o seu sistema esteja atualizado. Você pode fazer isso executando os seguintes comandos, dependendo do gerenciador de pacotes da sua distribuição Linux:

Para sistemas baseados em Debian/Ubuntu:

bash
Copy code
sudo apt update
Para sistemas baseados em CentOS/RHEL:

bash
Copy code
sudo yum update
Para sistemas baseados em Fedora:

bash
Copy code
sudo dnf update
Instale o Node.js usando o gerenciador de pacotes:
Você pode instalar o Node.js usando o gerenciador de pacotes padrão da sua distribuição Linux. No entanto, muitas vezes as versões mais recentes do Node.js podem não estar disponíveis nos repositórios padrão. Nesses casos, é recomendável usar um gerenciador de versões do Node.js, como o Node Version Manager (nvm), para instalar e gerenciar várias versões do Node.js.

Instalando com nvm (Node Version Manager):

Primeiro, instale o curl, que é necessário para baixar e instalar o nvm. Se você já possui o curl instalado, pode pular este passo:
bash
Copy code
sudo apt install curl    # para sistemas baseados em Debian/Ubuntu
sudo yum install curl    # para sistemas baseados em CentOS/RHEL
sudo dnf install curl    # para sistemas baseados em Fedora
Em seguida, instale o nvm executando o seguinte comando no terminal:
bash
Copy code
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
Após a instalação do nvm, feche e reabra o terminal ou execute source ~/.bashrc para carregar as configurações do nvm.
Agora você pode instalar o Node.js usando o nvm. Por exemplo, para instalar a versão mais recente do Node.js, você pode executar:
bash
Copy code
nvm install node
Você pode verificar se o Node.js foi instalado corretamente digitando:
bash
Copy code
node --version
Isso deve exibir a versão do Node.js instalada no seu sistema.
Se preferir instalar o Node.js usando o gerenciador de pacotes da sua distribuição, você pode fazê-lo, mas é possível que você obtenha uma versão mais antiga. Por exemplo, no Ubuntu/Debian, você pode usar o apt:

bash
Copy code
sudo apt install nodejs
E para instalar o npm (gerenciador de pacotes do Node.js):

bash
Copy code
sudo apt install npm
No entanto, essa abordagem pode não oferecer a versão mais recente do Node.js. Se você precisar de uma versão específica ou da versão mais recente, é recomendável usar o nvm.

## Uso

Dentro do terminal, basta digitar o comando "node nome_do_arquivo" e apertar enter para executar, as informações serão imprimidas na interface do terminal
EXEMPLO: node desafio1.js  //apertar enter



