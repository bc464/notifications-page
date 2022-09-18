const notificationTotal = document.querySelector(".notifications-total");
const userBox = document.querySelectorAll(".user-box");
const unread = document.querySelectorAll(".unread");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function() {
	notificationTotal.textContent = "0";
	unread.forEach((item)=> {
		item.style.display = "none";
	})
	userBox.forEach((item)=> {
		item.classList.remove("active")
	})
})