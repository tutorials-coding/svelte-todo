<div>
  <div class="header-container">
    <slot></slot>
  </div>
  <div class="content-container">
    Welcome
  </div>
  <div class="footer-container">
    Thank you!
  </div>
</div>

<style>
.header-container {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-container {
  padding: 10px;
}

.footer-container {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
