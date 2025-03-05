document.addEventListener("DOMContentLoaded", () => {
  // Initialize Feather icons
  feather.replace()

  // Smooth scrolling for navigation
  const scrollLinks = document.querySelectorAll("[data-section]")
  scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const sectionId = link.getAttribute("data-section")
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    })
  })

  // Active section detection
  const sections = document.querySelectorAll("section")
  const navLinks = document.querySelectorAll(".nav-link")

  function setActiveSection() {
    let currentSection = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("data-section") === currentSection) {
        link.classList.add("active")
      }
    })
  }

  window.addEventListener("scroll", setActiveSection)

  // Initialize active section on page load
  setActiveSection()

  // Tabs functionality
  const tabs = document.querySelectorAll(".tab")
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabId = tab.getAttribute("data-tab")

      // Remove active class from all tabs and content
      document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"))
      document.querySelectorAll(".tab-content").forEach((c) => c.classList.remove("active"))

      // Add active class to clicked tab and corresponding content
      tab.classList.add("active")
      document.getElementById(`${tabId}-content`).classList.add("active")
    })
  })

  // Project cards hover effect
  const projectCards = document.querySelectorAll(".project-card")
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-8px)"
    })

    card.addEventListener("mouseleave", () => {
      card.style.transform = ""
    })
  })

  // Add animation to hero section
  const heroContent = document.querySelector(".hero-content")
  setTimeout(() => {
    heroContent.style.opacity = "1"
    heroContent.style.transform = "translateY(0)"
  }, 100)

  // Animate scroll indicator
  const scrollIndicator = document.querySelector(".scroll-indicator")
  setInterval(() => {
    scrollIndicator.style.transform = "translateY(10px)"
    setTimeout(() => {
      scrollIndicator.style.transform = "translateY(0)"
    }, 1000)
  }, 2000)

  // Gallery image click functionality
  const galleryThumbs = document.querySelectorAll(".gallery-thumb")
  const mainImage = document.querySelector(".gallery-img")

  galleryThumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      const thumbSrc = thumb.getAttribute("src")
      const mainSrc = mainImage.getAttribute("src")

      // Swap images with a fade effect
      mainImage.style.opacity = "0"
      setTimeout(() => {
        mainImage.setAttribute("src", thumbSrc)
        thumb.setAttribute("src", mainSrc)
        mainImage.style.opacity = "1"
      }, 300)
    })
  })

  // Add parallax effect to background gradients
  window.addEventListener("mousemove", (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01

    const gradients = document.querySelectorAll(".bg-gradient")
    gradients.forEach((gradient) => {
      gradient.style.transform = `translate(${moveX}px, ${moveY}px)`
    })
  })

  // Initialize with a fade-in effect for the whole page
  document.body.style.opacity = "0"
  document.body.style.transition = "opacity 0.5s ease"

  setTimeout(() => {
    document.body.style.opacity = "1"
  }, 200)
})
