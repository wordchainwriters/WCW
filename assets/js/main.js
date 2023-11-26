document.addEventListener("DOMContentLoaded", () =>
{
  const accordionItems = document.getElementsByClassName('accordion__item');

  for (let i = 0; i < accordionItems.length; i++)
  {
    accordionItems[i].addEventListener('click', function()
    {
      const accordionContent = this.querySelector('.accordion__content');

      if (this.classList.contains('active'))
      {
        this.classList.remove('active');
        accordionContent.style.maxHeight = null;
      }
      else
      {
        this.classList.add('active');
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      }
    });
  }
});