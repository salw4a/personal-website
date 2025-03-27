document.addEventListener('DOMContentLoaded', function(){
    const links = document.querySelectorAll('.nav_links a');
    links.forEach(link => {
        link.addEventListener("click", function () {
            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });

    const socialLinks = document.querySelectorAll('.social-media a');
    socialLinks.forEach(link => {
        link.setAttribute('target', '_blank')
    })

    document.querySelector('.btn').addEventListener('click', function(event){
        event.preventDefault();
        window.open('https://drive.google.com/file/d/1hS70ZKhSwXp45zXV38WYdEq_2czBn9f_/view?usp=sharing', '_blank')
    })

    const readMoreBtn = document.getElementById('read-more-btn');
    const moreText = document.getElementById('more-text');

    if (readMoreBtn) { // Cek biar ga error kalau elemennya belum ada
        readMoreBtn.addEventListener('click', function(event) {
            event.preventDefault();
            if (moreText.style.display === "none") {
                moreText.style.display = "block";
                readMoreBtn.textContent = "Read less";
            } else {
                moreText.style.display = "none";
                readMoreBtn.textContent = "Read more";
            }
        });
    }

    const form = document.getElementById('contactform');
    form.addEventListener('submit', function(event){
        event.preventDefault();
        const fullname = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (fullname=== ""|| email===""||phone===""||subject===""||message===""){
            alert('Please fill out all boxes');
            return
        }

        console.log('Form submitted:', {fullname,email, phone,subject,message});
        form.reset();
        alert('Message sent successfully!')
    })
})