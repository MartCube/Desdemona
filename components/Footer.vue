<template>
	<footer>
		<p>2022 ©<span> desdemona capital</span>. All rights reserved.</p>
	</footer>
</template>

<style lang="scss" scoped>
footer {
	width: 100%;
	height: 4rem;
	background: $primary;

	display: flex;
	align-items: center;
	justify-content: center;

	user-select: none;
	p{
		font-weight: 100;
		font-size: 1rem;
		color: $white;
		span {
			text-transform: capitalize;
			font-weight: 600;
		}
	}
}

@media (max-width: 60rem) {
footer p {
	font-size: 0.8rem;
}
}
</style>