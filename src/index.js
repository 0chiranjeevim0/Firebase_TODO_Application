import {initializeApp} from 'firebase/app';
import {getFirestore,collection,getDocs} from 'firebase/firestore';


const mastercontainer = document.getElementById('masterContainer');

const firebaseApp = initializeApp({
    apiKey: "AIzaSyCJxYgHxy5tGx9ZcTRrJLHmX_PJmq8ZFnw",
    authDomain: "test-environment-cd2a9.firebaseapp.com",
    projectId: "test-environment-cd2a9",
    storageBucket: "test-environment-cd2a9.appspot.com",
    messagingSenderId: "852655930521",
    appId: "1:852655930521:web:c3b568ef450fd50141cc08"
})

const db = getFirestore(firebaseApp);

const fetchData = async() =>{
    const collectionRef = await collection(db,'todos');
    const datas = await getDocs(collectionRef)
    datas.forEach((doc) =>{
        const todoContainer = document.createElement('div');
        todoContainer.className = 'todo-container';
        const todoText = document.createElement('h3');
        todoText.innerText = doc.data().context;
        todoContainer.append(todoText);
        mastercontainer.appendChild(todoContainer);

    })
}

fetchData();