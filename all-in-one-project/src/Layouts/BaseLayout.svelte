<div>
  <div class="header-container">
    <slot name="header" greeting="Hello stranger!"></slot>
  </div>
  <div class="content-container">
    <slot></slot>
  </div>
  <div class="footer-container">
    <slot name="footer">
      Thank you!
    </slot>
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
