<template>
	<form @submit="onSubmit" autocomplete="off">

		<div class="input_wrap">
			<input name="name" placeholder="Name" v-model="values.name" />
			<span class="error" v-show="submitCount > 0">{{ errors.name }}</span>
		</div>
		<div class="input_wrap">
			<input name="email" placeholder="Email" v-model="values.email" />
			<span class="error" v-show="submitCount > 0">{{ errors.email }}</span>
		</div>
		<div class="input_wrap">		
			<input name="phone" placeholder="Phone" v-model="values.phone" />
			<span class="error" v-show="submitCount > 0">{{ errors.phone }}</span>
		</div>

		<div class="textarea_wrap">
			<textarea name="message" placeholder="Message" rows="10" />
			<span class="error" v-show="submitCount > 0">{{ errors.message }}</span>
		</div>
		<button type="submit">
			send message <NuxtIcon name="arrow"/>
		</button>

	</form>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import type { ContactForm } from "~/types";
import { toFormValidator } from '@vee-validate/zod';
import { z } from 'zod';

const validationSchema = toFormValidator(
	z.object({
		name: z.string().min(1),
		email: z.string().min(1).email(),
		phone: z.string().min(1),
		message: z.string().min(1).max(320),
	})
);

const { values, errors, handleSubmit, submitCount } = useForm<ContactForm>({
	validationSchema,
})

const onSubmit =handleSubmit(async(values, actions,) => {

	console.log('...sending values to API');
	// reset form with actions.resetForm();
});



</script>

<style lang="scss">
form {
	width: 100%;
	max-width: 80rem;
	padding: 5rem;

	box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
	background: white;

	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	position: relative;

	.input_wrap{
		width: 20rem;
		position: relative;
		input {
			width: 100%;
			height: 4rem;
			margin-bottom: 2.5rem;
			padding: 1.5rem;


			border: none;
			background: #f3f3f6;
			font-size:1rem;
			font-weight: 400;

			&::placeholder {
				font-size: 1rem;
			}
		}
		.error {
			position: absolute;
			top: 0.7rem;
			right: 0.7rem;
			color: #f03159;
			font-size: 0.7rem;
		}
	}
	.textarea_wrap{
		width: 100%;
		position: relative;
		textarea { 
			width: 100%;
			padding: 1rem;

			resize: none;
			border: none;
			background: #f3f3f6;

			font-size: 1rem;
			font-weight: 400;

			&::placeholder {
				font-size: 1rem;
			}
		}
		.error {
			position: absolute;
			top: 0.7rem;
			right: 0.7rem;
			color: #f03159;
			font-size: 0.7rem;
		}
	}

	button{
		position: absolute;
		bottom: 5rem;
		right: 5rem;
		width: 20rem;
		height: 4rem;

		display: flex;
		justify-content: center;
		align-items: center;

		border: none;
		background: $primary;
		color: $white;
		font-size: 1rem;
		font-weight: 600;
		text-transform: uppercase;	
		cursor: pointer;
	}

}
</style>