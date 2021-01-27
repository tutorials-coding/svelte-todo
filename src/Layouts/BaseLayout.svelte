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
  {$$slots.footer ? 'Custom footer is provided' : ''}
</div>

<style>
  .header-container {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content-container {
  }
  .footer-container {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
