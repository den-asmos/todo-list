import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyC-CDbX_yGB0yRJOWgUM4IJS1a7Rvgcn2Y',
	authDomain: 'todo-list-c4ce9.firebaseapp.com',
	databaseURL: 'https://todo-list-c4ce9-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'todo-list-c4ce9',
	storageBucket: 'todo-list-c4ce9.appspot.com',
	messagingSenderId: '76378664568',
	appId: '1:76378664568:web:09c65e6259126f8bf3c78d',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
