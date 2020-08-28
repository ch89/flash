import Flash from "./Flash"
import bus from "./bus"

export default {
	install(Vue) {
		Vue.component("flash", Flash)

		Vue.prototype.$flash = {
			notification(message, type) {
				bus.$emit("flash", { message, type })
			},
			success(message) {
				this.notification(message, "success")
			},
			danger(message) {
				this.notification(message, "danger")
			}
		}
	}
}