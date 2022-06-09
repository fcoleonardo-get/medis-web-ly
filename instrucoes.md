Para cada nova issue que um desenvolver irá trabalhar, ele deve:

Clonar o repositório:

```
$ git clone https://github.com/italoaug/medisweb.git
```

Mudar para a branch dev:

```
$ git checkout dev
```

Criar sua branch de trabalho:

```
$ git checkout -b nome-da-sua-branch
```

É importante que o nome da sua branch esteja associado à funcionalidade que você vai implementar. Além disso, uma branch criada para resolver a issue X deve-se chamar X-nome-da-branch. Exemplo: Para issue "Tela Endereço #9", podemos criar uma branch chamada "9-tela-endereco"

Depois disso, você pode desenvolver sua tarefa na pasta medisweb.

Ao terminar a implementação, você vai fazer um commit das mudanças:

```
$ git add .
$ git commit
```

Nesse momento, será solicitada uma mensagem do commit. Escreva uma frase que resuma o conjunto de mudanças que você fez na primeira linha. Nas linhas seguintes liste as mudanças feitas e salve.

Para finalizar, crie um Pull Request(PR):

```
$ git push origin nome-da-sua-branch
```

Clique no link que vai aparecer no terminal, leia as informações que irão aparecer no navegador e preencha o formulário. Nesse formulário, adicione *lopes-bot* como reviewer e troque a branch de destino de `main` para `dev`. Caso seu PR não esteja pronto, ou seja, caso você ainda vá adicionar/alterar algo, comece o título do seu PR com `Draft: `. Lembre-se de remover esse texto do título quando o PR estiver pronto.

Qualquer dúvida nesses passos, pergunte no Slack. Tem muito material na internet também explicando cada passo desse.

**IMPORTANTE!**

Jamais usem o comando

```
$ git push origin dev
```

nem o comando:

```
$ git push origin main
```