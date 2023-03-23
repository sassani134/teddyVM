import { Application } from "@hotwired/stimulus"
import ScrollTo from 'stimulus-scroll-to'
import ScrollReveal from 'stimulus-scroll-reveal'

const application = Application.start()
application.register("scroll-to", ScrollTo)
application.register('scroll-reveal', ScrollReveal)

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
