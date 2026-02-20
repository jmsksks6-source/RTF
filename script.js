// نظام إدارة البيانات سيدي
let gameState = JSON.parse(localStorage.getItem('game')) || {
    question: "أشياء تضيع دائماً؟",
    answers: [
        {text: "مفاتيح", pts: 10, rev: false},
        {text: "جوارب", pts: 5, rev: false},
        {text: "كرامة الخصم", pts: 1, rev: false}
    ],
    scores: {t1: 0, t2: 0}
};

function updateCloud() {
    localStorage.setItem('game', JSON.stringify(gameState));
    window.dispatchEvent(new Event('storage')); // تحديث فوري لكل الشاشات
}
