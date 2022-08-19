<template>
	<form ref="form" @submit="onSubmit" autocomplete="off"> 
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
			<textarea name="message" placeholder="Message" rows="10" v-model="values.message"/>
			<span class="error" v-show="submitCount > 0">{{ errors.message }}</span>
		</div>
		<button class="submit" type="submit">
			send message <Icon name="arrow"/>
		</button>
		<div v-if="msg" class="msg">
			<h2>Thank you</h2>
			<p>We've received your message and will contact you soon.</p>
			<button @click="msg = false">Write New Message</button>
		</div>
	</form>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import type { ContactForm } from "~/types";
import { toFormValidator } from '@vee-validate/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';

const form = ref()
const msg = ref(false)
const validationSchema = toFormValidator(
	z.object({
		name: z.string().min(1),
		email: z.string().min(1).email(),
		phone: z.string().min(1),
		message: z.string().min(1),
	})
);
const { values, errors, handleSubmit, submitCount } = useForm<ContactForm>({
	validationSchema,
})

const onSubmit = handleSubmit(async(values, actions) => {
	
	emailjs.sendForm('service_f8wwkf9', 'template_36b5j8o', form.value, 'YVzaQIyzcpywjD7jW').then((result) => { console.log('SUCCESS!', result.text) },(error) => { console.log('FAILED...', error.text) },)
	
	// show msg
	msg.value = true
	actions.resetForm()
});
</script>

<style lang="scss" scoped>
form {
	width: 100%;
	max-width: calc($width + 10rem);
	padding: 5rem;
	background: white;
	box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	position: relative;
	.input_wrap{
		width: 30%;
		max-width: 20rem;
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
			padding: 1.5rem;

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
	.submit{
		position: absolute;
		bottom: 5rem;
		right: 5rem;
		width: calc(30% - 5vw);
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
		.icon{
			fill:$white;
			margin-left: 1rem;
			width: 1rem;
			height: 1rem;
		}
	}
	.msg{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: $white;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		h2{
			color: $primary;
			text-transform: capitalize;
			font-size: 1.2rem;
			font-weight: 300;

			display: flex;
			align-items: center;
			&:before{
				content: '';
				width: 2.5rem;
				height: 2px;
				margin-right: 1rem;
				background: $primary;
			}
			&:after{
				content: '';
				width: 2.5rem;
				height: 2px;
				margin-left: 1rem;
				background: $primary;
			}
		}
		p{
			margin: 1rem;
			text-align: center;
		}
		button{
			border: none;
			background: $primary;
			padding: 0.8rem 1.8rem;
		
			color: $white;
			font-size: 1rem;
			font-weight: 600;
			text-transform: uppercase;
			text-decoration: none;
			cursor: pointer;
		}
	}
}

@media (max-width: 70rem) {
	form{
		padding: 5%;
		.submit{
			bottom: 5vw;
			right: 5vw;
		}
	}
}
@media (max-width: 55rem) {
	form{
		.input_wrap{
			width: 100%;
			max-width: initial;
			input{
				margin-bottom: 5%;
				height: 3rem;
			}
			.error{
				top: -0.8rem;
				right: 0.2rem;
			}
		}
		.textarea_wrap{
			.error{
				top: -0.8rem;
				right: 0.2rem;
			}
		}
		.submit{
			width: 50%;
			height: 3rem;
		}
	}
}
</style>