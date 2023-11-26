var TextRotator = function(element, textArray, rotationPeriod)
{
  this.textArray = textArray;
  this.element = element;
  this.loopCounter = 0;
  this.rotationPeriod = parseInt(rotationPeriod, 10) || 2000;
  this.currentText = '';
  this.startRotation();
  this.isDeleting = false;
};

TextRotator.prototype.startRotation = function()
{
  var index = this.loopCounter % this.textArray.length;
  var fullText = this.textArray[index];

  if (this.isDeleting)
  {
    this.currentText = fullText.substring(0, this.currentText.length - 1);
  }
  else
  {
    this.currentText = fullText.substring(0, this.currentText.length + 1);
  }

  this.element.innerHTML = '<span class="intro__text">'+this.currentText+'</span>';

  var self = this;
  var timeDelay = 280 - Math.random() * 100;

  if (this.isDeleting)
  {
      timeDelay /= 1.5;
  }

  if (!this.isDeleting && this.currentText === fullText)
  {
    timeDelay = this.rotationPeriod;
    this.isDeleting = true;
  }
  else if (this.isDeleting && this.currentText === '')
  {
    this.isDeleting = false;
    this.loopCounter++;
    timeDelay = 500;
  }

  setTimeout(function()
  {
    self.startRotation();
  }, timeDelay);
};

window.onload = function()
{
  var rotationPeriod = 5000;
  var textToRotate = ["innovative influence.", "greatness is coming.", "byte of boldness.", "software flourishing."];

  var elements = document.getElementsByClassName('intro__subtitle');

  for (var i = 0; i < elements.length; i++)
  {
    new TextRotator(elements[i], textToRotate, rotationPeriod);
  }

  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".intro__subtitle > .intro__text { border-right: 0.08em solid #999; animation: blink 1s infinite; } @keyframes blink { 0% { border-color: #999; } 49% { border-color: #999; } 50% { border-color: transparent; } 99% { border-color: transparent; } 100% { border-color: #999; } }";
  document.body.appendChild(css);
};
