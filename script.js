document.addEventListener('DOMContentLoaded', () => {
    // CSV 파일을 가져옵니다.
    fetch('english_expressions.csv')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            const container = document.getElementById('flashcard-container');

            // CSV 데이터를 파싱합니다.
            const rows = data.trim().split('\n');
            // 헤더 행을 제거합니다.
            rows.shift();

            rows.forEach(row => {
                // 정규표현식을 사용하여 따옴표로 묶인 필드를 포함한 CSV 행을 파싱합니다.
                const columns = [];
                let currentMatch;
                const regex = /(?:"([^"]*(?:""[^"]*)*)"|([^,]*))(?:,|$)/g;
                while ((currentMatch = regex.exec(row)) !== null) {
                    let value = currentMatch[1] !== undefined ? currentMatch[1].replace(/""/g, '"') : currentMatch[2];
                    columns.push(value);
                }

                if (columns.length < 4) return; // 유효하지 않은 행은 건너뜁니다.

                const [expression, meaning, dialogExample, otherExample] = columns;

                // 플래시카드 HTML 요소를 생성합니다.
                const flashcard = document.createElement('div');
                flashcard.className = 'flashcard';

                const flashcardInner = document.createElement('div');
                flashcardInner.className = 'flashcard-inner';

                const flashcardFront = document.createElement('div');
                flashcardFront.className = 'flashcard-front';
                flashcardFront.textContent = expression;

                const flashcardBack = document.createElement('div');
                flashcardBack.className = 'flashcard-back';

                // 카드의 뒷면을 채웁니다.
                flashcardBack.innerHTML = `
                    <h3>${expression}</h3>
                    <p><strong>뜻:</strong><br>${meaning}</p>
                    <p><strong>대화 속 예시:</strong><br>${dialogExample || 'N/A'}</p>
                    <p><strong>다른 예시:</strong><br>${otherExample || 'N/A'}</p>
                `;

                // 생성된 요소들을 조립합니다.
                flashcardInner.appendChild(flashcardFront);
                flashcardInner.appendChild(flashcardBack);
                flashcard.appendChild(flashcardInner);

                // 카드를 클릭하면 뒤집히는 이벤트를 추가합니다.
                flashcard.addEventListener('click', () => {
                    flashcard.classList.toggle('is-flipped');
                });

                // 완성된 카드를 컨테이너에 추가합니다.
                container.appendChild(flashcard);
            });
        })
        .catch(error => {
            console.error('Error fetching or parsing CSV:', error);
            const container = document.getElementById('flashcard-container');
            container.innerHTML = '<p style="color: red;">플래시카드를 불러오는 데 실패했습니다. <br>CSV 파일 경로를 확인하거나 파일 형식이 올바른지 확인해주세요.</p>';
        });
});