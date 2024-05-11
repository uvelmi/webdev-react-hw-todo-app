import { json } from "react-router-dom";

const token = 'bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck';

export async function getTodos() {
	const response = await fetch('https://wedev-api.sky.pro/api/v2/todos', {
		headers: {
			Authorization: `Bearer ${token}`
		},
	});
	if (!response.ok){
		throw new Error("Server mistake")
	}
	const data = await response.json();
	return data;
}

export async function postTodos(text) {
	const response = await fetch('https://wedev-api.sky.pro/api/v2/todos', {
		headers: {
			Authorization: `Bearer ${token}`
		},
		method: 'POST',
		body: JSON.stringify({
			text,
		}),
	});
	if (!response.ok){
		throw new Error("Server mistake")
	}
	const data = await response.json();
	return data;
}

export async function deleteTodos({id}) {
	const response = await fetch('https://wedev-api.sky.pro/api/v2/todos/' + id, {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${token}`,
		}
	})
	if (!response.ok){
		throw new Error("Server mistake")
	}
	const data = await response.json();
	return data;
}