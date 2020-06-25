const questions = document.querySelectorAll(".question");
questions.forEach(function (quest) {
    const btn = quest.querySelector('.question-btn');
    btn.addEventListener("click", function () {
        questions.forEach(function (item) {
            if (item !== quest) {
                item.classList.remove("show-text");
            }
        });

        quest.classList.toggle("show-text");
    });

})