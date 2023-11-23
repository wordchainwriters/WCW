document.addEventListener("DOMContentLoaded", ()=>
{
  const accordion = document.getElementsByClassName('accordion__item');

  for (i = 0; i < accordion.length; i++)
  {
    accordion[i].addEventListener('click', function (event)
    {
      if (!event.target.classList.contains('accordion__content'))
      {
        this.classList.toggle('active');
      }
    })
  }
});
