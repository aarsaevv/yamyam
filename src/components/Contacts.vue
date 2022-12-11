<template>
	<div class="page-container">
		<div class="page-container__content">
			<Navbar />
			<div class="contacts">
				<h2>contacts 連絡先</h2>
				<div class="contacts__block block">
					<div class="block__information information">
						<div class="information__address">
							<h4>Our address</h4>
							<h5>45454 Kelsie Village Apt. 099</h5>
						</div>
						<div class="information__hours">
							<h4>Working hours</h4>
							<h5>9 am - 11 pm</h5>
						</div>
						<div class="information__phone">
							<h4>Our phone</h4>
							<h5>952.599.8789 x9305</h5>
						</div>
						<div class="information__social social">
							<h4>Social networks</h4>
							<div class="social__links">
								<SocialLinks />
							</div>
						</div>
					</div>
					<div class="contacts__block__map">
						<img
							src="../assets/map.png"
							alt="Map" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Navbar from "./UI/Navbar.vue";
	import SocialLinks from "./UI/SocialLinks.vue";

	export default {
		name: "Contacts",
		components: { Navbar, SocialLinks },
	};
</script>
<style>
	.page-container {
		background-image: url("../assets/background-contacts.png");
	}

	.contacts h2 {
		display: flex;
		justify-content: center;
		margin: 25px 0;
		height: 60px;
		color: #262524;
		font-size: 37px;
		font-weight: 900;
		text-transform: uppercase;
	}

	.contacts__block {
		display: flex;
		justify-content: center;
		gap: 218px;
	}

	.block__information h4 {
		color: #262524;
		font-size: 23px;
		font-weight: 700;
		text-transform: uppercase;
		margin: 0;
	}

	.block__information h5 {
		color: #262524;
		font-size: 20px;
		font-weight: 400;
		margin: 0;
	}

	.information__address {
		display: flex;
		flex-direction: column;
		gap: 15px;
		margin: 0 0 40px;
	}

	.information__hours {
		display: flex;
		flex-direction: column;
		gap: 15px;
		margin: 0 0 40px;
	}

	.information__phone {
		display: flex;
		flex-direction: column;
		gap: 15px;
		margin: 0 0 40px;
	}

	.information__social {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	.social__links {
		display: flex;
		gap: 33px;
		filter: invert(12%) sepia(10%) saturate(169%) hue-rotate(349deg)
			brightness(96%) contrast(92%);
	}
</style>
