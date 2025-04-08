// Configuração Firebase
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
const db = firebase.firestore();

// Carregar posts
async function carregarPosts() {
    const postsContainer = document.querySelector('.postsContainer');
    postsContainer.innerHTML = '';

    try {
        const snapshot = await db.collection('posts')
            .orderBy('criadoEm', 'desc')
            .get(); //

        snapshot.forEach(doc => {
            const post = doc.data();
            const postHTML = `
        <a href="visualizacao.html?id=${doc.id}" class="post">
        <div class="postDetalhes">
        ${post.imagemCapa ? `<img src="${post.imagemCapa}" alt="${post.titulo}">` : ''}
        <h3 class="tituloPost">${post.titulo}</h3>
        </div>
        </a>
        `;
            postsContainer.innerHTML += postHTML;
        });

    } catch (error) {
        console.error('Erro ao carregar posts:', error);
    }
}

// Carregar post fixado
async function carregarPostFixado() {
    const postFixadoSection = document.querySelector('.postFixado');

    try {
        const querySnapshot = await db.collection('posts')
            .where('titulo', '==', 'O que são transmasculinidades')
            .limit(1)
            .get();

        if (!querySnapshot.empty) {
            const doc = querySnapshot.docs[0];
            const post = doc.data();
            const postId = doc.id;

            postFixadoSection.innerHTML = `
                <a href="visualizacao.html?id=${postId}">
                    <img src="${post.imagemMaior}" alt="Capa do post 'O que são transmasculinidades'" class="capaFixada">
                </a>
            `;
        } else {
            postFixadoSection.innerHTML = '<p>Post fixado não encontrado.</p>';
        }

    } catch (error) {
        console.error('Erro ao carregar post fixado:', error);
    }
}

// Chama as funções quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    carregarPosts();
    carregarPostFixado();
});