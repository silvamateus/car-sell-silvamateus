<template>
  <div class="footer" id="about">
    <div class="others">
      <a href="#">Termos de uso</a>
      <a href="#">Política de privacidade</a>
    </div>
    <div class="where-to-find">
      <p>Onde nos encontrar</p>
      <div class="social-media">
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-facebook-square"></i></a>
        <a href="#"><i class="fab fa-youtube"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* Footer General */
.footer {
  padding: 1rem;
  display: flex;
  align-items: center;
  background-color: #fff;
}
.footer a,
.footer p {
  text-decoration: none;
  color: #000;
}
.footer p {
  font-size: 0.6rem;
  padding-bottom: 0.5rem;
}
/* Where to find us */
.where-to-find {
  border: 1px solid rgb(213, 213, 213);
  border-radius: 0.3rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
}
.social-media {
  display: flex;
  justify-content: flex-end;
}
.social-media a {
  padding: 0.3rem;
}
.others {
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
}
.others > a {
  padding: 0.5rem;
  transition: color 500ms ease-in-out;
}
.others > a:hover {
  color: rgb(81, 81, 158);
}
</style>
