const POPOVER_DELAY = 500; // 0.5 seconds

function createPopover(target, content) {
  let $popover;

  // Create the popover element
  $popover = $('<div>', {
    class: 'popover',
    html: content
  }).css({
    position: 'absolute',
    zIndex: 1000,
    maxWidth: '200px',
    padding: '8px 12px',
    backgroundColor: '#333',
    color: '#fff',
    top: '3%',
    right: '500px',
    borderRadius: '4px',
    fontSize: '14px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
    display: 'none'
  });

  setElementTopOffset($popover, target);

  $('body').append($popover);

  target.on('mouseenter', () => {
    $popover.css({
        display: 'block'
    });
  });

  target.on('mouseleave', () => {
    $popover.css({
        display: 'none'
    });
  });
}

function getElementHeight(element) {
    return $(element).offset().top;
}

function setElementTopOffset($element, $referenceElement) {
    const referenceHeight = getElementHeight($referenceElement);
    $element.css('margin-top', `${referenceHeight}px`);
  }

// Example usage:
document.addEventListener('DOMContentLoaded', function() {
  $('.contact_form-input').each(function() {
    const $input = $(this);
    const inputFormat = $input.data('format');
    console.log($input);
    console.log(inputFormat);
    if (inputFormat) {
      const popoverContent = `Формат ввода: ${inputFormat}`;
      createPopover($input, popoverContent);
      console.log(`Высота элемента от начала страницы: ${getElementHeight($input)}px`);
    }
  });
});