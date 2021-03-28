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
  background-color: var(--white);
}
.footer a,
.footer p {
  text-decoration: none;
  color: #000;
}
.footer p {
  font-size: calc(0.6rem + var(--increase-font));
  padding-bottom: 0.5rem;
}
/* Where to find us */
.where-to-find {
  border: 1px solid rgb(213, 213, 213);
  border-radius: var(--default-radius);
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
  font-size: calc(0.8rem + var(--increase-font));
}
.others > a {
  padding: 0.5rem;
  transition: color 500ms ease-in-out;
}
.others > a:hover {
  color: rgb(81, 81, 158);
}
/* Media queries */
@media (min-width: 720px) {
  .footer {
    justify-content: space-between;
  }
}
</style>
