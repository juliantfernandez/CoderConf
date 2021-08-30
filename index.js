/* Variables */
let openMenu = false
let numbersAnimationWasDesplayed = false

/* Functions */
function displayMobileMenu() {

    $('#menu').toggleClass('menu-active')
    $('body').toggleClass('fixed-position')
    
    if (!openMenu) {
    openMenu = true
    $("#top").addClass('top')
    $("#center").addClass('center')
    $("#bottom").addClass('bottom')
    }
    
    else {
    openMenu = false
    $("#top").removeClass('top')
    $("#center").removeClass('center')
    $("#bottom").removeClass('bottom')
    }
}

function hideMobileMenu() {
    $('#menu').toggleClass('menu-active')
    $("#top").removeClass('top')
    $("#center").removeClass('center')
    $("#bottom").removeClass('bottom')
    $('body').removeClass('fixed-position')
}

var onloadCallback = function() {
    grecaptcha.render('captcha', {
      'sitekey' : '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
      'data-size': 'compact',
      'data-theme': 'dark'
      
    });
};

function formSubmission() {
    $('#registrate').html("<div class='formSubmitted'><div class='innerBorder'><h2>¡Te damos la bienvenida!</h2><img src='media/check.png' alt='Check icon'></div></div>")
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('counter');
      }
    });

    $('.counter').each(
        function() {
            var $this = $(this),
            countTo = $this.attr('data-count')
        
            $({ countNum: $this.text()}).animate({
            countNum: countTo
            },
        
            {
            duration: 3000,
            easing:'linear',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
            }  
        })
    })
})

/* Event listeners */
$('.hamburguer-icon').click(displayMobileMenu) 

$('#menu ul li a').click(hideMobileMenu)

$('#registrate').click(formSubmission)

observer.observe(document.querySelector('.number'))