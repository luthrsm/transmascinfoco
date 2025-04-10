// Swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCESrYs_Nj2i6mxlZZWdTWjUeff9z61myc",
  authDomain: "blogtransmascinfoco.firebaseapp.com",
  projectId: "blogtransmascinfoco",
  storageBucket: "blogtransmascinfoco.appspot.com",
  messagingSenderId: "898028804976",
  appId: "1:898028804976:web:91c5923d58c3dcc2dc4db5"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

document.addEventListener('DOMContentLoaded', () => {
  // FORMULÁRIO DE LOGIN
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const email = document.getElementById('email').value;
      const senha = document.getElementById('senha').value;

      auth.signInWithEmailAndPassword(email, senha)
        .then(userCredential => {
          alert("Login bem-sucedido!");
          window.location.href = "postar.html";
        })
        .catch(error => {
          alert("Erro ao fazer login: " + error.message);
        });
    });
  }

  // FORMULÁRIO DE POSTAGEM
  const postForm = document.getElementById("postForm");
  if (postForm) {
    auth.onAuthStateChanged(user => {
      if (!user) {
        alert("Você precisa estar logado para acessar esta página.");
        window.location.href = "login.html";
      }
    });

    postForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const titulo = document.getElementById("titulo").value;
      const conteudo = document.getElementById("p1").value;
      const subtitulo = document.getElementById("subtitulo").value;
      const legenda = document.getElementById("legenda").value;

      const imagemCapaInput = document.getElementById("imagemCapa");
      const imagemMaiorInput = document.getElementById("ImagemMaior");
      const imagemTxtInput = document.getElementById("imagemTxt");

      const user = auth.currentUser;
      if (!user) return;

      const lerArquivoBase64 = (input) => {
        return new Promise((resolve) => {
          if (input.files.length === 0) return resolve("");
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(input.files[0]);
        });
      };

      try {
        const imagemCapaBase64 = await lerArquivoBase64(imagemCapaInput);
        const imagemMaiorBase64 = await lerArquivoBase64(imagemMaiorInput);
        const imagemTxtBase64 = await lerArquivoBase64(imagemTxtInput);

        await db.collection("posts").add({
          titulo,
          conteudo,
          subtitulo,
          legenda,
          imagemCapa: imagemCapaBase64,
          imagemMaior: imagemMaiorBase64,
          imagemTexto: imagemTxtBase64,
          autor: user.email,
          criadoEm: firebase.firestore.FieldValue.serverTimestamp()
        });

        alert("Post publicado com sucesso!");
        postForm.reset();
      } catch (error) {
        alert("Erro ao publicar post: " + error.message);
      }
    });
  }
});
