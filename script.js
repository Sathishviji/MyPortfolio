// Initialize AOS Animation Library
document.addEventListener("DOMContentLoaded", () => {
  // AOS Initialization
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    })
  } else {
    console.warn("AOS is not defined. Make sure AOS library is included.")
  }

  // Typed.js Initialization
  if (typeof Typed !== "undefined") {
    const typed = new Typed(".typed-text", {
      strings: ["Web Developer", "UI/UX Designer", "Programmer", "Student"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    })
  } else {
    console.warn("Typed is not defined. Make sure Typed.js library is included.")
  }

  // Navbar Scroll Effect
  const navbar = document.querySelector(".navbar")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })

  // Back to Top Button
  const backToTopButton = document.querySelector(".back-to-top")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("active")
    } else {
      backToTopButton.classList.remove("active")
    }
  })

  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth",
        })
      }
    })
  })

  // Project Filtering
  const filterButtons = document.querySelectorAll(".filter-btn")
  const projectItems = document.querySelectorAll(".project-item")

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      // Add active class to clicked button
      this.classList.add("active")

      const filterValue = this.getAttribute("data-filter")

      projectItems.forEach((item) => {
        if (filterValue === "all" || item.classList.contains(filterValue)) {
          item.style.display = "block"
          setTimeout(() => {
            item.style.opacity = "1"
            item.style.transform = "scale(1)"
          }, 100)
        } else {
          item.style.opacity = "0"
          item.style.transform = "scale(0.8)"
          setTimeout(() => {
            item.style.display = "none"
          }, 300)
        }
      })
    })
  })

  // Form Submission
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const subject = document.getElementById("subject").value
      const message = document.querySelector('textarea[name="message"]').value

      // Simple validation
      if (!name || !email || !subject || !message) {
        alert("Please fill in all fields")
        return
      }

      // Here you would typically send the form data to a server
      // For this demo, we'll just show a success message
      alert("Thank you for your message! I will get back to you soon.")
      contactForm.reset()
    })
  }

  // Progress Bar Animation
  const progressBars = document.querySelectorAll(".progress-bar")
  const animateProgressBars = () => {
    progressBars.forEach((bar) => {
      const value = bar.getAttribute("aria-valuenow")
      bar.style.width = "0%"
      setTimeout(() => {
        bar.style.width = value + "%"
      }, 100)
    })
  }

  // Trigger progress bar animation when skills section is in view
  const skillsSection = document.getElementById("skills")
  if (skillsSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateProgressBars()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    observer.observe(skillsSection)
  }

  // Add hover effect to project cards
  const projectCards = document.querySelectorAll(".project-card")
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.querySelector(".project-overlay").style.opacity = "1"
    })

    card.addEventListener("mouseleave", function () {
      this.querySelector(".project-overlay").style.opacity = "0"
    })
  })

  // Preloader
  window.addEventListener("load", () => {
    const preloader = document.querySelector(".preloader")
    if (preloader) {
      preloader.style.opacity = "0"
      setTimeout(() => {
        preloader.style.display = "none"
      }, 500)
    }
  })

  // Particle background effect for hero section
  const heroSection = document.querySelector(".hero-section")
  if (heroSection) {
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("div")
      particle.classList.add("particle")
      particle.style.left = Math.random() * 100 + "%"
      particle.style.top = Math.random() * 100 + "%"
      particle.style.width = Math.random() * 15 + 5 + "px"
      particle.style.height = particle.style.width
      particle.style.animationDuration = Math.random() * 10 + 5 + "s"
      particle.style.animationDelay = Math.random() * 5 + "s"
      heroSection.appendChild(particle)
    }
  }
})

// Add CSS for particles
const style = document.createElement("style")
style.textContent = `
    .particle {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(108, 99, 255, 0.2);
        pointer-events: none;
        z-index: 0;
        animation: float-particle 10s infinite linear;
    }
    
    @keyframes float-particle {
        0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        25% {
            opacity: 0.5;
        }
        50% {
            transform: translateY(-100px) translateX(100px);
            opacity: 0.2;
        }
        75% {
            opacity: 0.5;
        }
        100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
    }
`
document.head.appendChild(style)
