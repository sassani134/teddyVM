import { Controller } from "@hotwired/stimulus"
import { toggle } from "el-transition";

// Connects to data-controller="navbar"
export default class extends Controller {
  static targets = [ "pop","mobileMenu", "cart", "backdrop", "panel"];

  toggleMobile(){
    //this.mobileMenuTarget.classList.toggle("hidden");
    toggle(this.mobileMenuTarget);
  }

  togglePop(){
    //this.popTarget.classList.toggle("hidden");
    toggle(this.popTarget);
  }

  toggleCart(){};

  connect() {
    console.log("navbar_controller, Stimulus!", this.element)

  }
}
