<template>
	<div class="flash">
		<div v-for="notification in notifications" class="alert" :class="`alert-${notification.type}`" v-text="notification.message"></div>
	</div>
</template>

<script>
	import bus from "./bus"

	export default {
		data() {
			return {
				notifications: []
			}
		},
		created() {
			bus.$on("flash", notification => {
				this.notifications.push(notification)

				setTimeout(() => this.notifications.splice(this.notifications.indexOf(notification), 1), 3000)
			})
		}
	}
</script>

<style scoped>
	.flash {
		display: fixed;
		bottom: 2rem;
		right: 2rem;
		z-index: 100;
	}
</style>