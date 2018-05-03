// создание объекта запроса
var xhr = new XMLHttpRequest();
// событие он лоад
xhr.onload = function () {
	var data = JSON.parse(this.responseText)
	console.log(data);
	comments(data)
}

xhr.open("GET", "https://jsonplaceholder.typicode.com/comments?postId=78");
xhr.send()

function comments(data) {
	for (let i = 0; i < data.length; i++) {
		var div = document.createElement("div")
		var nameAuthor = document.createElement("p")
		var text = document.createElement("p")
		var email = document.createElement("span")
		div.classList.add("comments")
		nameAuthor.classList.add("nameAuthor")
		nameAuthor.innerHTML = data[i].name
		text.innerHTML = data[i].body
		text.classList.add("comment")
		email.innerHTML = data[i].email
		nameAuthor.appendChild(email)
		div.appendChild(nameAuthor)
		div.appendChild(text)
		document.querySelector(".comments").appendChild(div)
	}

}

var post = document.createElement("div")

post.innerHTML = 'post'
document.body.appendChild(post);

document.querySelector(".getcomments").addEventListener("click", getcomments)

function getcomments(params) {
	var postId = document.getElementById('postId').value
	console.log(postId);
	xhr.open("GET", `https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
xhr.send()
xhr.onload = function () {
	var data = JSON.parse(this.responseText)
	console.log(data);
	document.querySelector(".comments").innerHTML = ""
	comments(data)
}
}