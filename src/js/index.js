const showInfoBtn = document.querySelectorAll('#showInfoBtn');
const paragraphInfoBefore = document.getElementById('paragraphBefore');
const paragraphInfoAfter = document.getElementById('paragraphAfter');
const articleContainer1 = document.querySelector('.article-remove__hover-1');
const articleContainer2 = document.querySelector('.article-remove__hover-2');


showInfoBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        if (index === 0) {
            paragraphInfoBefore.classList.toggle('hidden');
            articleContainer1.classList.toggle('hover');

            if (paragraphInfoBefore.classList.contains('hidden')) {
                btn.textContent = 'Show Info';
            } else {
                btn.textContent = 'Show Less Info';
            }
        }
        if (index === 1) {
            paragraphInfoAfter.classList.toggle('hidden');
            articleContainer2.classList.toggle('hover');

            if (paragraphInfoAfter.classList.contains('hidden')) {
                btn.textContent = 'Show Info';
            } else {
                btn.textContent = 'Show Less Info';
            }
        }

    })
})