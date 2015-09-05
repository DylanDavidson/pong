var Banner = {}

Banner.showBanner = function()
{
  Banner.getElement().style.display = "block";
}

Banner.hideBanner = function()
{
  Banner.getElement().style.display = "none";
  Banner.getElement().style.color = 'white';
  clearInterval(Banner.interval);
  Banner.interval = null;
}

Banner.showText = function(text)
{
  Banner.showBanner();
  Banner.getElement().innerText = text;
}

Banner.flashText = function(text, color)
{
  Banner.showText(text);
  Banner.flashColor = true;
  Banner.getElement().style.fontSize = "smaller";
  Banner.interval = setInterval(function() { Banner.flash(color) }, 400);
}

Banner.flash = function(color)
{
  if(Banner.flashColor)
  {
    Banner.getElement().style.color = color;
    Banner.flashColor = false;
  }
  else
  {
    Banner.getElement().style.color = 'white';
    Banner.flashColor = true;
  }
}

Banner.getElement = function()
{
  if(Banner.element == null)
  {
    Banner.element = document.getElementById('banner');
  }

  return Banner.element;
}
