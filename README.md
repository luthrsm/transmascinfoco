
# 🏳️‍⚧️ Transmasculinidades em Foco

**Transmasculinidades em Foco** é um blog criado para dar visibilidade às vivências, histórias, saúde e direitos da população transmasculina. O projeto busca combater a invisibilidade, promover o conhecimento e criar um espaço acolhedor para compartilhamento de experiências e informações relevantes.

## 🌐 Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Firebase (Firestore + Hosting)**
- **Swiper.js** (para o carrossel de capas)
- **Font Awesome & Boxicons**
- **Responsividade via CSS**

## 📁 Estrutura do Projeto

```
├── index.html                # Página inicial com carrossel de destaques
├── posts.html                # Lista completa de posts
├── visualizacao.html         # Visualização individual de um post
├── sobre.html                # Página sobre o projeto e sua importância
├── login.html                # Tela de login de usuário
├── src/
│   ├── css/
│   │   ├── style.css
│   │   ├── responsive.css
│   │   └── home.css
│   ├── js/
│   │   ├── script.js         # Scripts globais
│   │   └── navbar.js         # Interação do menu hambúrguer
│   └── img/                  # Imagens utilizadas no site
└── README.md
```

## 🔥 Funcionalidades

- 📚 Exibição dinâmica de posts salvos no Firebase Firestore
- 🖼️ Carrossel de destaques na página inicial usando Swiper.js
- 📄 Visualização individual de postagens com base no `id` do Firestore
- 🔒 Sistema de login (em construção)
- 📱 Layout totalmente responsivo

## 🔧 Como rodar localmente

1. Clone o repositório:

```bash
git clone https://github.com/luthrsm/transmascinfoco.git
```

2. Abra o arquivo `index.html` no navegador ou utilize uma extensão como **Live Server** no VSCode.

> ⚠️ Se for utilizar Firebase, lembre-se de configurar seu projeto corretamente e substituir as credenciais em `index.html`.

## ☁️ Firebase

Este projeto usa Firebase Firestore para armazenar os posts. A estrutura de cada post no banco é semelhante a:

```json
{
  "titulo": "Título do post",
  "conteudo": "Texto completo do post...",
  "subtitulo": "Subtítulo do post",
  "legenda": "Legenda da imagem que fica no meio do texto",
  "imagemCapa": "Arquivo da imagem de capa",
  "imagemMaior": "Arquivo da imagem de banner",
  "imagemTexto": "Arquivo da imagem que fica no meio do texto",
  "autor": "Email do autor do post",
  "criadoEm": "Data da publicação do post",
}
```

## ✨ Objetivo do Projeto

Criar uma plataforma de fácil acesso e linguagem acolhedora para visibilizar a comunidade transmasculina, incentivando a produção de conteúdo autoral e educativo.

<!-- ## 📸 Preview

![screenshot do carrossel do site](link-para-imagem-ou-gif) -->

## 🙋‍♂️ Desenvolvedor

- **Nicolas dos Santos** — [Portfólio](https://nicolasdev-portifolio.vercel.app)

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Sinta-se livre para usar e contribuir!

---

🏳️‍⚧️ *Visibilidade importa. Existimos, resistimos, vivemos e merecemos ser vistos.*
