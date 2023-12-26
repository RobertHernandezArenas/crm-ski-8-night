<script setup></script>
<template>
	<section class="hero">
		<div class="hero__wrapper">
			<div class="hero__box-image">
				<img src="/images/hero-home-bg.webp" alt="" class="hero__image" />
			</div>
			<h1 class="hero__name">Robert Hernández</h1>
			<span class="hero__role">Frontend Developer</span>
			<span class="hero__based">A Coruña</span>
			<a href="tel:+34675389333" class="hero__links">Llamar</a>
			<a href="mailto:roberthernandezarenas@gmail.com" class="hero__links"
				>Enviar email</a
			>
			<article class="hero__article">
				<h1 class="hero__title">Prueba Técnica Ski&Night</h1>
				<p class="hero__desc">
					A continuación, indicamos el ejercicio práctico a realizar para
					la posición de desarrollo front end vue .js. Junto con este
					documento se enviará un swagger para poder realizar la prueba. Se
					tendrá que crear un nuevo aplicativo VUE que gestione usuarios
					basado en el swagger que se adjunta con las siguientes
					características:
				</p>
				<p class="hero__desc">
					● Se tendrá que mockear la lógica del servidor basándose en el
					swagger.
				</p>
				<p class="hero__desc">
					● Se tiene que implementar una pantalla para listar todos los
					usuarios devueltos por el servidor (el servidor mock deberá
					devolver al menos 2 usuarios con todos los campos rellenos) en el
					cual se tendrán que mostrar ○ Nombre y apellidos concatenados ○
					Edad a día de hoy (haciendo el cálculo con la fecha de
					nacimiento).
				</p>
				<p class="hero__desc">
					● Se tiene que implementar una pantalla para la creación de
					nuevos usuarios (no es importante que el servidor mock añada esta
					información a la lista de usuarios mockeada) donde se validen
					todos los campos.
				</p>
				<p class="hero__desc">
					● Todo el código debe complir buenas prácticas de programación (
					clean code, SOLID...) así como intentar explotar todas las
					ventajas que nos brinda VUE.
				</p>
				<p class="hero__desc">
					● Se busca que la solución sea simple pero efectiva. Para
					cualquier duda puede enviar un correo electrónico a
					jorge.gonzalez@skiandnight.com ó fernando.novella@skiandnight.com
				</p>
			</article>
		</div>
	</section>
</template>

<style scoped>
.hero {
	display: flex;
	justify-content: center;
	height: 100vh;
}
.hero__wrapper {
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100vw;
}
.hero__box-image {
	display: flex;
	justify-content: center;
	width: 100%;
}
.hero__image {
	object-fit: cover;
	max-width: 180px;
	border-radius: 50%;
	border: 12px solid #000f59;
}
.hero__name {
	font-size: 1.4rem;
	font-weight: 500;
}

.hero__article {
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 2rem 1.5rem;
}
.hero__links {
	text-decoration: none;
	font-weight: 700;
	color: #526fff;
}
.hero__title {
	margin: 1rem 0;
	font-size: 1.8rem;
	font-weight: 700;
}

@media only screen and (min-width: 820px) {
	.hero__wrapper {
		width: 80vw;
	}
	.hero__title {
		margin: 1rem 0;
	}
	.hero__desc {
		width: 80%;
	}
}
</style>
