// Dylan Davidson
// Pong - CAP 4720
//

// Singleton that displays large text on screen
var Banner = {}

// Shows the banner HTML element
Banner.showBanner = function()
{
  Banner.getElement().style.display = "block";
}

// Hides banner HTML element and resets color
Banner.hideBanner = function()
{
  Banner.getElement().style.display = "none";
  Banner.getElement().style.color = 'white';
  clearInterval(Banner.interval);
  Banner.interval = null;
}

// Shows given text on screen
Banner.showText = function(text)
{
  Banner.showBanner();
  Banner.getElement().innerText = text;
}

// Flashes given text on screen with given color
Banner.flashText = function(text, color)
{
  Banner.showText(text);
  Banner.flashColor = true;
  Banner.getElement().style.fontSize = "smaller";
  Banner.interval = setInterval(function() { Banner.flash(color) }, 400);
}

// Flashes color, called repeatedly
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

// Return HTML element for banner
Banner.getElement = function()
{
  if(Banner.element == null)
  {
    Banner.element = document.getElementById('banner');
  }

  return Banner.element;
}
