<template>
	<div class="field" :class="type">
		<template v-if="type === 'text'">
			<input v-model="value" type="text" :id="name" :name="name" :placeholder="name" />
		</template>
		<template v-if="type === 'textarea'">
			<textarea v-model="value" :id="name" :name="name" :placeholder="name" rows="10" />
		</template>
		<template v-if="type === 'number'">
			<input v-model="value" type="number" id="name" name="name" :placeholder="placeholder" />
		</template>
		<span class="error"> {{errorMessage}} </span>
	</div>
</template>
  
<script setup lang="ts">
import { useField } from 'vee-validate'
import { toRef } from 'vue'

const props = defineProps<{
	name: string
	type?: string
	placeholder?: string
}>()

const nameRef = toRef(props, 'name')
const { errorMessage, value } = useField<string>(nameRef)
</script>

<style lang="scss">
.field {
	width: 30%;
	position: relative;

	&.textarea {
		width: 100%;
	}

	input {
		width: 100%;
		height: 4rem;
		margin-bottom: 2.5rem;
		padding: 1.5rem;
		border: none;
		background: #f3f3f6;
		font-size: 1rem;
		font-weight: normal;
		appearance: textfield;

		&::placeholder {
			text-transform: capitalize;
			font-size: 1rem;
		}
	}

	textarea {
		width: 100%;
		padding: 1.5rem;
		resize: none;
		border: none;
		background: #f3f3f6;
		font-size: 1rem;
		font-weight: normal;

		&::placeholder {
			text-transform: capitalize;
			font-size: 1rem;
		}
	}

	.error {
		position: absolute;
		top: -1.2rem;
		right: 0.2rem;
		color: #f03159;
		font-size: 0.7rem;
	}
}

@media (max-width: 55rem) {
	.field {
		width: 100%;
		max-width: initial;

		input {
			margin-bottom: 5%;
			height: 3rem;
		}
	}
}
</style>

