<template>
	<transition-group class="flash" name="flash" tag="div">
		<div v-for="notification in notifications" :key="notification.id" class="alert" :class="`alert-${notification.type}`" v-text="notification.message"></div>
	</transition-group>
</template>

<script>
	import bus from "./bus"

	export default {
		data() {
			return {
				id: 1,
				notifications: []
			}
		},
		created() {
			bus.$on("flash", notification => {
				notification.id = this.id++

				this.notifications.push(notification)

				setTimeout(() => this.notifications.splice(this.notifications.indexOf(notification), 1), 3000)
			})
		}
	}
</script>

<style scoped>
	.flash {
		position: fixed;
		bottom: 2rem;
		right: 2rem;
		z-index: 100;
	}

	.alert {
		transition: 1s;
	}

	.alert:not(:last-child) {
		margin-bottom: 1rem;
	}

	.flash-enter, .flash-leave-to {
		opacity: 0;
	}
</style>