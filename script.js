// ดึง element
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

// เมื่อคลิก icon
menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active"); // เพิ่ม/ลบ class active
});
