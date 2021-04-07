button = document.getElementById('button23');
label = document.querySelector('.dark-mode-label');

window.onload = function() {
  if (localStorage.getItem('dark')) {
    document.body.classList.add('dark');
    button.textContent = 'On';
    label.style.color = '#fff';
  }

  else {
    document.body.classList.remove('dark');
    button.textContent = 'Off';
    label.style.color = '#000';
  }
}

button.addEventListener('click', function() {
  if (document.body.classList.contains('dark')) {
    document.body.classList.remove('dark');
    localStorage.removeItem('dark');
    button.style.color = '#000';
    label.style.color = '#000';
    button.textContent = 'Off';
  }
  else {
    document.body.classList.add('dark');
    button.textContent = 'On';
    button.style.color = "#fff";
    label.style.color = '#fff';
    localStorage.setItem('dark', true);
  }
});

// Do Not Comment This -Krish
// This is how the darkmode works.